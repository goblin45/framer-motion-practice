import React from 'react'
import { motion, useAnimationControls } from 'framer-motion'

const AnimationControls = () => {

    const controls = useAnimationControls()

    const handleFlip = () => {
        controls.start("flip")
    }

    return (
        <div
            style={{
                display: 'grid',
                placeContent: 'center',
                height: '100vh',
                gap: '0.8rem'
            }}
        >
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
                onClick={() => handleFlip()}
            >
                Flip it!
            </motion.button>
            <motion.div 
                style={{
                    width: 150,
                    height: 150,
                    background: 'black'
                }}
                variants={{
                    initial: {
                        rotate: '0deg'
                    },
                    flip: {
                        rotate: '360deg'
                    }
                }}
                initial="intial"
                // whileHover="flip"
                animate={controls}
            ></motion.div>
        </div>
    )
}

export default AnimationControls