
var callback = function(value, i, array) {
    return (value.name && value.name[0] === this[0]) && 
      (value.dial_code && value.dial_code[1] == this[1]);
};

var s = "A";
var t = 3;

console.log(obj.filter(callback, [s, t]));
console.log(obj.some(callback, [s, t]));
console.log(obj.every(callback, [s, t]));
console.log(obj.find(callback, [s, t]));

var codes = obj.map(function(country) {
    return {
        name: country.name,
        code: country.dial_code
    };
});

console.log(codes);

var list = obj
.filter(function(c){
    return c.name && c.name[0] === "B" &&
        c.dial_code && c.dial_code[1] === "3";
})
.map(function(c) {
    return c.name;
});

console.log(list);

