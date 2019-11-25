module.exports = {
  dubeed: {
	findNotDubeedValue: data => {
		for (var i = data.length-1; i >=0; i--) {
			var repe = false;
			for(var j=0; j < data.length && repe == false; j++) {
				i != j && data[j] === data[i] ? repe = true : repe = false;
			}
			if(!repe) return data[i];
		}
	}
  },

  cadena: {
	  calculate: output => {
		var result = 0;
		for(var i=output.length-1; i >= 0; i--) { if('('===output[i])result++}
		return result - (output.length-result);
	}
  }, 
  
  negative: {
		indice : output => {
			for(let i=0,n = 0, p = 0; ;i++) {
				')' == output[i]?n++:p++;
				if(p-n < 0) return i+1;
			}
		}
  },
  
  present: {
	  area: o => {
		let r=0,le=o.length-1;
		do {
			let s = o[le].split('x'),l = s[0], w = s[1], h = s[2], lw = l*w, wh=w*h, hl = h*l, m=0;
			m = lw < wh ? (lw < hl ? lw : hl) : (wh < hl? wh: hl);				
			r += (2*lw) + (2*wh) + (2*hl) + m;
			if(le == 0) return r;
			le--;
		}while(true);
	  }
  }
    
};
