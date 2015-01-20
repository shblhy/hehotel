/**
 *	在线咨询功能JS
 *	author:ken
 *	date:2012-4-10
 **/
 
 //在线咨询提交
 function consult_submit(){
	//var action_code = $("#hotel_id").val();
	var v_param = {
		"name" : 'action_online_consult', //名称或者ID
		//"code" : hotel_code, //节点Code
		"fields" : // 提交内容（自定义字段）
		{
			gender : $("#c-choose-title").val(),
			last_name : $("#c-last-name").val(),
			first_name : $("#c-first-name").val(),
			email : $("#c-email").val(),
			tel : $("#c-contact").val(),
            problem_type : $("#c-type").val(),		
			content : $("#c-ask-detail").val()
		}
		
	};
	// 调用Dossm接口（使用回调函数）
	var di = new DossmInteraction();
	di.setInteraction(v_param, function (data) {
		alert('谢谢您的关注,我们将尽快回复您的咨询!');
        $.fancybox.close();
	},
		function (data) {
		alert(data.info);
	});
	
}
jQuery(document).ready(function ($) {
	$('#form-consultation').DossmValidat('#btn_consult', function () {
		consult_submit();
	});
});