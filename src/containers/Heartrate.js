import React from "react";
import ToggleButton from 'react-bootstrap/lib/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';

class Heartrate extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: false
    };
  }

  handleChange(e) {
    this.setState({ value: e });
    console.log("UEP", e); 
  }

  render() {
    return (
      <ButtonToolbar>
        <ToggleButtonGroup
          type="radio"
          value={this.state.value}
          bsSize="small"
          onChange={this.handleChange}
          name="options"
        >
          <ToggleButton value={1}> - 60</ToggleButton>
          <ToggleButton value={2}>600 - 100</ToggleButton>
          <ToggleButton value={3}> + 100</ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
    );
  }
}
export default Heartrate;
