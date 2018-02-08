import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
var tabs = [
	{id : 1, color : "#FF0000", class: "item "},
	{id : 2, color : "#00FF00", class: "item active"},
	{id : 3, color : "#0000FF", class: "item "}
]

render(<App tabs = {tabs}/>, document.getElementById('root'));