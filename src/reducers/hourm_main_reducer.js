const initialState = {
	item: 'noitem',
	converted_speech: '',
	value: 'Start Value',
	original_speech: ' ',
	rowData: [{original: 'update something', converted: 'Sample translated text'}],
	columnDefs:[
		{headerName: 'Text', field: 'original'},
		{headerName: 'Converted Text', field: 'converted'}
	]
};
export default function hourm_main_reducer(state = initialState, action) {
	switch(action.type){
		case 'add':
			console.log('testing',state);
			return {item: 'item1'};
		case 'convert':
			console.log('convert triggered',state);
			let _x =  action.inText.value;
			_x = String(_x).replace(/r/gi,'rr');
			_x = String(_x).replace(/s/gi,'sss');
			return {
				value: action.e.target.value,
				original_speech: action.inText.value,
				converted_speech: _x
			};
		case 'store': 
			console.log('store speech',state);
			let _y = state.rowData.concat({
			'original':state.original_speech, 
			'converted': state.converted_speech
			});
			return {rowData:_y};
		default:
			return state
	}
	return state;
}