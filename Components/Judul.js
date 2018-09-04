import React, {Component} from 'react';
import {Text} from 'react-native';

class Judul extends Component {
	render(){
		return (
			<Text style={salon.judul}>BIODATA</Text>
		)
	}
}
const salon = {
	judul: {
		color: 'red',
		fontSize: 40,
		fontWeight: 'bold',
		backgroundColor: 'white'
	}
}
export default Judul;