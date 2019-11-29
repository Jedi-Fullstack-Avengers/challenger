module.exports = {
  dubeed: {
    findNotDubeedValue1: arrayTest => {
      let copy = arrayTest.concat();
      copy.sort();

      for (var i = 0; i < copy.length; i += 2) {
        if (copy[i] !== copy[i + 1]) return copy[i];
      }

      return null;
    },

    findNotDubeedValue2: arrayTest => {
      let copy = arrayTest.concat();
      return parseInt(
        copy
          .sort()
          .toString()
          .replace(/\b(\d+)(?:\D+\1\b)+/g, "")
          .match(/(\d+)/g)[0]
      );
    }
  },

  cadena: {
    calculate: a => {
      const t = a.match(/\(/g).length;
      return t - (a.length - t);
    },
    calculate2: a => {
      var c = a[0] == "(" ? 1 : 0;
      var l = a.length;

      while (--l) {
        if (a[l] === "(") c++;
      }

      return c - (a.length - c);
    }
  },

  negative: {
    negative: a => {
      var c1 = 0;
      var c2 = 0;
      var i = 0;
      var l = a.length;

      while (c1 - c2 >= 0 && i < l) {
        a[i] === "(" ? c1++ : c2++;
        i++;
      }

      return i;
    }
  },

  present: {
    present1: a => {
      let total = 0;
      for (let i = 0, len = a.length; i < len; i++) {
        const lwh = a[i].split("x"),
          a1 = lwh[0] * lwh[1],
          a2 = lwh[1] * lwh[2],
          a3 = lwh[2] * lwh[0];
        total += 2 * (a1 + a2 + a3) + Math.min(a1, a2, a3);
      }
      return total;
    },
    present2: a => {
      let total = 0;
      for (let i = 0, len = a.length; i < len; i++) {
        const lwh = a[i].match(/\d+/g),
          a1 = lwh[0] * lwh[1],
          a2 = lwh[1] * lwh[2],
          a3 = lwh[2] * lwh[0];
        total += 2 * (a1 + a2 + a3) + Math.min(a1, a2, a3);
      }
      return total;
    },
    present3: a => {
      let total = 0;
      for (let i = 0, len = a.length; i < len; i++) {
        const lwh = /(\d+)x(\d+)x(\d+)/.exec(a[i]),
          a1 = lwh[1] * lwh[2],
          a2 = lwh[2] * lwh[3],
          a3 = lwh[3] * lwh[1];
        total += 2 * (a1 + a2 + a3) + Math.min(a1, a2, a3);
      }
      return total;
    }
  },

  delivery: {
    directions: s => {
      const route = ["0,0"];
      let routeX = 0;
      let routeY = 0;
      const directionValues = {
        "^": {
          x: 0,
          y: -1
        },
        ">": {
          x: 1,
          y: 0
        },
        v: {
          x: 0,
          y: 1
        },
        "<": {
          x: -1,
          y: 0
        }
      };

      for (let i = 0; i < s.length; i++) {
        const direction = s[i];
        routeX += directionValues[direction].x;
        routeY += directionValues[direction].y;
        route.push(routeX + "," + routeY);
      }

      return Array.from(new Set(route)).length;
    },

    directions2: s => {
      const route = ["0,0"];
      let routeX = 0;
      let routeY = 0;

      for (let i = 0; i < s.length; i++) {
        const direction = s[i];

        if (direction === "^") routeY--;
        else if (direction === ">") routeX++;
        else if (direction === "v") routeY++;
        else routeX--;

        route.push(routeX + "," + routeY);
      }

      return Array.from(new Set(route)).length;
    }
  },
  niceString: {
    niceString: b => {
      let a = 0;
      for (let c = 0; c < b.length; c++) {
        const d = b[c],
          e =
            -1 < d.indexOf("ab") ||
            -1 < d.indexOf("cd") ||
            -1 < d.indexOf("pq") ||
            -1 < d.indexOf("xy");
        if (!e) {
          let b = 0,
            c = "",
            e = !1;
          for (let f = 0; f < d.length; f++) {
            const g = d[f];
            if (
              (e || ((e = g === c), (c = g)),
              3 > b &&
                ("a" === g ||
                  "e" === g ||
                  "i" === g ||
                  "o" === g ||
                  "u" === g) &&
                b++,
              e && 3 <= b)
            ) {
              a++;
              break;
            }
          }
        }
      }
      return a;
    }
  }
};
