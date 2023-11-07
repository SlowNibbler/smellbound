import React, { Component } from 'react';
import { connect } from 'react-redux';
import Johhny from '../../audio/JohnnyBGoode.mp3'

import { toggleNightmare } from './Quests/QuestSlice';


// Create a Redux store with the reducer
const { createStore } = require('redux');

class SoundComponent extends Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.nightmareEnabled !== this.props.nightmareEnabled) {
      if (this.props.nightmareEnabled) {
        this.audioRef.current.play();
      } else {
        this.audioRef.current.pause();
      }
    }
  }

  render() {
    return (
      <div>

        <audio ref={this.audioRef}>
          <source src={Johhny} type="audio/mpeg" />
        </audio>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nightmareEnabled: state.quest.nightmareEnabled, // Replace 'state.nightmareEnabled' with the correct path to your state value
});

const mapDispatchToProps = {
  toggleNightmareEnabled: toggleNightmare,
};

export default connect(mapStateToProps, mapDispatchToProps)(SoundComponent);