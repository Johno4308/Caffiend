import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import './index.scss'

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

const Home = () => {
    
    return(
        <div className='text-zone'>
            <h1>Caffined</h1>
            <p>Easy to follow instructions for great coffee</p>
            <div className='model-wrapper'>
                <Canvas camera={{ fov:70, position: [0,3,5]}}>
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

export default Home