import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="section-container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>KanAI Solutions</div>
                        <p className={styles.description}>
                            Pioneering AI-driven tools for the next generation of sales and automation. We empower businesses to reach their full potential.
                        </p>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div>&copy; {new Date().getFullYear()} KanAI Solutions LLC. All rights reserved.</div>
                    <div>Built with passion for efficiency.</div>
                </div>
            </div>
        </footer>
    );
}
