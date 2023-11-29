import React from 'react';

function ModelList({ models, setActiveModel, activeModel }) {
  return (
    <div className="ModelList">
        {models.map((model, index) => (
          <li id={model.name === activeModel.name ? 'selected' : ''} className="ModelListItem" key={index} onClick={() => setActiveModel(model)}>
            {model.name}
          </li>
        ))}
    </div>
  );
}

export default ModelList;