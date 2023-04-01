import * as React from "react"
import Hero from "../../components/Hero"
import Skills from "../../components/Skills"

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Skills />
        </div>

    )
}

export default HomePage

export const Head = () => <title>Home Page</title>
