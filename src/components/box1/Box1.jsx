import { motion } from "framer-motion"
import { useState } from "react"

const Box1 = () => {

    const [isAnimating, setIsAnimating] = useState(false)
    return (
        <div className="box-container">
            <motion.div 
                className="box"
                animate={{
                    x: isAnimating ? 500 : 0,
                    opacity: isAnimating ? 1 : 0.5,
                    rotate: isAnimating ? 360 : 0                   
                }}
                initial={{
                    opacity: 0.1
                }}
                transition={{
                    type: "spring",
                    stiffness: 60,
                    damping: 3
                }}
                onClick={() => setIsAnimating(!isAnimating)}
            >
            </motion.div>
        </div>
    )
}

export default Box1