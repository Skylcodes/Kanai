'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={styles.navbar}
        >
            <div className={styles.container}>
                <div className={styles.logo}>
                    <div className={styles.logoIcon}>K</div>
                    <span className={styles.logoText}>KanAI <span className={styles.logoAccent}>Solutions</span></span>
                </div>

                <div className={styles.links}>
                    <Link href="#solutions" className={styles.link}>Solutions</Link>
                    <Link href="#automation" className={styles.link}>Automation</Link>
                    <Link href="#about" className={styles.link}>About</Link>
                    <Link href="#contact" className={styles.cta}>
                        Work With Us
                    </Link>
                </div>

                <button className={styles.mobileMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '1.5rem', height: '1.5rem', color: '#a1a1aa' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </motion.nav>
    );
}
