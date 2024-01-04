function core(obj) {
	var divid = obj.name
	var shuru = document.getElementById(divid).getElementsByClassName('shuru')[0].value;
	shuru = Number(shuru);
	var fenshu = document.getElementById(divid).getElementsByClassName('fenshu')[0];
	var guocheng = fenshu.getAttribute('guocheng')
	var zongfen = fenshu.getAttribute('data');
	xzongfen = Number(zongfen)+shuru;
	if (zongfen==0) {
		fenshu.innerText = "得分："+shuru+"="+shuru;
		guocheng = shuru;
	}
	else {
		fenshu.innerText = "得分："+xzongfen+"="+guocheng+"+"+shuru;
		guocheng = guocheng+"+"+shuru;
	}
	fenshu.setAttribute('guocheng',guocheng);
	fenshu.setAttribute('data',xzongfen);
}

function xuanshou() {
	var jishu = document.getElementsByClassName("jishu")[0].innerText;
	var jishu = Number(jishu)+1;
	var div = document.getElementsByClassName('core')[0];
	var xuhao = document.createElement('span');
	xuhao.innerText = "姓名"+jishu+"：";
	xuhao.className = 'xuhao';
	var xm = document.createElement('input');
	xm.type = "text";
	xm.className = 'xm';
	var fenshu = document.createElement('span');
	fenshu.innerText = "得分：0";
	fenshu.className = 'fenshu';
	fenshu.setAttribute('data','0')
	fenshu.setAttribute('guocheng','')
	var shuru = document.createElement('input');
	shuru.type = "text";
	shuru.className = 'shuru';
	var jiafen = document.createElement('input');
	jiafen.type = "button";
	jiafen.className = 'jiafen';
	jiafen.value = '加分';
	jiafen.name = 'tm'+jishu;
	jiafen.setAttribute('onclick','core(this);')
	var div2 = document.createElement('div');
	div2.className = 'tm';
	div2.id = 'tm'+jishu
	div2.appendChild(xuhao);
	div2.appendChild(xm);
	div2.appendChild(fenshu);
	div2.appendChild(shuru);
	div2.appendChild(jiafen);
	div.appendChild(div2);
	document.getElementsByClassName("jishu")[0].innerText = jishu;
}

function del() {
	var core = document.getElementsByClassName('core')[0];
	var jishu = document.getElementsByClassName("jishu")[0].innerText;
	var deldiv = document.getElementById("tm"+jishu);
	core.removeChild(deldiv);
	document.getElementsByClassName("jishu")[0].innerText = Number(jishu)-1;
}