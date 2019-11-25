module.exports = {
	generate: (size, cad) => {
		let result = "", answer;
		
		if (size && cad) {
			result = cad;
			answer = "¿?";
		} else {
			size = 5;
			result = "???rrurdr?";
			answer = "dddrrurdrd";			
		}
				
		console.log("Generated size of " + size + " cells with path " + result + " and answer is " + answer + "...");	
		return {size: size, path: result};
	}
};

/*

X X X X X
X X X X X
X X X X X
X X X X X
X X X X X

-----

Input: "???rrurdr?"
Output: dddrrurdrd
?
?
?
1,0
2,0
2,-1
3,-1
3,0
4,0
?

----

Input: "drdr??rrddd?"
Output: drdruurrdddd
0,1
1,1
1,2
2,2
?
?
3,2
4,2
4,3
4,4
4,5
?

----

Input: "dddd????"
Output: ddddrrrr


*/