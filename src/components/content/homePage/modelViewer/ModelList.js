// ModelList.js
import React from 'react';

import modelPongo from './models/model1.glb';
import modelJim from './models/model2.glb';
import model3 from './models/model3.glb';

const [activeModel, setActiveModel] = useState(null);
const [loadedModels, setLoadedModels] = useState({});

function ModelList({ models, onSelectModel }) {
  return (
    <ul>
      {models.map((model) => (
        <li key={model} onClick={() => onSelectModel(model)}>
          {model}
        </li>
      ))}
    </ul>
  );
}

export default ModelList;