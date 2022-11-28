import './index.scss'

import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

function CoffeeModel(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF("/Coffee3D.glb");
    useFrame( ({clock}) => {
        group.current.rotation.y = clock.getElapsedTime() /3
    })
    return (
      <group ref={group} {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={3}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial.geometry}
              material={materials.DefaultMaterial}
            />
          </group>
        </group>
      </group>
    );
  }



//add contact tags and finish off the acknowledge page and styling

const Contact = () => {
    return(
        <div className='contact-textzone'>
            <h1>Contact Me</h1>
            <h2>I would love you hear from you</h2>
            <p>Whether its a compliment, a critque or you burnt your hand touching that espresso while using this site</p>
            <p>Or maybe you are looking for a Junior Web Developer, whatever the case, i'm all ears.</p>
            
            <div className='model-wrapper'>
                <Canvas camera={{ fov:30, position: [0,15,5]}}>
                    <Suspense fallback={null}>
                    <ambientLight />
                    <directionalLight intensity={2} positon={[0,0,50]} />
                    <CoffeeModel />
                    <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                </Suspense>
                </Canvas>
            </div>
        </div>

    )
}

export default Contact