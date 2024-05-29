import React from 'react'
import { MotionConfig, motion } from 'framer-motion'

const Gestures = () => {
    return (
        <div
            style={{
                display: 'grid',
                placeContent: 'center',
                height: '100vh',
                gap: '0.8rem'
            }}
        >
            <MotionConfig transition={{ duration: 0.125, ease: 'easeInOut' }}>
                <motion.button
                    style={{
                        background: 'blue',
                        color: 'white',
                        fontSize: '1.8rem',
                        borderRadius: '0.4rem',
                        border: 'none',
                        padding: '0.4rem 0.8rem',
                        cursor: 'pointer'
                    }}
                    whileHover={{ 
                        scale: 1.05
                    }}
                    whileTap={{
                        scale: 0.95,
                        rotate: '2.5deg'
                    }}
                >
                    Click me!
                </motion.button>
                <motion.button
                    style={{
                        background: 'red',
                        color: 'white',
                        fontSize: '1.8rem',
                        borderRadius: '0.4rem',
                        border: 'none',
                        padding: '0.4rem 0.8rem',
                        cursor: 'pointer'
                    }}
                    whileHover={{ 
                        scale: 1.15
                    }}
                    whileTap={{
                        scale: 0.85,
                        rotate: '-2.5deg'
                    }}
                >
                    Click me!
                </motion.button>
            </MotionConfig>
        </div>
    )
}

export default Gestures