
var dataTypes = require('./datatype');
var arr = ["abc",123,false,null,Symbol(),{},function(){}];
var result=[];
for(var i in arr){
	result[i]= dataTypes.getPrimitiveDataType(arr[i]);
}
	console.log("result = ["+result+"]");

var flag = dataTypes.isObject({'obj':123});
console.log(flag);
var flag = dataTypes.isString(false);
console.log(flag);
var flag = dataTypes.isNumber(123);
console.log(flag);
var flag = dataTypes.isBoolean("abcd");
console.log(flag);
var flag = dataTypes.isFunction(function(){});
console.log(flag);
var flag = dataTypes.isSymbol(Symbol('data'));
console.log(flag);
var flag = dataTypes.isArray([2,3,4]);
console.log(flag);
