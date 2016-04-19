   function on(){
	 
	  var x = document.getElementById('srch').value;
      
     
	 var callback = function(value, i, array) {
    return value.name === this[0];
	
	 }
	 console.log(obj.filter(callback, [x]));
	 document.getElementById("demo1").innerHTML =obj.find(callback, [x]).name;
	 document.getElementById("demo2").innerHTML =obj.find(callback, [x]).dial_code;
	 document.getElementById("demo3").innerHTML =obj.find(callback, [x]).code;
	 
}


 
