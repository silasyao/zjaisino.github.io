var LOG = {
    list:[{
        ver:'v1.2.5',
        date:'2016-09-25',
        desc:[
            '1.细节优化'
        ]
    },{
        ver:'v1.2.4',
        date:'2016-09-18',
        desc:[
            '1.细节优化'
        ]
    },{
        ver:'v1.2.3',
        date:'2016-09-13',
        desc:[
            '1.修复一些bug'
        ]
    }, {
        ver:'v1.2.2',
        date:'2016-09-10',
        desc:[
            '1.修复一些bug',
            '2.取消ctrl多选功能，直接点击多选'
        ]
    }, {
        ver:'v1.2.1',
        date:'2016-09-10',
        desc:[
            '1.修复一些bug',
            '2.增加双面板日历、年月下拉、时分秒选择、自定义单元格功能'
        ]
    }, {
        ver:'v1.1.1',
        date:'2016-08-10',
        desc:[
            '初版发布'
        ]
    }]
}

$(function(){
    $('#updatelog').html(template('updatelog-tpl', LOG));
});