/**
 *	公共JS方法
 *	author:ken
 *	date:2012-4-10
 **/
//将Json对像转换成字符串
function getJsonString(jsonObj) {
	var sA = [];
	(function (o) {
		var isObj = true;
		if (o instanceof Array)
			isObj = false;
		else if (typeof o != 'object') {
			if (typeof o == 'string')
				sA.push('"' + o + '"');
			else
				sA.push(o);
			return;
		}
		sA.push(isObj ? "{" : "[");
		for (var i in o) {
			if (o.hasOwnProperty(i) && i != 'prototype') {
				if (isObj)
					sA.push('"' + i + '":');
				arguments.callee(o[i]);
				sA.push(',');
			}
		}
		sA.push(isObj ? "}" : "]");
	})(jsonObj);
	return sA.slice(0).join('').replace(/,\}/g, '}').replace(/,\]/g, ']');
}

//将字符串转换成Json
function encodeJsonData(data) {
	var arr = [];
	for (i in data) {
		arr.push(data[i]);
	}
	return arr;
}

//分页方法
function PagerView(id) {
	var self = this;
	this.id = id;
	this.container = null;
	this.index = 1; // 当前页码, 从1开始
	this.size = 15; // 每页显示记录数
	this.maxButtons = 9; // 显示的分页按钮数量
	this.itemCount = 0; // 记录总数
	this.pageCount = 0; // 总页数
	/**
	 * 控件使用者重写本方法, 获取翻页事件, 可用来向服务器端发起AJAX请求.
	 * @param index: 被点击的页码.
	 */
	this.onclick = function (index) {};
	/**
	 * 内部方法.
	 */
	this._onclick = function (index) {
		self.index = index;
		self.onclick(index);
		self.render();
	};
	/**
	 * 在显示之前计算各种页码变量的值.
	 */
	this.calculate = function () {
		self.pageCount = parseInt(self.pageCount);
		self.index = parseInt(self.index);
		if (self.index > self.pageCount) {
			self.index = self.pageCount;
		}
	};
	/**
	 * 渲染分页控件.
	 */
	this.render = function () {
		if (self.id != undefined) {
			var div = document.getElementById(self.id);
			div.view = self;
			self.container = div;
		}
		self.calculate();
		var start,
		end;
		start = Math.max(1, self.index - parseInt(self.maxButtons / 2));
		end = Math.min(self.pageCount, start + self.maxButtons - 1);
		start = Math.max(1, end - self.maxButtons + 1);
		var str = "";
		str += "<div class=\"pager\">\n";
		if (self.pageCount > 1) {
			if (self.index != 1) {
				str += '<a href="javascript://1" class=\"first-page\">|&lt;</a>';
				str += '<a href="javascript://' + (self.index - 1) + '" class=\"prev-page\">&lt;&lt;</a>';
			} else {
				str += '<span class=\"first-page\">|&lt;</span>';
				str += '<span class=\"prev-page\">&lt;&lt;</span>';
			}
		}
		for (var i = start; i <= end; i++) {
			if (i == this.index) {
				str += '<span class="on-page">' + i + "</span>";
			} else {
				str += '<a href="javascript://' + i + '">' + i + "</a>";
			}
		}
		if (self.pageCount > 1) {
			if (self.index != self.pageCount) {
				str += '<a href="javascript://' + (self.index + 1) + '" class=\"next-page\">&gt;&gt;</a>';
				str += '<a href="javascript://' + self.pageCount + '" class=\"last-page\">&gt;|</a>';
			} else {
				str += '<span class=\"next-page\">&gt;&gt;</span>';
				str += '<span class=\"last-page\">&gt;|</span>';
			}
		}
		str += "</div><!-- /.pagerView -->\n";
		self.container.innerHTML = str;
		var a_list = self.container.getElementsByTagName('a');
		for (var i = 0; i < a_list.length; i++) {
			a_list[i].onclick = function () {
				var index = this.getAttribute('href');
				if (index != undefined && index != '') {
					index = parseInt(index.replace('javascript://', ''));
					self._onclick(index)
				}
				return false;
			};
		}
	};
}

/**
 * JS获取参数如存在
 */
function getUrlParam(name) {
	var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
	var r = window.location.search.substr(1).match(reg);
	if (r !== null) {
		return decodeURI(r[2]);
	}
	return null;
}

//判断对象是否存在
function IsHas(obj) {
	if (obj == null || typeof(obj) == "undefined") {
		return "";
	} else {
		return obj;
	}
}

//格式化时间
Date.prototype.format = function (format) {
	var o = {
		"M+" : this.getMonth() + 1, //month
		"d+" : this.getDate(), //day
		"h+" : this.getHours(), //hour
		"m+" : this.getMinutes(), //minute
		"s+" : this.getSeconds(), //second
		"q+" : Math.floor((this.getMonth() + 3) / 3), //quarter
		"S" : this.getMilliseconds() //millisecond
	}
	if (/(y+)/.test(format))
		format = format.replace(RegExp.$1,
				(this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(format))
			format = format.replace(RegExp.$1,
					RegExp.$1.length == 1 ? o[k] :
					("00" + o[k]).substr(("" + o[k]).length));
	return format;
}


//匹配对象的key与字符串(仿php 的array_key_exists)
function array_key_exists(key, search) {
	// Checks if the given key or index exists in the array
	//
	// version: 1109.2015
	// discuss at: http://phpjs.org/functions/array_key_exists    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// +   improved by: Felix Geisendoerfer (http://www.debuggable.com/felix)
	// *     example 1: array_key_exists('kevin', {'kevin': 'van Zonneveld'});
	// *     returns 1: true
	// input sanitation
	if (!search || (search.constructor !== Array && search.constructor !== Object)) {
		return false;
	}
	
	return key in search;
}

//获取当前时间(格式为YYYY-MM-DD)
function curDateTime() {
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	var date = d.getDate();
	var day = d.getDay();
	var curDateTime = year;
	if (month > 9)
		curDateTime = curDateTime + "-" + month;
	else
		curDateTime = curDateTime + "-0" + month;
	if (date > 9)
		curDateTime = curDateTime + "-" + date;
	else
		curDateTime = curDateTime + "-0" + date;
	return curDateTime;
}

//比较两个日期的大小(格式为YYYY-MM-DD)
function dataCompare(a, b) {
	try {
		var arr = a.split("-");
		var starttime = new Date(arr[0], arr[1], arr[2]);
		var starttimes = starttime.getTime();
		var arrs = b.split("-");
		var lktime = new Date(arrs[0], arrs[1], arrs[2]);
		var lktimes = lktime.getTime();
		if (starttimes >= lktimes) {
			return true;
		} else
			return false;
	} catch(e) {
		return true;
	}
}

//日期增加年数或月数或天数
function DateAdd(BaseDate, interval, DatePart) {
	var dateObj = new Date(BaseDate.replace("-", ","));
	var millisecond = 1;
	var second = millisecond * 1000;
	var minute = second * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var year = day * 365;
	var newDate;
	var dVal = new Date(dateObj)
		var dVal = dVal.valueOf();
	switch (DatePart) {
	case "ms":
		newDate = new Date(dVal + millisecond * interval);
		break;
	case "s":
		newDate = new Date(dVal + second * interval);
		break;
	case "mi":
		newDate = new Date(dVal + minute * interval);
		break;
	case "h":
		newDate = new Date(dVal + hour * interval);
		break;
	case "d":
		newDate = new Date(dVal + day * interval);
		break;
	case "y":
		newDate = new Date(dVal + year * interval);
		break;
	default:
		return escape("日期格式不对");
	}
	newDate = new Date(newDate)
		return newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate();
}

function getDateFromString(strDate) {
	var arrYmd = strDate.split('-');
	var numYear = parseInt(arrYmd[0], 10);
	var numMonth = parseInt(arrYmd[1], 10) - 1;
	var numDay = parseInt(arrYmd[2], 10);
	var leavetime = new Date(numYear, numMonth, numDay);
	return leavetime;
}

//日期加上天数后的新日期.
function AddDays(date, days) {
	var nd = new Date(date);
	nd = nd.valueOf();
	nd = nd + days * 24 * 60 * 60 * 1000;
	nd = new Date(nd);
	var y = nd.getFullYear();
	var m = nd.getMonth() + 1;
	var d = nd.getDate();
	if (m <= 9)
		m = "0" + m;
	if (d <= 9)
		d = "0" + d;
	var cdate = y + "-" + m + "-" + d;
	return cdate;
}

// 图片自动居中及缩放
function self_change_img(obj, wd, hd) {
	var w = obj.width();
	var h = obj.height();
	var w1 = wd;
	var h1 = h / (w / w1);
	if (h1 > hd) {
		h1 = hd;
		w1 = w / (h / h1);
		var ml = (wd - w1) / 2;
		obj.css({
			"width" : w1 + "px"
		});
		obj.css({
			"height" : h1 + "px"
		});
		obj.css({
			"margin-left" : ml + "px"
		});
	} else {
		var mt = (hd - h1) / 2;
		obj.css({
			"width" : w1 + "px"
		});
		obj.css({
			"height" : h1 + "px"
		});
		obj.css({
			"margin-top" : mt + "px"
		});
	}
}
