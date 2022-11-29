import './index.scss'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function CoffeeBlueModel(props) {
  const group = useRef()
  useFrame( ({clock}) => {
    group.current.rotation.y = clock.getElapsedTime() / 5
    })
  const { nodes, materials } = useGLTF("/CoffeeBlue3D.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={5}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.12}>
            <group position={[0, 0.56, 0]} scale={8.09}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_5.geometry}
                material={materials.Coffee}
              />
            </group>
            <group position={[0, 0.02, 0]} scale={8.09}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_7.geometry}
                material={materials.material}
              />
            </group>
            <group position={[0.01, 0.01, 0]} scale={8.09}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_9.geometry}
                material={materials.Plate}
              />
            </group>
          </group>
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
            <h2>I would love to hear from you</h2>
            <p>Whether its a compliment, a critque or you burnt your hand touching that espresso while using this site</p>
            <p>Or maybe you are looking for a Junior Web Developer, whatever the case, i'm all ears.</p>
            
            <div className='contact-model-wrapper'>
                <Canvas camera={{ fov:3.5, position: [0,15,5]}}>
                    <Suspense fallback={null}>
                    <ambientLight />
                    <directionalLight intensity={2} positon={[0,0,50]} />
                    <CoffeeBlueModel />
                    <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                </Suspense>
                </Canvas>
            </div>
            <div className='contact-icons'>
              <h4>Email: johnopersonal@gmail.com</h4>
              <a 
                  target="_blank" 
                  rel="noreferrer" 
                  href="https://www.linkedin.com/in/johnathan-david-cookson-689a85112/"
              >
                  <FontAwesomeIcon icon={faLinkedin} color="#3084ac"></FontAwesomeIcon>
              </a>
              <a 
                  target="_blank" 
                  rel="noreferrer" 
                  href="https://github.com/Johno4308"
              >
                  <FontAwesomeIcon icon={faGithub} color="#3084ac"></FontAwesomeIcon>
              </a>
            </div>
        </div>

    )
}

export default Contact