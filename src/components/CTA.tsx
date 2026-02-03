'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './CTA.module.css';

export default function CTA() {
    return (
        <section id="contact" className={styles.ctaSection}>
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className={styles.box}
                >
                    <h2 className={styles.title}>Ready to Supercharge <br />Your Workflow?</h2>
                    <p className={styles.subtitle}>
                        Join the forward-thinking companies already using KanAI Solutions to scale their sales and automation to new heights.
                    </p>
                    <button className={styles.button}>
                        Get Started Today
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
