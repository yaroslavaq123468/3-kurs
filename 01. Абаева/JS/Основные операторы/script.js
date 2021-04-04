var a = 1, b = 1, c, d;
c = ++a; alert(c);
d = b++; alert(d);
c = (2 + ++a); alert(c);
d = (2 + b++); alert(d);
alert(a);
alert(b);



var a = 2;
var x = 1 + (a *= 2);
alert(x);



var a = 3;
var b = 2;

if (a > 0 && b > 0) {
	alert(a - b);
}

else if (a < 0 && b < 0) {
	alert(a * b);
}

else if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
	alert(a + b);
}



var a = 13, str = '';
switch (a) {
	case 1:
		str += '1, ';
	case 2:
		str += '2, ';
	case 3:
		str += '3, ';
	case 4:
		str += '4, ';
	case 5:
		str += '5, ';
	case 6:
		str += '6, ';
	case 7:
		str += '7, ';
	case 8:
		str += '8, ';
	case 9:
		str += '9, ';
	case 10:
		str += '10, ';
	case 11:
		str += '11, ';
	case 12:
		str += '12, ';
	case 13:
		str += '13, ';
	case 14:
		str += '14, ';
	case 15:
		str += '15';
		break;
}

alert(str);



function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case 'Сложение':
			return arg1 + arg2;
		case 'Вычитание':
			return arg1 - arg2;
		case 'Умножение':
			return arg1 * arg2;
		case 'Деление':
			return arg1 / arg2;
	}
}

alert(mathOperation(3, 3, 'Сложение'));
alert(mathOperation(5, 3, 'Вычитание'));
alert(mathOperation(4, 4, 'Умножение'));
alert(mathOperation(12, 6, 'Деление'));


alert((null == 0) + ' Так как это разные типы данных');

function power(val, pow) {
	if (pow == 0)
		return 1;
	var current = val;
	if (pow > 1)
		current *= power(val, pow-1);
	return current;
}

alert(power(2, 4));
