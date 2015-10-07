var LOG = {
    list:[{
        ver:'v2.8.8',
        date:'2015-09-30',
        desc:[
            '1.修复IE6弹出层初始化高度自适应问题'
        ]
    }, {
        ver:'v2.8.7',
        date:'2015-08-14',
        desc:[
            '1.将遮罩层优化为全局的，如果显示多个都设置了遮罩的弹出层，直到关闭最后一个才会关闭遮罩层'
        ]
    }, {
        ver:'v2.8.6',
        desc:[
            '1.优化了实例方法layerResize逻辑'
        ]
    }, {
        ver:'v2.8.4',
        desc:[
            '1.优化了Layer.extend逻辑'
        ]
    }, {
        ver:'v2.8.3',
        desc:[
            '1.修复了提示层没有绑定事件在关闭时，unbind报错问题',
            '2.修复了弹出层在关闭时options未定义错误'
        ]
    }]
}

$(function(){
    $('#updatelog').html(template('updatelog-tpl', LOG));
});