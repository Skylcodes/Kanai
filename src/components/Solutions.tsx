'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, BarChart3, ShieldCheck } from 'lucide-react';
import styles from './Solutions.module.css';

const solutions = [
    {
        title: 'Precision Sales AI',
        description: 'Empower your sales team with real-time insights, automated lead scoring, and hyper-personalized outreach tools.',
        icon: <Target size={24} />,
    },
    {
        title: 'Workflow Automation',
        description: 'Eliminate repetitive tasks. Our custom automation pipelines bridge the gap between your tools and peak productivity.',
        icon: <Zap size={24} />,
    },
    {
        title: 'Integrations & Scaling',
        description: 'Seamlessly integrate AI into your existing stack. We build the architecture that grows with your business.',
        icon: <BarChart3 size={24} />,
    }
];

export default function Solutions() {
    return (
        <section id="solutions" className={styles.solutions}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="gradient-text"
                        style={{ fontSize: '2.5rem', marginBottom: '1rem' }}
                    >
                        Engineered for Impact
                    </motion.h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>
                        We don't just build tools; we build the future of your workflow.
                    </p>
                </div>

                <div className={styles.grid}>
                    {solutions.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${styles.card} glass-card`}
                        >
                            <div className={styles.iconWrapper}>
                                {item.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDescription}>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
