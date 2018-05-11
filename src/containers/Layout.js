import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; //la que envia funcio a tots els reducers
import { ReactRpg } from 'react-rpg';
import SearchBar from "./SearchBar"
import Checkbox from "./Checkbox"
import Calendar from "./Calendar"
import Dayweek from "./Dayweek"
import Heartrate from "./Heartrate"
import Images from "./Images"
import { conectar, info } from '../actions/index'

class Layout extends Component{
  constructor (props) {
    super();
    this.state = {
      Day: '',
      Word:'',
      Moment:'',
      Date:'',
      Place:''

    };
  }

  submit() {
    let obj = {
      Day: this.state.Day,
      Word: this.state.Word,
      Moment: this.state.Moment,
      Date: this.state.Date,
      Place: this.state.Place
    }
    console.log("AIXO", obj);
    this.props.conectar(obj);
  }

  OnChangeParams(New){
    this.setState({
      Day: New,
    });
  }

  OnChangeParams1(New){
    this.setState({
      Word: New,
    });
  }

  OnChangeParams2(New){
    this.setState({
      Moment: New,
    });
  }
  
  OnChangeParams3(New){
    this.setState({
      Date: New,
    });
  }

  OnChangeParams4(New){
    this.setState({
      Place: New,
    });
  }

  render() {

      
    return (

      <div>
      <div style={{marginTop:60, textAlign: 'center'}}>
        <h1>ImageBrowser LSC - 2018 </h1>
      </div>
        <div style={{margin:5, marginTop:120}}>
          <SearchBar sendWord={this.OnChangeParams1.bind(this)}/>
          <div style={{marginTop:50, float:'left'}}>
            <Dayweek sendDay={this.OnChangeParams.bind(this)}/>
            <div style={{marginTop:60}}>
            <Calendar sendDate={this.OnChangeParams3.bind(this)}/>
            </div>
            <div style={{marginTop:60}}>
            <Checkbox sendCheck1={this.OnChangeParams2.bind(this)} sendCheck2={this.OnChangeParams4.bind(this)}/>
            </div>
            <div style={{marginTop:60}}>
            <Heartrate />
            </div> 
            <div style={{marginTop:40}}>
            <button
              type='submit'
              onClick={this.submit.bind(this)}>
              Search
            </button> 
            </div>
          </div>         
        </div>
        <div style={{marginLeft:330, marginTop:50}}>
          <Images />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
   return { images_id: state.active.place_reducer
          };
 }

 export default connect(mapStateToProps, { conectar })(Layout); 




//AQUI

// import React, {Component} from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'; //la que envia funcio a tots els reducers
// import { ReactRpg } from 'react-rpg';
// import SearchBar from "./SearchBar"
// import Checkbox from "./Checkbox"
// import Calendar from "./Calendar"
// import Dayweek from "./Dayweek"
// import Heartrate from "./Heartrate"
// import Images from "./Images"
// import { conectar } from '../actions/index'

// class Layout extends Component{
//   constructor (props) {
//     super();
//     this.state = {
//       username: ''
//     }
//   }

//   whenChange(){
//     this.props.onChange(this.state.username);
//   }
  
//   submit() {
    
//     this.props.conectar(obj);
//     console.log(obj);
//     };


//   render() {

//     let obj ={
//       username: this.state.username
//     }
    
//     return (

//       <div>
//       <div style={{marginTop:60, textAlign: 'center'}}>
//         <h1>ImageBrowser LSC - 2018 </h1>
//       </div>
//         <div style={{margin:20, marginTop:120}}>
//           <SearchBar/>
//           <div style={{marginTop:50, float:'left'}}>
//             <Dayweek />
//             <div style={{marginTop:60}}>
//             <Calendar />
//             </div>
//             <div style={{marginTop:60}}>
//             <Checkbox />
//             </div>
//             <div style={{marginTop:60}}>
//             <Heartrate />
//             </div>
//             <div style={{marginTop:60}}>
//             <button
//             type='submit'
//             onClick={this.whenChange.bind(this)}
//             onSubmit={this.submit.bind(this)}>
//             Search
//             </button>
//             </div> 
//           </div>          
//         </div>
//         <div>
//           <Images />
//         </div>
//       </div>
//     );
//   }
// }



// export default (Layout); 