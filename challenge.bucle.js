module.exports = {
	generate: len => {
		let result = [];
		let answer = 0;
		
		for (let i=0; i<len; i++) {
			result[i] = i+1;
			answer += result[i];
		}
		
		console.log("Generated " + result.length + " elements and answer is " + answer + "...");	
		return result;		
	}
};
