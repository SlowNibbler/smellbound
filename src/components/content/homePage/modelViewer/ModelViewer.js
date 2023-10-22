import React, { useState } from 'react';
import ModelList from './ModelList';

const [activeModel, setActiveModel] = useState(null);
const [loadedModels, setLoadedModels] = useState({});

const models = ['model1.glb', 'model2.glb', 'model3.glb'];

  const onSelectModel = (model) => {
    setActiveModel(model);
  };

const ModelViewer = ({ model }) => {
    return (
        <div>
            <ModelList models={models} onSelectModel={onSelectModel} />
            <ModelCanvas activeModel={activeModel} />
        </div>
    );
};


const ModelCanvas = ({ model }) => {
    return (
        <Canvas>
            {/* Set up your 3D scene and camera */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            {model && <mesh object={model.scene} material={model.scene} />}
        </Canvas>
    )
}

export { ModelViewer };