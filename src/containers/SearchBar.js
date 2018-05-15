import React, { Component } from 'react';
import { connect } from 'react-redux';
import { conectar } from '../actions/index';
import Layout from './Layout';

class SearchBar extends Component {
  constructor (props) {
    super();
    this.state = {
      username: ''
    };
  }

  handleSearch (e) {
    console.log("ESCRIC", e.target.value);
    this.setState({ username: e.target.value });
    this.props.sendWord(e.target.value);
  }

  // handleprova() {
    
  //   this.props.sendWord(this.state.username);
  // }
  

  render () {

    return (
      <div className='searchbar-container'>
      <form onSubmit={e => e.preventDefault()}>
          <input
            type='text'
            size='28'
            placeholder='Do your search'
            onChange={this.handleSearch.bind(this)}
            value={this.state.username} />
      </form>
      </div>
    )
  }

}
function mapStateToProps(state) {
   return { images_id: state.active.place_reducer
          };
 }

 export default connect(mapStateToProps, { conectar })(SearchBar);


// function mapStateToProps(state) {
//   return { images_id: state.active.place_reducer
//          };
// }

// export default connect(mapStateToProps, { info })(SearchBar);


//<form onSubmit={e => e.preventDefault()}>
  //        <input
    //        type='text'
      //      size='45'
        //    placeholder='Do your search'
          //  onChange={this.handleSearch.bind(this)}
            //value={this.state.username} />
      //    <button
        //    type='submit'
         //   onClick={this.submit.bind(this)}>
         //   Search
       //   </button>
       // </form>

       //  <form onSubmit={e => e.preventDefault()}>

        






// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// //import { info } from '../actions/index';
// const ROOT_URL = 'http://localhost:5000';
// import Layout from './Layout';

// class SearchBar extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       username: ''
//     };
//   }

//   handleSearch (e) {
//     console.log(e.target.value);
//     this.setState({ username: e.target.value })
//   }

//   // submit() {
    
//   //   console.log(this.state.use);
//   //   this.props.info(this.state.username);
//   // }
  

//   render () {

//     // console.log('images_id',this.props.images_id)
//     return (
//       <div className='searchbar-container'>
//           <Layout
//             type='text'
//             size='45'
//             placeholder='Do your search'
//             onChange={this.handleSearch.bind(this)}
//             value={this.state.username} />
//       </div>
//     )
//   }

// }

// export default SearchBar


