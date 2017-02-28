import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import { Button, Form, Input, TextArea } from 'semantic-ui-react';
import { helloWorldConsole } from '../actions/hourmAction';
//import * from '../actions';
//import FooterPage from './FooterPage.js';
//import AgGridExample from './AgGridExample.js';
//import  stylemap from require('./App.scss');
import { AgGridExample, FooterPage } from '../components';

class HourmApp extends Component {
	/*constructor(props){
		super(props);
	}*/
	
	
	
	/*onTextChange(e,inText){
		var _x =  inText.value;
		_x = String(_x).replace(/r/gi,'rr');
		_x = String(_x).replace(/s/gi,'sss');
		this.setState({
			value: e.target.value,
			original_speech: inText.value,
			converted_speech: _x
		});
	}*/
	
	/*storeSpeech(e){
		
		var _y = this.state.rowData.concat({
			'original':this.state.original_speech, 
			'converted': this.state.converted_speech
			});
		
		this.setState({rowData:_y});
	}*/
	
	
	// in onGridReady, store the api for later use
	onGridReady(params) {
		this.api = params.api;
		this.columnApi = params.columnApi;
	}
	/*reduxPush() {
		console.log(this);
	}*/
	
  render () {
	const stylemap = require('./App.scss');
	const { reduxPush, reduxTextChange, storeSpeech, value, original_speech, converted_speech, columnDefs, rowData } = this.props;
	
	{reduxPush()}
	console.log(this.props);
    return (
	  <div>
		<div className="contentBody">
		<h1>Galeb Duhr Speech</h1>
		<p>The Galeb Duhr have a particular speech pattern. This application can be used to make it easier to speak like a Galeb Duhr.</p>
		<p>Current text is converted as: {converted_speech}</p>
		<Form>
			<Form.Group widths='2'>
				<Form.Field>
					<label>Normal Speech</label>
					<TextArea
						size='big'
						rows='3'
						className="leftrightpad"
						placeholder='Regular speech here' 
						//onChange={this.onTextChange}
						onChange={reduxTextChange}
						value={value}
						/>
				</Form.Field>
				<Form.Field>
					<label>Converted Speech</label>
					<TextArea
						size='big'
						className="leftrightpad"
						placeholder='Galeb Duhr speech will display here'
						rows='3'
						value={converted_speech}
						/>
				</Form.Field>
			</Form.Group>
			
			
		</Form>
		
		<Button onClick={storeSpeech}>Store Speech</Button>
		<Button onClick={reduxPush}>Redux Push</Button>
		
		<br/><br/>
		
		<AgGridExample 
			onGridReady={this.onGridReady.bind(this)} 
			columnDefs={columnDefs}
			rowData={rowData}
			/>
		
		</div>
		<FooterPage />
	  </div>
	);
  }
}
HourmApp.propTypes = {
	value: PropTypes.string.isRequired,
	converted_speech: PropTypes.string.isRequired,
	reduxPush: PropTypes.func.isRequired,
	reduxTextChange: PropTypes.func.isRequired,
	storeSpeech: PropTypes.func.isRequired
}
// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.value,
	converted_speech: state.converted_speech,
	original_speech: state.original_speech
  }
}
function mapDispatchToProps(dispatch) {
	return{
		reduxPush: () => dispatch({type:'add'}),
		reduxTextChange: (e,inText) => dispatch({type:'convert', e, inText}),
		storeSpeech: (e) => dispatch({type: 'store'})
	}
}
const ExportHourmApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(HourmApp)
	
export default ExportHourmApp;