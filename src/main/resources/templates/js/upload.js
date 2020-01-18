/**
 * 
 * Author: Leo Wang 
 * Company: 上海织田信息技术有限公司 
 * E-mail: zhiwei.wang@oda-group.com
 */

// 上传按钮的name统一定义成uploadBtn
// 上传按钮的Id 用来定义附件的type
function initUploadBtn(base,uuid,id){
	    /*弹出文件上传下载子页面*/
    $("input[name='uploadBtn']").each(function(){
    	var type = this.id;
    	getAttachmentList(base,uuid,id,type);
    	$(this).click(function () {
	        layer.open({
            type: 2,
            title: 'File Upload',
            skin: 'layui-layer-rim',
            area: ['800px', '500px'],
            maxmin: true,
            content: base + '/attachment/toCommonAttachment.action?attachmentFile.attachToUuid=' + uuid + '&attachmentFile.attachToId=' + id + "&attachmentFile.type=" + type,		//内容
	            end: function () {
            		getAttachmentList(base,uuid,id,type);
	            }
	        });
	    });
    });
}

//刷新附件部分的代码，用于值展示文件名
function getAttachmentList(base,uuid,id,type){
    var url;
    if (isStringEmpty(id)) {
        url = base + '/attachment/getAttachmentsList.action?attachmentFile.attachToUuid=' + uuid + '&attachmentFile.type=' + type;
    } else {
        url = base + '/attachment/getAttachmentsList.action?attachmentFile.attachToUuid=' + uuid + '&attachmentFile.attachToId=' + id + "&attachmentFile.type=" + type;
    }
	$.ajax({
        type: "POST",   //鎻愪氦鐨勬柟娉�
        url: url,
        success: function (data) {  //返回
        	//此处自定义
        	$("#" + type + "_DIV").html('');
        	data.forEach(function(file){
        		$("#" + type + "_DIV").append("<a class='ml-2' href='" + base + "/attachment/downloadAttach.action?attachmentFileId=" + file.id + "' target='blank'>" + file.fileName + "</a>");
        	})
        }
    });
}

/**
 * 判断字符是否为空， true:是为空    false：不为空
 * @param str
 * @returns {boolean}
 */
function isStringEmpty(str) {
    if (str == null || str == '' || str == undefined) {
        return true;
    } else {
        return false;
    }
}