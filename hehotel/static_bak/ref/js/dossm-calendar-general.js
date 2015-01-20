var _calStr = isChinese ? '' : '-en';
document.write('<iframe id="CalFrame" name="CalFrame" allowTransparency="true" \
	frameborder="0" src="/public/calendar' + _calStr + '.html" \
	style="display:none;position:absolute;z-index:999"><\/iframe>');
function showCalendar(sImg,bOpenBound,sFld1,sFld2,sCallback){
	var fld1,fld2;
	var cf=document.getElementById("CalFrame");
	var wcf=window.frames.CalFrame;
	var oImg=document.getElementById(sImg);
	if(!oImg) {
		alert("控制对象不存在！");
		return;
	}
	fld1=document.getElementById(sFld1);
	if(sFld2) {
		fld2=document.getElementById(sFld2);				
		if(!fld2) {
			alert("参考控件不存在！");
			return;
		}
		if(fld2.tagName!="INPUT"||fld2.type!="text") {
			alert("参考控件类型错误！");
			return;
		}
		var dateFld1 = new Date(fld2.value.replace(/-/g, '/')),
			dateFld2 = new Date(fld1.value.replace(/-/g, '/'));
		dateFld1.setDate(dateFld1.getDate() + 1);
		if(dateFld2.getTime() < dateFld1.getTime()) {
			fld1.value = dateFld1.getFullYear() + '-' + (dateFld1.getMonth() + 1) + '-' + dateFld1.getDate();
		}
		wcf.li = 1;
	} else {
		wcf.li = 0;
	}
	if(!wcf.bCalLoaded) {
		alert("日历未成功装载！请刷新页面！");
		return;
	}
	if(cf.style.display=="block") {
		cf.style.display="none";
		return;
	}
	
	var eT=0,eL=0,p=oImg;
	var sT=document.documentElement.scrollTop,
		sL=document.documentElement.scrollLeft;
	//var eH=oImg.height,eW=oImg.width;
	var eH=20,
		eW=20;
	while(p&&p.tagName!="BODY") {
		eT += p.offsetTop;
		eL += p.offsetLeft;
		p = p.offsetParent;
	}
	cf.style.top = parseInt((document.documentElement.clientHeight-(eT-sT)-eH>=cf.height)?eT+eH:eT-cf.height)+"px";
	cf.style.left = parseInt((document.documentElement.clientWidth-(eL-sL)>=cf.width)?eL:eL+eW-cf.width)+"px";
	cf.style.display = "block";
	wcf.openbound = bOpenBound;
	wcf.fld1 = fld1;
	wcf.fld2 = fld2;
	wcf.img = oImg;
	wcf.callback = sCallback;
	wcf.initCalendar();
}
function hideCalendar(){
	var cf = document.getElementById("CalFrame");
	cf.style.display = "none";
}
//客房详情日历调用
function setCheckInDate(){
	showCalendar('room-icon-check-out',false,'room-book-check-out','room-book-check-in');
}
//会员预订日历调用
function setRoomCheckInDate(){
	showCalendar('icon-check-out',false,'book-check-out','book-check-in');
}

// 制定会议及宴会计划
function setMeetCheckInDate() {
	showCalendar( 'order-end-date', false, 'order-check-out', 'order-check-in' );
}

jQuery(document).ready(function($) {
	if ($('#book-check-in').length > 0) {
		$('#book-check-in').val( plusDate(1) );
		$('#book-check-out').val( plusDate(2) );
	};
	if ($('#room-book-check-in').length > 0) {
		$('#room-book-check-in').val( plusDate(1) );
		$('#room-book-check-out').val( plusDate(2) );
	};
	
	$('#order-check-in , #order-check-out').each(function (){
		if ($('#order-check-in').length > 0) {
			$('#order-check-in').val( plusDate(0) );
			$('#order-check-out').val( plusDate(1) );
		};
	});
});
