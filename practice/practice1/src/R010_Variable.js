import React, { Component } from 'react';

class R010_Variable extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var varName = 'react';
        console.log('varName1 : '+varName);
        //'varName' is already defined no-redeclare 
        var varName = '200'; 
        console.log('varName2 : '+varName);
        //-> var변수는 재선언, 재할당 허용

        let letName = 'react'
        console.log('letname1 : '+letName);
        //let letName = '200'
        //Parsing error: Identifier 'letName' has already been declared 
        letName = 'react200';
        console.log('letname2 : '+letName);
        //-> let변수는 재선언 X, 재할당 허용 

        const constName = 'react';
        console.log('constName : '+ constName);
        //const constname = '200'
        //Parsing error: Identifier 'constName' has already been declaredb 
        //constName = 'react200'
        //Uncaught TypeError: Assignment to constant variable 
        //-> const변수는 재선언, 재할당 X
    }

    render() {
        return (
            <h2>[THIS IS Variable]</h2>
        )
    }
}

export default R010_Variable;