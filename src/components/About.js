import User from "./user.js";
import UserClass from "./UserClass.js";
import React from "react";

class About extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            count: 0,
            count2: 2,
        };
    }
    // componentDidMount(){

    // }
    render() {
        return (
            <div>
            <h1>ABOUT:</h1>
            <UserClass name={"Richesh Sharma"} location={"Ajmer, Rajasthan"} />
            </div>
        );
    };
};


export default About;