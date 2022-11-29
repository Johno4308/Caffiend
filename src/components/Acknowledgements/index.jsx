import './index.scss'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'


function EspressoModel(props) {
    const group = useRef()
    useFrame( ({clock}) => {
    group.current.rotation.y = clock.getElapsedTime() / 5
    })
    const { nodes, materials } = useGLTF("/espresso3D.glb");
    return (
      <group ref={group} {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.2}>
          <group position={[4.08, 1.01, 8.42]} rotation={[-0.27, 0.6, 1.93]} />
          <group position={[2.81, 0, 3.78]} rotation={[1.57, 0, 0]} scale={0.84}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["coffee-mug_0"].geometry}
              material={materials["coffee-mug"]}
            />
          </group>
          <group position={[0, 0, 0.02]} scale={2.77}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.plate_0.geometry}
              material={materials.plate}
            />
          </group>
          <group position={[0, 0, 3.91]} scale={1.79}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.coffee_0.geometry}
              material={materials.coffee}
            />
          </group>
          <group
            position={[-3.91, -4.32, 1.55]}
            rotation={[0.01, 0, 0.84]}
            scale={4.25}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_0.geometry}
              material={materials.spoon}
            />
          </group>
        </group>
      </group>
    );
  }


const Acknowledgements = () => {
    return(
        <div className='acknowledge-textzone'>
            <h1>Acknowledgements</h1>

            
            <div className='acknowledge-model-wrapper'>
                <Canvas camera={{ fov:10, position: [0,15,5]}}>
                    <Suspense fallback={null}>
                    <ambientLight />
                    <directionalLight intensity={1} positon={[0,40,30]} />
                    <EspressoModel />
                    <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                </Suspense>
                </Canvas>
            </div>
            <div className='acknowledge-icons'>
              <h4>Use of the following graphics, coffee write up and 3D models</h4>
              <a 
                  target="_blank" 
                  rel="noreferrer" 
                  href="https://www.webstaurantstore.com/"
              >
                  <FontAwesomeIcon icon={faGlobe} color="#684028"></FontAwesomeIcon>
              </a>
              <h4>WebstaurantStore</h4>
              <br/>
              <a 
                  target="_blank" 
                  rel="noreferrer" 
                  href="https://sketchfab.com/search?type=models"
              >
                  <FontAwesomeIcon icon={faGlobe} color="#684028">SketchFab</FontAwesomeIcon>
              </a>
              <h4>SketchFab</h4>
            </div>
        </div>

    )
}

export default Acknowledgements