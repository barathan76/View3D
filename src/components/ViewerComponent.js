import React from 'react';
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model({ objectUrl, ...props }) {
    const { scene } = useGLTF(objectUrl);
    return <primitive object={scene} {...props} />
}
const ViewerComponent = ({ objectUrl }) => {
    return (
        <div className="viewer">
            <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ "position": "absolute", }}>
                <color attach="background" args={["#101010"]} />
                <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
                    <Stage environment={null}>
                        {objectUrl && <Model objectUrl={objectUrl} scale={0.01} />}
                    </Stage>
                </PresentationControls>
            </Canvas>
        </div >
    );
};

export default ViewerComponent;

