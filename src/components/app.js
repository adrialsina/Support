import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Layout from '../containers/Layout';
// import BookDetail from '../containers/book-detail'; <BookDetail />



 export default class App extends Component {
   render() {
     return (
       <div className="container">
         <Layout />
         {this.props.children}
       </div>
     );
   }
 }
