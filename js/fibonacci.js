function fibo(result){
	return a+b;
}

var a, b, result;

a = 0;
b = 1; 
result = b;

for(i = 0; i < 20; i++){
	document.write(result + "<br />");
	result = a+b;
	a=b;
	b=result;
}