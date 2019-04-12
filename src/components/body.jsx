import React, { Component } from 'react';
import '../css/body.css';

class Body extends Component{
    render(){
        return(
            <div className = 'divcontainer'>
                <div className ='one'>
                    <form className ='form'>
                        <label>NAME:
                            <input className ='name' type ='text' id='name_input' 
                            // onKeyPress ='return validateName()'
                            onChange={this.handleChange}/>
                            <br></br> 
                        </label>
                        <label>AGE:
                            <input className ='age' type ='number' id='age_input' 
                            // onKeyPress ='return validateAge()'
                            onChange={this.handleChange}/>
                        </label>
                        <br></br>
                        <label>GENDER:</label>
                        <br></br>
                        <label className = 'container'>Male
                            <input className = 'gender' type = 'radio' id = 'gender_input' value = 'male' 
                            onChange={this.handleChange}/>
                            <br></br>
                            <span className = 'checkmark'></span>
                        </label>
                        <label className = 'container'>Female   
                            <input className = 'gender' type = 'radio' id = 'gender_input' value = 'female' 
                            onChange={this.handleChange}/>
                            <br></br>
                            <span className = 'checkmark'></span>
                        </label>
                        <input className = 'submit' type = 'button' value = 'SUBMIT' onClick = {this.handleSubmit}/>
                        {/* <label> <textarea value={this.state.value} onChange={this.handleChange} /></label> */}
                    </form>
                    
                </div>
                <div className ='two'>
                    <label>PRINT   </label><br></br><br></br>
                    <label>Name:   <span id = 'display_name'></span></label><br></br><br></br>
                    <label>Age:    <span id = 'display_age'></span></label><br></br><br></br>
                    <label>Gender: <span id = 'display_gender'></span></label><br></br><br></br>
                </div>
            </div>
        );
    }
}

export default Body;