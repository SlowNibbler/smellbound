
import { useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function ModelGen(props) {

  const { nodes, animations } = useGLTF(props.model);
    
  // Fetch model and a separate texture
  // Extract animation actions
  const { ref, actions, names } = useAnimations(animations);
  // Hover and animation-index states
  const [hovered, setHovered] = useState(false);

  // Change cursor on hover-state
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
        {/* Use nodes directly to render the model */}
        <mesh object={nodes.mesh} />
      </group>
    </group>
  );
}