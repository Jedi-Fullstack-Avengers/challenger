module.exports = {
  dubeed: {
    findNotDubeedValueXOR: a => a.reduce((acc, curr) => (acc ^= curr)),
    findNotDubeedValueXORFor: a => {
      let acc = 0;
      for (let i = 0; i < a.length; i++) acc ^= a[i];
      return acc;
    },
	findNotDubeedValueXORFor2: a => {
	  var acc = 0;
      for (var i = 0; i < a.length; i++) acc ^= a[i];
      return acc;
	}
  },
  cadena: {
    calculate: a => {
      const s = new String(a);
      const initialLength = s.length;
      const onlyMinus = s.replace(/\(/g, "");
      const finalLengthMin = onlyMinus.length;
      const pluses = initialLength - finalLengthMin;
      return pluses - finalLengthMin;
    }
  }
};
