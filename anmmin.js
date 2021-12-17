function anmmi(obj, pes, bg,objs,fun) {
	clearInterval(obj.timer);
	var t=0;
	obj.timer = setInterval(function() {
		bg < 1 ? t = 0.02 : t = -0.02;
		var seep = (pes - obj.offsetLeft) / 10;
		seep = seep > 0 ? Math.ceil(seep) : Math.floor(seep)
		if (obj.offsetLeft == pes) {
			clearInterval(obj.timer);
			if(objs){
				objs();
			}
		}
		bg+=t;	
		obj.style.opacity = bg;
		obj.style.left = obj.offsetLeft + seep + 'px';
	}, 10)
}
