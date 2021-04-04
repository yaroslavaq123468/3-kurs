var str = '';
var i = 0;

while (i <= 100) {
	str += i + ' ';
	i++;
}

console.log(str);



var price_products = [43, 565, 31, 2044, 2, 4431, 86 ,322];

function countBasketPrice(products) {
	var all_price = 0;
	for (var i in products) {
		all_price += price_products[i];
	}
	
	return all_price;
}

console.log(countBasketPrice(price_products));



var str = '';
for (var i = 0; i <= 9; str += i++ + ' ') {}

console.log(str);


var str = '';
for (var x = 1; x <= 20; x++) {
	for (var v = 1; v <= x; v++) {
		str += 'x';
	}
	str += '\n'
}

console.log(str);
