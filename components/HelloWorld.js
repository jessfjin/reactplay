//we must import react to use it in our app
import React from 'react';
// import React from 'react' in the "node_modules"


//this is our component which extends our react object
class HelloWorld extends React.Component {
// like an object constructor -- extends the React.Component



  //this is a function allows us to access the parents props or state
  //don't worry, we will cover state later

  //just know you will need to call this in order to access props or set state
  constructor(props){
    super(props)
    // I want to take what's happening to the Parent (i.e. React) by using Super 


    //state is our data being held in this component
    //in this case it will be your name
    // this.state={yourName: 'Codify Student'};
    // old way: var blah = "blah"
    // now: this.state = {yourName: 'Codify Student'} || you are always making a state. which is an object. 
  
  // you can only have 1 state in each component, so the new state is:
    this.state = {
      name: 'Jess',
      city: 'San Jose',
      food: 'Nick Crispy Tacos',
      array: [1,2,3,4,5],
      animal: 'cat' 
    };
    // state is an object (so don't forget the commas)
    // later we'll talk about borrowing states
  }

  //this is our render function where the action takes place!
  //this function returns some jsx (think javascript xml)
  //we put our variables in a curly bracket
   render() {
    // render is the part that returns the JSX
      return (
         <div>
            <h1 style={{textAlign: 'center'}}>Hello {this.state.name}!</h1>
            <p>My favorite food is {this.state.food}</p>
            <p>I am from {this.state.city}</p>
            <h2>{this.state.array.join('+')}</h2>
            <p>I like {this.state.animal}s!</p>

         </div>
      );
   }
}

// npm = node package manager

export default HelloWorld;

//we export our component so we can use it anywhere else in the App
//this modularity is what makes react so appealing to devs:
//you can write a presentational component and re-use it anywhere without
//reinventing the wheel
