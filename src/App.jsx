import { useState } from 'react'
import './App.css'

import Box1 from './components/Box1/Box1'
import BasicsOfMotion from './components/BasicsOfMotion'
import Gestures from './components/Gestures'
import AnimationControls from './components/AnimationControls'
import ViewBasedAnimations from './components/ViewBasedAnimations'
import ScrollBasedAnimations from './components/ScrollBasedAnimations'

function App() {

	return (
		<div className='App'>
			{/* <Box1/> */}
			{/* <BasicsOfMotion/> */}
			{/* <Gestures/> */}
			{/* <AnimationControls/> */}
			{/* <ViewBasedAnimations/> */}
			<ScrollBasedAnimations/>
		</div>
	)
}

export default App
