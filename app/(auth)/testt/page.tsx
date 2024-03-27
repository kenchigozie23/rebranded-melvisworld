
'use client'
import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { motion } from 'framer-motion'

const Box = () => {
  const meshRef = useRef(null)

  useFrame(() => {
    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y += 0.01
  })

  return (
    <mesh ref={meshRef} >
      {/* <boxBufferGeometry  /> */}
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-6xl font-bold mb-8"
      >
        404 - Page Not Found
      </motion.h1>
      <Canvas>
        <Suspense fallback={null}>
          <Box />
          <OrbitControls />
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default NotFoundPage