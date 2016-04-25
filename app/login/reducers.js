//在action触发后，返回一个新的state(就是个对象)
export default function changeUseName(state,action){
	if(action.type == "blur"){
		return{
			value: action.value,
			error: action.error,
			st: action.st
		};
	}
	return {
		value:'',
		error: '',
		st: ''
	};
}


export default function changeUsePwd(state,action){
	if(action.type == "blur"){
		return{
			value: action.value,
			error: action.error,
			st: action.st
		};
	}
	return {
		value:'',
		error: '',
		st: ''
	};
}