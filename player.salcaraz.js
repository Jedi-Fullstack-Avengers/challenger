module.exports = {
	
	dubeed: {
		findNotDubeedValue5: arrayTest => {
			var bucles = arrayTest.length;
			var encontrado = 0;
			//A saco paco
			for (var i = 0; i < bucles; i++) {
			  for (var j = 0; j < bucles; j++) {
				if (j == i) {
				  j++;
				}
				if (arrayTest[i] == arrayTest[j]) {
				  encontrado = 1;
				  break;
				}
			  }
			  if (encontrado == 0) {
				return arrayTest[i];
				break;
			  } else {
				encontrado = 0;
			  }
			}
		}		
	},
	
	negative: {
		negativo: str => {
			pos = 1;
			result = 0;
			while (result >= 0) {
				var ch = str.charAt(pos-1);
				//console.log("TCL: ch", ch);
				if (ch === '(') result++;
				else if (ch === ')') result--;
				//console.log("TCL: result", result);
				if (result < 0) {
					return pos;
					//console.log('Resultado negativo en la posicion: ',pos);
				}
				pos++;
			}
		}
	}
	
};
