/**
 * File: log.js
 * Description: 
 * Author: linzhehuang
 * Blog：http://www.cnblogs.com/linzhehuang/
 * Version: 0.0.1
 * Date: 2017 5.3
 */
function Log(eleId) {
	// 通过元素id绑定log输出元素，默认绑定body元素
	var _self_ = document.getElementById(eleId) || document.body;
	// 颜色列表
	var colorList = {
		black: "#424242",
		red: "#C62828",
		green: "#558B2F",
		brown: "#795548",
		purple: "#6A189A",
		grey: "#9E9E9E",
		bgColor: "#F5F5F5"
	};
	// 获取相应颜色文本的html代码
	// text-文本[必选]
	// textColor-文本颜色，默认为黑色
	function getColorText(text,textColor) {
		textColor = textColor || colorList.black;
		return ("<span style='color:" + textColor +
		"'>" + text + "</span>" );
	}
	// 设置背景颜色
	this.setBgColor = function(){
		_self_.setAttribute("style",
		"background-color:" + colorList.bgColor + ";");
	}
	// 输出日志
	// log-日志[必选]
	// type-日志类型，默认为 'msg'
	//  ++ msg 普通消息
	//  ++ err 错误消息
	//  ++ evt 事件消息 使用{key:'text',value:'text'}格式
	// showDate-是否显示日期，默认为true
	this.log = function(log,type,showDate){
		function getDateText() {
			var dateObj = new Date();
			var s = dateObj.getSeconds();
			var m = dateObj.getMinutes();
			var h = dateObj.getHours();
			var date = dateObj.getDate();
			var month = dateObj.getMonth()+1;
			var year = dateObj.getFullYear();
			
			return ( 
			h + ":" +
			m + ":" +
			s);
		}
		type = type || 'msg';
		showDate = (showDate == undefined) ? true : false;
		
		switch (type) {
			case 'msg':
				mainText = getColorText(log,colorList.brown);
				break;
			case 'err':
				mainText = getColorText(log,colorList.red);
				break;
			case 'evt':
				mainText = getColorText(log.key,colorList.green) +
				getColorText(": ") + 
				getColorText(log.value);
				break;
		}
		dateText = (showDate)? getColorText(getDateText(),colorList.purple) : "";
		//
		_self_.innerHTML += "<p>" + mainText + " " + dateText + "</p>"
	}
}