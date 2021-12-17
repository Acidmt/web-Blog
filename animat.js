var btn = document.getElementsByClassName('btn1');
var lis = document.getElementById('liss');
var bg= document.querySelector('.bg-bottom').querySelectorAll('div');
var ul=document.querySelector('.them-body').querySelector('ul');
// 目录移动步长
var bodywidth=(document.body.offsetWidth-300)+(Math.ceil(document.body.offsetWidth*0.02));
function active_l_r(obj, pes, bg, fun, dis) {
	clearInterval(obj.timer);
	var t = 0.046;
	obj.timer = setInterval(function() {
		var seep = 25;
		if (obj.offsetLeft > pes) {
			clearInterval(obj.timer);
			if (fun) {
				fun();
			}
		} else {
			bg += t;
			obj.style.left = obj.offsetLeft + seep + 'px';
			obj.style.opacity = bg;
		}
	},1);
}
// 退步
function active_l_l(obj, pes, bg, fun) {
	clearInterval(obj.timer)
	var t = -0.046;
	obj.timer = setInterval(function() {
		var seep = -20;
		if (obj.offsetLeft < pes) {	
			clearInterval(obj.timer);		
			obj.style.display = 'none';
			if (fun) {
				fun();
			}
		} else {
			bg += t;
			obj.style.left = obj.offsetLeft + seep + 'px';
			obj.style.opacity = bg;
		}
	},1);
}
// 列表移动
lis.style.display = 'block';
var lissep=lis.offsetLeft;
lis.style.display = 'none';
for (var i = 0; i < btn.length; i++) {
	btn[i].addEventListener('mouseenter', function() {
		lis.style.display = 'block';		
		active_l_r(lis, bodywidth, 0, function() {
			document.addEventListener('mouseup', function() {		
				active_l_l(lis, lissep, 1);
			})
		})
	});
}
// for(var i=0;i<btn.length;i++){
// 	btn[i].onmouseover=function(){
// 		lis.style.display='block';
// 	}
// }
// document.addEventListener('click', function() {
// 	lis.style.display = 'none';
// })
