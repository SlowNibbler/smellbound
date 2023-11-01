import React from 'react';

function ModelList({ models, setActiveModel }) {
  return (
    <div className="ModelList">
        {models.map((model, index) => (
          <li className="ModelListItem" key={index} onClick={() => setActiveModel(model)}>
            {model.name}
          </li>
        ))}
    </div>
  );
}

export default ModelList;