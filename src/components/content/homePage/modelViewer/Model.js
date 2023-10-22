
import React from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';


const [activeModel, setActiveModel] = useState(null);
const [loadedModels, setLoadedModels] = useState({});

function Model({ activeModel }) {
  const gltf = useLoader(GLTFLoader, activeModel);

  return <primitive object={gltf.scene} />;
}

export default Model;