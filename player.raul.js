module.exports = {
	
	bucle: {
		calcultateFor: a => {
			let count = 0;
			
			for (let i=0; i<a.length; i++) count += a[i];
			return count;
		},
		
		calcultateForEach: a => {
			let count = 0;
			
			a.forEach((it) => count += it);
			return count;
		},
		
		calcultateMap: a => {
			let count = 0;
			
			a.map((it) => count += it);
			return count;
		}		
	},
	
	dubeed: {
		findNotDubeedValue1: data => {
			const len = data.length;
			
			for (var i = 0; i < len; i++) {
				var n = data[i];
				var dubeed = false;

				for (var j = 0; j < len; j++) {
					if (i != j && data[j] == n) {
						dubeed = true;
						break;
					}
				}

				if (!dubeed) return n;
			}

			return false;
		},
		
		findNotDubeedValue2: data => {
			var dubeeds = [];
		  
			for (var i = 0; i < data.length; i++) {
			  var n = data[i];
		  
			  if (dubeeds.indexOf(n) == -1) {
				var dubeedIdx = data.indexOf(n, i + 1);
		  
				if (dubeedIdx >= 0) {
				  dubeeds.push(n);
				} else {
				  return n;
				}
			  }
			}
		},

		findNotDubeedValue3: data => {
			let array = data.concat();
			while (array.length > 0) {
			  var n = array.shift();
		  
			  var dubeedIdx = array.indexOf(n);
		  
			  if (dubeedIdx >= 0) {
				array.splice(dubeedIdx, 1);
			  } else {
				return n;
			  }
			}
		},

		findNotDubeedValue4: data => {
			const me = module.exports;
			let array = data.concat();
		  
			var n = array.shift();
			var dubeedIdx = array.indexOf(n);
		  
			if (dubeedIdx >= 0) {
			  array.splice(dubeedIdx, 1);
			  return me.dubeed.findNotDubeedValue4(array);
			} else {
			  return n;
			}
		}		
	},
	
	cadena: {
		calculate: a => {
			const up = a.match(/\(/g) || [];
			return up.length - (a.length - up.length);		
		},
				
		calculate2: a => {
			let i=0; count = 0, ch = "(", len = a.length;
			
			for (i=0; i<len; i++) if(a[i] === ch) count++;
			
			return count - (len - count);
		},
				
		calculateDuff: a => {
			let idx = a.length, it1 = len % 8, it2 = parseInt(len / 8, 10), count = 0, ch = "(";
			
			if (it1 > 0) {
				do {
					if (a[--idx] === ch) count++;
				} while (--it1);
			}
			
			do {
				if (a[--idx] === ch) count++;
				if (a[--idx] === ch) count++;
				if (a[--idx] === ch) count++;
				if (a[--idx] === ch) count++;
				if (a[--idx] === ch) count++;
				if (a[--idx] === ch) count++;
				if (a[--idx] === ch) count++;
				if (a[--idx] === ch) count++;
			} while (--it2);
						
			return count - (a.length - count);
		},
				
		_calculateSplit: a => {
			return a.split("(").length;
		},
				
		_replacing: a => {
			const up = a.replace(/\)/g, "").length;
			//const down = a.replace(/\(/g, "").length;
			
			return up - (a.length - up);
		}
	},
	
	present: {
		'for': data => {
			let result = 0, i=0, last = data.length - 1;
			const getArea = str => {
				//const dims = str.split('x');
				const x1 = str.indexOf("x"), x2 = str.indexOf("x", x1+1);
				const dim0 = str.substring(0, x1), dim1 = str.substring(x1+1, x2), dim2 = str.substr(x2+1);
				const areas = [dim0*dim1, dim1*dim2, dim2*dim0];
				let minArea = areas[0] < areas[1] ? areas[0] : areas[1];
				if (areas[2] < minArea) minArea = areas[2];
				//const minArea = areas[0] < areas[1] ? (areas[0] < areas[2] ? areas[0] : areas[2]) : (areas[1] < areas[2] ? areas[1] : areas[2]);
				//console.log("str = ", str, " - result = ", 2*(areas[0] + areas[1] + areas[2]) + minArea);
				return 2*areas[0] + 2*areas[1] + 2*areas[2] + minArea;
			};
			
			for(;;i++) {
				result += getArea(data[i]) + (last-i > i ? getArea(data[last-i]) : 0);
				if (last-i <= (i+1)) break;
			}
			
			//console.log("---FIN---");
			return result;
		},		
	
		'doWhile': data => {
			let result = 0, i=0, len = data.length;			
			const getArea = str => {
				//const dims = str.split('x');
				const x1 = str.indexOf("x"), x2 = str.indexOf("x", x1+1);
				const dim0 = str.substring(0, x1), dim1 = str.substring(x1+1, x2), dim2 = str.substr(x2+1);
				const areas = [dim0*dim1, dim1*dim2, dim2*dim0];
				let minArea = areas[0] < areas[1] ? areas[0] : areas[1];
				if (areas[2] < minArea) minArea = areas[2];
				//const minArea = areas[0] < areas[1] ? (areas[0] < areas[2] ? areas[0] : areas[2]) : (areas[1] < areas[2] ? areas[1] : areas[2]);
				//const minArea = dims[0]*dims[1] < dims[1]*dims[2] ? (dims[0]*dims[1] < dims[2]*dims[0] ? dims[0]*dims[1] : dims[2]*dims[0]) : (dims[1]*dims[2] < dims[2]*dims[0] ? dims[1]*dims[2] : dims[2]*dims[0]);
				//console.log("str = ", str, " - result = ", 2*(areas[0] + areas[1] + areas[2]) + minArea);
				return 2*(areas[0] + areas[1] + areas[2]) + minArea;
			};
			
			do {
				result += getArea(data[i++]) + (i<len ? getArea(data[i++]) : 0);
			} while(i<len);
			
			//console.log("---FIN---");
			return result;
		},
			
		'_doWhile': data => {
			let result = 0, i=0, mid = data.length/2;			
			const getArea = str => {
				const dims = str.split('x');
				const areas = [dims[0]*dims[1], dims[1]*dims[2], dims[2]*dims[0]];
				let minArea = areas[0] < areas[1] ? areas[0] : areas[1];
				if (areas[2] < minArea) minArea = areas[2];
				//const minArea = areas[0] < areas[1] ? (areas[0] < areas[2] ? areas[0] : areas[2]) : (areas[1] < areas[2] ? areas[1] : areas[2]);
				//const minArea = dims[0]*dims[1] < dims[1]*dims[2] ? (dims[0]*dims[1] < dims[2]*dims[0] ? dims[0]*dims[1] : dims[2]*dims[0]) : (dims[1]*dims[2] < dims[2]*dims[0] ? dims[1]*dims[2] : dims[2]*dims[0]);
				return 2*(areas[0] + areas[1] + areas[2]) + minArea;
			};
			
			do {
				result += getArea(data[i]) + (i+1 > mid ? 0 : getArea(data[mid+i]));			
			} while(++i < mid);
			
			return result;
		},
		
		'_forEach': data => {
			let result = 0;
			
			data.forEach(str => {
				const dims = str.split('x');
				const areas = [dims[0]*dims[1], dims[1]*dims[2], dims[2]*dims[0]];
				const minArea = areas[0] < areas[1] ? (areas[0] < areas[2] ? areas[0] : areas[2]) : (areas[1] < areas[2] ? areas[1] : areas[2]);
				result += 2*areas[0] + 2*areas[1] + 2*areas[2] + minArea;
			});
			
			return result;
		},

		'_doWhile': data => {
			let result = 0, i=0;
			
			do {				
				const dims = data[i].split('x');
				const areas = [dims[0]*dims[1], dims[1]*dims[2], dims[2]*dims[0]];
				const minArea = areas[0] < areas[1] ? (areas[0] < areas[2] ? areas[0] : areas[2]) : (areas[1] < areas[2] ? areas[1] : areas[2]);
				result += 2*areas[0] + 2*areas[1] + 2*areas[2] + minArea;				
			} while(data[++i]);
			
			return result;
		}	
		
	},
	
	negative: {
		_find: str => {
			//let i, count = 0;
			
			for (let i=0, count=0; i<str.length; i++) {
				if (str[i] === ')' && --count < 0) return (i + 1);
				else if (str[i] === '(') count++;
				//console.log("count = ", count);
			}
			
			return -1;
		},
		
		find: str => {
			let i=0, count = 0;
			
			//for (i=0; i<str.length; i=i+2) {
			do {
				/*if (str[i] === ")") {
					if (count == 0) return i+1;
					count--;
				} else count++;*/

				if (str[i] === ")") {
					if (--count < 0) return i+1;
				} else count++;							
				//if (count < 0) return i+1;

				/*if (str[i+1] === ")") {
					if (--count < 0) return i+2;
				} else count++;*/							
				
				i++;
				/*(str[i+1] === ")") 
					? count-- //((--count < 0) ? return (i+2) : false)
					: count++;

				if (count < 0) return (i+2);*/
				//if (str[i+1] === ")") {
				//	if (--count < 0) return (i+2);
				//} else {
				//	count++;
				//}				
			} while(true)
		}
	},
	
	'correct-path': {
		find: data => {
			const size = data.size, path = data.path;
			const lastX = size - 1, lastY = size - 1;
			let unknowns = [], coords = [{x: 0, y: 0, letter: ""}], result = "", xDiff, yDiff;
			
			for (let i=0; i<path.length; i++) {
				let x = coords[i].x, y = coords[i].y;
				
				switch (path[i]) {
					case "r": x++; break;
					case "l": x--; break;
					case "d": y++; break;
					case "u": y--; break;
					default: //?
						unknowns.push(i);
				}		

				coords[i+1] = {x: x, y: y, letter: path[i]};
			}
			
			xDiff = lastX - coords[coords.length-1].x;
			yDiff = lastY - coords[coords.length-1].y;
			
			//console.log("xDiff: ", xDiff);
			//console.log("yDiff: ", yDiff);
			
			/*
			N+N-xDiff=?;
			2N=?+xDiff;
			N=(?+xDiff)/2;
			(N => countMax)
			*/
			
			if (xDiff != 0) {
				let countMax = (unknowns.length + Math.abs(xDiff)) / 2;
				let letterMax = (xDiff > 0) ? "r" : "l", //Si la diferencia es positiva, falta ir más a la derecha. Si es negativa, falta ir más a la izquierda
					letterMin = (xDiff > 0) ? "l" : "r";
				
				for (let i=0; i<unknowns.length; i++) {
					const iPath = unknowns[i], iCoord = iPath + 1;
					let letter = (countMax > 0) ? letterMax : letterMin;
					
					if (letter == "r" && (coords[iCoord-1].x == lastX || coords[iCoord-1].letter == "l")) {
						letter = "l";
					} else if (letter == "l" && (coords[iCoord-1].x == 0 || coords[iCoord-1].letter == "r")) {
						letter = "r";
					}
					
					if (letter == letterMax) countMax--;
					
					coords[iCoord].letter = letter;
					coords[iCoord].x = (letter == "r") ? coords[iCoord-1].x + 1 : coords[iCoord-1].x - 1;
				}
			} else if (yDiff != 0) {
				let countMax = (unknowns.length + Math.abs(yDiff)) / 2;
				let letterMax = (yDiff > 0) ? "d" : "u", //Si la diferencia es positiva, falta ir más abajo. Si es negativa, falta ir más arriba
					letterMin = (yDiff > 0) ? "u" : "d";				
				
				for (let i=0; i<unknowns.length; i++) {
					const iPath = unknowns[i], iCoord = iPath + 1;
					let letter = (countMax > 0) ? letterMax : letterMin;
					
					if (letter == "d" && (coords[iCoord-1].y == lastY || coords[iCoord-1].letter == "u")) {
						//console.log("iCoord: ", iCoord, " - coords: ", coords);
						letter = "u";
					} else if (letter == "u" && (coords[iCoord-1].y == 0 || coords[iCoord-1].letter == "d")) {
						letter = "d";
					}
					
					if (letter == letterMax) countMax--;
					
					coords[iCoord].letter = letter;
					coords[iCoord].y = (letter == "d") ? coords[iCoord-1].y + 1 : coords[iCoord-1].y - 1;
				}
			}
			
			coords.forEach(it => {
				result += it.letter;
			});
			
			return result;
		}
	}
};
