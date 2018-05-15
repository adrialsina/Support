import React from "react";
import Layout from './Layout';
import { ReactRadioButtonsGroup, ReactRadioButton } from 'react-radio-buttons-group';
import './calendar.scss';

 
class Dayweek extends React.Component {
  constructor(props) {
    super();
    this.state = {
      day: ''
    };

    }

  handleChange(value) {

    this.setState({ day: value });
    this.props.sendDay(value);
    console.log("UEP", value);  
  }

  render() {

    return (

      <div style={{fontSize:200}}>
          <ReactRadioButtonsGroup   group='setmana' onChange={(value) => this.handleChange(value)}>
              <ReactRadioButton value='Monday'>Mon.</ReactRadioButton>
              <ReactRadioButton value='Tuesday'>Tue.</ReactRadioButton>
              <ReactRadioButton value='Wednesday'>Wed.</ReactRadioButton>
              <ReactRadioButton value='Thursday'>Thu.</ReactRadioButton>
              <ReactRadioButton value='Friday'>Fri.</ReactRadioButton>
              <ReactRadioButton value='Saturday'>Sat.</ReactRadioButton>
              <ReactRadioButton value='Sunday'>Sun.</ReactRadioButton>
          </ReactRadioButtonsGroup>
      </div>
    );
  }
}

//render(<Dayweek />);
export default Dayweek;
