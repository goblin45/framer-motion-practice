import React from 'react'
import { useScroll, motion, useSpring, useTransform } from 'framer-motion'

const ScrollBasedAnimations = () => {

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress)
    const background = useTransform(scrollYProgress, [0, 0.5, 1], ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)'])

    return (
        <div>   
            <motion.div
                style={{
                    // scaleX: scrollYProgress,
                    scaleX,
                    transformOrigin: 'left',
                    background,
                    position: 'sticky',
                    top: 0,
                    width: '100%',
                    height: '20px'
                }}
            />
            <div
                style={{
                    maxWidth: '700px',
                    margin: 'auto',
                    padding: '1.2rem'
                }}
            >
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo explicabo tempore aliquam maiores ex vitae dolores ratione odio laborum omnis quibusdam modi assumenda, recusandae perspiciatis ut fugit voluptatem, nobis cupiditate nostrum consequatur nam repellat! Similique explicabo nisi, tempore nesciunt iusto sequi provident sunt, laborum vero incidunt deserunt eaque veniam voluptatibus. Neque cumque quos eveniet minima eligendi amet debitis possimus dicta qui eius molestiae itaque velit, fuga ratione quia in officia, totam tenetur nobis dolorum temporibus? Dolorem totam atque, dignissimos recusandae, modi pariatur officiis deleniti culpa amet esse provident, rem consequuntur fugit quia? Praesentium perspiciatis commodi cupiditate fugiat dolor sunt sint?
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo explicabo tempore aliquam maiores ex vitae dolores ratione odio laborum omnis quibusdam modi assumenda, recusandae perspiciatis ut fugit voluptatem, nobis cupiditate nostrum consequatur nam repellat! Similique explicabo nisi, tempore nesciunt iusto sequi provident sunt, laborum vero incidunt deserunt eaque veniam voluptatibus. Neque cumque quos eveniet minima eligendi amet debitis possimus dicta qui eius molestiae itaque velit, fuga ratione quia in officia, totam tenetur nobis dolorum temporibus? Dolorem totam atque, dignissimos recusandae, modi pariatur officiis deleniti culpa amet esse provident, rem consequuntur fugit quia? Praesentium perspiciatis commodi cupiditate fugiat dolor sunt sint?
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo explicabo tempore aliquam maiores ex vitae dolores ratione odio laborum omnis quibusdam modi assumenda, recusandae perspiciatis ut fugit voluptatem, nobis cupiditate nostrum consequatur nam repellat! Similique explicabo nisi, tempore nesciunt iusto sequi provident sunt, laborum vero incidunt deserunt eaque veniam voluptatibus. Neque cumque quos eveniet minima eligendi amet debitis possimus dicta qui eius molestiae itaque velit, fuga ratione quia in officia, totam tenetur nobis dolorum temporibus? Dolorem totam atque, dignissimos recusandae, modi pariatur officiis deleniti culpa amet esse provident, rem consequuntur fugit quia? Praesentium perspiciatis commodi cupiditate fugiat dolor sunt sint?
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo explicabo tempore aliquam maiores ex vitae dolores ratione odio laborum omnis quibusdam modi assumenda, recusandae perspiciatis ut fugit voluptatem, nobis cupiditate nostrum consequatur nam repellat! Similique explicabo nisi, tempore nesciunt iusto sequi provident sunt, laborum vero incidunt deserunt eaque veniam voluptatibus. Neque cumque quos eveniet minima eligendi amet debitis possimus dicta qui eius molestiae itaque velit, fuga ratione quia in officia, totam tenetur nobis dolorum temporibus? Dolorem totam atque, dignissimos recusandae, modi pariatur officiis deleniti culpa amet esse provident, rem consequuntur fugit quia? Praesentium perspiciatis commodi cupiditate fugiat dolor sunt sint?
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo explicabo tempore aliquam maiores ex vitae dolores ratione odio laborum omnis quibusdam modi assumenda, recusandae perspiciatis ut fugit voluptatem, nobis cupiditate nostrum consequatur nam repellat! Similique explicabo nisi, tempore nesciunt iusto sequi provident sunt, laborum vero incidunt deserunt eaque veniam voluptatibus. Neque cumque quos eveniet minima eligendi amet debitis possimus dicta qui eius molestiae itaque velit, fuga ratione quia in officia, totam tenetur nobis dolorum temporibus? Dolorem totam atque, dignissimos recusandae, modi pariatur officiis deleniti culpa amet esse provident, rem consequuntur fugit quia? Praesentium perspiciatis commodi cupiditate fugiat dolor sunt sint?
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo explicabo tempore aliquam maiores ex vitae dolores ratione odio laborum omnis quibusdam modi assumenda, recusandae perspiciatis ut fugit voluptatem, nobis cupiditate nostrum consequatur nam repellat! Similique explicabo nisi, tempore nesciunt iusto sequi provident sunt, laborum vero incidunt deserunt eaque veniam voluptatibus. Neque cumque quos eveniet minima eligendi amet debitis possimus dicta qui eius molestiae itaque velit, fuga ratione quia in officia, totam tenetur nobis dolorum temporibus? Dolorem totam atque, dignissimos recusandae, modi pariatur officiis deleniti culpa amet esse provident, rem consequuntur fugit quia? Praesentium perspiciatis commodi cupiditate fugiat dolor sunt sint?
                </p>
            </div>
        </div>
    )
}

export default ScrollBasedAnimations