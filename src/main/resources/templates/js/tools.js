/**
 *
 * Author: Leo Wang
 * Company: 上海织田信息技术有限公司
 * E-mail: zhiwei.wang@oda-group.com
 */
// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(H)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).format("yyyy-MM-dd HH:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).format("yyyy-M-d H:m:s.S") ==> 2006-7-2 8:9:4.18
Date.prototype.format = function (fmt) { // author: meizz
    var o = {
        "M+": this.getMonth() + 1,                 // 月份
        "d+": this.getDate(),                    // 日
        "h+": this.getHours(),                   // 小时
        "m+": this.getMinutes(),                 // 分
        "s+": this.getSeconds(),                 // 秒
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        "S": this.getMilliseconds()             // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

function generateEmpField(fieldId, fieldname) {
    var html = '';
    html += '<div class="form-inline"><input style="display:none;" name="' + fieldname + '" id="' + fieldId + '_hidden" />';
    html += '<input id="' + fieldId + '" class="form-control form-control-sm" readonly="readonly" />';
    html += '<a href="#" class="ml-2" onclick="popupSelector(\'' + fieldId + '\');"><img src="${base}/images/icon_usergroups_sml.gif" align="absmiddle"/></a></div>';
    return html;
}

function popupSelector(fieldId) {
    globalFieldId = fieldId;
    employeeSearchPopup = window.open('${base}/exporthr/index.action', 'Employee Search',
        'height=700,width=700,top=' + (window.screen.height - 30 - 700) / 2 + ',left=' + (window.screen.width - 10 - 700) / 2
        + ',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no');
    employeeSearchPopup.focus();
}

function callback(empId, employeeNo) {
    if (globalFieldId) {
        document.getElementById(globalFieldId).value = employeeNo;
        document.getElementById(globalFieldId + '_hidden').value = empId;
    }
    employeeSearchPopup.close();
};
var globalFieldId = '';
var employeeSearchPopup;

function textFormatter(value, row, index) {
    if (value) {
        return value;
    }
    return "";
}

function numFormatter(value, row, index) {
    if (value) {
        return value;
    }
    return 0;
}

function decimalFormatter(value, row, index) {
    if (value) {
        return toDecimal2(value);
    }
    return "0.00";
}

function dateFormatter(value, row, index) {
    if (value) {
        return moment(value).format('YYYY-MM-DD');
    }
    return "";
}

var globalIdMap;
function hrFormatter(value, row, index) {
    if (!globalIdMap) {
        globalIdMap = new Map();
    }
    if (globalIdMap.get(value)) {
        return globalIdMap.get(value);
    } else if (value && value != "") {
        var xhr = $.ajax({
            type : "get",
            url : getRootPath(2)+'exporthr/shortText.action?employee.id='+value,
            async : false
        });
        globalIdMap.set(value, xhr.responseText);
        return xhr.responseText;
    } else {
        return "";
    }
}

function toDecimal2(x) {
    var f = parseFloat(x);
    if (isNaN(f)) {
        return false;
    }
    var f = Math.round(x*100)/100;
    var s = f.toString();
    var rs = s.indexOf('.');
    if (rs < 0) {
        rs = s.length;
        s += '.';
    }
    while (s.length <= rs + 2) {
        s += '0';
    }
    return s;
}

function getRootPath(type) {
    //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
    var curWwwPath=window.document.location.href;
    //获取主机地址之后的目录，如： /uimcardprj/share/meun.jsp
    var pathName=window.document.location.pathname;
    var pos=curWwwPath.indexOf(pathName);
    //获取主机地址，如： http://localhost:8083
    var localhostPaht=curWwwPath.substring(0,pos);
    //获取带"/"的项目名，如：/uimcardprj
    var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
    if (type == 1) {
        return (localhostPaht + '/');
    }
    if (type == 2) {
        if (localhostPaht.includes("10.190.84.134")
            || localhostPaht.includes("10.190.84.154")
            || localhostPaht.includes("smecs.com")) {
            return (localhostPaht + projectName + '/');
        }
        return (localhostPaht + '/');
    }

}

//判断是否为空
function isEmpty(str) {
    if(str == "" || str == null || str == undefined) {
        return true;
    } else {
        return false;
    }
}
