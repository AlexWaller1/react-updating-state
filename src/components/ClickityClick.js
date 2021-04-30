// Code ClickityClick Component Here
import React from 'react'

class ClickityClick extends React.Component {
  // state goes in the constructor because constructor goes first
     constructor() {
         // use super() because we inherit from the React class
         super();

         // Define the initial state
         this.state = {
             hasBeenClicked: false,
             currentTheme: 'blue',
             
         };
     }
      // remember the spread operator for future reference, it is great for updating
      // the state of an attribute of an object. It can either update or add an attribute
     handleClick = () => {
       // Update our state here...
       this.setState({
           hasBeenClicked: true
           // state updates are not synchronous, they are asynchronous
             // we cannot just console.log our state and expect it be updated
             // we would have to use a callback as an argument within the
             // setState() method
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
// Changes in state and/or props will both trigger a re-render of our React component.
// However, changes in state can only happend internally due to components changing their
// own state. Thus, a component can trigger changes in its own state
// A component cannot change its props. Changes in props can only happen externally,
// meaning the parent or grandparent component changes the values its passing 
// down to its children.
// this.state should not be used inside of setState() because state is updated 
// asynchronously. this.state should be used outside of this.setstate() to ensure everything
// works correctly.

// However, instead of passing an object into setState, we can also pass a function.
// That function, when called inside setState will be passed the component state from
// when that setState was called. This is typically referred to as the previous state.
// with this knowledge, we can rewrite the handleClick function to:

/* 

handleClick = () => {
    this.setState(previousState => {
        return {
            count: previousState.count + 1
        }
    })
}

*/

/* 

To recap: Using setState, we can update a component's state. We frequently use events to
trigger these updates, such as onClick() when we render our JSX. setState is called 
asynchronously and merges the existing state with whatever object is passed in.

*/