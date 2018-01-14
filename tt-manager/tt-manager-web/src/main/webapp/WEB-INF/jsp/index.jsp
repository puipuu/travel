<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>班花网后台管理系统</title>
    <!--Bootstrap-->


    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Font Awesome -->
    <link href="css/font-awesome.min.css" rel="stylesheet" />
    <link href="css/sidebar-menu.css" rel="stylesheet" />
    <link href="css/ace-rtl.min.css" rel="stylesheet" />
    <link href="css/ace-skins.min.css" rel="stylesheet" />
    <link href="css/toastr.min.css" rel="stylesheet" />

    <script src="${pageContext.request.contextPath}/js/jquery-1.11.0.min.js"></script>
    <script src="${pageContext.request.contextPath}/js/bootstrap.min.js"></script>
    <script src="${pageContext.request.contextPath}/js/sidebar-menu.js"></script>
    <script src="${pageContext.request.contextPath}/js/bootstrap-tab.js"></script>

    <style type="text/css">
        body {
            font-size: 12px;
        }

        .nav > li > a {
            padding: 5px 10px;
        }

        .tab-content {
            padding-top: 3px;
        }
    </style>
</head>
<body>
<div class="navbar navbar-default" id="navbar">
    <div class="navbar-container" id="navbar-container">
        <div class="navbar-header pull-left">
            <a href="#" class="navbar-brand">
                <small>
                    <i class="icon-leaf"></i>
                    班花网后台管理系统 0.0.2版本
                </small>
            </a>
        </div>

        <%--<div class="navbar-header pull-right" role="navigation">
            <div style="background-color: #579ec8 !important; color: #fff; height:45px; line-height:45px; margin-right: 50px;">
                欢迎光临  XXXXX
                <a href="/Home/Logout" style="color: #fff;">
                    <i class="icon-off"></i>
                    退出登录
                </a>
            </div>
        </div>--%>
        <div class="navbar-header ace-settings-container" id="ace-settings-container" style="float:right;top:15px;">
            <div class="btn btn-app btn-xs btn-warning ace-settings-btn" id="ace-settings-btn">
                <i class="icon-cog bigger-150"></i>
            </div>
            <div class="ace-settings-box" id="ace-settings-box">
                <div>
                    <div class="pull-left">
                        <select id="skin-colorpicker" class="hide">
                            <option data-skin="default" value="#438EB9">#438EB9</option>
                            <option data-skin="skin-1" value="#222A2D">#222A2D</option>
                            <option data-skin="skin-2" value="#C6487E">#C6487E</option>
                            <option data-skin="skin-3" value="#D0D0D0">#D0D0D0</option>
                        </select>
                    </div>
                    <span>&nbsp; 选择皮肤</span>
                </div>
                <div>
                    <input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-navbar" />
                    <label class="lbl" for="ace-settings-navbar"> 固定导航条</label>
                </div>
                <div>
                    <input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-sidebar" />
                    <label class="lbl" for="ace-settings-sidebar"> 固定滑动条</label>
                </div>
                <div>
                    <input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-breadcrumbs" />
                    <label class="lbl" for="ace-settings-breadcrumbs">固定面包屑</label>
                </div>

                <div>
                    <input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-rtl" />
                    <label class="lbl" for="ace-settings-rtl">切换到左边</label>
                </div>

                <div>
                    <input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-add-container" />
                    <label class="lbl" for="ace-settings-add-container">
                        切换窄屏
                        <b></b>
                    </label>
                </div>
            </div>
        </div>
    </div>

</div>
<div class="main-container" id="main-container">
    <div class="main-container-inner">
        <a class="menu-toggler" id="menu-toggler" href="#">
            <span class="menu-text"></span>
        </a>
        <div class="sidebar" id="sidebar">
            <ul class="nav nav-list" id="menu"></ul>
            <div class="sidebar-collapse" id="sidebar-collapse">
                <i class="icon-double-angle-left" data-icon1="icon-double-angle-left" data-icon2="icon-double-angle-right"></i>
            </div>
        </div>
        <div class="main-content">
            <div class="page-content">
                <div class="row">
                    <div class="col-xs-12" style="padding-left:5px;">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="active"><a href="#Index" role="tab" data-toggle="tab">首页</a></li>
                        </ul>
                        <div class="tab-content" style="height:865px">
                            <div role="tabpanel" class="tab-pane active" id="Index" style="height:100%">
                                <h2>欢迎进入后台管理系统</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <a href="/" id="btn-scroll-up" class="btn-scroll-up btn btn-sm btn-inverse">
        <i class="icon-double-angle-up icon-only bigger-110"></i>
    </a>
</div>
<script>
    //toastr.options.positionClass = 'toast-bottom-right';
    $(function () {
        $('#menu').sidebarMenu({
            data: [{
                id: '1',
                text: '酒店模块',
                url: '',
                menus: [{
                    id: '11',
                    text: '查询酒店',
                    url: '${pageContext.request.contextPath}/hotels-list'
                    },
/*                    {
                        id: '12',
                        text: '新增酒店',
                        url: '${pageContext.request.contextPath}/hotels-add'
                    },*/
                    {
                        id: '13',
                        text: '规格参数',
                        url: '${pageContext.request.contextPath}/editorOrder'

                    },
                    {
                        id: '14',
                        text: '房间规格',
                        url: '${pageContext.request.contextPath}/jumpTo/productParams'
                    }]
            }, {
                id: '2',
                text: '订单管理',
                url: '',
                menus: [{
                    id: '21',
                    text: '订单查询',
                    url: '${pageContext.request.contextPath}/jumpTo/listOrders'
                }]
            }, {
                id: '3',
                text: '景点管理',
                url: '',
                menus: [{
                    id: '31',
                    text: '景点列表',
                    icon: 'icon-user',
                    url: '${pageContext.request.contextPath}/scenery-list'
                }, {
                    id: '32',
                    text: '新增景点',
                    icon: 'icon-apple',
                    url: '${pageContext.request.contextPath}/scenery-add'
                }]
            }, {
                id: '4',
                text: '旅游团管理',
                url: '',
                menus: [{
                    id: '41',
                    text: '查询列表',
                    url: '${pageContext.request.contextPath}/travelgroup-list'
                }, {
                    id: '42',
                    text: '新增旅游团',
                    icon: 'icon-glass',
                    url: '${pageContext.request.contextPath}/travelgroup-add'
                }]
            }, {
                id: '5',
                text: '论坛管理',
                url: '',
                menus: [{
                    id: '51',
                    text: '查询列表',
                    url: '${pageContext.request.contextPath}/forum-list'
                }, {
                    id: '52',
                    text: '新增游记',
                    icon: 'icon-glass',
                    url: '/Order/PLANTPRODUCT'
                }]
            }, {
                id: '6',
                text: '用户管理',
                url: '',
                menus: [{
                    id: '61',
                    text: '查询列表',
                    url: '${pageContext.request.contextPath}/user-list'
                }, {
                    id: '62',
                    text: '新增用户',
                    icon: 'icon-glass',
                    url: '${pageContext.request.contextPath}/user-add'
                }]
            }]
        });
    });


</script>
<script src="${pageContext.request.contextPath}/js/ace-extra.min.js"></script>
<script src="${pageContext.request.contextPath}/js/ace.min.js"></script>
<!-- 百度富文本编辑器 -->
<!-- 配置文件 -->
<script src="${pageContext.request.contextPath}/js/ueditor.config.js"></script>
<!-- 编辑器源码文件 -->
<script src="${pageContext.request.contextPath}/js/ueditor.all.js"></script>
</body>
</html>
