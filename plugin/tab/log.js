var LOG = {
	list:[{
		ver:'v1.3',
		date:'2015-06-07',
		desc:[
			'1.优化代码逻辑'
		]
	}]
}

$(function(){
	$('#updatelog').html(template('updatelog-tpl', LOG));
});