import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-root/dist/styles/ag-grid.css';
import 'ag-grid-root/dist/styles/theme-material.css';

//var aggridstyle = require('ag-grid-root/dist/styles/ag-grid.css');
//var themefreshstyle = require('ag-grid-root/dist/styles/theme-fresh.css');
class AgGridExample extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			/* rowData: [{original: 'Test React', converted: 'Tessst Rreact'}],
			columnDefs:[
					{headerName: 'Text', field: 'original'},
					{headerName: 'Converted Text', field: 'converted'}
				], */
			icons: {checkboxChecked: '<img src="data:image/png;base64,..."/>'}
		}; 
	}
	
	render () {
		return(
		<div className="ag-material">
			<h2>History</h2>
			<AgGridReact
				// listen for events with React callbacks
				//onRowSelected={this.onRowSelected.bind(this)}
				//onCellClicked={this.onCellClicked.bind(this)}

				// binding to properties within React State or Props
				//showToolPanel={this.state.showToolPanel}
				//quickFilterText={this.state.quickFilterText}
				//icons={this.state.icons}

				// column definitions and row data are immutable, the grid
				// will update when these lists change
				/*columnDefs=[
					{headerName: 'Text', field: 'original'},
					{headerName: 'Converted Text', field: 'converted'}
					
				]*/
				icons= {this.state.icons}
				
				columnDefs={this.props.columnDefs}
				rowData={this.props.rowData}
				//rowData=[{original: 'Test React', converted: 'Tessst Rreact'}],
				// or provide props the old way with no binding
				rowSelection="multiple"
				enableSorting="true"
				enableFilter="true"
				rowHeight="48"
			/>
		</div>
		)
	}
}

export default AgGridExample