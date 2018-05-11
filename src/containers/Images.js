import React from "react";
import { connect } from 'react-redux';
import { conectar } from '../actions/index'
import { ReactRpg } from 'react-rpg';
import './calendar.scss';
 
class Images extends React.Component {

  render() {

    let images1 = [];
    let images2 = [];
    let images3 = [];

    
    this.props.images_main ? this.props.images_main.map((image2)=>{
          images2.push({
          url:image2,
          clickHandler: (url, obj) => { console.log(obj) }
       });
     }) : [];

    this.props.images_prev ? this.props.images_prev.map((image1)=>{
          images1.push({
          url:image1,
          clickHandler: (url, obj) => { console.log(obj) }
       });
     }) : [];

    this.props.images_next ? this.props.images_next.map((image3)=>{
          images3.push({
          url:image3,
          clickHandler: (url, obj) => { console.log(obj) }
       });
     }) : [];

      let array = []

      array.push(images1,images2,images3)
    
        return (
          
            <div className='rows'>
              {array.map((a)=>{

              
                return(
                    <div className='row' >
                  
                      <ReactRpg imagesArray={a} columns={[ 1, 1, 1]} padding={23} />
                      
                    </div>
                  )
              })}  
            </div>

        );
  }
}

function mapStateToProps(state) {
  return {  
           images_main: state.active.place_reducer,
           images_prev: state.active.previous_image,
           images_next: state.active.next_image
         };
}

export default connect(mapStateToProps, { conectar })(Images);