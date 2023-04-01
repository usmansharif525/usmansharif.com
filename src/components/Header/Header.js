import React from "react";
import classNames from "classnames";
import Logo from "../Logo";
import * as styles from "./Header.module.css";

const Header = () => {
    const [activePage, setActivePage] = React.useState('about');
    const btn_style = 'px-3 py-1 rounded-[4px] font-semibold tracking-wider lowercase text-xs border-2 border-transparent hover:border-white duration-100 ease-in-out';
    const btn_style_active = 'bg-white text-[#3681c0] ';
    return (
        <div className={styles.wrapper}>
            <header className={classNames('c-container', styles.header)}>
                <Logo />
                <nav role="navigation" className={classNames(styles.nav, 'grid gap-3 text-white ')}>
                    <a href="#about"
                        onClick={() => setActivePage('about')}
                        className={classNames(btn_style, activePage === 'about' && btn_style_active)} >About</a>
                    <a href="#skills"
                        onClick={() => setActivePage('skills')}
                        className={classNames(btn_style, activePage === 'skills' && btn_style_active)} >Skills</a>
                    <a href="#projects"
                        onClick={() => setActivePage('projects')}
                        className={classNames(btn_style, activePage === 'projects' && btn_style_active)} >Projects</a>
                    <a href="#contact"
                        onClick={() => setActivePage('contact')}
                        className={classNames(btn_style, activePage === 'contact' && btn_style_active)} >Contact</a>
                </nav>
            </header>
        </div>
    );
}

export default Header;
