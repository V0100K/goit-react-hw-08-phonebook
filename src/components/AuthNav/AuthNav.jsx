import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
const styles = {
    activeLink: {
        color: '#ffc107'
    },
};

// поля рагистрации и входа подкл в AppBar
export default function AuthNav() {
    return (
        <div>
            <NavLink
                to="/register"
                exact
                className={s.link}

                activeStyle={styles.activeLink}
            >
                Sign up
            </NavLink>
            <NavLink
                to="/login"
                exact
                className={s.link}
                activeStyle={styles.activeLink}
            >
                Log in
            </NavLink>
        </div>
    );
}