tsParticles.load("tsparticles", {
	backgroundMask: {
		enable: true,
		cover: {
			value: {
				r: 0,
				g: 0,
				b: 0
			}
		}
	},
	background: {
		image: "url('https://images.unsplash.com/photo-1626080308314-d7868286cce2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80')",
		size: "100% 100%",
		repeat: "no-repeat"
	},
	fullScreen: {
		enable: true,
		zIndex: -1
	},
	particles: {
		color: {
			value: ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"],
			animation: {
				enable: true,
				speed: 30
			}
		},
		move: {
			direction: "bottom",
			enable: true,
			outModes: {
				default: "out"
			},
			size: true,
			speed: {
				min: 1,
				max: 3
			}
		},
		number: {
			value: 300,
			density: {
				enable: true,
				area: 800
			}
		},
		opacity: {
			value: 1,
			animation: {
				enable: false,
				startValue: "max",
				destroy: "min",
				speed: 0.3,
				sync: true
			}
		},
		rotate: {
			value: {
				min: 0,
				max: 360
			},
			direction: "random",
			move: true,
			animation: {
				enable: true,
				speed: 60
			}
		},
		tilt: {
			direction: "random",
			enable: true,
			move: true,
			value: {
				min: 0,
				max: 360
			},
			animation: {
				enable: true,
				speed: 60
			}
		},
		shape: {
			type: ["circle", "square", "polygon"],
			options: {
				polygon: [{
						sides: 5
					},
					{
						sides: 6
					}
				]
			}
		},
		size: {
			value: {
				min: 3,
				max: 5
			}
		},
		roll: {
			darken: {
				enable: true,
				value: 30
			},
			enlighten: {
				enable: true,
				value: 30
			},
			enable: true,
			speed: {
				min: 15,
				max: 25
			}
		},
		wobble: {
			distance: 30,
			enable: true,
			move: true,
			speed: {
				min: -15,
				max: 15
			}
		}
	}
});
// 背景主题隐藏
var h = document.querySelectorAll('h1');
var p = document.querySelectorAll('p');
var bttn = document.querySelectorAll('button');
var img = document.querySelector('.head');
var headimg=document.querySelector('.head-left');
document.addEventListener('scroll', function() {
	if (window.pageYOffset > 600) {
		h[0].innerHTML = '';
		p[0].style.display = "none";
	} else {
		h[0].innerHTML = 'Boke';
		p[0].style.display = "inline-block"	
	}
	window.pageYOffset>600&& window.pageYOffset<1900? bttn[0].style.display = 'none':bttn[0].style.display = 'inline-block';
})
// lis隐藏控制
document.addEventListener('scroll',function(){
	if(window.pageYOffset<700){
		bttn[0].style.display = 'inline-block';
	}else if(window.pageYOffset>600&&window.pageYOffset<1900){
		bttn[0].style.display = 'none'
	}else if(window.pageYOffset>1900&&window.pageYOffset<2500){
		bttn[0].style.display = 'inline-block';
	}else if(window.pageYOffset>3300){
		bttn[0].style.display = 'none'
	}
})
document.addEventListener('scroll', function() {
	if (window.pageYOffset < 910) {
		img.style.opacity = '1';

	} else if(window.pageYOffset>910&&window.pageYOffset<1500){
		img.style.opacity = '0.8';
		
	}else{		
		img.style.opacity = '0.8';
	}
})
var typed = new Typed("#titles-zhushi", {
	strings: ['I like HTML ❤❤ ❤❤', 'good good study,day day up！！'],
	startDelay: 0,
	typeSpeed: 100,
	backSpeed: 100,
	loop: true,
	showCursor: true,
	shuffle: false
});
// 列表点击事件


//列表倒计时
function countDown(time) {
	var nowTime = +new Date(); //返回的是当前时间总的毫秒数
	var inputTime = +new Date(time); //返回的是用户输入时间总的毫秒数
	var times = (inputTime - nowTime) / 1000; // times是剩余时间总的秒数
	var d = parseInt(times / 60 / 60 / 24); //天
	d = d < 10 ? '0' + d : d;
	var h = parseInt(times / 60 / 60 % 24); //时
	h = h < 10 ? '0' + h : h;
	var m = parseInt(times / 60 % 60); //分
	m = m < 10 ? '0' + m : m;
	var s = parseInt(times % 60); //当前的秒
	s = s < 10 ? '0' + s : s;
	return d + '天' + h + '时' + m + '分' + s + '秒';
}

function stopTextColor() {
	clearInterval(timeer);
}

function cos() {
	var datatime = countDown('2023-4-6 18:00:00');
	time = document.getElementById("time");
	time.innerHTML = datatime;
}
var timeer = window.setInterval("cos()", 1000);

// 轮播栏底部按钮
window.addEventListener('load', function() {
	var bg = document.querySelector('.bg-bottom').querySelectorAll('div');
	var ul = document.querySelector('.them-body').querySelector('ul');
	var first=ul.children[0].cloneNode(true)
	ul.appendChild(first);
	var MyBoke = document.querySelector('.MyBoke-left');
	var sql = document.querySelector('.them-body');
	var btn_ri = document.querySelector('.them-body').querySelectorAll('button');
	var sql_ri = document.querySelectorAll('.btn-img');
	var btnimg = document.querySelectorAll('.btn-imgs');
	var ulwidth = -MyBoke.offsetWidth;
	var num = 0,
		ind = 0,
		index,timer;
	// 轮播图右侧按钮滚动
	for (var i = 0; i < sql_ri.length; i++) {
		btn_ri[i].addEventListener('click', function() {
			num++;
			num == 4 ? num = 0 : num;
			var ulwidth = -MyBoke.offsetWidth;
			var seep = num * ulwidth;
			anmmi(ul, seep, 0);
			ind++;
			ind == 4 ? ind = 0 : ind;
			for (var j = 0; j < bg.length; j++) {
				bg[j].style.border = "1px solid";
			}
			bg[ind].style.border = "3px solid";
		})
	
	}
	// 轮播栏底部
	for (var i = 0; i < bg.length; i++) {
		bg[i].addEventListener('click', function() {
			for (var j = 0; j < bg.length; j++) {
				bg[j].style.border = "1px solid";
			}
			this.style.border = "3px solid";	
			index = this.getAttribute('index');
			num = index;
			ind=index;
			anmmi(ul, index * ulwidth, 0)
			
		})
	}
	// 轮播图右侧箭头变化
	for (var i = 0; i < sql_ri.length; i++) {
		
		sql_ri[i].addEventListener('mouseleave', function() {
			for (var j = 0; j < sql_ri.length; j++) {
				btnimg[j].src = "images/右箭头.png";
			}
			timer=setInterval(function(){
				for(var i=0;i<sql_ri.length;i++){
					btn_ri[i].click();
				}	
			},3000)
		})
		sql_ri[i].addEventListener('mouseenter', function() {
			for (var j = 0; j < sql_ri.length; j++) {
				btnimg[j].src = "images/向右箭头2.png";
			}
			clearInterval(timer);
		})
	}

	// 轮播图右侧按钮隐藏
	sql.addEventListener('mouseover', function() {
		for (var i = 0; i < sql_ri.length; i++) {
			btn_ri[i].style.opacity = '1';
		}
	})
	sql.addEventListener('mouseout', function() {
		for (var i = 0; i < sql_ri.length; i++) {
			btn_ri[i].style.opacity = '0.2';
		}
	})
	// 设置轮播图自动播放
	timer=setInterval(function(){
		for(var i=0;i<sql_ri.length;i++){
			btn_ri[i].click();
		}	
	},5000)
	
	//背景更换
	var body=document.body;
	var color=document.querySelector('.them-bottom-color').querySelectorAll('div');
	var them=document.querySelector('.them');
	var thembody=document.querySelector('.them-body');
	var thembottom=document.querySelector('.them-bottom');
	var bottombodytop=document.querySelector('.bottom-body-top');
	var bottombody=document.querySelector('.bottom-body');
	var bglis=document.querySelector('.bg-lis');
	for(var i=0;i<color.length;i++){
		color[i].addEventListener('click',function(){
			console.log(i)
			for(var j=0;j<color.length;j++){
				// img为head标签
				img.style.backgroundColor='';
				img.style.backgroundImage='';
				//bglis为列表目录
				bglis.style.backgroundColor='';
				bglis.style.backgroundImage='';
				// them为轮播图主体标签
				them.style.backgroundColor='';
				them.style.backgroundImage='';
				//thembody为轮播图主页
				thembody.style.backgroundColor='';
				thembody.style.backgroundImage='';
				// thembottom为轮播图底部按钮
				thembottom.style.backgroundColor='';
				thembottom.style.backgroundImage='';
				// bottombodytop为间隔节点
				bottombodytop.style.backgroundColor='';
				bottombodytop.style.backgroundImage='';
				// bottombody为Boke页面
				bottombody.style.backgroundColor='';
				bottombody.style.backgroundImage='';
			}
			// img为head标签
			img.style.backgroundColor = this. getAttribute( 'color');
			img.style.backgroundImage=this. getAttribute( 'color');
			// them为轮播图主体标签
			them.style.backgroundColor = this. getAttribute( 'color');
			them.style.backgroundImage=this. getAttribute( 'color');
			//thembody为轮播图主页
			thembody.style.backgroundColor = this. getAttribute( 'color');
			thembody.style.backgroundImage=this. getAttribute( 'color');
			// thembottom为轮播图底部按钮
			thembottom.style.backgroundColor = this. getAttribute( 'color');
			thembottom.style.backgroundImage=this. getAttribute( 'color');
			// bottombodytop为间隔节点
			bottombodytop.style.backgroundColor = this. getAttribute( 'color');
			bottombodytop.style.backgroundImage=this. getAttribute( 'color');
			// bottombody为Boke页面
			bottombody.style.backgroundColor = this. getAttribute( 'color');
			bottombody.style.backgroundImage=this. getAttribute( 'color');
			//bglis为列表目录
			bglis.style.backgroundColor = this. getAttribute( 'color');
			bglis.style.backgroundImage=this. getAttribute( 'color');
		})
	}
})


