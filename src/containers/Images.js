import React from "react";
import { connect } from 'react-redux';
import { conect_disp } from '../actions/index'
import { ReactRpg } from 'react-rpg';
import './calendar.scss';
import { confirmAlert } from 'react-confirm-alert'; // Import
import './react-confirm-alert.scss'; // Import css

 
class Images extends React.Component {

      message (u) {
          confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => this.submit(u)
              },
              {
                label: 'No'
              }
            ]
          })
        };

      noImage (props) {
        const theresImage = props.theresImage;
        console.log("AIX", theresImage);
        if(props.theresImage){
          
          confirmAlert({
            title: 'No image for the search',
            message: 'Click okey for do another search',
            buttons: [
              {
                label: 'Yes'
              }
            ]
          })}
        };

      submit(u) {
            console.log("AIXO", u);
            this.props.conect_disp(u);
          }
        

  render() {


    let images1 = [];
    let images2 = [];
    let images3 = [];

    
    this.props.images_main ? this.props.images_main.map((image2)=>{
          images2.push({
          url:image2,
          clickHandler: (url, obj) => this.message(url)
       });
     }) : [];

    this.props.images_prev ? this.props.images_prev.map((image1)=>{
          images1.push({
          url:image1,
          clickHandler: (url, obj) => { console.log(url) }
       });
     }) : [];

    this.props.images_next ? this.props.images_next.map((image3)=>{
          images3.push({
          url:image3,
          clickHandler: (url, obj) => { console.log(obj) }
       });
     }) : [];

      let array3 = []      
      let array2 = []
      let array1 = []
      array1.push(images1)
      array2.push(images2)
      array3.push(images3)
      console.log("ggg", array3[0].length);

      if(array3[0].length == 1){

        return(
          confirmAlert({
            title: 'No image for the search',
            message: 'Click okey for do another search',
            buttons: [
              {
                label: 'Yes'
              }
            ]
          })
          );
      }else{
        console.log("ggg", array3[0]);
    
        return (
          
          <div>
 
            <div className = "loc1" >
              {array1.map((a)=>{

              
                return(
                    <div  >
                      <div  >
                  
                      <ReactRpg imagesArray={a} columns={[ 1, 1, 1]} padding={13} />
                      
                      </div>
                      <div style={{marginTop: 30}}>
                      </div>
                    </div>
                  );
              })}  
            </div>
            <div className = "loc2" >
              {array2.map((a)=>{

              
                return(
                  <div  >
                    <div  >
                  
                      <ReactRpg imagesArray={a} columns={[ 1, 1, 1]} padding={13} />
                      
                    </div>
                    <div style={{marginTop: 30}}>
                    </div>
                  </div>
                  );
              })}  
            </div>
            <div className = "loc3" >
              {array3.map((a)=>{

              
                return(
                    <div  >
                      <div  >
                  
                      <ReactRpg imagesArray={a} columns={[ 1, 1, 1]} padding={13} />
                      
                      </div>
                      <div style={{marginTop: 30}}>
                      </div>
                    </div>
                  );
              })}  
            </div>
          </div>
          

        );
      }   
  }
}

function mapStateToProps(state) {
  return {  
           images_main: state.active.place_reducer,
           images_prev: state.active.previous_image,
           images_next: state.active.next_image
         };
}

export default connect(mapStateToProps, { conect_disp })(Images);