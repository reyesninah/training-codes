import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx'
import Body from './components/body.jsx';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      name_input:'',
      age_input:'',
      //gender_input:''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    console.log("EMail: " + this.state.email);
    console.log("Password: " + this.state.password);

    document.getElementById("display_name").innerHTML = document.getElementById("name_input").value;
            document.getElementById("display_age").innerHTML = document.getElementById("age_input").value;
            //document.getElementById("display_gender").innerHTML = gender_input;
  }

  render() {
    console.log("Sample");
    console.log("Sample from local");
    return (
      
      <div className="assignment-app">
      
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
