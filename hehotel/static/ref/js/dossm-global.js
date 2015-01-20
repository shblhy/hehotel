/*!
 * Dossm Global
 * Copyright 2012 Wintour,Inc. 
 * Description : 站点公共方法及调用方式(包含会员登录)
 * Author : jiabing.li@wintour.cn
 * Date :08/08/2012
 **/

// 全局变量定义区域
var Init = {}, // 保存页面节点加载完成后执行方法
	DAI = null; // 保存 DossmAllInterface 接口对象
/*
* 站点公共接口封装
*/
function DossmAllInterface() {
	this.Version = 'v1.0';
	this.Author = 'jiabing.li@wintour.cn';
	this.Date = '08/08/2012';
	this.Description = 'Dossm All Interface';
}
DossmAllInterface.prototype = {
	queryUsedGuests: function (opt) {
		Dossm.ajax({
			url: '/Booking/queryUsedGuests/',
			type: 'GET'
		}, opt);
	},
	queryPricePlan: function (id, opt, err) {
		Dossm.ajax({
			url: '/Price/queryPricePlan/',
			data: {
				plan_id: id,
				plan_type: 1
			}
		}, opt, err);
	},
	payonlineRequest: function(param, fields, callback, err) {
		var _param = {
			'sameid': param.sameid,
			'name': param.name,
			'price': param.price,
			'num': 1,
			'date': param.date,
			'email': param.email,
			'mobile': fields.mobile,
			'firstname': param.first_name,
			'lastname': param.last_name,
			'gender': fields.gender,
			'remark': fields.remark,
			'hotelcode': param.hotelcode,
			'paycode': param.paycode,
			'language': '1'
		};
		$.ajax({
			url: param.url,
			data: _param,
			type: "GET",
			async: true,
			dataType: "jsonp",
			jsonp: "jsoncallback",
			success: function (data) {
				if (data.status == 0) {
					if (callback) {
						callback(data);
					} else {
						setTimeout(function () {
							window.location = data.data.URL;
						}, 0);
					}
				} else {
					if (err) {
						err(data);
					} else {
						alert(data.info);
					}
				}
			},
			error: function() {
				alert(LP_public['interface_error']);//接口调用失败
			}
		});
	},
	CheckLogin: function (opt) {
		getIdentify(function(id) {
			Dossm.ajax({
				url: '/Guest/getLogin/',
				data: {
					referer: document.referrer,
					'dossm-id': id
				}
			}, opt);
		});
	},
	CheckGuestAccount: function (id, opt) {
		Dossm.ajax({
			url: '/Guest/checkGuestAccount/',
			data: {
				account_id: id
			}
		}, opt);
	},
	Login: function (id, pwd, obj) {
		Dossm.ajax({
			url: '/Guest/login/',
			data: {
				account_id: id,
				password: pwd
			},
			type: "GET",
			async: false
		}, obj);
	},
	Register: function (param, opt) {
		Dossm.ajax({
			async: false,
			url: '/Guest/register/',
			data: {
				account_id: param.account_id,
				password: param.password,
				last_name: param.last_name || '',
				first_name: param.first_name || ''
			},
			type: 'GET'
		}, opt);
	},
	Logout: function (opt) {
		Dossm.ajax({
			url: '/Guest/logout/',
			type: 'GET',
			async: false
		}, opt);
	},
	getPenalty: function (id, type, opt) {
		Dossm.ajax({
			url: '/Booking/getPenalty/',
			data: {
				order_id: id,
				action_type: type
			},
			async: false,
			type: 'GET',
			timeout: 600000
		}, opt);
	},
	CancelOrder: function (orderid, opt) {
		$.ajax({
			async: false,
			url: saas_root + '/Booking/cancelOrder/',
			type: "GET",
			data:({
				client_account: client_account,
				language: language,
				order_id: orderid
			}),
			dataType: "jsonp",
			jsonp: "jsoncallback",
			timeout: 600000,
			success: function (data) {
				if(!data){
					alert('订单不允许修改！');
					return;
				}
				alert('订单取消成功！');
				setTimeout(function() {
					window.location.reload();
				}, 0);
			},
			error: function () {
				alert(LP_public['system_busy']); // 系统繁忙，请稍后重试！
			}
		});
	},
	setRequest: function (param, opt) {
		Dossm.ajax({
			url: '/Request/submit/',
			param: param,
			type: 'GET',
			async: false
		}, opt);
	},
	getRequestOrderInfo: function(no, name, opt) {
		Dossm.ajax({
			url: '/Guest/getRequestOrderByOrderNoAndLastName/',
			data: {
				order_no: no,
				last_name: name
			},
			type: 'GET',
			async: false
		}, opt);
	},
	getOrderInfo: function(no, name, opt) {
		Dossm.ajax({
			url: '/Guest/getOrderByOrderNoAndLastName/',
			data: {
				order_no: no,
				last_name: name
			},
			type: 'GET',
			async: false
		}, opt);
	}
}
/*
* 检测已是会员时处理
*/
function IsMember(data, type) {
	user_id = data.id;
	user_info = data;
	var loginInfo = $('<a href="member.html" title="'+ LP_login['welcome']
			 + user_info.last_name + ',' 
			+ user_info.first_name + LP_login['in_member'] + '">'
			+ LP_login['welcome'] + user_info.last_name + ',' 
			+ user_info.first_name +'</a>&nbsp;|&nbsp;'
			+ '<a id="logout" class="last" href="#" title='
			+ LP_login['exit'] + '>' +  LP_login['exit']
			+ '</a>');
	$('#member-entrance').html(loginInfo);
	$('#logout').unbind('click').click(function () {
		Logout();
		return false;
	});
	// 页面私有会员处理方法，非必须，做异常处理
	try {
		PageIsMember(data, type);
	} catch (e) {}
}
/*
* 检测未登录或会员退出时时处理
*/
function NotMember(data, type) {
	user_id = 0;
	user_info = null;
	var loginInfo = $('<a class="member-login" href="#pop-login"' + '>'
			+ LP_login['login'] + '</a>&nbsp;|&nbsp;<a class="member-register"'
			+ ' href="#pop-register">' + LP_login['register'] + '</a>');
	$('#member-entrance').html(loginInfo);
	if (type === 'Login') {
		alert(data.info);
		$('#pop-password').val('').focus();
		if (data.status == -14) {
			$('#pop-user-name').select();
		}
	}
	// 页面私有非会员或会员退出时处理方法，非必须，做异常处理
	try {
		PageNotMember(data, type);
	} catch (e) {}
}
/*
* 检测是否登录会员
*/
function CheckLogin () {
	DAI.CheckLogin({
		success: function (data) {
			IsMember(data, 'CheckLogin');
		},
		error: function (data) {
			NotMember(data, 'CheckLogin');
		}
	});
}
/*
* 会员登录
*/
function Login (name, pwd, fun) {
	DAI.Login(name, pwd, {
		success: function (data) {
			user_id = data.id;
			user_info = data;
			IsMember(data, 'Login');
			if (fun) {
				fun();
			}
			$.fancybox.close();
		},
		error: function (data) {
			NotMember(data, 'Login');
		}
	});
}
/*
* 会员注册
*/
function Register (param , fun) {
	DAI.Register(param, {
		success: function (data) {
			IsMember(data, 'Login');
			if (fun) {
				fun();
			}
			$.fancybox.close();
		},
		error: function (data) {
			NotMember(data, 'Login');
		}
	});
}
/*
* 退出会员
*/
function Logout () {
	if (confirm(LP_login['is_exit'])) {
		DAI.Logout(function () {
			// alert('感谢您的光临，欢迎下次登录！');
			NotMember('', 'Logout');
		});
	}
}
//注册用户处理回车事件方法
function pop_enter_reg(evt){
	if (KeyInput(evt) == 13){
		$('#button-submit-register').focus();
	}
}
/*
* 表单提交
*/
function setRequest(param, url) {
	DAI.setRequest(param, function (data) {
		var order_no = data.order_request.order_no,
			last_name = data.order_request.last_name,
			URL = url + '?order_no=' + order_no + '&last_name=' + last_name;
		setTimeout(function () {
			window.location = URL;
		});
	});
}
/*
* 文档点击触发事件集合
*/
document.onclick = function() {
	if( $('#CalFrame').length > 0 && !$('#CalFrame').is(':hidden') ) {
		hideCalendar();
	}
	if( $('#CalFrameRequest').length > 0 &&
		!$('#CalFrameRequest').is(':hidden') ) {
		hideCalendarRequest();
	}
}

/*
* 显示相应的酒店电话
*/
function changeTel(obj) {
   var num = $(obj).attr('key');
   $('#js-popup-tel-list-' + num).show().siblings().hide();
}
/**
 * 头部关注滚动
 */
function weiboFollow(){
	var weibo_wrap = $('.toolbar .follow');
	var weibos = weibo_wrap.find('li');
	var flag = 0;
	var leftBtn = $('<a href="javascript:;" class="left-btn"></a>').click(function (){
		flag--;
		if(flag < 0){
			flag = weibos.size() - 1;
		}
		weibos.hide();
		weibos.eq(flag).show();
	});
	var rightBtn = $('<a href="javascript:;" class="right-btn"></a>').click(function (){
		flag++;
		if(flag >= weibos.size()){
			flag = 0;
		}
		weibos.hide();
		weibos.eq(flag).show();
	});
	weibos.hide();
	weibos.eq(flag).show();
	$('.toolbar .follow').append(leftBtn , rightBtn);
}
/**
 * 联系我们下拉切换
 * 页面下拉框onchange事件调用
 * global.js document ready 事件默认调用
 */
function contactSidebar(obj, selectClass, divClass) {
	// 下拉菜单模拟后此方法有效
	$('.' + divClass).hide();
	var i = 0;
	if(typeof obj === 'object'){
		i = $('.' + selectClass + ' .select-list-container > ul > li')
			.index(obj);
	} else {
		i = $(obj + ' > option:selected').index();
	}
	$('.' + divClass).eq(i).show();
}

/**
 * 聚优惠年月份日期下拉框加载
 * global.js document ready 事件默认调用
 */
function offersYearMonthDataFill(wrapId, selfId, sonId) {
	if( $(wrapId).length === 0 ) {
		return;
	}
	var offersSelectDefaultData = Dossm.getTimeData();
	Dossm.selectYearFill(offersSelectDefaultData, selfId, wrapId,
		function(data, wrapId) {
			Dossm.selectMonthFill(data, sonId, wrapId);
		}
	);
	$(selfId).change(function() {
		var val = this.value.split(','),
			date = [Number(val[0]),Number(val[1])];
		Dossm.selectMonthFill(offersSelectDefaultData, '#search-choose-date',
			'#js-search-choose-date-wrap', date);
	});
}

/**
 * 调用打印功能
 */
function printPage() {
	window.print();
	return false;
}

/**
 * 添加收藏功能
 */
function addToFav(o){
	var url = web_url;
	var title = hotel_name;
	if (window.sidebar) { // Mozilla Firefox Bookmark
			window.sidebar.addPanel(title, url,'');
	} else if( window.external&&document.all) { // IE Favorite
		window.external.AddFavorite( url, title);
	} else if(window.opera) { // Opera 7+
			return false; // do nothing
	} else {
		alert('您的浏览器不支持自动加收藏，请按 ctrl+d 加入收藏。');
	}
}

/**
 * 站点执行方法统一入口
 */
function init() {
	// 侧边栏背景图
	$('.main').append('<div class="sider-bg-wrap hide"></div>');
	
	try {
		// 生成选项卡
		tab('tab', 'tab-trigger', 'tab-container', 'tab-trigger-current');
	} catch(e) {}
	if (typeof $.fancybox === 'undefined') {
		$.fn.fancybox = function() {
			return {};
		}
	}
	// 调用接口对象
	DAI = new DossmAllInterface();

	// 侦测子页面执行方法入口
	for (i in Init) {
		if (Init[i].constructor === Function) {
			Init[i]();
		} else if (Init[i].constructor === Object) {
			for (j in Init[i]) {
				if (Init[i][j].constructor === Function) {
					Init[i][j]();
				}
			}
		}
	}
	
	// 检测登录状态
	if ($('#member-entrance').length > 0) {
	//todo	setTimeout(CheckLogin, 100);
	}

	// 订单操作
	$('.data-list .operate').live('click' , function (){
		$(this).find('.operate-module').toggle();
	});

	// 全站通用BANNER轮换
	if( $('#js-slide').length > 0 ) {
		$('#js-slide').dossmSlide({
			'changeTime': 3000,
			'switchBtn': true,
			'controlnavi': false,
			'pauseState': true,
			'titleShow': true,
			'opacity': 0.7
		});
	}
	
	// 头部关注滚动
	weiboFollow();
	
	// 滚动集合
	if ($('#js-scroll-offer').length) {
		$('#js-scroll-offer').dossmScroll({
			'mode': 'x',
			'auto': true,
			'scrollNum': 1,
			'speed': 3,
			'controlnavi': true
		});
	}
	if($('.book-index').length){
		/*$('.book-index .book-index-item').hover(function (){},function (){
			$(this).find('.book-index-content').delay(1000).slideUp();
		});*/
		$('#toggle-reservation').click(function (){
			$('#book-room-reservation-content').slideToggle();
		});
		$('#toggle-offers').click(function (){
			$('#book-special-offers-content').slideToggle();
		});
	}
	// 联系我们下拉切换
	if( $('#hotel_id').length ) {
		contactSidebar('#hotel_id', 'select-department',
			'content-sidebar-container');
	}

	// 客房信息
	if( $('.item-info-bg').length ) {
		$('.compare-list .item-info-bg').css('opacity','0.82');
		$('.compare-list .item-prev').hover(
			function() {
				$(this).find('.item-info').show();
			},
			function() {
				$(this).find('.item-info').hide();
			}
		);
	}

	/**
	 * 弹出层集
	 */
	// Tel popup
	$('#js-tel-booking').fancybox({
		helpers: {
			title:null
		},
		modal: true,
		padding: 11,
		width: 555,
		height: 382,
		fitToView: false,
		autoSize: false,
		closeClick: false,
		openEffect: 'swing',
		closeEffect: 'swing',
		beforeShow: function() {
			// 普通模拟下拉框
			selectSimulate('select', '#popup-tel-booking');

			// 酒店与电话列表关联
			var num    = $('#js-popup-choose-hotel').val();
			$('#js-popup-tel-list-' + num).show().siblings().hide();
		}
	});

	// 最惠价格保证
	$('#js-price-guarantee').fancybox({
		helpers: {
			title:null
		},
		modal: true,
		padding: 11,
		width: 555,
		height: 382,
		fitToView: false,
		autoSize: false,
		closeClick: false,
		openEffect: 'swing',
		closeEffect: 'swing'
	});

	// 在线咨询
	$('#js-online-consultation').fancybox({
		helpers: {
			title:null
		},
		modal: true,
		padding: 11,
		width: 555,
		height: 410,
		fitToView: false,
		autoSize: false,
		closeClick: false,
		openEffect: 'swing',
		closeEffect: 'swing',
		beforeShow: function () {
			selectSimulate('select', '#popup-online-consultation');
		}
	});

	// 查询/取消预订
	$('#js-check-order').fancybox({
		helpers: {
			title:null
		},
		modal: true,
		padding: 11,
		width: 555,
		height: 382,
		fitToView: false,
		autoSize: false,
		closeClick: false,
		openEffect: 'swing',
		closeEffect: 'swing'
	});

	// Home Page Popup
	$('#js-popup-more-content').fancybox({
		helpers: {
			title:null
		},
		modal: true,
		padding: 11,
		width: 555,
		height: 382,
		fitToView: false,
		autoSize: false,
		closeClick: false,
		openEffect: 'swing',
		closeEffect: 'swing'
	});

	/**
	 * Images Switch Packs
	 */
	/* Without Text */
	$('.images-switch-without-title').imagesSwitch({
		prevText : '上一张',
		nextText : '下一张'
	});
	$('.album-detail-slide').imagesSwitch();

	/* With Text */
	$('.images-switch-with-title').imagesSwitch({
		altShow : true,
		opacity : 0.76,
		prevText : '上一张',
		nextText : '下一张'
	});

	/**
	 * 等高
	 */
	// 聚优惠下拉时间处理
	offersYearMonthDataFill('#js-search-choose-date-wrap',
		'#search-choose-year', '#search-choose-date');

	$('.extend-trigger').each(function() {
		$(this).click(function() {
			var _self = $(this);
			if(_self.parent().next().is(':hidden')) {
				_self.find('i').removeClass('icon-expanded-even');
				_self.find('span').html('(点击收缩)');
				_self.parent().next().show();
			} else {
				_self.find('span').html('(点击伸展)');
				_self.find('i').addClass('icon-expanded-even');
				_self.parent().next().hide();
			}
			return false;
		});
	});

	// Gallery
	if( $('#gallery').size() ) {
		$('#gallery').dossmGallery({
			auto: true, // 是否自动播放，默认否
			speed: 5,
			imgWidth: 660,
			imgHeight: 420

		});
	}

	// FLoat Panel
	if( $('#float-panel').length) {
		$('#float-panel').floatPanel({
			delay: 500,
			offset: {
				top: 156,
				left: -121
			},
			position: 'l'
		});
		var time = 0;
		$('#float-panel').hover(
			function() {
				clearTimeout(time);
				$(this).animate({
					left: 0
				}, 500);
			},
			function() {
				var _self = this;
				time = setTimeout(function() {
					$(_self).animate({
						left: -121
					}, 200);
				}, 250);
			}
		);
	}

	// Fixed Offer List
	if ($('.search-result-list').length > 0) {
		$('.search-result-list .search-result-list-item:last').css({
			'border' : 'none'
		});
	}

	// Favorite
	$('#addFavorite').click(function(){
		addToFav(this);
	})

	// 会员登录调用fancybox
	if ($('.member-login').length > 0) {
		$('.member-login').fancybox({
			modal: true,
			padding: 11,
			width: 555,
			height: 382,
			fitToView: false,
			autoSize: false,
			closeClick: false,
			openEffect: 'swing',
			closeEffect: 'swing',
			beforeShow: function() {
				$('#pop-user-name').val('');
				$('#pop-password').val('');
				$('.check-error').removeClass('check-error');
				$('#pop-login-submit').unbind('click');
				$('#pop-login-form').DossmValidat('#pop-login-submit', function () {
					var user = $('#pop-login-account').val(),
						pwd = $('#pop-login-password').val();
					Login(user, pwd);
				});
				$('#pop-login-cancer').click(function () {
					$.fancybox.close();
				});
			}
		});
	}

	// 会员注册调用fancybox
	if ($('.member-register').length > 0) {
		$('.member-register').fancybox({
			modal: true,
			padding: 11,
			width: 555,
			height: 382,
			fitToView: false,
			autoSize: false,
			closeClick: false,
			openEffect: 'swing',
			closeEffect: 'swing',
			beforeShow: function() {
				document.getElementById("pop-register-form").reset();
				var appel_arr = [];
				$.each(appellation_options, function() {
					appel_arr.push('<option value="' + this.val + '">'
						+ this.val + '</option>');
				});
				$('#pop-reg-appellation').html(appel_arr.join(''));
				selectSimulate('select', '#pop-register-form');
				$('#pop-reg-account').each(function (){
					var _self = $(this);
					var dfText = $(this).val();
					_self.focus(function (){
						if(_self.val() == dfText){
							_self.val('');
						}
					}).blur(function (){
						if(_self.val() == ''){
							_self.val(dfText);
						}
					});
				});
				$('.check-error').removeClass('check-error');
				$('#pop-reg-submit').unbind('click');
				$('#pop-register-form').DossmValidat('#pop-reg-submit', function () {
					Register({
						account_id: $('#pop-reg-account').val(),
						password: $('#pop-reg-password').val(),
						last_name: $('#pop-reg-last-name').val(),
						first_name: $('#pop-reg-first-name').val()
					});
				});
				$('#pop-reg-cancer').click(function () {
					$.fancybox.close();
				});
			}
		});
	}

	// 订单查询验证
	if ($('#pop-check-order-form').length > 0) {
		$('#pop-check-order-form').DossmValidat('#pop-check-order-buttom', function () {
			var order_id = $('#pop-check-order-num').val(),
				last_name = $('#pop-check-last-name').val();
			setTimeout(function () {
				window.location = 'order_info.html?order_no=' + order_id +
					'&last_name=' + last_name;
			});
		});
	}
	try {
		// 模拟下拉框
		selectSimulate('select');
	} catch(e) {}
 }

/******************************
 * DOM 加载完成后调用（站点统一入口）
 ******************************/
jQuery(document).ready(init);