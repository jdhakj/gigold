//定义一个change方法，将来把它绑定到props上
export function changeUseName(obj) {
	return {
		type: "blur",
		value: obj.value,
		error: obj.error,
		st: obj.st
	}
}

export function changeUsePwd(obj) {
	return {
		type: "blur",
		value: obj.value,
		error: obj.error,
		st: obj.st
	}
}