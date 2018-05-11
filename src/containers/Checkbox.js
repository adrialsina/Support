

var React = require('react');

var Checkbox = React.createClass({

  getInitialState: function () {
    return {
      time: false,
      place: false
    };
  },

  onTimeChange: function (changeEvent) {
    this.setState({
      time: changeEvent.target.value
    });
    this.props.sendCheck1(changeEvent.target.value);
  },

  onPlaceChange: function (changeEvent) {
    this.setState({
      place: changeEvent.target.value
    });
    this.props.sendCheck2(changeEvent.target.value);
  },

   
  render: function () {
    return (
    	<div>
 			<div>
	            <form >
	              <h1 style={{fontSize: '20px'}}> Moment of the day</h1>
	              <div className="radio">
	                <label>
	                  <input type="radio" value="Morning" checked={this.state.time === 'Morning'} onChange={this.onTimeChange} />
	                  Morning
	                </label>
	                <label style={{marginLeft: '20px'}}>
	                  <input type="radio"  value="Afternoon" checked={this.state.time === 'Afternoon'} onChange={this.onTimeChange}/>
	                  Afternoon
	                </label>
	              </div>
	              <div className="radio">
	                <label>
	                  <input type="radio" value="Evening" checked={this.state.time === 'Evening'} onChange={this.onTimeChange}/>
	                  Evening
	                </label>
	                <label style={{marginLeft: '20px'}}>
	                  <input type="radio"  value="Night" checked={this.state.time === 'Night'} onChange={this.onTimeChange}/>
	                  Night
	                </label>
	              </div>
	            </form>
            </div>
            <div style={{marginTop:60}}>
	            <form >
	              <h1 style={{fontSize: '20px'}}> Place</h1>
	              <div className="radio">
	                <label>
	                  <input type="radio"  value="Indoor" checked={this.state.place === 'Indoor'} onChange={this.onPlaceChange} />
	                  Indoor
	                </label>
	                <label style={{marginLeft: '20px'}}>
	                  <input type="radio" name="radio_2" value="Outdoor" checked={this.state.place === 'Outdoor'} onChange={this.onPlaceChange}/>
	                  Outdoor
	                </label>
	              </div>
	            </form>
            </div>
        </div>    

    );
  }
});

module.exports = Checkbox;