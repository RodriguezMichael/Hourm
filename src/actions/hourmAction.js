export function AddAction(name){
	return{
		type: 'add',
		name
	}
}
export function convertSpeech(e,inText){
	return{
		type: 'convert',
		e,
		inText
	}
}