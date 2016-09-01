function pow(x, n) {
  var result = x;
  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

var x = prompt("x?", '');
var n = prompt("n?", '');

if (n <= 1) {
  alert('Степень ' + n +
    'не поддерживается, введите целую степень, большую 1'
  );
} else {
  alert( pow(x, n) );
}


var names = [];
var newName;

for (i=names.length; i < 5; i++){
  newName = prompt("Enter a new name");
  names.push(newName);
}


var login = prompt("Enter your name");

for (var i = 0; i < 5; i++) {
	if (names[i] == login) {
	alert('Вы успешно вошли ' + login);
	break;
	}
}

if ( i>=5 ){
	alert('Ошибка');
}
