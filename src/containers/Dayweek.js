import React from "react";
import {ButtonGroup} from "react-native-elements";
import Layout from './Layout';

 
// class Dayweek extends React.Component {
//   constructor() {
//     super();

//     this.handleChange = this.handleChange.bind(this);

//     this.state = {
//       selectedIndex: ''
//     };
//   }

//   handleChange(selectedIndex) {

//     this.setState({ selectedIndex });
//     this.props.sendDay({selectedIndex});
//     console.log("UEP", {selectedIndex});  
//   }

//   render() {

//     const buttons = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
//     const {selectedIndex} = this.state;

//     return (
//       <ButtonGroup
//         onPress={this.handleChange}
//         selectedIndex = {selectedIndex}
//         buttons = {buttons}
//         containerStyle = {{height: 100}}
//         />
//     );
//   }
// }

// //render(<Dayweek />);
// export default Dayweek;
class Dayweek extends React.Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex (selectedIndex) {
    this.setState({selectedIndex});
    this.props.sendDay({selectedIndex});
    console.log("UEP", {selectedIndex});
  }

  const component1 = () => <Text>Hello</Text>
  const component2 = () => <Text>World</Text>
  const component3 = () => <Text>ButtonGroup</Text>

  render () {
    const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
    const { selectedIndex } = this.state
    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{height: 100}} />
    );
  }
}

export default Dayweek;
