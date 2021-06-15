import React , {Component, Fragment} from "react";  //destructuring in ES6
import ReactDOM from "react-dom";

import {HelloWorld} from './components/HelloWorldDay' //named export (filename)
import Pikachu from './components/HelloCountry'
import {WhatWhat} from './components/HelloWorldDay'
import App, { About, Contact, Home } from'./components/MultiExport'

 
const FunctionalComponent1 = () => {
 return <h1>Hell world with Arrow Functions</h1>;
};

const FunctionalComponent2 = () => {
    return React.createElement('h1', null, "Hi Team"); // null props or child element 
};

function FunctionalComponent3() {
    return <h1>Hello world with Function keyword</h1>;
}

class ClassComponent1 extends Component {
    render() {
      return <h1>Hello world with class components</h1>;
    }
}

class ClassComponent2 extends React.Component {  //without destructuring
    render() {
      return <h1>Hello, world</h1>;
    }
}

// React.createElement(ClassComponent2),
// <ClassComponent2/>

// ReactDOM.render(
//     React.createElement(ClassComponent2),  // equals to <ClassComponent2/>
//     document.querySelector('#root'),
// );



//===================================== Passing Properties (props) ===================

const PrintName = ({name}) => {  //destructuring
    return <h1>Hi my name is, {name} </h1>;
};

const PrintName2 = (props) => {
    return <h1>Hello, {props.name}</h1>;
};


class PrintName3 extends React.Component {
    render() {
      const { name } = this.props;   //getting props using this keyword
      return <h1>Hello, { name }</h1>;
   }
}   

//<PrintName name="AjAY"/>
// <PrintName2 name="James"/>

// ReactDOM.render(
//     <PrintName3 name="India"/>,
//     document.querySelector('#root'),
// );

//============================== State in functional & Class components ==========

//set count update the state and rendering happens again
const IncreaseCount = () => {
   const [count, setCount] =  React.useState(0);  //(camel case) Hook, which takes an argument of initial state.

   return (
    <>  
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
}


//access state using this keyword
class IncreaseCount2 extends React.Component {
    constructor(props) { // requires constructor to initilize the state
      super(props);
      this.state = {
        count: 0,
        msg: '',
        myArray: []
      };
    }
   
    // only have one top level element <div></div> in our case 
    render() {
      return (
        <div>
          <p>count: {this.state.count} times</p>  
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click
          </button>
        </div>
      );
    }
}

// using state, props(optional) as arguments in setState(state)
//setState fire up the render method
class IncreaseCount3 extends React.Component {
    constructor(props) { 
      super(props);
      this.state = {
        count: 0,
      };
    }
   
    render() {
      return (
        <Fragment>
          <p>count: {this.state.count} times</p>  
          <button onClick={() => this.setState((state) => { return { count: state.count + 1 }; })}>
            Click
          </button>
        </Fragment>
      );
    }
}



// ReactDOM.render(
//     <IncreaseCount2 />,
//     document.querySelector('#root'),
// );


//========================= Lifecycle in functional & Class components ===============

//componentDidMount is called right after the first render completes
const LogCreated = () => {
    React.useEffect(() => {
        console.log("Mount");
    }, []);

    return <h1>I am Logger Component</h1>
}

const LogCreated3 = () => {
    React.useEffect(() => {
      return () => {
        console.log("Unmount");
      };
    }, []);
    return <h1>UnMount Logger Component</h1>;
   };


class LogCreated2 extends React.Component {
    componentDidMount() {
      console.log("Hey I am 2nd one");
    }

    render() {
      return <h1>I am Logger Component 2</h1>;
    }
}

class LogCreated4 extends React.Component {
    componentWillUnmount() {
      console.log("class will Unmount");
    }
   
    render() {
      return <h1>Unmounting class Component</h1>;
    }
   }



ReactDOM.render(
    <Home />,
    document.querySelector('#root'),
);