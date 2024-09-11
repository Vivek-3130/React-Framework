import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Another way of defining a tag in react
const AnotherElement = (
    <a href="https://github.com/Vivek-3130" target="_blank">
        Github Profile Link
    </a>
)

// Customised object that has to be rendered with the use of React
// This will create an object of reactElement and then render it
const reactElement = React.createElement(
    'a', //type of the tag to be created
    {href:"https://github.com/Vivek-3130" , target : "_blank"}, //link of the tag
    'Github Profile Link' //Placehoder Text

    // we can pass username here as well and " " empty commas for the space
    // " " :- like this
    // username:- like this   
)
 
ReactDOM
.createRoot(document.getElementById('root'))
.render(
    <App/>
    // reactElement
    // or we can render :- AnotherElement
)

