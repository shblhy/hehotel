/*!
 * Title       : Dossm base javascript 
 * Copyright   : 2012 Wintour, Inc.
 * Author      : jiabing.li@wintour.cn (lijabeen@126.com)
 * Date        : 06/23/2012
 * Statement   : 此js无版本概念，非js分层，纯属平台公共js且唯一公共js，定义的方法为全局方法，定义的变量为全局；
 * Maintenance : 秉承只增不减的原则，现有的方法、属性不得删，可以对方法内部进行优化但不能改变结构与返回值(如有更改须测试通过方可更新并注明更新信息)，可新增方法、属性等；
 * Explain     : 此js包含jQuery操作cookies插件、国家信息、模拟下拉框、ajax接口等，此js还接收通过language-pack.js定义的固有变量，如检测当前语言版本是否是中文版的变量:(isChinese)；
 * introduction: {
 *     $.cookie: <jQuery Method> jQuery 操作 Cookies 插件
 *     nationality_options: <Variable> 
 * }
 * (最新修改：08/22/2012 jiabing.li@wintour.cn <整理>)
 */

// cookie插件
(function($){$.extend({cookie:function(name,value,options){if(typeof value!='undefined'){options=options||{};if(value===null){value='';options.expires=-1}var expires='';if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000))}else{date=options.expires}expires='; expires='+date.toUTCString()}var path=options.path?'; path='+(options.path):'';var domain=options.domain?'; domain='+(options.domain):'';var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('')}else{var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break}}}return cookieValue}}});})(jQuery);
// 国家信息集 信息来源 wintour hrp6.0  --- {key:0, val:"Other , \u5176\u5B83"} ==> Other , 其它
var nationality_options = [{key:1, val:"China , \u4E2D\u56FD"}, {key:2, val:"Hong Kong , \u9999\u6E2F\u7279\u522B\u884C\u653F\u533A"}, {key:3, val:"Macao , \u6FB3\u95E8\u7279\u522B\u884C\u653F\u533A"}, {key:4, val:"Taiwan , \u4E2D\u56FD\u53F0\u6E7E\u5730\u533A"}, {key:6, val:"Albania , \u963F\u5C14\u5DF4\u5C3C\u4E9A"}, {key:55, val:"Algeria , \u963F\u5C14\u53CA\u5229\u4E9A"}, {key:11, val:"American Samoa , \u4E1C\u8428\u6469\u4E9A"}, {key:217, val:"Andorra , \u5B89\u9053\u5C14"}, {key:9, val:"Angola , \u5B89\u54E5\u62C9"}, {key:5, val:"Anguilla , \u5B89\u683C\u62C9"}, {key:218, val:"Antigua and Barbuda , \u5B89\u63D0\u74DC\u548C\u5DF4\u5E03\u8FBE"}, {key:10, val:"Argentina , \u963F\u6839\u5EF7"}, {key:7, val:"Armenia , \u4E9A\u7F8E\u5C3C\u4E9A"}, {key:14, val:"Aruba , \u963F\u9C81\u5DF4"}, {key:13, val:"Australia , \u6FB3\u5927\u5229\u4E9A"}, {key:12, val:"Austria , \u5965\u5730\u5229"}, {key:15, val:"Azerbaijan , \u963F\u585E\u62DC\u7586"}, {key:28, val:"Bahamas , \u5DF4\u54C8\u9A6C"}, {key:22, val:"Bahrain , \u5DF4\u6797"}, {key:18, val:"Bangladesh , \u5B5F\u52A0\u62C9\u56FD"}, {key:17, val:"Barbados , \u5DF4\u5DF4\u591A\u65AF"}, {key:31, val:"Belarus, \u767D\u4FC4\u7F57\u65AF"}, {key:19, val:"Belgium , \u6BD4\u5229\u65F6"}, {key:32, val:"Belize , \u4F2F\u5229\u5179"}, {key:24, val:"Benin , \u8D1D\u5B81"}, {key:29, val:"Bhutan , \u4E0D\u4E39"}, {key:26, val:"Bolivia , \u73BB\u5229\u7EF4\u4E9A"}, {key:16, val:"Bosnia Hercegovina , \u6CE2\u9ED1"}, {key:30, val:"Botswana, \u4F2F\u5179\u74E6\u7EB3"}, {key:27, val:"Brazil , \u5DF4\u897F"}, {key:93, val:"British Indian Ocean Territory, \u82F1\u5C5E\u5370\u5EA6\u6D0B\u9886\u5730"}, {key:25, val:"Brunei Darussalam , \u6587\u83B1\u8FBE\u9C81\u8428\u5170\u56FD"}, {key:21, val:"Bulgaria , \u4FDD\u52A0\u5229\u4E9A"}, {key:20, val:"Burkina Faso , \u5E03\u57FA\u7EB3\u6CD5\u7D22"}, {key:23, val:"Burundi , \u5E03\u9686\u8FEA"}, {key:103, val:"Cambodia , \u67EC\u57D4\u585E"}, {key:41, val:"Cameroon , \u5580\u9EA6\u9686"}, {key:33, val:"Canada , \u52A0\u62FF\u5927"}, {key:109, val:"Cayman Islands, \u5F00\u66FC\u7FA4\u5C9B\uFF08\u82F1\u5C5E\uFF09"}, {key:35, val:"Central African Republic , \u4E2D\u975E\u5171\u548C\u56FD"}, {key:185, val:"Chad , \u4E4D\u5F97"}, {key:40, val:"Chile , \u667A\u5229"}, {key:42, val:"China , \u4E2D\u56FD"}, {key:47, val:"Christmas Island, \u5723\u8BDE\u5C9B\uFF08\u82F1\u5C5E\uFF09"}, {key:34, val:"Cocos Islands , \u79D1\u79D1\u65AF\u7FA4\u5C9B"}, {key:43, val:"Colombia , \u54E5\u4F26\u6BD4\u4E9A"}, {key:105, val:"Comoros , \u79D1\u6469\u7F57"}, {key:36, val:"Congo , \u521A\u679C"}, {key:39, val:"Cook Islands , \u5E93\u514B\u7FA4\u5C9B"}, {key:45, val:"Costa Rica , \u54E5\u65AF\u8FBE\u9ECE\u52A0"}, {key:86, val:"Croatia , \u514B\u7F57\u8482\u4E9A"}, {key:46, val:"Cuba , \u53E4\u5DF4"}, {key:48, val:"Cyprus , \u585E\u6D66\u8DEF\u65AF"}, {key:49, val:"Czech Republic , \u6377\u514B\u5171\u548C\u56FD"}, {key:52, val:"Denmark , \u4E39\u9EA6"}, {key:51, val:"Djibouti , \u5409\u5E03\u63D0"}, {key:53, val:"Dominica , \u591A\u7C73\u5C3C\u52A0\u8054\u90A6"}, {key:54, val:"Dominican Republic , \u591A\u7C73\u5C3C\u52A0\u5171\u548C\u56FD"}, {key:194, val:"East Timor , \u4E1C\u5E1D\u6C76"}, {key:56, val:"Ecuador , \u5384\u74DC\u591A\u5C14"}, {key:58, val:"Egypt , \u57C3\u53CA"}, {key:62, val:"El Salvador , \u8428\u5C14\u74E6\u591A"}, {key:44, val:"Equatorial Guinea , \u8D64\u9053\u51E0\u5185\u4E9A"}, {key:57, val:"Estonia , \u7231\u6C99\u5C3C\u4E9A"}, {key:61, val:"Ethiopia , \u57C3\u585E\u4FC4\u6BD4\u4E9A"}, {key:65, val:"Falkland Islands , \u798F\u514B\u5170\u7FA4\u5C9B"}, {key:67, val:"Faroe Islands , \u6CD5\u7F57\u7FA4\u5C9B"}, {key:64, val:"Fiji , \u6590\u6D4E"}, {key:63, val:"Finland , \u82AC\u5170"}, {key:68, val:"France , \u6CD5\u56FD"}, {key:73, val:"French Guiana , \u6CD5\u5C5E\u572D\u4E9A\u90A3"}, {key:155, val:"French Polynesia , \u6CD5\u5C5E\u73BB\u5229\u5C3C\u897F\u4E9A"}, {key:186, val:"French Southern Territories , \u6CD5\u5C5E\u5357\u534A\u7403\u9886\u5730"}, {key:77, val:"Gambia , \u5188\u6BD4\u4E9A"}, {key:72, val:"Georgia , \u683C\u9C81\u5409\u4E9A"}, {key:50, val:"Germany , \u5FB7\u56FD"}, {key:74, val:"Ghana , \u52A0\u7EB3"}, {key:75, val:"Gibraltar , \u76F4\u5E03\u7F57\u9640"}, {key:69, val:"Gobon, \u52A0\u84EC"}, {key:70, val:"Great Britain (UK) , \u5927\u4E0D\u5217\u98A0\u8054\u5408\u738B\u56FD"}, {key:80, val:"Greece ,\u5E0C\u814A"}, {key:76, val:"Greenland , \u683C\u9675\u5170\u7FA4\u5C9B"}, {key:71, val:"Grenada , \u683C\u6797\u7EB3\u8FBE"}, {key:79, val:"Guadeloupe, \u74DC\u5FB7\u7F57\u666E\u5C9B\uFF08\u6CD5\u5C5E\uFF09"}, {key:82, val:"Guam , \u5173\u5C9B"}, {key:81, val:"Guatemala , \u5371\u5730\u9A6C\u62C9"}, {key:83, val:"Guinea-Bissau , \u51E0\u5185\u4E9A\u6BD4\u7ECD"}, {key:84, val:"Guyana , \u572D\u4E9A\u90A3"}, {key:78, val:"Guynea , \u51E0\u5185\u4E9A"}, {key:87, val:"Haiti , \u6D77\u5730"}, {key:85, val:"Honduras , \u6D2A\u90FD\u62C9\u65AF"}, {key:88, val:"Hungary , \u5308\u7259\u5229"}, {key:96, val:"Iceland , \u51B0\u5C9B"}, {key:92, val:"India , \u5370\u5EA6"}, {key:89, val:"Indonesia , \u5370\u5EA6\u5C3C\u897F\u4E9A"}, {key:95, val:"Iran , \u4F0A\u6717"}, {key:94, val:"Iraq , \u4F0A\u62C9\u514B"}, {key:90, val:"Ireland , \u7231\u5C14\u5170\u5171\u548C\u56FD"}, {key:91, val:"Israel , \u4EE5\u8272\u5217"}, {key:97, val:"Italy , \u610F\u5927\u5229"}, {key:38, val:"Ivory Coast, \u8C61\u7259\u6D77\u5CB8"}, {key:98, val:"Jamaica , \u7259\u4E70\u52A0"}, {key:100, val:"Japan , \u65E5\u672C"}, {key:99, val:"Jordan , \u7EA6\u65E6"}, {key:110, val:"Kazakhstan , \u54C8\u8428\u514B\u65AF\u5766"}, {key:101, val:"Kenya , \u80AF\u5C3C\u4E9A"}, {key:104, val:"Kiribati , \u57FA\u91CC\u5DF4\u65AF"}, {key:106, val:"Korea-North , \u5317\u671D\u9C9C"}, {key:107, val:"Korea-South , \u5357\u671D\u9C9C"}, {key:108, val:"Kuwait , \u79D1\u5A01\u7279"}, {key:102, val:"Kyrgyzstan , \u5409\u5C14\u5409\u65AF\u65AF\u5766"}, {key:111, val:"Lao People's Republic , \u8001\u631D\u4EBA\u6C11\u5171\u548C\u56FD"}, {key:120, val:"Latvia , \u62C9\u8131\u7EF4\u4E9A"}, {key:112, val:"Lebanon , \u9ECE\u5DF4\u5AE9"}, {key:117, val:"Lesotho , \u83B1\u7D22\u6258"}, {key:116, val:"Liberia , \u5229\u6BD4\u91CC\u4E9A"}, {key:121, val:"Libya , \u5229\u6BD4\u4E9A"}, {key:114, val:"Liechtenstein , \u5217\u652F\u6566\u58EB\u767B"}, {key:118, val:"Lithuania , \u7ACB\u9676\u5B9B"}, {key:119, val:"Luxembourg , \u5362\u68EE\u5821"}, {key:125, val:"Madagascar , \u9A6C\u8FBE\u52A0\u65AF\u52A0"}, {key:136, val:"Malawi , \u9A6C\u62C9\u7EF4"}, {key:138, val:"Malaysia , \u9A6C\u6765\u897F\u4E9A"}, {key:135, val:"Maldives , \u9A6C\u5C14\u4EE3\u592B"}, {key:127, val:"Mali , \u9A6C\u91CC"}, {key:134, val:"Malta , \u9A6C\u5C14\u4ED6"}, {key:126, val:"Marshall Islands , \u9A6C\u7ECD\u5C14\u7FA4\u5C9B"}, {key:131, val:"Martinique , \u9A6C\u63D0\u5C3C\u514B\u5C9B\uFF08\u6CD5\u5C5E\uFF09"}, {key:132, val:"Mauritania , \u6BDB\u91CC\u5854\u5C3C\u4E9A"}, {key:137, val:"Mexico , \u58A8\u897F\u54E5"}, {key:66, val:"Micronesia , \u5BC6\u514B\u7F57\u5C3C\u897F\u4E9A"}, {key:124, val:"Moldova , \u6469\u5C14\u591A\u74E6"}, {key:123, val:"Monaco , \u6469\u7EB3\u54E5"}, {key:129, val:"Mongolia , \u8499\u53E4"}, {key:133, val:"Montserrat, \u8499\u585E\u62C9\u7279\u5C9B"}, {key:122, val:"Morocco , \u6469\u6D1B\u54E5"}, {key:139, val:"Mozambique , \u83AB\u6851\u6BD4\u514B"}, {key:128, val:"Myanmar, \u7F05\u7538"}, {key:140, val:"Namibia , \u7EB3\u7C73\u6BD4\u4E9A"}, {key:149, val:"Nauru , \u7459\u9C81"}, {key:148, val:"Nepal , \u5C3C\u6CCA\u5C14"}, {key:146, val:"Netherlands , \u8377\u5170"}, {key:8, val:"Netherlands Antilles , \u8377\u5170\u5C5E\u5730"}, {key:141, val:"New Caledonia, \u65B0\u5580\u91CC\u591A\u5C3C\u4E9A"}, {key:151, val:"New Zealand , \u65B0\u897F\u5170"}, {key:145, val:"Nicaragua , \u5C3C\u52A0\u62C9\u74DC"}, {key:142, val:"Niger , \u5C3C\u65E5\u5C14"}, {key:144, val:"Nigeria , \u5C3C\u65E5\u5229\u4E9A"}, {key:150, val:"Niue, \u7EBD\u57C3"}, {key:143, val:"Norfolk Island, \u8BFA\u798F\u514B\u5C9B"}, {key:130, val:"Northern Mariana Islands, \u5317\u9A6C\u91CC\u4E9A\u7EB3\u7FA4\u5C9B"}, {key:147, val:"Norway , \u632A\u5A01"}, {key:152, val:"Oman , \u963F\u66FC"}, {key:158, val:"Pakistan , \u5DF4\u57FA\u65AF\u5766"}, {key:163, val:"Palau , \u5E15\u52B3"}, {key:153, val:"Panama , \u5DF4\u62FF\u9A6C"}, {key:156, val:"Papua New Guinea , \u5DF4\u5E03\u4E9A\u65B0\u51E0\u5185\u4E9A"}, {key:164, val:"Paraguay , \u5DF4\u62C9\u572D"}, {key:154, val:"Peru , \u79D8\u9C81"}, {key:157, val:"Philippines , \u83F2\u5F8B\u5BBE"}, {key:160, val:"Pitcairn Island, \u76AE\u7279\u514B\u6069\u5C9B"}, {key:159, val:"Poland , \u6CE2\u5170"}, {key:162, val:"Portugal , \u8461\u8404\u7259"}, {key:161, val:"Puerto Rico , \u6CE2\u591A\u9ECE\u5404"}, {key:165, val:"Qatar , \u5361\u5854\u5C14"}, {key:166, val:"Reunion Island, \u7559\u5C3C\u6C6A\u5C9B\uFF08\u6CD5\u5C5E\uFF09"}, {key:167, val:"Romania , \u7F57\u9A6C\u5C3C\u4E9A"}, {key:168, val:"Russian Federation , \u4FC4\u7F57\u65AF\u8054\u90A6"}, {key:169, val:"Rwanda , \u5362\u65FA\u8FBE"}, {key:208, val:"Samoa , \u4E1C\u8428\u6469\u4E9A"}, {key:179, val:"San Marino , \u5723\u9A6C\u529B\u8BFA"}, {key:170, val:"Saudi Arabia , \u6C99\u7279\u963F\u62C9\u4F2F"}, {key:180, val:"Senegal , \u585E\u5185\u52A0\u5C14"}, {key:172, val:"Seychelles , \u585E\u820C\u5C14"}, {key:178, val:"Sierra Leone , \u585E\u62C9\u5229\u6602"}, {key:175, val:"Singapore , \u65B0\u52A0\u5761"}, {key:177, val:"Slovakia , \u65AF\u6D1B\u4F10\u514B"}, {key:171, val:"Solomon Islands , \u6240\u7F57\u95E8\u7FA4\u5C9B"}, {key:181, val:"Somalia , \u7D22\u9A6C\u91CC"}, {key:211, val:"South Africa , \u5357\u975E"}, {key:60, val:"Spain , \u897F\u73ED\u7259"}, {key:115, val:"Sri Lanka , \u65AF\u91CC\u5170\u5361"}, {key:176, val:"St. Helena , \u6D77\u4F26\u5A1C"}, {key:113, val:"St. Lucia, \u5723\u9732\u897F\u4E9A\u5C9B"}, {key:173, val:"Sudan , \u82CF\u65E6"}, {key:182, val:"Suriname , \u82CF\u91CC\u5357"}, {key:184, val:"Swaziland , \u65AF\u5A01\u58EB\u5170"}, {key:174, val:"Sweden , \u745E\u5178"}, {key:37, val:"Switzerland , \u745E\u58EB"}, {key:183, val:"Syrian Arab Republic , \u53D9\u5229\u4E9A"}, {key:189, val:"Tajikistan , \u5854\u5409\u514B\u65AF\u5766"}, {key:197, val:"Tanzania , \u5766\u6851\u5C3C\u4E9A"}, {key:188, val:"Thailand , \u6CF0\u56FD"}, {key:187, val:"Togo , \u591A\u54E5"}, {key:190, val:"Tokelau, \u6258\u514B\u52B3\u7FA4\u5C9B"}, {key:193, val:"Tonga , \u6C64\u52A0"}, {key:192, val:"Tunisia , \u7A81\u5C3C\u65AF"}, {key:195, val:"Turkey , \u571F\u8033\u5176"}, {key:191, val:"Turkmenistan , \u571F\u5E93\u66FC\u65AF\u5766"}, {key:196, val:"Tuvalu , \u56FE\u74E6\u9C81"}, {key:199, val:"Uganda , \u4E4C\u5E72\u8FBE"}, {key:198, val:"Ukrainian SSR , \u4E4C\u514B\u5170"}, {key:215, val:"United Arab Emirates , \u963F\u8054\u914B"}, {key:200, val:"United Kingdom , \u82F1\u56FD"}, {key:201, val:"United States , \u7F8E\u56FD"}, {key:202, val:"Uruguay , \u4E4C\u62C9\u572D"}, {key:207, val:"Vanuatu , \u74E6\u52AA\u963F\u56FE"}, {key:203, val:"Vatican City State , \u68B5\u5730\u5188"}, {key:204, val:"Venezuela , \u59D4\u5185\u745E\u62C9"}, {key:206, val:"Vietnam , \u8D8A\u5357"}, {key:205, val:"Virgin Islands : \u7EF4\u4EAC\u7FA4\u5C9B"}, {key:59, val:"Western Sahara , \u897F\u8428\u6469\u4E9A"}, {key:209, val:"Yemen , \u4E5F\u95E8"}, {key:210, val:"Yugoslavia , \u5357\u65AF\u62C9\u592B"}, {key:213, val:"Zaire , \u624E\u4F0A\u5C14"}, {key:212, val:"Zambia , \u8D5E\u6BD4\u4E9A"}, {key:214, val:"Zimbabwe , \u6D25\u5DF4\u5E03\u97E6"}];

/**
 * Title       : numberSort
 * Description : 数字数组排序方法，默认从小到大排序
 * @param      : Number
 * @return     : Number
*/
function numberSort(arr) {
	var newArray = [];
	for(var i = 0; i < arr.length; i++) {
		newArray[i] = Number( arr[i] );
	}
	var len = newArray.length,
		empty;
	for(var k=0; k<len-1; k++) {
		for(var i=0; i<len-k-1; i++) {
			if(newArray[i] > newArray[i+1]) {
				empty = newArray[i+1];
				newArray[i+1] = newArray[i];
				newArray[i] = empty
			}
		}
	}
	return newArray;
}

/**
 * Title       : Math.avgFloat
 * Description : 小数点默认取两位，非四舍五入
 * @param      : Number
 * @return     : Number , 最多取到小数点后两位
*/
Math.avgFloat = function( num ) {
	var arr = num.toString().split('.');
	var integer = arr[0];
	if(arr.length > 1){
		integer += '.' + arr[1].substring(0,2);
	}
	return Number(integer);
}

/**
 * Title       : Math.avgStr
 * Description : 小数点默认取两位，非四舍五入
 * @param      : Number
 * @return     : String
*/
Math.avgStr = function( num ) {
	if (typeof num === 'undefined') {
		return '';
	}
	var arr = num.toString().split('.');
	var integer = arr[0];
	if(arr.length > 1){
		var n = arr[1].substring(0,2);
		integer += '.';
		integer += n.toString().length > 1 ? n : n + '0';
	} else {
		integer += '.00';
	}
	return integer;
}
/**
 * Title       : $().textBriefly()
 * Description : 内容缩略与点击详细，若是全英文则取得的长度翻倍
 * @param      : Number
 * @param      : Object
*/
$.fn.textBriefly = function (num, obj) {
	obj = $.extend({
		more: 'more',
		small: 'small'
	}, obj || {});
	this.height('auto');
	var wrap = this.html(),
		text = this.text().replace(/[\xa0 \n\t]/g, '');
		len1 = text.length,
		len2 = text.replace(/[^\x00-\xff]/g, '**').length;
	if (len1 === len2) {
		num = 2*num;
	}
	text = text.substring(0, num) + '...';
	this.empty();
	var con = $('<div/>', this).appendTo(this),
		link = $('<div/>', this).appendTo(this),
		alink = '[<a href="javascript:;" class="more">' + obj.more + '</a>]';
	link.addClass('more-detail').html(alink);
	con.html(text);
	this.find('.more_detail a').click(function () {
		if ($(this).attr('class') === 'more') {
			con.html(wrap);
			$(this).attr('class', 'small').html(obj.small);
		} else {
			con.html(text);
			$(this).attr('class', 'more').html(obj.more);
		}
	});
}
/**
 * Title       : jQuery().textBriefly2()
 * Description : 内容缩略与点击详细，高度控制
 * @param      : Number [height]
 * @param      : Object
*/
$.fn.textBriefly2 = function (hgt, obj) {
	obj = $.extend({
		more: 'more',
		small: 'small'
	}, obj || {});
	this.height('auto');
	var text = this.html(),
		h = this.height();
	this.empty();
	var con = $('<div/>', this).appendTo(this),
		link = $('<div/>', this).appendTo(this),
		alink = $('<span class="con-detail">[<a href="javascript:;"'
			+ ' class="more">' + obj.more + '</a>]</span>'),
		plus = $('<span class="con-plus">...</span>');
	link.addClass('more-detail').html(alink).append(plus);
	con.html(text).css({height: hgt, overflow: 'hidden'});
	this.find('.more-detail a').click(function () {
		if ($(this).attr('class') === 'more') {
			$(this).parents('.more-detail').find('.con-plus').remove();
			con.height(h);
			$(this).attr('class', 'small').html(obj.small);
		} else {
			con.height(hgt);
			$(this).parents('.more-detail').append(plus);
			$(this).attr('class', 'more').html(obj.more);
		}
	});
}

// 根据传入参数返回当前日期的前几天或后几天
function plusDate(n) {
	var uom = new Date();
		uom.setDate(uom.getDate() + n);
	return uom.getFullYear() + '-' + (uom.getMonth() + 1) + '-' + uom.getDate();
}

/**
 * Title       : selectSimulate（模拟下拉框）
 * Description : To simulate the drop-down box.
 * Author      : sam.zeng@wintour.cn && jiabing.li@wintour.cn
 * Date        : 11/11/2011
 * @param      : {ELEMENT} sltClass: 真实选项卡类
 * @param      : {ELEMENT} opt: 防止同一区域回调时造成错误，添一选项卡所在区域（父）
 */
var selectzIndex = 0; // 模拟下拉框为其父类添加相对定位时的 z-index
function selectSimulate( sltClass, opt, open ) {
	// 获取所有下拉框
	var $selectClass = null;
	var maxHeight = typeof selectMaxHeight === 'undefined' ? 240 :
			(selectMaxHeight === null ? 9999 : selectMaxHeight);

	if( opt ) {
		if(typeof opt === "object") {
			$selectClass = opt.find('.' + sltClass);
		} else if( opt === 'openDoubleEvent' ) {
			open = opt;
			$selectClass = $('.' + sltClass);
		} else if( opt.substring(0, 1) === '#' || opt.substring(0, 1) === '.' ) {
			$selectClass = $(opt + ' .' + sltClass);
		} else {
			$.error('Input parameter is incorrect !');
		}
	} else {
		$selectClass = $('.' + sltClass);
	}

	// 如果该下拉框已经模拟了，刚返回不作处理
	_zIndex = selectzIndex;
	$selectClass.each(function() {
		var id = $(this).attr('id');
		if( !$(this).is('select') ) {
			return;
		}
		if( $(this).is(':hidden') ) {
			return;
		}

		// 模拟配置
		var $setOptions = $(this).find('option'),
			selectModuleLis = '',
			$selectModule,
			$selectClass = $(this).attr('class'),
			$selectModuleTitle,
			$selectModuleUl,
			$selectModuleEle = {},
			$select = $(this);

		// 创建模拟下拉框样式
		var _strSelectClass = '';
		if( $selectClass.indexOf('validate') === 0 ) {
			var _arrSelectClass = $selectClass.split(' ');
			for( var i=0; i<_arrSelectClass.length; i++ ) {
				if ( _arrSelectClass[i].indexOf('validate') ) {
					_strSelectClass += _arrSelectClass[i] + ' ';
				}
			}
		} else {
			_strSelectClass = $selectClass;
		}

		// 绑定 onchange 事件到模拟下拉
		var e_obj = $select.attr('onchange');

		// 当只有两个下拉值时只做相互切换
		if( $select.find('option').length === 2 && open === "openDoubleEvent") {
			var selectDoubleData = function() {
					var _arr = [];
					$select.find('option').each(function (){
						_arr.push({
							value : this.value,
							text : $(this).html()
						});
					});
					return _arr;
				},
				selectData = selectDoubleData();
			var _str = '<div class="' + _strSelectClass + '" ';
			if( e_obj ) {
				var onchangeScript = $select.attr('onchange').toString();
				onchangeScript = onchangeScript.replace(/( )/g,'');
				_str += 'onclick=' + onchangeScript;
			}
			_str += '><div class="' + sltClass + '-title"><span class="' + sltClass + '-title-text"></span><i class="select-icon-arrow"></i></div></div>';
			var $selectDouble = $( _str ),
				val = $select.find('option:selected').text();
			$selectDouble.find('.' + sltClass + '-title-text').html( val );
			$selectDouble.click(function() {
				if(selectData[0].value === $select.val()) {
					$select.val( selectData[1].value );
					$selectDouble.find('.' + sltClass + '-title-text').html( selectData[1].text );
				} else {
					$select.val( selectData[0].value );
					$selectDouble.find('.' + sltClass + '-title-text').html( selectData[0].text );
				}
			});
			$select.hide().after($selectDouble);
			return;
		}
		if( e_obj ) {
			var onchangeScript = $select.attr('onchange').toString();
				onchangeScript = onchangeScript.replace(/( )/g,'');
			$setOptions.each(function(){
				selectModuleLis += '<li key="' + $(this).val() + '" title="' + $(this).text() + '" onclick="' + onchangeScript+ '">' + $(this).text() + '</li>';
			});
		} else {
			$setOptions.each(function() {
				selectModuleLis += '<li key="' + $(this).val() + '" title="' + $(this).text() + '">' + $(this).text() + '</li>';
			});
		}

		// 创建模拟下拉框
		$selectModuleEle = $('<div class="' + _strSelectClass + '"><div class="' + sltClass + '-title"><span class="' + sltClass + '-title-text"></span><i class="select-icon-arrow"></i></div><div class="' + sltClass + '-list-container"><ul class="' + sltClass + '-list fn-clear"></ul></div></div>');

		// 给模拟下拉框的父添加相对定位
		$(this).parent().css({
			'position' : 'relative',
			'z-index'  : 20 - _zIndex
		});
		_zIndex ++;
		// 把 li 集放进 ul 填充下拉内容
		$selectModuleEle.find('ul.' + sltClass + '-list').html(selectModuleLis);

		// 隐藏真实的下拉框并在其后生成模拟的下拉框
		$select.hide().after($selectModuleEle);

		$selectModule = $selectModuleEle;
		$selectModuleTitle = $selectModule.find('.' + sltClass + '-title');
		$selectModuleUl = $selectModule.find('.' + sltClass + '-list-container');

		// 如果真实下拉框有默认选项刚相应负值，否则获取第一个值为默认值
		if( $select.find('option:selected').size() ) {
			$selectModuleTitle.find('.' + sltClass + '-title-text').html($select.find('option:selected').text());
		} else {
			$selectModuleTitle.find('.' + sltClass + '-title-text').html($select.find('option').eq(0).text());
		}

		// 绑定点击事件
		$selectModuleTitle.click(function(event) {
			$( '.' + sltClass + '-list-container' )
				.not($(this).next( '.' + sltClass + '-list-container' ))
				.slideUp(200);
			if( $selectModuleUl.is(':hidden') ) {
				var liHeight = $selectModuleUl.find('li:first').outerHeight(),
					liLength = $selectModuleUl.find('li').length,
					ulHeight = liHeight * liLength;
				if (ulHeight > maxHeight) {
					$selectModuleUl.css({'height' : maxHeight});
				}
				$selectModuleUl.slideDown(300, function(){
					if (ulHeight > maxHeight) {
						$(this).css({'overflow-y' : 'auto'});
					}
				});
			} else {
				$selectModuleUl.slideUp(200);
			}
			event.stopPropagation();
		});

		// 点击下拉列表子项时赋值
		$selectModuleUl.find('li').click(function() {
			$selectModuleTitle.find('.' + sltClass + '-title-text').html($(this).html());
			$select.val($(this).attr('key')).change();
			$(this).addClass('select-list-item-current').siblings().removeClass('select-list-item-current');
		});

		// 点击下拉框以外其它地方隐藏下拉列表
		$(document).click(function() {
			$selectModuleUl.slideUp(200);
		});

		// 高亮当前已被选的下拉子项
		$('.' + sltClass + '-list li').hover(function() {
			$(this).addClass('select-list-item-hover');
		},function() {
			$(this).removeClass('select-list-item-hover');
		});
		$select.next().find('.' + sltClass + '-list li').each(function(){
			if( $selectModuleTitle.find('.' + sltClass + '-title-text').text() === $(this).text() ) {
				$(this).addClass('select-list-item-current').siblings().removeClass('select-list-item-current');
			}
		});

		$('.' + sltClass + '-list li:last').addClass('select-list-last-item');
	});
}

/**
 * Title       : refreshSelect（刷新模拟下拉框）
 * Description : To simulate the drop-down box.
 * Author      : jiabing.li@wintour.cn
 * Date        : 2012.4.9
 * @param      : {ELEMENT} sltClass: 真实选项卡类名
 * @param      : {ELEMENT} areaWrap: 提供一个区域，缺省时为整个 body
 */
function refreshSelect( sltClass, areaWrap ) {
	var wrap = '';
	if (areaWrap) {
		wrap = areaWrap;
	} else {
		wrap = 'body';
	}
	$(wrap).find('select.' + sltClass).show();
	$(wrap).find('div.'+ sltClass).remove();
	selectSimulate( sltClass, wrap );
}

/**
 * Title: Tab（选项卡）
 * Author: sam.zeng@wintour.cn && jiabing.li@wintour.cn
 * Date: 11/11/2011
 * @param: {ELEMENT} tabClass: 选项卡类
 * @param: {ELEMENT} tabTrigger: 选项卡触发器类
 * @param: {ELEMENT} tabContainer: 选项卡容器类
 * @param: {ELEMENT} tabTriggerCurrent: 选项卡触发器当前选择显示类，默认为"tab-trigger-current"
 */
function tab(tabClass, tabTrigger, tabContainer, tabTriggerCurrent) {
	// 判断是否传值触发器选择类，如没采用默认值（用于处理内嵌选项卡）
	if( !tabTriggerCurrent ) {
		var tabTriggerCurrent = 'tab-trigger-current';
	}
	if( $('.' + tabClass).size() ) {
		$('.' + tabClass).each(function(i, el) {
			$(el).find('.' + tabContainer + '> .tab-container-item').hide();
			var i = 0;
			$(el).find('.' + tabTrigger + ' > ul > li').each(function(index, ele) {
				if( $(ele).hasClass(tabTriggerCurrent) ) {
					i = index;
				}
				$(ele).click(function() {
					if( $(el).find('.' + tabTrigger + ' > ul > li').hasClass(tabTriggerCurrent) ) {
						$(el).find('.' + tabTrigger + ' > ul > li').removeClass(tabTriggerCurrent);
					}
					$(ele).addClass(tabTriggerCurrent);
					if( $(el).find('.' + tabContainer + '> .tab-container-item').eq(index).is(':hidden') ) {
						$(el).find('.' + tabContainer + '> .tab-container-item').hide();
						$(el).find('.' + tabContainer + '> .tab-container-item').eq(index).show();
						selectSimulate('select', '.' + tabClass);
					}
				});
			});
			$(el).find('.' + tabContainer + ' > .tab-container-item').eq(i).show();
			$(el).find('.' + tabTrigger + ' > ul > li').eq(i).addClass(tabTriggerCurrent);
		});
	}
}

/**
 * Title: imagesSwitch(图片展示)
 * Author: jiabing.li@wintour.cn
 * Rebuild: sam.zeng@wintour.cn
 * Date: 04/01/2012
 */
(function($){
	$.fn.imagesSwitch = function(obj) {
		function sltClass(str) {
			return str.substring(1, str.length);
		}
		return $(this).each(function(){
			obj = $.extend( $.fn.imagesSwitch.defaults, obj || {} );
			var wrapId = $(this).attr('id');
			var child = $(this).children().clone();
			/*if( child.length < 2 ){
				return;
			}*/
			$(this).children().remove();
			$('<div/>').append(child).appendTo(this);
			var $wrapper = $('> div', this).addClass('images-switch-wrapper'),
				$slider =  $wrapper.find('> img').addClass('images-switch-item').hide(),
				$length = $slider.length;
			var lengthStr = $length < 10 ? '0' + $length : $length;
			var btnPrev = $('<a/>').attr({'href': 'javascript:;', 'title': obj.prevText})
						.addClass( sltClass( obj.prev ) )
						.append( obj.prevText ),
				btnNext = $('<a/>').attr({'href': 'javascript:;', 'title': obj.nextText})
						.addClass( sltClass( obj.next ) )
						.append( obj.nextText ),
				picNum = $('<span/>').addClass( sltClass( obj.picNum ) ).append( '01/'　+　lengthStr ),
				btnWrap = $('<div/>').addClass( 'switch-trigger' ).append(btnPrev, picNum, btnNext);
			if ( child.length > 1 ) {
				$wrapper.after(btnWrap);
			}
			if (obj.altShow) {
				var arrImgAlt = [];
				$slider.each(function() {
					if(typeof $(this).attr('alt') === 'undefined') {
						arrImgAlt.push('');
					} else {
						arrImgAlt.push( $(this).attr('alt') );
					}
				});
				$wrapper.after('<div class="images-switch-title"><h4 title="' + arrImgAlt[0] + '">' + arrImgAlt[0] + '</h4></div>');
				$wrapper.after('<div class="switch-title-bg"></div>');
				$('.switch-title-bg').css('opacity', obj.opacity);
			}

			var nowIndex = 0; // 定义全局指针
			var index; // 定义全局指针
			var startRun; // 预定义自动运行参数
			//主切换函数
			var fadeAB = function() {
				if ( nowIndex !== index ) {
					$slider.eq(nowIndex).fadeOut(obj.slideTime);
					$slider.eq(index).fadeIn(obj.slideTime);
					clearTimeout(startRun);
					startRun = setTimeout(runNext, obj.changeTime);
					nowIndex = index;
					if (obj.altShow) {
						var content = '<h4 title="'+ arrImgAlt[index] +'">'+ arrImgAlt[index] +'</h4>';
						$('.images-switch-title').html( content );
					}
					var indexStr = index < 9 ? '0' + (index + 1) : index + 1;
					$( obj.picNum ).html( indexStr + '/' + lengthStr );
				}
			}
			// 切换到下一个
			var runNext = function() {
				index =  (nowIndex + 1) % $length;
				fadeAB();
			}

			// 点击上一个
			$(obj.next).click(function () {
				if( $slider.queue().length < 1 ) {
					runNext();
				}
				return false;
			});
			//点击下一个
			$(obj.prev).click(function () {
				if( $slider.queue().length < 1 ) {
					index = (nowIndex + $length - 1) % $length;
					fadeAB();
				}
				return false;
			});
			$slider.filter(':first').show();
			if ( obj.autoPlay ) {
				startRun = setInterval(runNext,obj.changeTime);
				$slider.hover(function() {
					clearInterval(startRun); // 重置自动切换函数
				}, function () {
					startRun = setInterval(runNext,obj.changeTime);
				});
			}
		});
	}
	$.fn.imagesSwitch.defaults = {
		imgLayWrap: '.images-switch',
		prev      : '.prev',
		next      : '.next',
		picNum    : '.images-switch-num',
		prevText  : 'PREV',
		nextText  : 'NEXT',
		slideTime : 1000,
		changeTime: 5000,
		altShow   : false,
		opacity   : 0.8,
		autoPlay  : true
	}
})(jQuery);

/**
 * Title: 根据 对象数据返回json对象数据
 * @param: {ELEMENT} 对象数据
 */
function encodeJsonData(data) {
	var arr = [];
	for(i in data){
		arr.push(data[i]);
	}
	return arr;
}

/**
 * Title: 布局列等高JS控制
 * @param: {ELEMENT} 区域ID
 */
(function($){
	$.extend({
		initLayout:function(){
			var arg = arguments,
				arrData = [],
				sortArr = [],
				args = 0;

			for(var i = 0; i < arg.length; i++){
				if( $(arg[i]).length > 0 ) {
					args++ ;
				}
				$(arg[i]).css('height', 'auto');
				arrData[i] = {
					arg : arg[i],
					outer : $(arg[i]).outerHeight() - $(arg[i]).height()
				};
				sortArr[i] = $(arg[i]).outerHeight();
			}
			if( args < 2 ) {
				arrData = [];
				sortArr = [];
				return;
			}
			sortArr = numberSort( sortArr );
			var maxHeight = sortArr[sortArr.length-1];
			$.each(arrData, function(){
				$(this['arg']).height( maxHeight - this['outer'] );
			});
		}
	});
})(jQuery);

/**
 * jQuery 字符串去前后空格方法封装
 */
$.fn.trim = function() {
	var m = this.match(/^\s*(\S+(\s+\S+)*)\s*$/);
	return (m === null) ? '' : m[1];
}

/**
 * javascript 字符串去前后空格方法封装
 */
String.prototype.trim = function() {
	var m = this.match(/^\s*(\S+(\s+\S+)*)\s*$/);
	return (m === null) ? '' : m[1];
}

/**
 * 为字符串添加 toNumber方法
 */
Number.prototype.toNumber = function() {
	return Number(this);
}
String.prototype.toNumber = function() {
	return Number(this);
}

// 点击document执行事件
document.onclick = function(){
	try {
		clickDocument();
	} catch(e) {}
}

// 根据参数名获取URL中参数值，URL中没有该参数则返回null
function getUrlParam(name){
	var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
	var r = window.location.search.substr(1).match(reg);
	if ( r !== null ) {
		return decodeURI(r[2]);
	}
	return null;
}

//将Json对像数据转换成字符串数据
function getJsonString(jsonObj){
	var sA = [];
	(function(o){
	   var isObj=true;
	   if(o instanceof Array)
		  isObj=false;
	   else if(typeof o!='object'){
		  if(typeof o=='string')
			  sA.push('"'+o+'"');
		  else
			  sA.push(o);
		  return;
	   }
	   sA.push(isObj?"{":"[");
	   for(var i in o){
		if(o.hasOwnProperty(i) && i!='prototype'){
			 if(isObj) sA.push('"'+i+'":');
			   arguments.callee(o[i]);
			   sA.push(',');
			}
	   }
	   sA.push(isObj?"}":"]");
	})(jsonObj);
	return sA.slice(0).join('').replace(/,\}/g,'}').replace(/,\]/g,']');
}

//登录验证处理回车事件方法
function pop_enter_login(evt, btn){
	if (KeyInput(evt) == 13){
		$(btn).focus();
	}
}
// 捕捉键盘事件
function KeyInput (evt) {
	if ( window.event ) {
		// IE
		return evt.keyCode;
	} else if ( evt.which ) {
		// FF NE
		return evt.which;
	}
}

/**
 * Title       : DossmBase
 * Description : 对象封装，提供一些 Dossm 专属方法，无版本之分
 * Author      : jiabing.li@wintour.cn
 * Add Date    : 2012.4.6
*/
var DossmBase = function() {
	this.Version = 'dossm.v1.0.0';
	this.Author = 'jiabing.li@wintour.cn';
	this.Date = '03/31/2012';
	this.Description = 'Dossm System JavaScript Base Library';
}
DossmBase.prototype = {
	/**
	 * Title       : Dossm Ajax
	 * Description : 简化jQuery Ajax 步骤
	 * Author      : jiabing.li@wintour.cn
	 * Add Date    : 2012.6.10
	 * @param      : param ==> {} : 参数集
	 * @param      : opt ==> {} || Function : Ajax执行时处理
	 * @param      : err ==> {} || Function : Ajax执行失败时处理，可省略
	*/
	ajax: function (param, opt, err){
		var data = param.data || {};
		data.client_account = client_account;
		data.language = language;
		if(param.referer_code) {
			data.referer_code = param.referer_code;
		}
		if(param.code === '' || param.code) {
			data.code = param.code;
		}
		if(param.param){
			data.param = getJsonString(param.param);
		}
		var o = {
			url: saas_root + param.url,
			data: (data),
			type: param.type || "POST",
			async: typeof param.async === 'undefined' ? true : param.async,
			dataType: param.dataType || "jsonp",
			jsonp: param.jsonp || "jsoncallback",
			beforeSend : function(){
				if (opt.constructor === Object && opt.beforeSend) {
					opt.beforeSend();
				}
			},
			success: function( data ){
				if (data.status == 0) {
					if (opt.constructor === Function) {
						opt(data.data);
					} else {
						opt.success( data.data );
					}
				} else {                    
					if (opt.constructor === Object && opt.error) {
						opt.error(data);
					} else {
						alert(data.info);
					}
				}
			},
			error: function() {
				if (err && err.constructor === Function) {
					if (err()) {
						return;
					}
				}
				alert('处理请求失败！');
			}
		};
		if(param.timeout){
			o.timeout = param.timeout;
		}
		jQuery.ajax(o);
	},
	getChineseStrLength: function(str) { // 获取字符串中文长度
		str = str.trim();
		var chineseLength = 0,
			strLength = str.replace(/[^\x00-\xff]/g,'**').length;
		chineseLength = parseInt(strLength/2) === strLength/2 ? strLength/2 : parseInt(strLength/2) + 0.5;
		return chineseLength;
	},
	ellipse: function(str, len) {// 截取一定长度的字符串
		str = str.trim();
		var boolLimit = this.getChineseStrLength(str)*2 > len;
		if(str && boolLimit) {
			return str.replace(new RegExp('([\\s\\S]{'+len+'})[\\s\\S]*'),'$1…');
		}
		return str;
	},
	getCheckYear: function(yy) {
		if ( yy % 4 !== 0 ) { return false; }
		if ( yy % 100 === 0 && yy % 400 !== 0 ) { return false; }
		return true;
	},
	getMonthDays : function(yy,mm){
		yy = Number(yy);
		mm = Number(mm);
		if ( this.getCheckYear(yy) && mm === 2 ) { return 29; }
		if ( !this.getCheckYear(yy) && mm === 2 ) { return 28; }
		if ( mm === 4 || mm === 6 || mm === 9 || mm === 11) { return 30; }
		return 31;
	},
	/**
	 * Title       : 年份和月份日期下拉框onchange事件
	 * Description : 根据当前日期填充下拉框年份和月份
	 * Author      : jiabing.li@wintour.cn
	 * Add Date    : 2012.4.18
	 * @param      : obj ==> 为对象时是调用者本身，非对象时，为此下拉框ID(带‘#’号)
	*/
	selectYearFill : function(data, selfId, wrapId, callback) {
		var html = '',
			_self = this;
		$.each(data, function(){
			var y = this.year,
				m = _self.CheckNumberMinTen(this.month);
			if (isChinese)
				html += '<option value="' + y + ',' + m
					+ '">'+ y + '年' + m + '月</option>';
			else
				html += '<option value="' + y + ',' + m
					+ '">'+ y + ' / ' + m + '</option>';
		});
		$(selfId).html( html );
		if(callback){
			callback(data, wrapId);
		} else {
			refreshSelect('select', wrapId);
		}
	},
	selectMonthFill : function(data, sonId, wrapId, date) {
		var self = this;
		var year = 0,
			month = 0,
			html = '',
			opt = [];
		if(!date){
			year = new Date().getFullYear();
			month = new Date().getMonth() +1;
		} else {
			year = date[0];
			month = date[1];
		}
		$.each(data, function() {
			if(this['year'] === year && this['month'] === month){
				opt = this['fields'];
				return;
			}
		});
		$.each(opt, function() {
			html += '<option value="' + this['year'] + '-' + this['month'] + '-' + this['day'] + '">';
			html +=     this['day'] + '&nbsp;';
			html +=     self.getWeek( this['week'] );
			html += '</option>';
		});
		$(sonId).html( html );
		setTimeout(function(){
			refreshSelect('select', wrapId);
		}, 0);
	},
	/**
	 * Title       : 时间处理
	 * Description : 根据传入的月份和开始日期或按方法默认值返回一段关于时间
	 * Author      : jiabing.li@wintour.cn
	 * Add Date    : 2012.3.31
	 * @param      : {ELEMENT} n: 月份 Number类型 可缺省 默认为12
	 * @param      : {ELEMENT} starDate: 开始日期 Date对象 可缺省 默认为当前日期
	 * @return     : json格式数据 如下
					 [{'year':2012,'month':3,'fields':[{'year':2012,
					  'month':3,'day':31,'week':6},{}...]},{},{}...]
	*/
	getTimeData : function(n,starDate){
		var n = n || 12;
		var timeData = [],
			date = starDate || new Date();
			year = date.getFullYear(),
			month = date.getMonth() + 1,
			day = date.getDate();
		if(day !== 1){
			n++;
		}
		for(var i = 0; i < n; i++){
			var m = month + i,
				y = year,
				pro = {};
			if(m > 12){
				m -= 12;
				y += 1;
			}
			pro['year'] = y;
			pro['month'] = m;
			pro['fields'] = [];
			var j = 1,
				k = 0,
				d = this.getMonthDays(y, m);
			if(y === year && m === month){
				j = day;
			}
			if(y === year + 1 && m === month){
				d = day - 1;
			}
			for(var q = j; q <= d; q++){
				pro['fields'][k] = {
					'year' : y,
					'month' : m,
					'day' : q,
					'week' : new Date(y, m-1, q).getDay()
				};
				k++;
			}
			timeData[i] = pro;
		}
		return timeData;
	},
	/**
	 * Title       : 时间处理方法
	 * Description : 根据传入的开始日期以及显示天数或默认值返回时间该时间段时间操作数据
	 * Author      : jiabing.li@wintour.cn
	 * Add Date    : 2012.3.31
	 * @param      : {ELEMENT} starDate: 开始日期 Date对象 可缺省 默认为当前日期
	 * @param      : {ELEMENT} day: 显示天数 可缺省 默认为平年365天 闰年366天
	 * @return     : json格式数据 如下
					 [{'year':2012,'month':3,'fields':[{'year':2012,
					  'month':3,'day':31,'week':6},{}...]},{},{}...]
	*/
	getReservatTimeData : function(starDate, days){
		var d = 365,
			sd = null,
			ed = null;
		if(starDate){
			var _y = starDate.getFullYear(),
				_m = starDate.getMonth(),
				_d = starDate.getDate();
			sd = new Date(_y, _m, _d);
			ed = new Date(_y, _m, _d);
		} else {
			sd = new Date();
			ed = new Date();
		}
		if( this.getCheckYear( sd.getFullYear() + 1 ) ){
			d = 366;
		}
		var days = days || d;
		days--;
		ed.setDate(ed.getDate() + days);
		var sYear = sd.getFullYear(),
			sMonth = sd.getMonth() + 1,
			sDay = sd.getDate(),
			eYear = ed.getFullYear(),
			eMonth = ed.getMonth() + 1,
			em = eMonth,
			eDay = ed.getDate(), // 13
			timeData = [];
		if(eYear === sYear + 1){
			em += 12;
		}
		for(var i = sMonth; i <= em; i++){
			var mm = i,
				yy = sYear,
				pro = {};
			if(mm > 12){
				yy ++;
				mm -= 12;
			}
			pro['year'] = yy;
			pro['month'] = mm;
			pro['fields'] = [];
			var j = 1,
				k = 0,
				d = this.getMonthDays(yy, mm);
			if(yy === sYear && mm === sMonth){
				j = sDay;
			}
			if(yy === eYear && mm === eMonth){
				d = eDay;
			}
			for(var q = j; q <= d; q++){
				pro['fields'][k] = {
					'year' : yy,
					'month' : mm,
					'day' : q,
					'week' : new Date(yy, mm-1, q).getDay()
				};
				k++;
			}
			timeData.push(pro);
		}
		return timeData;
	},
	getWeek: function(num, long){
		var arrWeek = ['Sun.','Mon.','Tue.','Wed.','Thu.','Fri.','Sat.'];
		if(isChinese){
			arrWeek = ['周日','周一','周二','周三','周四','周五','周六'];
			if(long === 'long'){
				arrWeek = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
			}
		} else {
			if(long === 'long'){
				arrWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
			}
		}
		return arrWeek[num];
	},
	/**
	 * Title       : Array.arrayRemoveRepeat()
	 * Description : 数字数组或对象数组(属性name)去除重复
	 * Author      : jiabing.li@wintour.cn
	 * Add Date    : 2012.06.17
	 * @return     : Array
	*/
	arrayRemoveRepeat: function (arr) {
		if (arr.length === 0) {
			return [];
		}
		var _arr = [];
		for (var i=0; i<arr.length; i++) {
			var flag = true;
			for (var j=0; j<_arr.length; j++) {
				if (arr[i].constructor === Object) {
					if (arr[i].name === _arr[j].name) flag = false;
				} else {
					if (arr[i] === _arr[j]) flag = false;
				}                    
			}
			if (flag) _arr.push(arr[i]);
		}
		return _arr;
	},
	/**
	 * Title       : Array.arraySort()
	 * Description : 数字数组或对象数组(属性id)排序方法，默认从小到大排序
	 * Author      : jiabing.li@wintour.cn
	 * Add Date    : 2012.06.17
	 * @return     : Array
	*/
	arraySort: function (arr) {
		if (arr.length === 0) {
			return [];
		}
		var _arr = [];
		var flag = arr[0].constructor === Object;
		if (flag) {
			_arr = arr;
		} else {
			for(var i=0; i<arr.length; i++) {
				_arr[i] = Number( arr[i] );
			}
		}
		var len = _arr.length,
			empty;
		for(var k=0; k<len-1; k++) {
			for(var i=0; i<len-k-1; i++) {
				var b = false;
				if (flag) {
					if (Number(_arr[i].id) > Number(_arr[i+1].id)) {
						b = true;
					}
				} else {
					if (_arr[i] > _arr[i+1]) {
						b = true;
					}
				}
				if (b) {
					empty = _arr[i+1];
					_arr[i+1] = _arr[i];
					_arr[i] = empty
				}
			}
		}
		return _arr;
	},
	/**
	 * 为小于十的数字前加'0'
	 * @param {Number} num
	 */
	CheckNumberMinTen: function (num) {
		return Number(num) < 10 ? '0' + num : num;
	},
	GetMintueHour: function (minute) {
		var minute = Number(minute),
			h = Math.floor(minute / 60),
			m = minute % 60;
			h = this.CheckNumberMinTen(h);
			m = this.CheckNumberMinTen(m);
		return h + ':' + m;
	},
	/**
	 * Title       : 下拉框中时间处理
	 * Description : 传入最大小时 返回相应结果
	 * Author      : jiabing.li@wintour.cn
	 * Add Date    : 2012.8.14
	 * @param      : {Number} num: 最大小时 可缺省 默认为24
	 * @return     : [{'val':'00:00'},{'val':'02:00'},{}...]
	*/
	SelectTimeData: function (obj) {
		obj = obj || {};
		var _self = this,
			h = obj.hours === undefined ? 24 : obj.hours,
			m = obj.minute === undefined ? 60 : obj.minute,
			len = h * 60 / m,
			arr = [];
		for (var i = 0; i < len; i++) {
			arr.push({
				val: _self.GetMintueHour(i * m)
			});
		}
		return arr;
	},
	SelectHoursData: function (num) {
		var num = num === undefined ? 24 : num,
			arr = [];
		for (var i = 0; i < num; i++) {
			arr.push({
				val: this.CheckNumberMinTen(i)
			});
		}
		return arr;
	},
	SelectMinuteData: function (num) {
		var num = num === undefined ? 10 : num,
			arr = [],
			len = 60 / num;
		for (var i = 0; i < len; i++) {
			arr.push({
				val: this.CheckNumberMinTen(i * num)
			});
		}
		return arr;
	}
};
var Dossm = new DossmBase();

// 根据年月日时分秒生成十九位随机数
function create19Rondom() {
	function _fill(n) {
		return Number(n) < 10 ? '0' + n : n;
	}
	var t = new Date(),
		y = t.getFullYear(),
		m = _fill(t.getMonth() + 1),
		d = _fill(t.getDate()),
		hh = _fill(t.getHours()),
		mi = _fill(t.getMinutes()),
		ss = _fill(t.getSeconds()),
		r = String(Math.random()).substring(2,7);
	return [y, m, d, hh, mi, ss, r].join('');
}
function getIdentify(callback) {
	var id = $.cookie('dossm-id');

	if (id == null) {
		id = create19Rondom();
		$.cookie('dossm-id', id, {path: '/', expires: 10000, domain: '.dossm.com'});
		if (!$.cookie('dossm-id')) {
			$.cookie('dossm-id', id, {path: '/', expires: 10000});
		}
	}
	callback(id);
}