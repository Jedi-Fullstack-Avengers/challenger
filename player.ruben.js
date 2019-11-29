module.exports = {
  dubeed: {
    findNotDubeedValue: arrayToFilter => {
      let arrayFiltered = arrayToFilter.concat();
      let element = "";

      const removeElement = (array, element) => {
        const index = array.indexOf(element);
        if (index > -1) {
          array.splice(index, 1);
          return array;
        }
        return element;
      };

      while (typeof arrayFiltered === "object") {
        element = arrayFiltered.shift();
        arrayFiltered = removeElement(arrayFiltered, element);
      }

      return element;
    }
  },

  cadena: {
    calculate3: a => {
      const parsed = Array.from(a);
      return parsed.reduce(
        (acc, curr) => (curr === ")" ? acc + -1 : acc + 1),
        0
      );
    }
  },

  delivery: {
    calculate: string => {
      let housesVisited = 1;
      const visitedArray = [];
      let iIndex = 0;
      let jIndex = 0;
      visitedArray[iIndex] = [];
      visitedArray[iIndex][jIndex] = 1;

      for (let index = 0; index < string.length; index++) {
        const element = string[index];

        if (element === "v") {
          iIndex--;
        } else if (element === "^") {
          iIndex++;
        } else if (element === ">") {
          jIndex++;
        } else {
          jIndex--;
        }

        if (visitedArray[iIndex] === undefined) {
          visitedArray[iIndex] = [];
          housesVisited++;
          visitedArray[iIndex][jIndex] = 1;
        } else if (visitedArray[iIndex][jIndex] !== 1) {
          housesVisited++;
          visitedArray[iIndex][jIndex] = 1;
        }
      }
      return housesVisited;
    }
  },

  negative: {
    position: entrada => {
      const len = entrada.length;
      let plus = 0;
      let i = 0;
      while (len > i) {
        if (entrada[i] == "(") plus++;
        i++;
        if (plus + plus - i < 0) return i;
      }
    }
  },

  niceString: {
    funcional2: entrada => {
      return entrada.filter(
        element =>
          /([a-z])\1/.exec(element) !== null &&
          /(.*)[aeiou](.*)[aeiou](.*)[aeiou](.*)/.exec(element) !== null &&
          /(ab)|(cd)|(pq)|(xy)/.exec(element) === null
      ).length;
    }
  },

  present: {
    functional: input => {
      return input.reduce((acc, curr) => {
        const m = /(\d+)x(\d+)x(\d+)/.exec(curr);
        const a = m[1] * m[2];
        const b = m[2] * m[3];
        const c = m[3] * m[1];
        return acc + a + a + b + b + c + c + Math.min(a, b, c);
      }, 0);
    },
    noFuncionalForRecalentao: input => {
      let acc = 0;
      for (let i = 0; i < input.length; i++) {
        const x1 = input[i].indexOf("x"),
          x2 = input[i].indexOf("x", x1 + 1);
        const m1 = input[i].substring(0, x1),
          m2 = input[i].substring(x1 + 1, x2),
          m3 = input[i].substr(x2 + 1);
        const a = m1 * m2;
        const b = m2 * m3;
        const c = m3 * m1;
        acc += a + a + b + b + c + c + Math.min(a, b, c);
      }
      return acc;
    }
  }
};
