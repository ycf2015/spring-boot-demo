$(function () {
    
    loadSystem();
    overlayScrollbars($('div.sidebar'));

    var menuId = getUrlParam('leftMenuId');
    if (('' == menuId) ||(menuId == null)) {
        menuId = '96';
    }
    if ('' != menuId) {
        var url = getRootPath(2) + 'menu/getTopMenu.action?leftMenuId='+menuId;
        $.getJSON(url, function (data) {
            $.each(data, function (i, item) {
                if (item['pId'] == menuId) {
                    var children = item['children'];
                    if (undefined != children && children.length > 0) {
                        $.each(children, function (idx, child) {
                            fillSystemMenus($('.main-header ul.top-menu'), child, getRootPath(1));
                        });
                    }
                }
            });
        });
    }
    
    // 左侧 system 菜单点击效果
    systemMenuAction();
    var st = setTimeout(function () {
        highlightMenu();
        clearTimeout(st);
    }, 150);

});

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

// 获取 url 中的参数
function getUrlParam(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return null;
}

function systemMenuAction() {
    $(document).on('click', '.control-sidebar .sidebar li > a', function (e) {
        var that = $(this);
        //$('.control-sidebar .sidebar .menu-open').children('ul').hide();
        //$('.control-sidebar .sidebar .menu-open').removeClass('menu-open');
        if (!that.parent('li').hasClass('has-treeview')) {
            that.parents('li.has-treeview').children('ul').show();
            that.parents('li.has-treeview').addClass('menu-open');
            $('.control-sidebar .sidebar .active').removeClass('active');
            that.parents('li.has-treeview').children('a').addClass('active');
            that.addClass('active');
        }
    });
}

function highlightMenu() {
    $('[href="' + window.document.location.href + '"]').addClass('active');

    // 左侧菜单
    var sysId = getUrlParam('leftMenuId');
    $('[data-id="' + sysId + '"]').addClass('active');
    $('[data-id="' + sysId + '"]').parents('li.has-treeview').addClass('menu-open');
    $('[data-id="' + sysId + '"]').parents('li.has-treeview').children('a').addClass('active');
}

function loadSystem() {
    var ele = $('div.sidebar ul.nav-sidebar');
    var url = getRootPath(2) + 'menu/getLeftMenu.action';
    $.getJSON(url, function (data) {
        $.each(data, function (i, item) {
            fillSystems(ele, item, getRootPath(1),false);
        });
    });
}


function fillSystems(ele, item, base,flag) {
    var children = item['children'];
    var li = $('<li class="nav-item"></li>');
    if(flag){
    	li.addClass('pl-3');
    }
    var linkA = $('<a href="#" class="nav-link"></a>');
    if (undefined != children && children.length > 0) {
        // has child menu
        li.addClass('has-treeview');
        var icon = item['icon'];
        if (undefined != children && '' != icon) {
            linkA.append('<i class="' + icon + '"></i>');
        }
        linkA.append('<p>' + item['name'] + '<i class="fas fa-angle-left right"></i></p>')
        li.append(linkA);

        var childMenuUl = $('<ul class="nav nav-treeview"></ul>');
        // child menu
        $.each(children, function (i, child) {
            fillSystems(childMenuUl, child, base,true);
        });
        li.append(childMenuUl);
    } else {
        // no child menu
        var url = item['url'];
        if (undefined != url && '' != url) {
            linkA.attr('href', base + url);
            linkA.attr('data-href', base + url.substr(0, url.lastIndexOf('/')));
        } else {
            linkA.attr('href', 'javascript:;');
        }
        linkA.attr('data-id', item['id']);
        var icon = item['icon'];
        if (undefined != icon && '' != icon) {
            linkA.append('<i class="' + icon + '"></i>');
        }
        linkA.append('<span>' + item['name'] + '</span>');
        li.append(linkA);
    }
    ele.append(li);
}

function fillSystemMenus(ele, item, base) {
    var children = item['children'];
    var li = $('<li class="nav-item"></li>');
    var linkA = $('<a href="#" class="nav-link"></a>');
    if (undefined != children && children.length > 0) {
        // has child menu
        linkA.addClass('dropdown-toggle').attr('data-toggle', 'dropdown').attr('aria-haspopup', 'true').attr('aria-expanded', 'false');
        linkA.append(item['name']);
        li.addClass('dropdown');
        li.append(linkA);

        var childMenuUl = $('<ul class="dropdown-menu border-0 shadow"></ul>');
        // child menu
        $.each(children, function (i, child) {
            fillMenus(childMenuUl, child, base);
        });
        li.append(childMenuUl);
    } else {
        // no child menu
        var url = item['url'];
        if (undefined != url && '' != url) {
            linkA.attr('href', base + url);
        } else {
            linkA.attr('href', 'javascript:;');
        }
        linkA.append(item['name']);
        li.addClass('d-none d-sm-inline-block');
        li.append(linkA);
    }
    ele.append(li);
}

function fillMenus(ele, item, base) {
	var children = item['children'];
    var li = $('<li></li>');
    var linkA = $('<a href="#" class="dropdown-item"></a>');
    if (undefined != children && children.length > 0) {
        // has child menu
        li.addClass('dropdown-submenu');
        li.addClass('dropdown-hover');
        linkA.addClass('dropdown-toggle');
        
        linkA.append('<p>' + item['name'] + '<i class="fas fa-angle-left right"></i></p>')
        li.append(linkA);

        var childMenuUl = $('<ul class="dropdown-menu border-0 shadow"></ul>');
        // child menu
        $.each(children, function (i, child) {
        	fillMenus(childMenuUl, child, base);
        });
        li.append(childMenuUl);
    } else {
        // no child menu
        var url = item['url'];
        if (undefined != url && '' != url) {
            linkA.attr('href', base + url);
            linkA.attr('data-href', base + url.substr(0, url.lastIndexOf('/')));
        } else {
            linkA.attr('href', 'javascript:;');
        }
        linkA.attr('data-id', item['id']);
        var icon = item['icon'];
        if (undefined != icon && '' != icon) {
            linkA.append('<i class="' + icon + '"></i>');
        }
        linkA.append('<span>' + item['name'] + '</span>');
        li.append(linkA);
    }
    ele.append(li);
}

function overlayScrollbars(element) {
    element.overlayScrollbars({
        className: 'os-theme-light',
        sizeAutoCapable: true,
        scrollbars: {
            autoHide: 'l',
            clickScrolling: true
        }
    });
}

