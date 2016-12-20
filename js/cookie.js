//3个参数，一个是cookie的名子，一个是值 ,一个时间
function SetCookie(name,value,time){ 
	//设置cookie储存事件
	if (time) {
		var Days = time; 
	}else{
		var Days = 1; //此 cookie 将被保存 1 天
	}
	var exp = new Date(); //new Date("December 31, 9998"); 
	exp.setTime(exp.getTime() + Days*24*60*60*1000); 
	//设置cookie
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
} 
//取cookies函数 
function getCookie(name){ 
	var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)")); 
	if(arr != null) return unescape(arr[2]); return null; 
} 
//删除cookie 
function delCookie(name){ 
	var exp = new Date(); 
	exp.setTime(exp.getTime() - 1); 
	var cval=getCookie(name); 
	if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString(); 
} 



/************************************另一个非常实用的cookie代码********************/
//获得Cookie解码后的值 
function GetCookieVal(offset) { 
	var endstr = documents.cookie.indexOf (";", offset); 
	if (endstr == -1) 
	endstr = documents.cookie.length; 
	return unescape(documents.cookie.substring(offset, endstr)); 
} 
//设定Cookie值 
function SetCookie(name, value) { 
	var expdate = new Date(); 
	var argv = SetCookie.arguments; 
	var argc = SetCookie.arguments.length; 
	var expires = (argc > 2) ? argv[2] : null; 
	var path = (argc > 3) ? argv[3] : null; 
	var domain = (argc > 4) ? argv[4] : null; 
	var secure = (argc > 5) ? argv[5] : false; 
	if(expires!=null) expdate.setTime(expdate.getTime() + ( expires * 1000 )); 
	documents.cookie = name + "=" + escape (value) +((expires == null) ? "" : ("; expires="+ expdate.toGMTString())) 
	+((path == null) ? "" : ("; path=" + path)) +((domain == null) ? "" : ("; domain=" + domain)) 
	+((secure == true) ? "; secure" : ""); 
} 
//删除Cookie
function DelCookie(name){ 
	var exp = new Date(); 
	exp.setTime (exp.getTime() - 1); 
	var cval = GetCookie (name); 
	documents.cookie = name + "=" + cval + "; expires="+ exp.toGMTString(); 
} 
//获得Cookie的原始值 
function GetCookie(name){ 
	var arg = name + "="; 
	var alen = arg.length; 
	var clen = documents.cookie.length; 
	var i = 0; 
	while (i < clen) 
	{ 
	var j = i + alen; 
	if (documents.cookie.substring(i, j) == arg) 
	return GetCookieVal (j); 
	i = documents.cookie.indexOf(" ", i) + 1; 
	if (i == 0) break; 
	} 
	return null; 
} 