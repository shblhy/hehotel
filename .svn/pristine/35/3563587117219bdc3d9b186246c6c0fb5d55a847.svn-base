/**
 *	Dossm集团版交互公用JS
 *	author:ken
 *	date:2012-6-2
 **/
function DossmInteraction() {
    //读取CMS交互信息
    this.getInteraction = function(a_param, f_callback, f_callback_err) {
    	$.ajax({
    		url: saas_root + "/Cms/getInteraction/",
    		data: ({
    			client_account: client_account,
    			language: language,
				code: a_param.code,
    			param: getJsonString(a_param)
    		}),
    		type: "GET",
    		async: false,
    		dataType: "jsonp",
    		jsonp: "jsoncallback",
    		success: function( data ){
    			if (data.status == 0) {    			    
    			    if (f_callback) f_callback(data);
    			} else {
    			    if (f_callback_err) f_callback_err(data);
        			else alert(data.info);
    			}
    		},
    		error: function() {
    		    alert(LP_public['interface_error']);//接口调用失败
    		}
    	});
    } 
    //读取CMS登录会员交互信息
    this.getMyInteraction = function(a_param, f_callback, f_callback_err) {
    	$.ajax({
    		url: saas_root + "/Cms/getMyInteraction/",
    		data: ({
    			client_account: client_account,
    			language: language,
				code: a_param.code,
    			param: getJsonString(a_param)
    		}),
    		type: "GET",
    		async: false,
    		dataType: "jsonp",
    		jsonp: "jsoncallback",
    		success: function( data ){
    			if (data.status == 0) {    			    
    			    if (f_callback) f_callback(data);
    			} else {
    			    if (f_callback_err) f_callback_err(data);
        			else alert(data.info);
    			}
    		},
    		error: function() {
    			  alert(LP_public['interface_error']);//接口调用失败
    		}
    	});
    }
    //CMS交互请求提交
    this.setInteraction = function(a_param, f_callback, f_callback_err) {
    	$.ajax({
    		url: saas_root + "/Cms/setInteraction/",
    		data: ({
    			client_account: client_account,
    			language: language,
				code: a_param.code,
    			param: getJsonString(a_param)
    		}),
    		type: "GET",
    		async: false,
    		dataType: "jsonp",
    		jsonp: "jsoncallback",
    		success: function( data ){
    			if (data.status == 0) {    			    
    			    if (f_callback) f_callback(data);
    			} else {
    			    if (f_callback_err) f_callback_err(data);
        			else alert(data.info);
    			}
    		},
    		error: function() {
    			  alert(LP_public['interface_error']);//接口调用失败
    		}
    	});
    }
    
    //简单预订请求提交
    this.setRequest = function(a_param, f_callback, f_callback_err) {
    	$.ajax({
    		url: saas_root + "/Request/submit/",
    		data: ({
    			client_account: client_account,
    			language: language,
				code: a_param.code,
    			param: getJsonString(a_param)
    		}),
    		type: "GET",
    		async: false,
    		dataType: "jsonp",
    		jsonp: "jsoncallback",
    		success: function( data ){
    			if (data.status == 0) {    			    
    			    if (f_callback) f_callback(data);
    			} else {
    			    if (f_callback_err) f_callback_err(data);
        			else alert(data.info);
    			}
    		},
    		error: function() {
    			  alert(LP_public['interface_error']);//接口调用失败
    		}
    	});
    }
    //查询完整预订请求信息
    this.getRequestOrderByOrderNoAndLastName = function(a_param, f_callback, f_callback_err) {
    	$.ajax({
    		url: saas_root + "/Guest/getRequestOrderByOrderNoAndLastName/",
    		data: ({
                client_account: client_account,
                language: language,
                code: a_param.code,
                order_no: a_param.order_no,
                last_name: a_param.last_name
            }),
    		type: "GET",
    		async: false,
    		dataType: "jsonp",
    		jsonp: "jsoncallback",
    		success: function( data ){
    			if (data.status == 0) {    			    
    			    if (f_callback) f_callback(data);
    			} else {
    			    if (f_callback_err) f_callback_err(data);
        			else alert(data.info);
    			}
    		},
    		error: function() {
    			  alert(LP_public['interface_error']);//接口调用失败
    		}
    	});
    }
    //查询预订请求信息
    this.getqueryRequest = function(a_param, f_callback, f_callback_err) {
    	$.ajax({
    		url: saas_root + "/Request/queryRequestOrderById/",
    		data: ({
    			client_account: client_account,
    			language: language,
    			param: getJsonString(a_param)
    		}),
    		type: "GET",
    		async: false,
    		dataType: "jsonp",
    		jsonp: "jsoncallback",
    		success: function( data ){
    			if (data.status == 0) {    			    
    			    if (f_callback) f_callback(data);
    			} else {
    			    if (f_callback_err) f_callback_err(data);
        			else alert(data.info);
    			}
    		},
    		error: function() {
    			  alert(LP_public['interface_error']);//接口调用失败
    		}
    	});
    }
    //修改预订请求信息
    this.modifyqueryRequest = function(a_param, f_callback, f_callback_err) {
    	$.ajax({
    		url: saas_root + "/Request/modifyRequestOrder/",
    		data: ({
    			client_account: client_account,
    			language: language,
    			param: getJsonString(a_param)
    		}),
    		type: "GET",
    		async: false,
    		dataType: "jsonp",
    		jsonp: "jsoncallback",
    		success: function( data ){
    			if (data.status == 0) {    			    
    			    if (f_callback) f_callback(data);
    			} else {
    			    if (f_callback_err) f_callback_err(data);
        			else alert(data.info);
    			}
    		},
    		error: function() {
    			  alert(LP_public['interface_error']);//接口调用失败
    		}
    	});
    }
    //取消预订请求信息
    this.cancelqueryRequest = function(a_param, f_callback, f_callback_err) {
    	$.ajax({
    		url: saas_root + "/Request/cancelRequestOrder/",
    		data: ({
    			client_account: client_account,
    			language: language,
    			param: getJsonString(a_param)
    		}),
    		type: "GET",
    		async: false,
    		dataType: "jsonp",
    		jsonp: "jsoncallback",
    		success: function( data ){
    			if (data.status == 0) {    			    
    			    if (f_callback) f_callback(data);
    			} else {
    			    if (f_callback_err) f_callback_err(data);
        			else alert(data.info);
    			}
    		},
    		error: function() {
    			  alert(LP_public['interface_error']);//接口调用失败
    		}
    	});
    }
    //在线支付请求
    this.payonlineRequest = function(a_param, f_callback, f_callback_err) {
    	$.ajax({
    		url: "http://paymentwebservices.demo.wintour.cn/ProcessHandler.ashx",
    		data: a_param,
    		type: "GET",
    		async: true,
    		dataType: "jsonp",
    		jsonp: "jsoncallback",
    		success: function( data ){
    			if (data.status == 0) {    			    
    			    if (f_callback) f_callback(data);
    			} else {
    			    if (f_callback_err) f_callback_err(data);
        			else alert(data.info);
    			}
    		},
    		error: function() {
    			  alert(LP_public['interface_error']);//接口调用失败
    		}
    	});
    }
}