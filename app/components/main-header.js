import Link from "next/link";

import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import NavLink from "./nav-link";

export default function MainHeader() {

    return (
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                    <img src={logoImg.src} alt="A plate with food on it" />
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Foodies Community</NavLink>
                    </li>
                    <li>
                        <Link href="/meals/share">Share</Link>
                    </li>
                    <li>
                        <Link href="/meals/raw">Dynamiczny</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
  }