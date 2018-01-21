<%--
  Created by IntelliJ IDEA.
  User: Shinelon
  Date: 2018/1/21
  Time: 18:24
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head><script type="text/javascript" async="" charset="utf-8" src="http://c.cnzz.com/core.php?web_id=30065558&amp;t=q"></script><script type="text/javascript" async="" charset="utf-8" src="http://w.cnzz.com/c.php?id=30065558&amp;async=1"></script>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>蚂蜂窝酒店预订,网上预订酒店,国内外酒店价格查询预订平台</title>
    <meta name="Keywords" content="蚂蜂窝酒店预订,酒店价格查询">
    <meta name="Description" content="蚂蜂窝酒店预订,提供国内外60万家酒店网上预订,酒店价格查询服务,包括优质酒店住宿推荐,详细酒店地址和酒店图片,真实用户酒店点评等信息,减少酒店预订查询步骤,蚂蜂窝酒店是你快捷旅游出行的最佳选择.">
    <link href="http://css.mafengwo.net/css/cv/css+base:css+jquery.suggest:css+plugins:css+plugins+jquery.jgrowl:css+other+popup:css+mfw-header.2015^YlVS^1493708283.css" rel="stylesheet" type="text/css">

    <link href="http://css.mafengwo.net/css/cv/css+hotel+hotel_index:css+jquery-ui-1.11.0.min:css+hotel+datepicker-range:css+hotel+number_guests_picker^YlVX^1498545640.css" rel="stylesheet" type="text/css">
    <script language="javascript" src="http://js.mafengwo.net/js/cv/js+jquery-1.8.1.min:js+global+json2:js+M+Module:js+M+M:js+M+Log:js+m.statistics:js+advert+inspector:js+corelib+underscore-1.6.0:js+corelib+backbone-1.1.2^YlBQ^1511419343.js" type="text/javascript" crossorigin="anonymous"></script>
    <%--<script language="javascript" src="${pageContext.request.contextPath}/js/mangfeng.js" type="text/javascript" crossorigin="anonymous"></script>--%>
    <script async="" src="http://js.mafengwo.net/js/cv/js+Dropdown:js+pageletcommon+pageHeadUserInfoWWWNormal:js+jquery.tmpl:js+M+module+InputListener:js+M+module+SuggestionXHR:js+M+module+DropList:js+M+module+Suggestion:js+M+module+MesSearchEvent:js+SiteSearch:js+AHeader:js+M+module+PageAdmin:js+M+module+Storage:js+M+module+Cookie:js+M+module+ResourceKeeper:js+jquery.jgrowl.min:js+AMessage:js+M+module+dialog+Layer:js+M+module+dialog+DialogBase:js+M+module+dialog+Dialog:js+M+module+FrequencyVerifyControl:js+M+module+FrequencySystemVerify:js+ALogin:js+M+module+ScrollObserver:js+M+module+QRCode:js+AToolbar:js+ACnzzGaLog:js+ARecruit:js+ALazyLoad:js+plugins+dynamics:js+hotel+module+Log:js+hotel+module+Search_v2:js+xdate:js+hotel+module+FestivalDateConfig:js+jquery-ui-core:js+jquery-ui-datepicker:js+hotel+module+DateRangePicker:js+hotel+module+ModuleProvider:js+hotel+module+BookingDate:js+hotel+module+BookingGuests:js+hotel+module+NumberGuestsPicker:js+hotel+module+ImageLoader:js+hotel+index_v5^alFa^1515641871.js" crossorigin="anonymous"></script>
    <%--<script async="" src="${pageContext.request.contextPath}/js/mafengwo2.js" crossorigin="anonymous"></script>--%>
    <style id="style-1-cropbar-clipper">/* Copyright 2014 Evernote Corporation. All rights reserved. */
    .en-markup-crop-options {
        top: 18px !important;
        left: 50% !important;
        margin-left: -100px !important;
        width: 200px !important;
        border: 2px rgba(255,255,255,.38) solid !important;
        border-radius: 4px !important;
    }

    .en-markup-crop-options div div:first-of-type {
        margin-left: 0px !important;
    }
    </style>
    </style><script async="" src="http://js.mafengwo.net/js/BrowserState.js?1493174421" crossorigin="anonymous"></script></head>
<body style="position: relative;">


<div id="header" xmlns="http://www.w3.org/1999/html">
    <div class="mfw-header">
        <div class="header-wrap clearfix">
            <div class="head-logo"><a class="mfw-logo" title="蚂蜂窝自由行" href="http://www.mafengwo.cn/"></a></div>
            <ul class="head-nav" data-cs-t="headnav" id="_j_head_nav">
                <li class="head-nav-index" data-cs-p="index"><a href="http://www.mafengwo.cn/">首页</a></li>
                <li class="head-nav-place" data-cs-p="mdd"><a href="http://www.mafengwo.cn/mdd/" title="目的地">目的地</a></li>
                <li class="head-nav-gonglve" data-cs-p="gonglve"><a href="http://www.mafengwo.cn/gonglve/" title="旅游攻略">旅游攻略</a></li>
                <li class="head-nav-sales head-nav-dropdown _j_sales_nav_show" id="_j_nav_sales" data-cs-p="sales">
                    <a class="drop-toggle" href="http://www.mafengwo.cn/sales/" style="cursor: pointer;display: block;border-bottom:0 none;" data-sales-nav="旅行商城">
                        <span>旅行商城<i class="icon-caret-down"></i></span>
                    </a>
                    <div class="dropdown-menu dropdown-sales hide _j_sales_top" id="_j_sales_panel" data-cs-t="sales_nav">
                        <ul>
                            <li><a target="_blank" href="https://www.mafengwo.cn/sales/" data-sales-nav="机票＋酒店">机票＋酒店<i class="i-hot">hot</i></a></li>
                            <li><a target="_blank" href="https://www.mafengwo.cn/sales/0-0-0-0-0-0-0-0.html?group=4" data-sales-nav="跟团游">跟团游</a></li>
                            <li><a target="_blank" href="https://www.mafengwo.cn/localdeals/" data-sales-nav="当地游">当地游</a></li>
                            <li><a target="_blank" href="https://www.mafengwo.cn/flight/" data-sales-nav="国内机票">国内机票<i class="i-new">new</i></a></li>
                            <li><a target="_blank" href="https://www.mafengwo.cn/sales/visa/" data-sales-nav="签证">签证</a></li>
                            <li><a target="_blank" href="http://zuche.mafengwo.cn/?utm_source=i22590029-pc&amp;utm_medium=partner&amp;utm_campaign=entry&amp;utm_term=mfw_nav" data-sales-nav="国际租车">国际租车</a></li>
                            <li><a target="_blank" href="https://www.mafengwo.cn/insure/" data-sales-nav="保险">保险</a></li>
                        </ul>
                    </div>
                </li>
                <li class="head-nav-hotel head-nav-active" data-cs-p="hotel"><a href="http://www.mafengwo.cn/hotel/" title="酒店">酒店</a></li>
                <li class="head-nav-community head-nav-dropdown _j_shequ_nav_show" id="_j_nav_community" data-cs-p="community">
                    <div class="drop-toggle"><span>社区<i class="icon-caret-down"></i></span></div>
                    <!-- 社区下拉面板 begin -->
                    <div class="dropdown-panel dropdown-community hide _j_shequ_top no-image" id="_j_community_panel" data-cs-t="community_nav">
                        <div class="panel-wrapper">
                            <ul class="nav-list clearfix">
                                <li class="h"><a href="http://www.mafengwo.cn/wenda/" target="_blank" title="问答" data-cs-p="wenda">问答<i class="i-hot">hot</i></a></li>
                                <li><a href="http://www.mafengwo.cn/mall/things.php" target="_blank" title="蚂蜂窝周边" data-cs-p="things">蚂蜂窝周边<i class="i-new">new</i></a></li>
                                <li><a href="http://www.mafengwo.cn/club/" target="_blank" title="蜂首俱乐部" data-cs-p="club">蜂首俱乐部</a></li>
                                <li><a href="http://www.mafengwo.cn/together/" target="_blank" title="结伴" data-cs-p="together">结伴</a></li>
                            </ul>
                            <ul class="nav-list-sub clearfix">

                                <li><a href="http://www.mafengwo.cn/group/" target="_blank" title="蚂蜂窝旅行家" data-cs-p="group">小组论坛</a></li>
                                <li><a href="http://www.mafengwo.cn/rudder/" target="_blank" title="分舵同城" data-cs-p="rudder">分舵同城</a></li>
                                <li><a href="http://www.mafengwo.cn/auction/" target="_blank" title="蚂蜂窝拍卖行" data-cs-p="paimai">蚂蜂窝拍卖行</a></li>

                                <!--<li><a href="http://www.mafengwo.cn/postal/" target="_blank" title="游记纪念工厂" data-cs-p="postal">游记纪念工厂</a></li>-->
                                <li><a href="http://www.mafengwo.cn/photo_pk/pk.php" target="_blank" title="照片PK" data-cs-p="photo_pk">照片PK</a></li>
                                <li><a href="http://www.mafengwo.cn/focus/" target="_blank" title="真人兽" data-cs-p="focus">真人兽</a></li>
                                <li><a href="http://www.mafengwo.cn/mall/virtual_goods.php" target="_blank" title="道具商店" data-cs-p="virtual">道具商店</a></li>
                            </ul>
                        </div>
                    </div>

                    <!-- 社区下拉面板 end -->
                </li>
                <li class="head-nav-app" data-cs-p="app"><a href="http://www.mafengwo.cn/app/intro/gonglve.php" title="APP">APP</a></li>
            </ul>
            <div class="head-search" data-online="1">
                <div class="head-search-wrapper">
                    <div class="head-searchform">
                        <input name="q" type="text" id="_j_head_search_input" autocomplete="off">
                        <a role="button" href="javascript:" class="icon-search" id="_j_head_search_link"></a>
                    </div>
                </div>
            </div>
            <div id="pagelet-block-7bf4ee2555dce1cac9d7eaf7e9ccd209" class="pagelet-block" data-api="apps:user:pagelet:pageViewHeadInfo" data-params="{&quot;type&quot;:1}" data-async="1" data-controller="/js/pageletcommon/pageHeadUserInfoWWWNormal">	<div class="login-out">
                <a class="weibo-login" href="https://passport.mafengwo.cn/weibo" title="微博登录" rel="nofollow"></a>
                <a class="qq-login" href="https://passport.mafengwo.cn/qq" title="QQ登录" rel="nofollow"></a>
                <a class="weixin-login" href="https://passport.mafengwo.cn/wechat" title="微信登录" rel="nofollow"></a>
                <a id="_j_showlogin" title="登录蚂蜂窝" href="https://passport.mafengwo.cn" rel="nofollow">登录</a><span class="split">|</span><a href="https://passport.mafengwo.cn/regist.html" title="注册帐号" rel="nofollow">注册</a>
            </div>
            </div>
        </div>
        <div class="shadow"></div>
    </div>

    <!-- 新自由行菜单 begin -->
    <div class="dropdown-bar" style="display: none">
        <div class="content">
            <ul class="clearfix ul-dropdown-bar" id="Js_middleNav">
                <li data-type="sales"><a href="http://www.mafengwo.cn/sales/">机票＋酒店</a></li>
                <li data-type="freewalker"><a href="http://www.mafengwo.cn/sales/0-0-0-0-0-0-0-0.html?group=4">跟团游</a></li>
                <li data-type="localdeals"><a href="http://www.mafengwo.cn/localdeals/">当地游</a></li>
                <li data-type="flight"><a href="http://www.mafengwo.cn/flight/">国内机票</a></li>
                <li data-type="visa"><a href="http://www.mafengwo.cn/sales/visa/">签证</a></li>
                <li data-type="wifi"><a href="http://www.mafengwo.cn/localdeals/0-0-0-21-0-0-0-0.html">全球WiFi</a></li>
                <li data-type="cruise"><a href="http://www.mafengwo.cn/sales/0-0-0-5-0-0-0-0.html">邮轮</a></li>

                <li data-type="insurance"><a href="http://www.mafengwo.cn/insurance/">旅游保险</a></li>
            </ul>
        </div>

    </div>
    <!-- 新自由行菜单 end -->

    <script>
        //判断是否显示 下拉bar
        ;(function () {
            window.showBarFlag = true;
            var realPathName = location.pathname,$nav = $('#Js_middleNav');
            var regExp = /localdeals|sales|flight|insurance|activity/gi;
            var pathArr = realPathName.match(regExp);
            if(window.Env.middleNavHide) { $('.dropdown-bar').hide();return;}
            if(realPathName == '/sales/0-0-0-5-0-0-0-0.html' || window.Env.salesType ==5){
                $nav.children('[data-type="cruise"]').addClass('on');
                window.showBarFlag = false;
                $('.dropdown-bar').show();
            }else if(realPathName == '/localdeals/0-0-0-21-0-0-0-0.html' || window.Env.salesType ==21){
                $nav.children('[data-type="wifi"]').addClass('on');
                window.showBarFlag = false;
                $('.dropdown-bar').show();
            }else if(window.Env.sales_title_tag == 'visa' || window.Env.salesType == 4){
                $nav.children('[data-type="visa"]').addClass('on');
                window.showBarFlag = false;
                $('.dropdown-bar').show();
            }else if(window.Env.sales_title_tag == 'semi_self_service' || realPathName == '/sales/0-0-0-6-0-0-0-0.html?group=4' || window.Env.salesType == 30 || window.Env.salesType == 6){
                $nav.children('[data-type="freewalker"]').addClass('on');
                window.showBarFlag = false;
                $('.dropdown-bar').show();
            }
            else if(window.Env.salesType) {
                switch(window.Env.salesType|0) {
                    case 1:
                    case 3:
                        $nav.children('[data-type="sales"]').addClass('on');
                        break;
                    case 2:
                        $nav.children('[data-type="localdeals"]').addClass('on');
                        break;
                    case 30:
                    case 6:
                        $nav.children('[data-type="freewalker"]').addClass('on');
                        break;
                    default:
                        $nav.children('[data-type="localdeals"]').addClass('on');
                        break;
                }
                window.showBarFlag = false;
                $('.dropdown-bar').show();
            }
            else {
                if( pathArr){
                    if(pathArr.length == 1 && pathArr[0] != 'activity'){
                        switch(pathArr[0]){
                            case 'localdeals':
                                $nav.children('[data-type="localdeals"]').addClass('on');
                                break;
                            case 'insurance':
                                $nav.children('[data-type="insurance"]').addClass('on');
                                break;
                            case 'sales':
                                $nav.children('[data-type="sales"]').addClass('on');
                                break;
                            case 'flight':
                                $nav.children('[data-type="flight"]').addClass('on');
                                break;
                            default:
                                break;
                        }
                        window.showBarFlag = false;
                        $('.dropdown-bar').show();
                    }else {
                        if('activity'.indexOf(pathArr) != -1){
                            window.showBarFlag  = true;
                            $('.dropdown-bar').hide();
                        }
                    }
                }
            }
            // 点击时触发
            $('.ul-dropdown-bar > li').on('click',function () {
                $(this).addClass('on').siblings().removeClass('on');
            });
        })();

    </script>

</div>




<style type="text/css">
    ._j_tab_content img {
        opacity: 0;
        -webkit-transition: opacity ease-in 1s;
        -moz-transition: opacity ease-in 1s;
        transition: opacity ease-in 1s;
    }
    ._j_tab_content .img-show {
        opacity: 1;
    }
</style>

<div class="hotel-main">
    <div class="h-title">酒店</div>
    <div class="clearfix date-warp">
        <div class="add-travle">
            <input type="text" placeholder="出行目的地" id="_j_search_input" autocomplete="off">
            <div class="not-cont" id="_j_search_shortcut_mdds" style="display:none;">
                <ul>
                    <li class="clearfix">
                        <h2>中国</h2>
                        <p>
                            <a href="javascript:;" data-id="10819" data-name="台北">台北</a>
                            <a href="javascript:;" data-id="10189" data-name="香港">香港</a>
                            <a href="javascript:;" data-id="10065" data-name="北京">北京</a>
                            <a href="javascript:;" data-id="84" data-name="杭州">杭州</a>
                            <a href="javascript:;" data-id="10099" data-name="上海">上海</a>
                            <a href="javascript:;" data-id="10035" data-name="成都">成都</a>
                            <a href="javascript:;" data-id="21434" data-name="垦丁">垦丁</a>
                            <a href="javascript:;" data-id="15325" data-name="花莲">花莲</a>
                            <a href="javascript:;" data-id="10208" data-name="重庆">重庆</a>
                            <a href="javascript:;" data-id="10132" data-name="厦门">厦门</a>
                            <a href="javascript:;" data-id="10487" data-name="大理">大理</a>
                            <a href="javascript:;" data-id="10030" data-name="三亚">三亚</a>
                        </p>
                    </li>
                    <li class="clearfix">
                        <h2>亚洲</h2>
                        <p>
                            <a href="javascript:;" data-id="10222" data-name="东京">东京</a>
                            <a href="javascript:;" data-id="10765" data-name="大阪">大阪</a>
                            <a href="javascript:;" data-id="11042" data-name="京都">京都</a>
                            <a href="javascript:;" data-id="11045" data-name="曼谷">曼谷</a>
                            <a href="javascript:;" data-id="15284" data-name="清迈">清迈</a>
                            <a href="javascript:;" data-id="11047" data-name="普吉岛">普吉岛</a>
                            <a href="javascript:;" data-id="10130" data-name="首尔">首尔</a>
                            <a href="javascript:;" data-id="10754" data-name="新加坡">新加坡</a>
                            <a href="javascript:;" data-id="16980" data-name="甲米">甲米</a>
                            <a href="javascript:;" data-id="11046" data-name="芭提雅">芭提雅</a>
                            <a href="javascript:;" data-id="11049" data-name="吉隆坡">吉隆坡</a>
                            <a href="javascript:;" data-id="14210" data-name="苏梅岛">苏梅岛</a>
                        </p>
                    </li>
                    <li class="clearfix">
                        <h2>欧洲</h2>
                        <p>
                            <a href="javascript:;" data-id="10573" data-name="巴黎">巴黎</a>
                            <a href="javascript:;" data-id="11124" data-name="伦敦">伦敦</a>
                            <a href="javascript:;" data-id="10063" data-name="罗马">罗马</a>
                            <a href="javascript:;" data-id="11087" data-name="佛罗伦萨">佛罗伦萨</a>
                            <a href="javascript:;" data-id="10102" data-name="巴塞罗那">巴塞罗那</a>
                            <a href="javascript:;" data-id="11100" data-name="阿姆斯特丹">阿姆斯特丹</a>
                            <a href="javascript:;" data-id="11081" data-name="慕尼黑">慕尼黑</a>
                            <a href="javascript:;" data-id="10755" data-name="柏林">柏林</a>
                            <a href="javascript:;" data-id="11159" data-name="斯德哥尔摩">斯德哥尔摩</a>
                            <a href="javascript:;" data-id="16095" data-name="圣托里尼">圣托里尼</a>
                            <a href="javascript:;" data-id="10761" data-name="布拉格">布拉格</a>
                            <a href="javascript:;" data-id="11091" data-name="维也纳">维也纳</a>
                        </p>
                    </li>
                    <li class="clearfix">
                        <h2>北美</h2>
                        <p>
                            <a href="javascript:;" data-id="10579" data-name="纽约">纽约</a>
                            <a href="javascript:;" data-id="10926" data-name="洛杉矶">洛杉矶</a>
                            <a href="javascript:;" data-id="10923" data-name="拉斯维加斯">拉斯维加斯</a>
                            <a href="javascript:;" data-id="10742" data-name="旧金山">旧金山</a>
                            <a href="javascript:;" data-id="10077" data-name="塞班岛">塞班岛</a>
                            <a href="javascript:;" data-id="10959" data-name="黄石国家公园">黄石国家公园</a>
                        </p>
                    </li>
                    <li class="clearfix">
                        <h2>大洋洲</h2>
                        <p>
                            <a href="javascript:;" data-id="10855" data-name="悉尼">悉尼</a>
                            <a href="javascript:;" data-id="10856" data-name="墨尔本">墨尔本</a>
                            <a href="javascript:;" data-id="30164" data-name="大洋路">大洋路</a>
                            <a href="javascript:;" data-id="17339" data-name="黄金海岸">黄金海岸</a>
                            <a href="javascript:;" data-id="10885" data-name="皇后镇">皇后镇</a>
                            <a href="javascript:;" data-id="15920" data-name="基督城">基督城</a>
                        </p>
                    </li>
                </ul>
            </div>
            <div class="search-suggest-panel search-suggest-hotel" style="display:none;" id="_j_search_suggest"></div>
        </div>
        <div class="btn-search" id="_j_search_btn"><i></i></div>
    </div>
    <div class="h-notice clearfix">
        <ul>
            <li>
                <i class="notice01"></i>
                <div class="flt1">
                    <h2>住宿攻略</h2>
                    <p>区域攻略到特色主题，应有尽有</p>
                </div>
            </li>
            <li>
                <i class="notice02"></i>
                <div class="flt1">
                    <h2>专享价格</h2>
                    <p>多平台价格对比，天天专享特惠</p>
                </div>
            </li>
            <li>
                <i class="notice03"></i>
                <div class="flt1">
                    <h2>真实点评</h2>
                    <p>超过100万真实用户点评和游记</p>
                </div>
            </li>
        </ul>
    </div>


    <div class="h-theme" id="_j_features">
        <div class="h-title">主题酒店</div>
        <div class="tab-theme">
            <div class="themeList clearfix _j_tab_trigger">
                <a href="javascript:;" data-id="0" class="on">迪士尼乐园</a>
                <a href="javascript:;" data-id="1">超值酒店</a>
                <a href="javascript:;" data-id="2">设计酒店</a>
                <a href="javascript:;" data-id="3">私人海滩</a>
                <a href="javascript:;" data-id="4">周末好去处</a>
                <a href="javascript:;" data-id="5">浪漫花海</a>
            </div>
            <div class="_j_tab_content">
                <ul class="clearfix" style="display:block;" data-id="0">
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/area_751.html" target="_blank" data-type="area" data-name="奥兰多">
                                <div class="pic">
                                    <img width="318" height="240" style="width:318px;height:240px;" src="http://p4-q.mafengwo.net/s9/M00/36/17/wKgBs1dL9MGAW6v3ABiEmHUWRLU33.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" class="img-show">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>奥兰多</h2>
                                    <p class="caption">美国</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/area_12261.html" target="_blank" data-type="area" data-name="上海">
                                <div class="pic">
                                    <img width="318" height="240" style="width:318px;height:240px;" src="http://b2-q.mafengwo.net/s9/M00/38/64/wKgBs1dL-H6AOmv4AAIvGmxUHPw48.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" class="img-show">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>上海</h2>
                                    <p class="caption">中国</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/area_176.html" target="_blank" data-type="area" data-name="香港">
                                <div class="pic">
                                    <img width="318" height="240" style="width:318px;height:240px;" src="http://p3-q.mafengwo.net/s8/M00/CD/2B/wKgBpVVXERSAQvoCAANN8wJBjBQ12.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" class="img-show">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>香港</h2>
                                    <p class="caption">中国</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/area_12264.html" target="_blank" data-type="area" data-name="洛杉矶">
                                <div class="pic">
                                    <img width="318" height="240" style="width:318px;height:240px;" src="http://p4-q.mafengwo.net/s9/M00/36/17/wKgBs1dL9MGAACrcAAR7pFIa8zM59.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" class="img-show">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>洛杉矶</h2>
                                    <p class="caption">美国</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/area_12263.html" target="_blank" data-type="area" data-name="巴黎">
                                <div class="pic">
                                    <img width="318" height="240" style="width:318px;height:240px;" src="http://b2-q.mafengwo.net/s9/M00/36/17/wKgBs1dL9MGAbEreAFRlTqphNrA97.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" class="img-show">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>巴黎</h2>
                                    <p class="caption">法国</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/area_216.html" target="_blank" data-type="area" data-name="东京">
                                <div class="pic">
                                    <img width="318" height="240" style="width:318px;height:240px;" src="http://n2-q.mafengwo.net/s9/M00/38/65/wKgBs1dL-H6AdJU1AAT5Wd6Lvds54.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" class="img-show">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>东京</h2>
                                    <p class="caption">日本</p>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
                <ul class="clearfix" style="display:none;" data-id="1">
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/10077/#feature=25890" target="_blank" data-type="feature" data-name="塞班岛">
                                <div class="pic">
                                    <img data-src="http://c2-q.mafengwo.net/s10/M00/5E/78/wKgBZ1mC9HWAbTMdAADNqTBp4GM25.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>塞班岛</h2>
                                    <p class="caption">美国</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/10189/#feature=25890" target="_blank" data-type="feature" data-name="香港">
                                <div class="pic">
                                    <img data-src="http://c3-q.mafengwo.net/s10/M00/5E/7B/wKgBZ1mC9HaACEOcAAH5DnGoh5g52.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>香港</h2>
                                    <p class="caption">中国</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/10573/#feature=25890" target="_blank" data-type="feature" data-name="巴黎">
                                <div class="pic">
                                    <img data-src="http://n4-q.mafengwo.net/s10/M00/5E/79/wKgBZ1mC9HWAVdYoAADp1HMpUFg70.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>巴黎</h2>
                                    <p class="caption">法国</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/10579/#feature=25890" target="_blank" data-type="feature" data-name="纽约">
                                <div class="pic">
                                    <img data-src="http://n3-q.mafengwo.net/s10/M00/5E/7A/wKgBZ1mC9HWAYdUuAAH_rq3CGXg48.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>纽约</h2>
                                    <p class="caption">美国</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/10222/#feature=25890" target="_blank" data-type="feature" data-name="东京">
                                <div class="pic">
                                    <img data-src="http://b2-q.mafengwo.net/s10/M00/5E/77/wKgBZ1mC9HWAD_AVAAFcnsJmPEs01.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>东京</h2>
                                    <p class="caption">日本</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/10754/#feature=25890" target="_blank" data-type="feature" data-name="新加坡">
                                <div class="pic">
                                    <img data-src="http://b4-q.mafengwo.net/s10/M00/5E/7A/wKgBZ1mC9HWAOHkPAAGO762PFwQ56.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>新加坡</h2>
                                    <p class="caption">新加坡</p>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
                <ul class="clearfix" style="display:none;" data-id="2">
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/10099/#feature=19896" target="_blank" data-type="feature" data-name="上海">
                                <div class="pic">
                                    <img data-src="http://p2-q.mafengwo.net/s10/M00/5E/7B/wKgBZ1mC9HaAK_QIAAh1pr4J_V417.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>上海</h2>
                                    <p class="caption">中国</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/10130/#feature=19896" target="_blank" data-type="feature" data-name="首尔">
                                <div class="pic">
                                    <img data-src="http://c2-q.mafengwo.net/s10/M00/5E/7E/wKgBZ1mC9HaABtPUAAGkiLZDPvE93.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>首尔</h2>
                                    <p class="caption">韩国</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/10343/#feature=19896" target="_blank" data-type="feature" data-name="哥本哈根">
                                <div class="pic">
                                    <img data-src="http://b2-q.mafengwo.net/s8/M00/FD/1D/wKgBpVVh6AOAXou1AAksecaTBmQ33.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>哥本哈根</h2>
                                    <p class="caption">丹麦</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/10579/#feature=19896" target="_blank" data-type="feature" data-name="纽约">
                                <div class="pic">
                                    <img data-src="http://c4-q.mafengwo.net/s10/M00/5E/7D/wKgBZ1mC9HaAUCFKAAD-v3b-Siw60.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>纽约</h2>
                                    <p class="caption">美国</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/10755/#feature=19896" target="_blank" data-type="feature" data-name="柏林">
                                <div class="pic">
                                    <img data-src="http://b3-q.mafengwo.net/s10/M00/5E/7D/wKgBZ1mC9HaANhXIAAFReiDnvuk12.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>柏林</h2>
                                    <p class="caption">德国</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/16405/#feature=19896" target="_blank" data-type="feature" data-name="台中">
                                <div class="pic">
                                    <img data-src="http://c1-q.mafengwo.net/s10/M00/5E/7C/wKgBZ1mC9HaAeSahAAEgn-2DSzU59.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>台中</h2>
                                    <p class="caption">中国</p>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
                <ul class="clearfix" style="display:none;" data-id="3">
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/10737/#feature=34975" target="_blank" data-type="feature" data-name="长滩岛">
                                <div class="pic">
                                    <img data-src="http://p3-q.mafengwo.net/s10/M00/5E/81/wKgBZ1mC9HeAAAMYAAG6ogNAjvE92.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>长滩岛</h2>
                                    <p class="caption">菲律宾</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/14210/#feature=34975" target="_blank" data-type="feature" data-name="苏梅岛">
                                <div class="pic">
                                    <img data-src="http://b4-q.mafengwo.net/s10/M00/5E/80/wKgBZ1mC9HaAA1PmAAE2QpzDXfo76.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>苏梅岛</h2>
                                    <p class="caption">泰国</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/16102/#feature=34975" target="_blank" data-type="feature" data-name="芽庄">
                                <div class="pic">
                                    <img data-src="http://p3-q.mafengwo.net/s10/M00/5E/80/wKgBZ1mC9HaABseWAAElKZXJPLE00.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>芽庄</h2>
                                    <p class="caption">越南</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/11051/#feature=34975" target="_blank" data-type="feature" data-name="兰卡威">
                                <div class="pic">
                                    <img data-src="http://b2-q.mafengwo.net/s10/M00/5E/7F/wKgBZ1mC9HaAXe6dAACrD7Bl2Es35.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>兰卡威</h2>
                                    <p class="caption">马来西亚</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/16315/#feature=34975" target="_blank" data-type="feature" data-name="岘港">
                                <div class="pic">
                                    <img data-src="http://b4-q.mafengwo.net/s9/M00/3B/FB/wKgBs1dW1xCAXjP5ABii081RqTo85.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>岘港</h2>
                                    <p class="caption">越南</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/10030/#feature=34975" target="_blank" data-type="feature" data-name="三亚">
                                <div class="pic">
                                    <img data-src="http://n4-q.mafengwo.net/s10/M00/5E/7E/wKgBZ1mC9HaAdZD9AARDuy-_cUg63.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>三亚</h2>
                                    <p class="caption">海南</p>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
                <ul class="clearfix" style="display:none;" data-id="4">
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/12553/" target="_blank" data-type="mdd" data-name="崇明岛">
                                <div class="pic">
                                    <img data-src="http://n4-q.mafengwo.net/s10/M00/5E/84/wKgBZ1mC9HeADwEbAAXqV9zWTPs05.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>崇明岛</h2>
                                    <p class="caption">上海</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="${pageContext.request.contextPath}/hotels/84.html" target="_blank" data-type="mdd" data-name="千岛湖">
                                <div class="pic">
                                    <img data-src="http://c3-q.mafengwo.net/s10/M00/5E/82/wKgBZ1mC9HeAACckABzu6IM-5mw17.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>千岛湖</h2>
                                    <p class="caption">杭州</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/area_11172.html" target="_blank" data-type="area" data-name="莫干山">
                                <div class="pic">
                                    <img data-src="http://c2-q.mafengwo.net/s10/M00/5E/85/wKgBZ1mC9HeAarREABKAJaOA97c61.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>莫干山</h2>
                                    <p class="caption">湖州</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/area_8942.html" target="_blank" data-type="area" data-name="古北水镇">
                                <div class="pic">
                                    <img data-src="http://n2-q.mafengwo.net/s10/M00/5E/83/wKgBZ1mC9HeAG_qrAAJCv6dFP3M18.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>古北水镇</h2>
                                    <p class="caption">北京</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/area_11988.html" target="_blank" data-type="area" data-name="避暑山庄">
                                <div class="pic">
                                    <img data-src="http://c3-q.mafengwo.net/s10/M00/5E/85/wKgBZ1mC9HiAbM5qABiNd9-F8oI64.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>避暑山庄</h2>
                                    <p class="caption">承德</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/10209/" target="_blank" data-type="mdd" data-name="北戴河">
                                <div class="pic">
                                    <img data-src="http://p3-q.mafengwo.net/s10/M00/5E/81/wKgBZ1mC9HeACZQCADSuIfbXC_Q01.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>北戴河</h2>
                                    <p class="caption">秦皇岛</p>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
                <ul class="clearfix" style="display:none;" data-id="5">
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/10747/" target="_blank" data-type="mdd" data-name="富士山">
                                <div class="pic">
                                    <img data-src="http://p4-q.mafengwo.net/s10/M00/51/B4/wKgBZ1jLu5WAR-ezABxIarXxVhg42.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>富士山</h2>
                                    <p class="caption">日本</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/16283/" target="_blank" data-type="mdd" data-name="奈良">
                                <div class="pic">
                                    <img data-src="http://c2-q.mafengwo.net/s10/M00/52/05/wKgBZ1jLvEGACICOABuulIYZhuQ06.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>奈良</h2>
                                    <p class="caption">日本</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/11100/" target="_blank" data-type="mdd" data-name="阿姆斯特丹">
                                <div class="pic">
                                    <img data-src="http://b2-q.mafengwo.net/s7/M00/55/A4/wKgB6lQC95mAQFNMAFO-6RdKryY46.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>阿姆斯特丹</h2>
                                    <p class="caption">荷兰</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/11106/" target="_blank" data-type="mdd" data-name="布鲁塞尔">
                                <div class="pic">
                                    <img data-src="http://c4-q.mafengwo.net/s10/M00/52/05/wKgBZ1jLvEGALatTABFdXHEc3vE85.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>布鲁塞尔</h2>
                                    <p class="caption">比利时</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/10814/" target="_blank" data-type="mdd" data-name="林芝">
                                <div class="pic">
                                    <img data-src="http://b2-q.mafengwo.net/s10/M00/52/05/wKgBZ1jLvEGAH2IlABhOTwykidA02.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>林芝</h2>
                                    <p class="caption">中国</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="fc-item">
                            <a href="/hotel/10808/" target="_blank" data-type="mdd" data-name="罗平">
                                <div class="pic">
                                    <img data-src="http://n4-q.mafengwo.net/s10/M00/52/04/wKgBZ1jLvECARBBhAB4nWrWz_nU23.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" width="318" height="240" style="width:318px;height:240px;">
                                </div>
                                <div class="bag-opa"></div>
                                <span class="shadow"></span>
                                <div class="info">
                                    <h2>罗平</h2>
                                    <p class="caption">中国</p>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>


<link href="http://css.mafengwo.net/css/mfw-footer.css?1493174418" rel="stylesheet" type="text/css">

<div id="footer">
    <div class="ft-content">
        <div class="ft-info clearfix">
            <dl class="ft-info-col ft-info-intro">
                <dt>中国领先的自由行服务平台</dt>
                <dd>覆盖全球200多个国家和地区</dd>
                <dd><strong>100,000,000</strong> 位旅行者</dd>
                <dd><strong>920,000</strong> 家国际酒店</dd>
                <dd><strong>21,000,000</strong> 条真实点评</dd>
                <dd><strong>382,000,000</strong> 次攻略下载</dd>
                <dd><a class="highlight" href="http://www.mafengwo.cn/activity/sales_report2015/index" target="_blank">中国旅游行业第一部“玩法”</a></dd>
            </dl>
            <dl class="ft-info-col ft-info-about">
                <dt>关于我们</dt>
                <dd><a href="http://www.mafengwo.cn/s/about.html" rel="nofollow">关于蚂蜂窝</a></dd>
                <dd><a href="http://www.mafengwo.cn/s/property.html" rel="nofollow">网络信息侵权通知指引</a></dd>
                <dd><a href="http://www.mafengwo.cn/s/private.html" rel="nofollow">隐私政策</a><a href="http://www.mafengwo.cn/s/agreement.html" rel="nofollow" class="m_l_10">服务协议</a></dd>
                <dd><a href="http://www.mafengwo.cn/s/contact.html" rel="nofollow">联系我们</a></dd>
                <dd><a href="http://www.mafengwo.cn/s/sitemap.html" target="_blank">网站地图</a></dd>
                <dd><a class="joinus highlight" title="蚂蜂窝团队招聘" target="_blank" href="http://www.mafengwo.cn/s/hr.html" rel="nofollow">加入蚂蜂窝</a></dd>
            </dl>
            <dl class="ft-info-col ft-info-service">
                <dt>旅行服务</dt>
                <dd>
                    <ul class="clearfix">
                        <li><a target="_blank" href="http://www.mafengwo.cn/gonglve/">旅游攻略</a></li>
                        <li><a target="_blank" href="http://www.mafengwo.cn/hotel/">酒店预订</a></li>
                        <li><a target="_blank" href="http://www.mafengwo.cn/sales/">旅游特价</a></li>
                        <li><a target="_blank" href="http://zuche.mafengwo.cn/">国际租车</a></li>
                        <li><a target="_blank" href="http://www.mafengwo.cn/wenda/">旅游问答</a></li>
                        <li><a target="_blank" href="http://www.mafengwo.cn/insure/">旅游保险</a></li>
                        <li><a target="_blank" href="http://z.mafengwo.cn">旅游指南</a></li>
                        <li><a target="_blank" href="http://huoche.mafengwo.cn">订火车票</a></li>
                        <li><a target="_blank" href="http://www.mafengwo.cn/travel-news/">旅游资讯</a></li>
                        <li><a target="_blank" href="http://www.mafengwo.cn/app/intro/gonglve.php">APP下载</a></li>
                        <li><a target="_blank" href="http://www.mafengwo.cn/sales/alliance.php" class="highlight">旅行商城全球商家入驻</a></li>
                    </ul>
                </dd>
            </dl>
            <dl class="ft-info-col ft-info-qrcode">
                <dd>
                    <span class="ft-qrcode-tejia"></span>
                    <p>蚂蜂窝良品<br>官方服务号</p>
                </dd>
                <dd>
                    <span class="ft-qrcode-weixin"></span>
                    <p>蚂蜂窝自由行<br>订阅号</p>
                </dd>
            </dl>
            <dl class="ft-info-social">
                <dt>向崇尚自由的加勒比海盗致敬！</dt>
                <dd>
                    <a class="ft-social-weibo" target="_blank" href="http://weibo.com/mafengwovip" rel="nofollow"><i class="ft-social-icon"></i></a>
                    <a class="ft-social-qqt" target="_blank" href="http://t.qq.com/mafengwovip" rel="nofollow"><i class="ft-social-icon"></i></a>
                    <a class="ft-social-qzone" target="_blank" href="http://1213600479.qzone.qq.com/" rel="nofollow"><i class="ft-social-icon"></i></a>
                </dd>
            </dl>
        </div>

        <div class="ft-copyright">
            <div class="ft-safety">
                <a class="s-a" target="_blank" href="https://search.szfw.org/cert/l/CX20140627008255008321" id="___szfw_logo___"></a>
                <a class="s-b" href="https://ss.knet.cn/verifyseal.dll?sn=e130816110100420286o93000000&amp;ct=df&amp;a=1&amp;pa=787189" target="_blank" rel="nofollow"></a>
                <a class="s-c" href="http://www.itrust.org.cn/Home/Index/itrust_certifi/wm/1669928206.html" target="_blank" rel="nofollow"></a>
            </div>
            <a href="http://www.mafengwo.cn"><i class="ft-mfw-logo"></i></a>
            <p>© 2018 Mafengwo.cn <a href="http://www.miibeian.gov.cn/" target="_blank" rel="nofollow">京ICP备11015476号</a> 京公网安备110105013401号 <a href="http://images.mafengwo.net/images/about/icp.jpg" target="_blank" rel="nofollow">京ICP证110318号</a></p>
            <p><a href="http://images.mafengwo.net/images/about/licence.jpg" target="_blank" rel="nofollow">营业执照</a> 新出网证(京)字242号 蚂蜂窝客服：国内 <span class="highlight">4006-345-678</span><span class="m_l_10">海外</span> <span class="highlight">+86-10-5922-2799</span></p>
        </div>
    </div>
</div>



<link href="http://css.mafengwo.net/css/mfw-toolbar.css?1493174418" rel="stylesheet" type="text/css">

<div class="mfw-toolbar" id="_j_mfwtoolbar" style="display: block;">
    <div class="toolbar-item-top" style="display: none;">
        <a role="button" class="btn _j_gotop">
            <i class="icon_top"></i>
            <em>返回顶部</em>
        </a>
    </div>
    <div class="toolbar-item-feedback">
        <a role="button" data-japp="feedback" class="btn">
            <i class="icon_feedback"></i>
            <em>意见反馈</em>
        </a>
    </div>
    <div class="toolbar-item-code">
        <a role="button" class="btn">
            <i class="icon_code"></i>
        </a>
        <a role="button" class="mfw-code _j_code">

            <img src="https://n3-q.mafengwo.net/s9/M00/01/7B/wKgBs1gjDcmAKFXuAAERZRJ4yus61.jpeg " width="300" height="192">
        </a>
        <!--<div class="wx-official-pop"><img src="http://images.mafengwo.net/images/qrcode-weixin.gif"><i class="_j_closeqrcode"></i></div>-->
    </div>

</div>
<%--<script language="javascript" type="text/javascript">
    if (typeof M !== "undefined" && typeof M.loadResource === "function") {
        M.loadResource("http://js.mafengwo.net/js/cv/js+Dropdown:js+pageletcommon+pageHeadUserInfoWWWNormal:js+jquery.tmpl:js+M+module+InputListener:js+M+module+SuggestionXHR:js+M+module+DropList:js+M+module+Suggestion:js+M+module+MesSearchEvent:js+SiteSearch:js+AHeader:js+M+module+PageAdmin:js+M+module+Storage:js+M+module+Cookie:js+M+module+ResourceKeeper:js+jquery.jgrowl.min:js+AMessage:js+M+module+dialog+Layer:js+M+module+dialog+DialogBase:js+M+module+dialog+Dialog:js+M+module+FrequencyVerifyControl:js+M+module+FrequencySystemVerify:js+ALogin:js+M+module+ScrollObserver:js+M+module+QRCode:js+AToolbar:js+ACnzzGaLog:js+ARecruit:js+ALazyLoad:js+plugins+dynamics:js+hotel+module+Log:js+hotel+module+Search_v2:js+xdate:js+hotel+module+FestivalDateConfig:js+jquery-ui-core:js+jquery-ui-datepicker:js+hotel+module+DateRangePicker:js+hotel+module+ModuleProvider:js+hotel+module+BookingDate:js+hotel+module+BookingGuests:js+hotel+module+NumberGuestsPicker:js+hotel+module+ImageLoader:js+hotel+index_v5^alFa^1515641871.js");
    }
</script>--%>
<div id="ui-datepicker-div"
     class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-datepicker-multi ui-datepicker-multi-2"
     style="width: 34em;">
    <div class="ui-datepicker-group ui-datepicker-group-first">
        <div class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-left"><a
                class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="Prev"><span
                class="ui-icon ui-icon-circle-triangle-w">Prev</span></a>
            <div class="ui-datepicker-title"><span class="ui-datepicker-month">二月</span>&nbsp;<span
                    class="ui-datepicker-year">2018</span></div>
        </div>
        <table class="ui-datepicker-calendar">
            <thead>
            <tr>
                <th scope="col"><span title="星期一">一</span></th>
                <th scope="col"><span title="星期二">二</span></th>
                <th scope="col"><span title="星期三">三</span></th>
                <th scope="col"><span title="星期四">四</span></th>
                <th scope="col"><span title="星期五">五</span></th>
                <th scope="col" class="ui-datepicker-week-end"><span title="星期六">六</span></th>
                <th scope="col" class="ui-datepicker-week-end"><span title="星期日">日</span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled" data-date="29">
                    &nbsp;
                </td>
                <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled" data-date="30">
                    &nbsp;
                </td>
                <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled" data-date="31">
                    &nbsp;
                </td>
                <td class=" " data-handler="selectDay" data-event="click" data-date="1" data-month="1" data-year="2018">
                    <a class="ui-state-default" href="#">1</a></td>
                <td class=" " data-handler="selectDay" data-event="click" data-date="2" data-month="1" data-year="2018">
                    <a class="ui-state-default" href="#">2</a></td>
                <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-date="3"
                    data-month="1" data-year="2018"><a class="ui-state-default" href="#">3</a></td>
                <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-date="4"
                    data-month="1" data-year="2018"><a class="ui-state-default" href="#">4</a></td>
            </tr>
            <tr>
                <td class=" " data-handler="selectDay" data-event="click" data-date="5" data-month="1" data-year="2018">
                    <a class="ui-state-default" href="#">5</a></td>
                <td class=" " data-handler="selectDay" data-event="click" data-date="6" data-month="1" data-year="2018">
                    <a class="ui-state-default" href="#">6</a></td>
                <td class=" start_day" data-handler="selectDay" data-event="click" data-date="7" data-month="1"
                    data-year="2018"><a class="ui-state-default" href="#">7</a></td>
                <td class=" end_day ui-datepicker-current-day" data-handler="selectDay" data-event="click" data-date="8"
                    data-month="1" data-year="2018"><a class="ui-state-default ui-state-active" href="#">8</a></td>
                <td class=" " data-handler="selectDay" data-event="click" data-date="9" data-month="1" data-year="2018">
                    <a class="ui-state-default" href="#">9</a></td>
                <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-date="10"
                    data-month="1" data-year="2018"><a class="ui-state-default" href="#">10</a></td>
                <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-date="11"
                    data-month="1" data-year="2018"><a class="ui-state-default" href="#">11</a></td>
            </tr>
            <tr>
                <td class=" " data-handler="selectDay" data-event="click" data-date="12" data-month="1"
                    data-year="2018"><a class="ui-state-default" href="#">12</a></td>
                <td class=" " data-handler="selectDay" data-event="click" data-date="13" data-month="1"
                    data-year="2018"><a class="ui-state-default" href="#">13</a></td>
                <td class=" " data-handler="selectDay" data-event="click" data-date="14" data-month="1"
                    data-year="2018"><a class="ui-state-default" href="#">14</a></td>
                <td class=" " data-handler="selectDay" data-event="click" data-date="15" data-month="1"
                    data-year="2018"><a class="ui-state-default" href="#">15</a></td>
                <td class=" " data-handler="selectDay" data-event="click" data-date="16" data-month="1"
                    data-year="2018"><a class="ui-state-default" href="#">16</a></td>
                <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-date="17"
                    data-month="1" data-year="2018"><a class="ui-state-default" href="#">17</a></td>
                <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-date="18"
                    data-month="1" data-year="2018"><a class="ui-state-default" href="#">18</a></td>
            </tr>
            <tr>
                <td class=" " data-handler="selectDay" data-event="click" data-date="19" data-month="1"
                    data-year="2018"><a class="ui-state-default" href="#">19</a></td>
                <td class=" " data-handler="selectDay" data-event="click" data-date="20" data-month="1"
                    data-year="2018"><a class="ui-state-default" href="#">20</a></td>
                <td class=" " data-handler="selectDay" data-event="click" data-date="21" data-month="1"
                    data-year="2018"><a class="ui-state-default" href="#">21</a></td>
                <td class=" " data-handler="selectDay" data-event="click" data-date="22" data-month="1"
                    data-year="2018"><a class="ui-state-default" href="#">22</a></td>
                <td class=" " data-handler="selectDay" data-event="click" data-date="23" data-month="1"
                    data-year="2018"><a class="ui-state-default" href="#">23</a></td>
                <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-date="24"
                    data-month="1" data-year="2018"><a class="ui-state-default" href="#">24</a></td>
                <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-date="25"
                    data-month="1" data-year="2018"><a class="ui-state-default" href="#">25</a></td>
            </tr>
            <tr>
                <td class=" " data-handler="selectDay" data-event="click" data-date="26" data-month="1"
                    data-year="2018"><a class="ui-state-default" href="#">26</a></td>
                <td class=" " data-handler="selectDay" data-event="click" data-date="27" data-month="1"
                    data-year="2018"><a class="ui-state-default" href="#">27</a></td>
                <td class=" " data-handler="selectDay" data-event="click" data-date="28" data-month="1"
                    data-year="2018"><a class="ui-state-default" href="#">28</a></td>
                <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled" data-date="1">
                    &nbsp;
                </td>
                <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled" data-date="2">
                    &nbsp;
                </td>
                <td class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled"
                    data-date="3">&nbsp;
                </td>
                <td class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled"
                    data-date="4">&nbsp;
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    <div class="ui-datepicker-group ui-datepicker-group-last">
        <div class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-right"><a
                class="ui-datepicker-next ui-corner-all ui-state-disabled" title="Next"><span
                class="ui-icon ui-icon-circle-triangle-e">Next</span></a>
            <div class="ui-datepicker-title"><span class="ui-datepicker-month">三月</span>&nbsp;<span
                    class="ui-datepicker-year">2018</span></div>
        </div>
        <table class="ui-datepicker-calendar">
            <thead>
            <tr>
                <th scope="col"><span title="星期一">一</span></th>
                <th scope="col"><span title="星期二">二</span></th>
                <th scope="col"><span title="星期三">三</span></th>
                <th scope="col"><span title="星期四">四</span></th>
                <th scope="col"><span title="星期五">五</span></th>
                <th scope="col" class="ui-datepicker-week-end"><span title="星期六">六</span></th>
                <th scope="col" class="ui-datepicker-week-end"><span title="星期日">日</span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled" data-date="26">
                    &nbsp;
                </td>
                <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled" data-date="27">
                    &nbsp;
                </td>
                <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled" data-date="28">
                    &nbsp;
                </td>
                <td class=" " data-handler="selectDay" data-event="click" data-date="1" data-month="2" data-year="2018">
                    <a class="ui-state-default" href="#">1</a></td>
                <td class=" " data-handler="selectDay" data-event="click" data-date="2" data-month="2" data-year="2018">
                    <a class="ui-state-default" href="#">2</a></td>
                <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-date="3"
                    data-month="2" data-year="2018"><a class="ui-state-default" href="#">3</a></td>
                <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-date="4"
                    data-month="2" data-year="2018"><a class="ui-state-default" href="#">4</a></td>
            </tr>
            <tr>
                <td class=" " data-handler="selectDay" data-event="click" data-date="5" data-month="2" data-year="2018">
                    <a class="ui-state-default" href="#">5</a></td>
                <td class=" " data-handler="selectDay" data-event="click" data-date="6" data-month="2" data-year="2018">
                    <a class="ui-state-default" href="#">6</a></td>
                <td class=" " data-handler="selectDay" data-event="click" data-date="7" data-month="2" data-year="2018">
                    <a class="ui-state-default" href="#">7</a></td>
                <td class=" " data-handler="selectDay" data-event="click" data-date="8" data-month="2" data-year="2018">
                    <a class="ui-state-default" href="#">8</a></td>
                <td class=" " data-handler="selectDay" data-event="click" data-date="9" data-month="2" data-year="2018">
                    <a class="ui-state-default" href="#">9</a></td>
                <td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled " data-date="10"><span
                        class="ui-state-default">10</span></td>
                <td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled " data-date="11"><span
                        class="ui-state-default">11</span></td>
            </tr>
            <tr>
                <td class=" ui-datepicker-unselectable ui-state-disabled " data-date="12"><span
                        class="ui-state-default">12</span></td>
                <td class=" ui-datepicker-unselectable ui-state-disabled " data-date="13"><span
                        class="ui-state-default">13</span></td>
                <td class=" ui-datepicker-unselectable ui-state-disabled " data-date="14"><span
                        class="ui-state-default">14</span></td>
                <td class=" ui-datepicker-unselectable ui-state-disabled " data-date="15"><span
                        class="ui-state-default">15</span></td>
                <td class=" ui-datepicker-unselectable ui-state-disabled " data-date="16"><span
                        class="ui-state-default">16</span></td>
                <td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled " data-date="17"><span
                        class="ui-state-default">17</span></td>
                <td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled " data-date="18"><span
                        class="ui-state-default">18</span></td>
            </tr>
            <tr>
                <td class=" ui-datepicker-unselectable ui-state-disabled " data-date="19"><span
                        class="ui-state-default">19</span></td>
                <td class=" ui-datepicker-unselectable ui-state-disabled " data-date="20"><span
                        class="ui-state-default">20</span></td>
                <td class=" ui-datepicker-unselectable ui-state-disabled " data-date="21"><span
                        class="ui-state-default">21</span></td>
                <td class=" ui-datepicker-unselectable ui-state-disabled " data-date="22"><span
                        class="ui-state-default">22</span></td>
                <td class=" ui-datepicker-unselectable ui-state-disabled " data-date="23"><span
                        class="ui-state-default">23</span></td>
                <td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled " data-date="24"><span
                        class="ui-state-default">24</span></td>
                <td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled " data-date="25"><span
                        class="ui-state-default">25</span></td>
            </tr>
            <tr>
                <td class=" ui-datepicker-unselectable ui-state-disabled " data-date="26"><span
                        class="ui-state-default">26</span></td>
                <td class=" ui-datepicker-unselectable ui-state-disabled " data-date="27"><span
                        class="ui-state-default">27</span></td>
                <td class=" ui-datepicker-unselectable ui-state-disabled " data-date="28"><span
                        class="ui-state-default">28</span></td>
                <td class=" ui-datepicker-unselectable ui-state-disabled " data-date="29"><span
                        class="ui-state-default">29</span></td>
                <td class=" ui-datepicker-unselectable ui-state-disabled " data-date="30"><span
                        class="ui-state-default">30</span></td>
                <td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled " data-date="31"><span
                        class="ui-state-default">31</span></td>
                <td class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled"
                    data-date="1">&nbsp;
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    <div class="ui-datepicker-row-break"></div>
</div>
<script>
/*    $("body").on('click','#_j_search_input',function(){
        if ($("#_j_search_shortcut_mdds").css('display') == "block"){
            $("#_j_search_shortcut_mdds").css('display','none');
        }else {
            $("#_j_search_shortcut_mdds").css('display','block');
        }
    })*/

    $("body").on('click','li.clearfix p a',function(){
        var id = $(this).attr("data-id");
        var name = $(this).attr("data-name");
        $("#_j_search_input").val(name);
        $("#_j_search_btn").attr("data-id",id);
        $("#_j_search_shortcut_mdds").css('display','none');
    })

/*    $("body").on('click','div.themeList.clearfix._j_tab_trigger a',function(){

        var id = $(this).attr("data-id");

        alert(id)
        $("ul.clearfix data-id''").css('display','block');
    })*/


    $("body").on('click','#_j_search_btn',function(){
        var id = $(this).attr("data-id");
        window.location.href="${pageContext.request.contextPath}/hotels/"+id+".html";
    })



</script>
</body>
</html>
