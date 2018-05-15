import React from "react";
import { connect } from 'react-redux';
import { conectar } from '../actions/index';
import './calendar.scss';

class Text extends React.Component {
  constructor (props) {
    super(props);
    
  }


  render() {

  	let text1 = [];
    let text2 = [];
    let text3 = [];
    let text4 = [];
    let text5 = [];
    let text6 = [];
    let text7 = [];
    let s = 0;
    let i = 0;
    
    this.props.date_resp ? this.props.date_resp.map((txt1)=>{
          text1.push({
          date: txt1,
          id: i
       });
          i++;
     }) : [];

    i = 0;

    this.props.day_resp ? this.props.day_resp.map((txt2)=>{
          text2.push({
          day: txt2,
          id: i
       });
          i++;
     }) : [];

    i = 0;

    this.props.act_resp ? this.props.act_resp.map((txt3)=>{
          text3.push({
          act:txt3,
          id: i
       });
          i++;
     }) : [];

    i = 0;

     this.props.hour_resp ? this.props.hour_resp.map((txt4)=>{
          text4.push({
          hour:txt4,
          id: i
       });
          i++;
     }) : [];

     i = 0;

    this.props.place_resp? this.props.place_resp.map((txt5)=>{
          text5.push({
          place:txt5,
          id: i
       });
          i++;
     }) : [];

    i = 0;

    this.props.heart_resp ? this.props.heart_resp.map((txt6)=>{
          text6.push({
          heart:txt6,
          id: i
       });
          i++;
     }) : [];

    i = 0;

    this.props.moment_resp ? this.props.moment_resp.map((txt7)=>{
          text7.push({
          moment:txt7,
          id: i
       });
          i++;
     }) : [];

      const dosMap = text2.reduce((map,item) => map.set(item.id, item.day), new Map);
      const tresMap = text3.reduce((map,item) => map.set(item.id, item.act), new Map);
      const quatreMap = text4.reduce((map,item) => map.set(item.id, item.hour), new Map);
      const cincMap = text5.reduce((map,item) => map.set(item.id, item.place), new Map);
      const sisMap = text6.reduce((map,item) => map.set(item.id, item.heart), new Map);
      const setMap = text7.reduce((map,item) => map.set(item.id, item.moment), new Map);
      const result = text1.map((item) => (Object.assign({ day: dosMap.get(item.id)},{act: tresMap.get(item.id)},
                                          {hour: quatreMap.get(item.id)},{place: cincMap.get(item.id)},
                                           {heart: sisMap.get(item.id)}, {moment: setMap.get(item.id)}, item)));
      console.log("AAA", result);
      console.log("AAA", text1);
      console.log("AAA", text2);
      
    return (

      <div>

      {result.map((a)=>{

        return(
          
          <div style={{marginTop: 28}}>
              <h3><b>Information main image </b></h3>
                <p><b>Date : </b>{a.date}</p>
                <p><b>Day of the week : </b> {a.day} </p>
                <p><b>Moment day : </b>{a.moment}</p>
                <p><b>Exact hour : </b>{a.hour}</p>
                <p><b>Place : </b>{a.place}</p>
                <p><b>Activity : </b>{a.act}</p>
                <p><b>Heart rate : </b>{a.heart}</p>
            <div style={{marginTop: 156.867}}>
            </div>
          </div>
        );
      })}

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {  
          date_resp: state.active.date_resp,
          moment_resp: state.active.moment_resp,
          day_resp: state.active.day_resp,
          act_resp: state.active.act_resp,
          hour_resp: state.active.hour_resp,
          place_resp: state.active.place_resp,
          heart_resp: state.active.heart_resp
         };
}
export default connect(mapStateToProps, { conectar })(Text);
  