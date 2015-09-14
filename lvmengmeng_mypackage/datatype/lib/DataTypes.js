exports.getPrimitiveDataType = function(obj){
	var str =(obj === null?"null":typeof(obj));
	return str;
}

exports.isObject = function(obj){
	var flag = ("object" == typeof obj);
	return flag;
}

exports.isString = function(obj){
	var flag = ("sting" == typeof obj);
	return flag;
}

exports.isNumber = function(obj){
	var flag = ("number" == typeof obj);
	return flag;
}

exports.isBoolean = function(obj){
	var flag = ("boolean" == typeof obj);
	return flag;
}

exports.isFunction = function(obj){
	var flag = ("function" == typeof obj);
	return flag;
}

exports.isSymbol = function(obj){
	var flag = ("symbol" == typeof obj);
	return flag;
}

exports.isArray = function(obj){
	var flag = (obj instanceof Array);
	return flag;
}