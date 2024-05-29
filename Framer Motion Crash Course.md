# Notes on Framer Motion

## Setup 

Install `framer-motion` with -
```shell
    npm i framer-motion
```

* ### Imports

Import `motion` in a component using framer animations with -

```js
    import { motion } from 'framer-motion'
```

* ### Usage of `Motion`

We apply framer animations to HTML elements provided by `motion`. For example -
```html
<motion.div></motion.div>
```   
We can use any HTML element replacing `div`.

## Animate & Transition Props

* ### Apply Animate Props

We set animation with the `animate` prop.
```jsx
    <motion.div
        animate = {{
            x: 500,
            opacity: 1
        }}
    ></motion.div>
```
This example shifts this `motion.div` by `500px` and changes opactiy to `1`.

* ### Initial Props 

We can set the initial phase of the animation in `initial` prop. Our animation starts from the initial state.
```jsx
    <motion.div
        initial={{
            opacity: 0.1
        }}
        animate={{
            opacity: 1
        }}
    >
    </motion.div>
```
This example changes initial opacity `0.1` to `1` at the end of the animation.

* ### Apply Transition Props

We set the transition with `transition` prop.
```jsx 
    <motion.div
        transition={{
            duration: 2
        }}
    >
    </motion.div>
```
This example changes the duration of the animation into `2s`. 

Setting up `duration` only, automatically sets up the transition `type: "tween"`, which cancels the automatic bouncing effects set up by framer.

The bouncing effect is given by `type: "spring"` -
```jsx
    <motion.div
        transition={{
            type: "spring"
        }}
    >
    </motion.div>
```
But `type: "spring"` doesn't operate with `duration`. 

So, we use `stiffness` and `damping` with `type: "spring"`.
- `stiffness` **:** This determines how quickly an animation reaches its final state. Higher values makes the animation quicker but might result in more oscillation if the damping is low.
- `damping` **:** This determines the *bounciness* of the `motion.div` or how quickly it reaches its final state. Higher damping values result in less oscillation (smoother) but potentially slower to rech the final state.
```jsx
    <motion.div
        transition={{
            type: "spring",
            stiffness: 400,
            damping: 1
        }}
    >
    </motion.div>
```
We need to tune both of these parameters side-by-side to find out the necessary animation.

## Some regularly used effects

* **Rotate / Spin :** 

```jsx
    <motion.div
        animation={{
            rotate: 360
        }}
    >
    </motion.div>
```

* **Scale :**
```jsx
    <motion.div
        animation={{
            scale: 2
        }}
    >
    </motion.div>
```

## Animating a `motion.div` upon a click

* **Using a `useState()` hook:**

```jsx
    const [isAnimating, setIsAnimating] = useState(false)
    return(
        <motion.div
            animation={{
                animation={{
                    x: isAnimating ? 500 : 0,
                    scale: isAnimating ? 1.2 : 0,
                    rotate: isAnimating ? 180 : 0
                }}
                onClick={() => setIsAnimating(!isAnimating)}
            }}
        />
    )
```