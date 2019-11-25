
const fs = require('fs');
const chalk = require('chalk');
const { performance } = require('perf_hooks');

const challengeName = process.argv[2]; //Argument vector:['/usr/bin/node', '/some/path/to/example.js', '-a', '-b', '-c']

if (!challengeName) {
	console.error("Challenge name expected!");
	process.exit();
}

/*process.stdout.write("Hello, World!\n");
process.stdout.write("I am here!\n");
//process.stdout.clearScreenDown();
process.stdout.cursorTo(0, 0);
process.stdout.write("FINAL");
process.stdout.write("UNO\n");
process.stdout.write("DOS");
//console.log("\x1b[<1>A");
process.stdout.cursorTo(0, 0);
process.stdout.clearScreenDown();
process.stdin.question("Your name?");
//process.stdout.write("X");

//process.stdout.clearLine();
//process.stdout.cursorTo(0);
//process.stdout.write("Bye, World!");
//process.stdout.write("\n"); // end the line
process.exit();
*/

//Cargar jugadores
const players = {};
const plPattern = 'player.';

fs.readdirSync('./').forEach(filename => {
	if (filename.indexOf(plPattern) == 0) {		
		const plName = filename.substr(plPattern.length).replace(/\.js/i, '');
		
		players[plName] = require('./' + filename);
	}
});

const msgLight = chalk.yellow;
const msgTitle = chalk.yellowBright;
//const warning = chalk.keyword('orange');

console.log(msgTitle("\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::"));
console.log(msgTitle("RUNNING " + challengeName.toUpperCase() + " CHALLENGE!"));
console.log(msgTitle("Players: "), Object.keys(players));
console.log(msgTitle("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::\n"));

const challenge = require('./challenge.' + challengeName + '.js');
const challengeParams = process.argv.slice(3);
//const [,,, ...challengeParams] = process.argv; //this is the same as above
const testingData = challenge.generate(...challengeParams);
const ranking = [];

const testPlayer = playerName => {
	const playerChallenge = players[playerName][challengeName];
	const solutions = playerChallenge ? Object.keys(playerChallenge) : [];
	
	if (solutions.length > 0) {
		solutions.forEach(fnName => {
			if (fnName.indexOf("_") != 0) { //Las funciones que empiezan por "_" no se ejecutan
				const {result, timing} = testFunction(playerChallenge[fnName]);
				const fullName = playerName + "." + fnName;
				const fillPoints = Array(30 - fullName.length).fill(".").join("");
				let ranked = false;
				
				console.log(fullName + fillPoints + " returned " + msgLight(result) + " in " + timing + " ms on average.");
				
				for (let i = 0; i < ranking.length; i++) {
					if (timing < ranking[i].timing) {
						ranking.splice(i, 0, {name: fullName, timing: timing});
						ranked = true;
						break;
					}
				}
				
				if (!ranked) ranking.push({name: fullName, timing: timing});
			}
		});	
	} else {
		console.log(playerName + " does not have solutions yet :(");
	}
};

const testFunction = fn => {
	const attempts = 1, avg = 0;
	let t0, t1, timing = 0, result;
	
	//Se ejecuta la misma función attempts+1 veces, pero el primer intento no se registra porque suele tardar más
	for (let i = 0; i <= attempts; i++) {
		t0 = performance.now();
		result = fn(testingData);
		t1 = performance.now();
				
		//if (i > 0) {
			timing += t1 - t0;
		//}
	}
	
	return {
		result: result,
		timing: (timing / attempts)
	};
};

const showRanking = () => {
	if (ranking.length > 1) {
		console.log(msgLight("\nTIME RANKING:"));
		for (let i = 0; i < ranking.length; i++) {
			const fillPoints = Array(30 - ranking[i].name.length).fill(".").join("");
			
			console.log(i+1 + ") " + ranking[i].name + fillPoints + " with " + ranking[i].timing + " ms");
		}
	}
};

console.log(msgLight("\nPLAYER RESULTS:"));
Object.keys(players).forEach(name => testPlayer(name));
//testPlayer("ruben");
//testPlayer("moni");
//testPlayer("raul");
//testPlayer("dani");

showRanking();