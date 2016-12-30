const initialState = {
	item: []
};
export default function hourm_main_reducer(state = initialState, action) {
	switch(action.type){
		case 1:
			console.log('testing');
			return state;
		case 2:
			console.log('testing2');
			return state;
	}
	return state;
}