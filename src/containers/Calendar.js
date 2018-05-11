import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import './calendar.scss';

// CSS Modules, react-datepicker-cssmodules.css
 
class Calendar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

      startDate: null,
      startRange: moment(new Date('2016', '08', '15')),
      endRange: moment(new Date('2016', '09', '10')),
      enable: true
    };

  }
  checkedChange(){
    this.setState({
      enable:!this.state.enable
    });
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
    this.props.sendDate(date.format('YYYY-MM-DD'));
  }
 
  render() {
           console.log("DATA", this.state.startDate);
    return (
      <div className="calendari">
        <DatePicker
          onChange={this.handleChange.bind(this)}
          minDate={this.state.startRange}
          maxDate={this.state.endRange}
          disabled={this.state.enable}
          placeholderText="This is disabled" 
          selected={this.state.startDate}
        />
        <div style={{marginTop:10}}>
             <label>
                <input type="checkbox" onChange={this.checkedChange.bind(this)} defaultChecked={this.state.enable} />
                Disable
              </label>
        </div>
        
      </div>);
  }
}

export default Calendar;