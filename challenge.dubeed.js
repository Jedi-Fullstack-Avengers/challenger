const R = require("ramda");

module.exports = {
  generate: len => {
    const me = module.exports;
    const generateArrayTest = R.compose(
      me.shuffle,
      me.generateArray
    );
    const arrayTest = generateArrayTest(Number(len));

    console.log("Generated " + arrayTest.length + " elements. ");
    return arrayTest;
  },

  generateArray: numberOfElements => {
    let array = [];

    if (numberOfElements % 2 != 0) numberOfElements++;

    const midLen = numberOfElements / 2;

    for (let i = 0; i < midLen; i++) {
      array[i] = i;
      array[midLen + i] = i;
    }

    const removed = array.splice(
      Math.floor(Math.random() * numberOfElements),
      1
    );

    console.log("The answer is: ", removed[0]);
    return array;
  },

  shuffle: a => {
    let arrayToShuffle = a.concat();
    for (let i = arrayToShuffle.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayToShuffle[i], arrayToShuffle[j]] = [
        arrayToShuffle[j],
        arrayToShuffle[i]
      ];
    }
    //console.log("Not dubbed position: " + arrayToShuffle.indexOf(a[a.length-1]));
    //console.log("shuffle result: ", arrayToShuffle);
    return arrayToShuffle;
  }
};
