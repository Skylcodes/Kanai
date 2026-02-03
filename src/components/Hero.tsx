'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.background} />
            <div className={styles.glow} />

            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.badge}>
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        Accelerating Productivity with AI
                    </div>

                    <h1 className={styles.title}>
                        The Future of <br />
                        <span className="gradient-text">Intelligent Sales</span>
                    </h1>

                    <p className={styles.subtitle}>
                        KanAI Solutions builds bespoke AI tools that automate the mundane,
                        empower sales teams, and drive unprecedented efficiency in your niche.
                    </p>

                    <div className={styles.actions}>
                        <button className={styles.primaryBtn}>Explore Solutions</button>
                        <button className={styles.secondaryBtn}>Book a Demo</button>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className={styles.scrollIndicator}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                {/* Scroll icon can go here */}
            </motion.div>
        </section>
    );
}
