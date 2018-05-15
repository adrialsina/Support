import React from "react";
import Layout from './Layout';
import { ReactRadioButtonsGroup, ReactRadioButton } from 'react-radio-buttons-group';
import './calendar.scss';

class Heartrate extends React.Component {
  constructor(props) {
    super();
    this.state = {
      heart: ''
    };

    }

  handleChange(value) {

    this.setState({ heart: value });
    this.props.sendRate(value);
    console.log("UEP", value);  
  }

  render() {

    return (

      <div style={{fontSize:200}}>
          <ReactRadioButtonsGroup   group='heart' onChange={(value) => this.handleChange(value)}>
              <ReactRadioButton value='less'>- 60</ReactRadioButton>
              <ReactRadioButton value='between'>600 - 100</ReactRadioButton>
              <ReactRadioButton value='more'>+ 100</ReactRadioButton>
          </ReactRadioButtonsGroup>
      </div>
    );
  }
}
export default Heartrate;
