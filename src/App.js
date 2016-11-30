import React from 'react';
import { render } from 'react-dom';
import { Button, Form, Input, TextArea } from 'semantic-ui-react';
import AgGridReact from './AgGridReact.js';
class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			original_speech: ' ',
			converted_speech : ' ',
			value: ''
		}
		this.onTextChange = this.onTextChange.bind(this);
		this.storeSpeech = this.storeSpeech.bind(this);
	}
	
	onTextChange(e,inText){
		var _x =  inText.value;
		_x = String(_x).replace(/r/gi,'rr');
		_x = String(_x).replace(/s/gi,'sss');
		this.setState({
			value: e.target.value,
			original_speech: inText.value,
			converted_speech: _x
		});
	}
	
	storeSpeech(e){
		console.log(this.state);
		return false;
	}
	
  render () {
	const stylemap = require('./App.scss');
    return (
		<div className="contentBody">
		<h1>Galeb Duhr Speech</h1>
		<p>The Galeb Duhr have a particular speech pattern. This application can be used to make it easier to speak like a Galeb Duhr.</p>
		<Form>
			<Form.Group widths='2'>
				<Form.Field>
					<label>Normal Speech</label>
					<TextArea
						size='big'
						rows='3'
						className="leftrightpad"
						placeholder='Regular speech here' 
						onChange={this.onTextChange}
						value={this.state.value}
						/>
				</Form.Field>
				<Form.Field>
					<label>Converted Speech</label>
					<TextArea
						size='big'
						className="leftrightpad"
						placeholder='Galeb Duhr speech will display here'
						readOnly='true'
						rows='3'
						value={this.state.converted_speech}
						/>
				</Form.Field>
			</Form.Group>
			
			
		</Form>
		
		<Button onClick={this.storeSpeech}>Store Speech</Button>
		<br/>
		Speech :
		{this.state.original_speech}
		<br/>
		Speech2 :
		{this.state.converted_speech}
		</div>
		
	);
  }
}

render(<App/>, document.getElementById('app'));