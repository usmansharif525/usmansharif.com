import React from 'react';

function useEventListener(eventName, handler, element = document) {
    const savedHandler = React.useRef()

    React.useEffect(() => {
        savedHandler.current = handler
    }, [handler])

    React.useEffect(() => {
        const isSupported = element && element.addEventListener
        if (!isSupported) return

        const eventListener = (event) => savedHandler.current(event)

        element.addEventListener(eventName, eventListener)

        return () => {
            element.removeEventListener(eventName, eventListener)
        }
    }, [eventName, element]) // Bug was here, element wasn't in dependency array
}

function AnimatedCursor({
    color = '256, 256, 256',
    borderColor = '14, 27, 51',
    bgOpacity = 0.7,
    bgOpacityHover = 0.1,
    size = 12,
    scale = 3, // on hover
    aFactor = 1.5, // acceleration factor
}) {

    const cursorRef = React.useRef()
    const requestRef = React.useRef()
    const previousTimeRef = React.useRef()
    const [coords, setCoords] = React.useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = React.useState(true)
    const [isActive, setIsActive] = React.useState(false)
    const [isActiveClickable, setIsActiveClickable] = React.useState(false)
    let endX = React.useRef(0)
    let endY = React.useRef(0)

    const onMouseMove = React.useCallback(({ clientX, clientY }) => {
        setCoords({ x: clientX, y: clientY })
        cursorRef.current.style.top = clientY + 'px'
        cursorRef.current.style.left = clientX + 'px'
        endX.current = clientX
        endY.current = clientY
    }, [])

    const animateCursor = React.useCallback(
        (time) => {
            if (previousTimeRef.current !== undefined) {
                coords.x += (endX.current - coords.x) / aFactor
                coords.y += (endY.current - coords.y) / aFactor
                // let height = parseInt(cursorRef.current.style.height.replace('px', ''))
                // let width = parseInt(cursorRef.current.style.width.replace('px', ''))
                // cursorRef.current.style.top = coords.y - height / 2 + 'px'
                // cursorRef.current.style.left = coords.x - width / 2 + 'px'
                cursorRef.current.style.top = coords.y - size / 2 + 'px'
                cursorRef.current.style.left = coords.x - size / 2 + 'px'
            }
            previousTimeRef.current = time
            requestRef.current = requestAnimationFrame(animateCursor)
        },
        [requestRef] // eslint-disable-line
    )

    React.useEffect(() => {
        requestRef.current = requestAnimationFrame(animateCursor)
    }, [animateCursor])
    const onMouseDown = React.useCallback(() => setIsActive(true), [])
    const onMouseUp = React.useCallback(() => setIsActive(false), [])
    const onMouseEnter = React.useCallback(() => setIsVisible(true), [])
    const onMouseLeave = React.useCallback(() => setIsVisible(false), [])

    useEventListener('mousemove', onMouseMove, document)
    useEventListener('mousedown', onMouseDown, document)
    useEventListener('mouseup', onMouseUp, document)
    useEventListener('mouseenter', onMouseEnter, document)
    useEventListener('mouseleave', onMouseLeave, document)

    React.useEffect(() => {
        if (isActive) {
            cursorRef.current.style.transform = `scale3d(${scale}, ${scale}, ${scale})`
        } else {
            cursorRef.current.style.transform = `scale3d(1, 1, 1)`
        }
    }, [scale, isActive])

    React.useEffect(() => {
        if (isActiveClickable) {
            cursorRef.current.style.transform = `scale3d(${scale * 1.3}, ${scale * 1.3}, ${scale * 1.3})`
        }
    }, [scale, isActiveClickable])

    React.useEffect(() => {
        if (isVisible) {
            cursorRef.current.style.opacity = 1
        } else {
            cursorRef.current.style.opacity = 0
        }
    }, [isVisible])

    React.useEffect(() => {
        const clickables = document.querySelectorAll(
            'a, input[type="submit"], input[type="image"], label[for], select, button, .link'
        )
        clickables.forEach((el) => {
            // el.style.cursor = 'none'

            el.addEventListener('mouseover', () => {
                setIsActive(true)
            })
            el.addEventListener('click', () => {
                setIsActive(true)
                setIsActiveClickable(false)
            })
            el.addEventListener('mousedown', () => {
                setIsActiveClickable(true)
            })
            el.addEventListener('mouseup', () => {
                setIsActive(true)
            })
            el.addEventListener('mouseout', () => {
                setIsActive(false)
                setIsActiveClickable(false)
            })
        })

        return () => {
            clickables.forEach((el) => {
                el.removeEventListener('mouseover', () => {
                    setIsActive(true)
                })
                el.removeEventListener('click', () => {
                    setIsActive(true)
                    setIsActiveClickable(false)
                })
                el.removeEventListener('mousedown', () => {
                    setIsActiveClickable(true)
                })
                el.removeEventListener('mouseup', () => {
                    setIsActive(true)
                })
                el.removeEventListener('mouseout', () => {
                    setIsActive(false)
                    setIsActiveClickable(false)
                })
            })
        }
    }, [isActive])

    const styles = {

        cursor: {
            zIndex: 999,
            position: 'fixed',
            borderRadius: '50%',
            width: size,
            height: size,
            pointerEvents: 'none',
            border: `1px solid rgb(${borderColor})`,
            backgroundColor: `rgba(${color}, ${isActive ? bgOpacityHover : bgOpacity})`,
            transition: 'height 0.15s ease-in-out, width 0.15s ease-in-out, opacity 0.15s ease-in-out, transform 0.25s ease-in-out',
        },

    }

    return (
        <React.Fragment>
            <div >
                <div ref={cursorRef} style={styles.cursor} />
            </div>
        </React.Fragment>
    )
}

export default AnimatedCursor;
