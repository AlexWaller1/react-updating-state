// Code ClickityClick Component Here
import React from 'react'

class ClickityClick extends React.Component {
  // state goes in the constructor because constructor goes first
     constructor() {
         // use super() because we inherit from the React class
         super();

         // Define the initial state
         this.state = {
             hasBeenClicked: false
         };
     }

     handleClick = () => {
       // Update our state here...
       this.setState({
           hasBeenClicked: true
       })
     };
     
// this.setState() is a function available to all React 
// Components that use state, and allows us to let React know that
// the component state has changed.

    render () {
      return (
          <div>
              <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
              <button onClick={this.handleClick}>Click Me!</button>
          </div>
      )
    }

}

export default ClickityClick

// While a React component can have initial state, the real power
// is in updating its state - after all, if we didn't need to update
// the state, the component shouldn't have any state. State is only
// reserved for data that changes in our component and is visible
// in the UI.