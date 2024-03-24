import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../../state/Quests/QuestSlice'; // Import the action

import masks from '../../../images/homeImages/wall1.png'
import pinkClouds from '../../../images/homeImages/pinkClouds.jpg'
import evergreen from '../../../images/homeImages/evergreen.jpg'
import calabasas from '../../../images/homeImages/calabasas.jpg'

import './mysterysPage.css'
import { Checkbox } from 'antd';

const ThemeSelect = () => {
  const selectedOption = useSelector((state) => state.quest.selectedImage);
  const nightmareEnabled = useSelector((state) => state.quest.nightmareEnabled);

  const dispatch = useDispatch();

  const options = [
    // { id: 'option1', label: 'Plain', image: '' },
    { id: 'option2', label: 'The Fellas', image: masks },
    { id: 'option3', label: 'Topanga', image: calabasas },
    { id: 'option3', label: 'Green', image: evergreen },

  ];

  // if (nightmareEnabled) {
  //   const options = [
  //       { id: 'option1', label: 'Plain', image: Test },
  //       { id: 'option2', label: 'The Fellas', image: Tewst },
  //       { id: 'option3', label: 'Option 3', image: 'image3.jpg' },
  //       { id: 'default', label: 'Default', image: 'default.jpg' },
  //     ];
  // }

  const handleOptionClick = (optionId) => {
    dispatch(setTheme(optionId));
  };

  console.log(selectedOption);

  return (
    <div className="theme-list">
      <ul>
        {options.map((option) => (
          <div className='theme-option'>
            <input
              type="checkbox"
              checked={selectedOption === option.image}
              onClick={() => handleOptionClick(option.image)}
            />
            <li
              key={option.id}
              className={selectedOption === option.id ? 'selected' : ''}
            >
              {option.label}
            </li>
          </div>
          
        ))}
      </ul>
    </div>
  );
};

export default ThemeSelect;