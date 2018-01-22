<%--
  Created by IntelliJ IDEA.
  User: Shinelon
  Date: 2018/1/16
  Time: 16:43
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>【${city.name}酒店预订】${city.name}酒店价格查询，${city.name}酒店推荐</title>
    <meta name="Description" content="${city.name}酒店预订，为您搜索${city.name}各区域酒店价格查询及预订信息。通过对${city.name}酒店价格、位置、设施、品牌、星级及用户真实点评为你推荐高性价比${city.name}酒店，在线预订${city.name}酒店，价格优惠实时折扣." />
    <meta name="Keywords" content="${city.name}酒店预订，${city.name}酒店价格查询，${city.name}酒店推荐" />

    <link href="http://css.mafengwo.net/css/cv/css+base:css+jquery.suggest:css+plugins:css+plugins+jquery.jgrowl:css+other+popup:css+mfw-header.2015^YlVS^1493708283.css" rel="stylesheet" type="text/css" />
    <%--<script language="javascript" src="${pageContext.request.contextPath}/js/mangfeng.js" type="text/javascript" crossorigin="anonymous"></script>--%>
    <script language="javascript" src="http://js.mafengwo.net/js/cv/js+jquery-1.8.1.min:js+global+json2:js+M+Module:js+M+M:js+M+Log:js+m.statistics:js+advert+inspector^alw^1511419343.js" type="text/javascript" crossorigin="anonymous"></script>
    <script type="text/javascript">
        var __mfw_uid = parseInt('0');
    </script>
    <script language="javascript" src="http://js.mafengwo.net/js/cv/js+common+jquery.plugins:js+common+widgets:js+mfw.storage^ZlI^1493174421.js" type="text/javascript" crossorigin="anonymous"></script>
    <link href="http://css.mafengwo.net/css/cv/css+hotel+new_hotel_v6.2:css+mdd+map-mark.v2:css+hotel+datepicker-range:css+hotel+number_guests_picker:css+mdd+hotel_fav:css+sales+m-toolbar:css+jquery-ui-1.9.1.custom.min^YlJS^1501234377.css" rel="stylesheet" type="text/css" />

</head>

<body>

<div id="header" xmlns="http://www.w3.org/1999/html">
    <div class="mfw-header">
        <div class="header-wrap clearfix">
            <div class="head-logo">
                <a class="mfw-logo" title="蚂蜂窝自由行" href="http://www.mafengwo.cn/"></a>
            </div>
            <ul class="head-nav" data-cs-t="headnav" id="_j_head_nav">
                <li class="head-nav-index" data-cs-p="index">
                    <a href="http://www.mafengwo.cn/">首页</a>
                </li>
                <li class="head-nav-place" data-cs-p="mdd">
                    <a href="http://www.mafengwo.cn/mdd/" title="目的地">目的地</a>
                </li>
                <li class="head-nav-gonglve" data-cs-p="gonglve">
                    <a href="http://www.mafengwo.cn/gonglve/" title="旅游攻略">旅游攻略</a>
                </li>
                <li class="head-nav-sales head-nav-dropdown _j_sales_nav_show" id="_j_nav_sales" data-cs-p="sales">
                    <a class="drop-toggle" href="http://www.mafengwo.cn/sales/" style="cursor: pointer;display: block;border-bottom:0 none;" data-sales-nav="旅行商城">
                        <span>旅行商城<i class="icon-caret-down"></i></span>
                    </a>
                    <div class="dropdown-menu dropdown-sales hide _j_sales_top" id="_j_sales_panel" data-cs-t="sales_nav">
                        <ul>
                            <li>
                                <a target="_blank" href="https://www.mafengwo.cn/sales/" data-sales-nav="机票＋酒店">机票＋酒店<i class="i-hot">hot</i></a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.mafengwo.cn/sales/0-0-0-0-0-0-0-0.html?group=4" data-sales-nav="跟团游">跟团游</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.mafengwo.cn/localdeals/" data-sales-nav="当地游">当地游</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.mafengwo.cn/flight/" data-sales-nav="国内机票">国内机票<i class="i-new">new</i></a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.mafengwo.cn/sales/visa/" data-sales-nav="签证">签证</a>
                            </li>
                            <li>
                                <a target="_blank" href="http://zuche.mafengwo.cn/?utm_source=i22590029-pc&utm_medium=partner&utm_campaign=entry&utm_term=mfw_nav" data-sales-nav="国际租车">国际租车</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.mafengwo.cn/insure/" data-sales-nav="保险">保险</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="head-nav-hotel" data-cs-p="hotel">
                    <a href="http://www.mafengwo.cn/hotel/" title="酒店">酒店</a>
                </li>
                <li class="head-nav-community head-nav-dropdown _j_shequ_nav_show" id="_j_nav_community" data-cs-p="community">
                    <div class="drop-toggle"><span>社区<i class="icon-caret-down"></i></span></div>
                    <!-- 社区下拉面板 begin -->
                    <div class="dropdown-panel dropdown-community hide _j_shequ_top no-image" id="_j_community_panel" data-cs-t="community_nav">
                        <div class="panel-wrapper">
                            <ul class="nav-list clearfix">
                                <li class="h">
                                    <a href="http://www.mafengwo.cn/wenda/" target="_blank" title="问答" data-cs-p="wenda">问答<i class="i-hot">hot</i></a>
                                </li>
                                <li>
                                    <a href="http://www.mafengwo.cn/mall/things.php" target="_blank" title="蚂蜂窝周边" data-cs-p="things">蚂蜂窝周边<i class="i-new">new</i></a>
                                </li>
                                <li>
                                    <a href="http://www.mafengwo.cn/club/" target="_blank" title="蜂首俱乐部" data-cs-p="club">蜂首俱乐部</a>
                                </li>
                                <li>
                                    <a href="http://www.mafengwo.cn/together/" target="_blank" title="结伴" data-cs-p="together">结伴</a>
                                </li>
                            </ul>
                            <ul class="nav-list-sub clearfix">

                                <li>
                                    <a href="http://www.mafengwo.cn/group/" target="_blank" title="蚂蜂窝旅行家" data-cs-p="group">小组论坛</a>
                                </li>
                                <li>
                                    <a href="http://www.mafengwo.cn/rudder/" target="_blank" title="分舵同城" data-cs-p="rudder">分舵同城</a>
                                </li>
                                <li>
                                    <a href="http://www.mafengwo.cn/auction/" target="_blank" title="蚂蜂窝拍卖行" data-cs-p="paimai">蚂蜂窝拍卖行</a>
                                </li>

                                <!--<li><a href="http://www.mafengwo.cn/postal/" target="_blank" title="游记纪念工厂" data-cs-p="postal">游记纪念工厂</a></li>-->
                                <li>
                                    <a href="http://www.mafengwo.cn/photo_pk/pk.php" target="_blank" title="照片PK" data-cs-p="photo_pk">照片PK</a>
                                </li>
                                <li>
                                    <a href="http://www.mafengwo.cn/focus/" target="_blank" title="真人兽" data-cs-p="focus">真人兽</a>
                                </li>
                                <li>
                                    <a href="http://www.mafengwo.cn/mall/virtual_goods.php" target="_blank" title="道具商店" data-cs-p="virtual">道具商店</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- 社区下拉面板 end -->
                </li>
                <li class="head-nav-app" data-cs-p="app">
                    <a href="http://www.mafengwo.cn/app/intro/gonglve.php" title="APP">APP</a>
                </li>
            </ul>
            <div class="head-search" data-online="1">
                <div class="head-search-wrapper">
                    <div class="head-searchform">
                        <input name="q" type="text" id="_j_head_search_input" autocomplete="off">
                        <a role="button" href="javascript:" class="icon-search" id="_j_head_search_link"></a>
                    </div>
                </div>
            </div>
            <div data-pagelet id="pagelet-block-c6d1bb3d317845d294e53750135cd775" class="" data-api="apps:user:pagelet:pageViewHeadInfo" data-params="{&quot;type&quot;:1}" data-async="1" data-controller="/js/pageletcommon/pageHeadUserInfoWWWNormal"></div>
        </div>
        <div class="shadow"></div>
    </div>

    <!-- 新自由行菜单 begin -->
    <div class="dropdown-bar" style="display: none">
        <div class="content">
            <ul class="clearfix ul-dropdown-bar" id="Js_middleNav">
                <li data-type="sales">
                    <a href="http://www.mafengwo.cn/sales/">机票＋酒店</a>
                </li>
                <li data-type="freewalker">
                    <a href="http://www.mafengwo.cn/sales/0-0-0-0-0-0-0-0.html?group=4">跟团游</a>
                </li>
                <li data-type="localdeals">
                    <a href="http://www.mafengwo.cn/localdeals/">当地游</a>
                </li>
                <li data-type="flight">
                    <a href="http://www.mafengwo.cn/flight/">国内机票</a>
                </li>
                <li data-type="visa">
                    <a href="http://www.mafengwo.cn/sales/visa/">签证</a>
                </li>
                <li data-type="wifi">
                    <a href="http://www.mafengwo.cn/localdeals/0-0-0-21-0-0-0-0.html">全球WiFi</a>
                </li>
                <li data-type="cruise">
                    <a href="http://www.mafengwo.cn/sales/0-0-0-5-0-0-0-0.html">邮轮</a>
                </li>

                <li data-type="insurance">
                    <a href="http://www.mafengwo.cn/insurance/">旅游保险</a>
                </li>
            </ul>
        </div>

    </div>
    <!-- 新自由行菜单 end -->

    <script>
        //判断是否显示 下拉bar
        ;
        (function() {
            window.showBarFlag = true;
            var realPathName = location.pathname,
                $nav = $('#Js_middleNav');
            var regExp = /localdeals|sales|flight|insurance|activity/gi;
            var pathArr = realPathName.match(regExp);
            if(window.Env.middleNavHide) {
                $('.dropdown-bar').hide();
                return;
            }
            if(realPathName == '/sales/0-0-0-5-0-0-0-0.html' || window.Env.salesType == 5) {
                $nav.children('[data-type="cruise"]').addClass('on');
                window.showBarFlag = false;
                $('.dropdown-bar').show();
            } else if(realPathName == '/localdeals/0-0-0-21-0-0-0-0.html' || window.Env.salesType == 21) {
                $nav.children('[data-type="wifi"]').addClass('on');
                window.showBarFlag = false;
                $('.dropdown-bar').show();
            } else if(window.Env.sales_title_tag == 'visa' || window.Env.salesType == 4) {
                $nav.children('[data-type="visa"]').addClass('on');
                window.showBarFlag = false;
                $('.dropdown-bar').show();
            } else if(window.Env.sales_title_tag == 'semi_self_service' || realPathName == '/sales/0-0-0-6-0-0-0-0.html?group=4' || window.Env.salesType == 30 || window.Env.salesType == 6) {
                $nav.children('[data-type="freewalker"]').addClass('on');
                window.showBarFlag = false;
                $('.dropdown-bar').show();
            } else if(window.Env.salesType) {
                switch(window.Env.salesType | 0) {
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
            } else {
                if(pathArr) {
                    if(pathArr.length == 1 && pathArr[0] != 'activity') {
                        switch(pathArr[0]) {
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
                    } else {
                        if('activity'.indexOf(pathArr) != -1) {
                            window.showBarFlag = true;
                            $('.dropdown-bar').hide();
                        }
                    }
                }
            }
            // 点击时触发
            $('.ul-dropdown-bar > li').on('click', function() {
                $(this).addClass('on').siblings().removeClass('on');
            });
        })();
    </script>

</div>

<div class="wrapper">
    <div class="top-info clearfix">
        <div class="crumb">
            <span class="tit">您在这里：</span>
            <div class="item">
                <div class="drop">
                    <span class="hd"><a href="/hotel/" target="_blank" >酒店<i></i></a></span>
                    <div class="bd" style="width:auto">
                        <i class="arrow"><b></b></i>
                        <div class="col">
                            <h3>周边国家和地区</h3>
                            <ul class="clearfix">
                                <li>
                                    <a href="/hotel/11780/" target="_blank" title="朝鲜酒店">朝鲜<span>North Korea</span></a>
                                </li>
                                <li>
                                    <a href="/hotel/10184/" target="_blank" title="韩国酒店">韩国<span>Korea</span></a>
                                </li>
                                <li>
                                    <a href="/hotel/14293/" target="_blank" title="蒙古酒店">蒙古<span>Mongolia</span></a>
                                </li>
                                <li>
                                    <a href="/hotel/10183/" target="_blank" title="日本酒店">日本<span>Japan</span></a>
                                </li>
                                <li>
                                    <a href="/hotel/10300/" target="_blank" title="俄罗斯酒店">俄罗斯<span>Russia</span></a>
                                </li>
                                <li>
                                    <a href="/hotel/10820/" target="_blank" title="老挝酒店">老挝<span>Laos</span></a>
                                </li>
                            </ul>
                        </div>
                        <div class="more">
                            <a href="/hotel/" target="_blank">&gt;&gt;更多国家和地区</a>
                        </div>
                    </div>
                </div>
                <em>&gt;</em> </div>
            <div class="item">
                <div class="drop">
                    <span class="hd"><a href="/hotel/21536/" target="_blank" title="中国酒店">中国酒店<i></i></a></span>
                    <div class="bd" style="width:auto">
                        <i class="arrow"><b></b></i>
                        <div class="col">
                            <h3>${cityC.name}其他城市</h3>
                            <ul class="clearfix">
                                <li>
                                    <a href="/hotel/10065/" target="_blank" title="北京酒店推荐">北京<span>Beijing</span></a>
                                </li>
                                <li>
                                    <a href="/hotel/10195/" target="_blank" title="西安酒店推荐">西安<span>Xi'an</span></a>
                                </li>
                                <li>
                                    <a href="/hotel/10198/" target="_blank" title="深圳酒店推荐">深圳<span>Shenzhen</span></a>
                                </li>
                                <li>
                                    <a href="/hotel/10088/" target="_blank" title="广州酒店推荐">广州<span>guangzhou</span></a>
                                </li>
                                <li>
                                    <a href="/hotel/10208/" target="_blank" title="重庆酒店推荐">重庆<span>ChongQing</span></a>
                                </li>
                                <li>
                                    <a href="/hotel/10035/" target="_blank" title="成都酒店推荐">成都<span>Chengdu</span></a>
                                </li>
                            </ul>
                        </div>
                        <div class="more">
                            <a href="/hotel/21536/" target="_blank">&gt;&gt;更多城市</a>
                        </div>
                    </div>
                </div>
                <em>&gt;</em> </div>
            <div class="item cur">
                <a href="${pageContext.request.contextPath}/hotel/${city.id}.html" target="_blank" title="${city.name}酒店预订">${city.name}酒店预订</a>
            </div>
        </div>
    </div>

    <div class="hotel-searchbar clearfix">
        <div class="hs-item hs-item-search" id="_j_hotel_search">
            <input type="text" value="${city.name}" id="_j_search_input" autocomplete="off">
            <div class="hotel-suggest simsun" id="_j_search_suggest" style="display:none;"></div>
            <a class="hs-icon hs-icon-search" href="javascript:;" id="_j_search_btn"></a>
        </div>
    </div>
    <div class="area-main clearfix">
        <div class="area-wrapper" id="_j_area_wrapper" style="display:none;">
            <dl class="item-area clearfix _j_area_list">
                <dt>区域: </dt>
                <dd>
                    <ul class="area-nav clearfix" id="area">
                        <li>
                            <a href="javascript:;" class="_j_area_name" data-id="${des.cityid}" onclick="searchByCity(${des.cityid})">全部</a>
                        </li>
                    </ul>
                    <%--<a class="toggle" href="javascript:;" style="display:none;" data-count="${count}"><i></i></a>--%>
                </dd>
            </dl>
            <dl class="item-info clearfix _j_area_desc_list">
                <dt>攻略: </dt>
                <dd>
                    <div id="des">
                        ${des.areanorms}
                    </div>
                </dd>
            </dl>
        </div>
    </div>
    <div class="hotel-toolbar clearfix">
        <div class="htb-item htb-item-price" id="_j_price_slider">
            <div class="htb-title"><span>¥0 - 4000</span>价格</div>
            <div class="price-range">
                <div class="range-bar ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">



                    <div class="ui-slider-range ui-widget-header ui-corner-all" style="left: 0%; width: 100%;"></div><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 0%;"></span><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 100%;"></span></div>
            </div>
        </div>
        <div class="htb-item htb-item-dropdown" id="_j_star_filter">
            <div class="htb-title">住宿等级</div>
            <div class="htb-select">
                <div class="sel-trigger _j_dropdown_filter_trigger">
                    <i class="i-sel-arrow"></i>
                    <span></span>
                </div>
                <div class="sel-dropdown _j_dropdown_filter_content">
                    <ul></ul>
                    <div class="empty">
                        <a class="btn" href="javascript:;">清空</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="htb-item htb-item-dropdown" id="_j_type_filter">
            <div class="htb-title">住宿类型</div>
            <div class="htb-select">
                <div class="sel-trigger _j_dropdown_filter_trigger">
                    <i class="i-sel-arrow"></i>
                    <span></span>
                </div>
                <div class="sel-dropdown _j_dropdown_filter_content">
                    <ul></ul>
                    <div class="empty">
                        <a class="btn" href="javascript:;">清空</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="htb-item htb-item-dropdown" id="_j_facility_filter">
            <div class="htb-title">设施</div>
            <div class="htb-select">
                <div class="sel-trigger _j_dropdown_filter_trigger">
                    <i class="i-sel-arrow"></i>
                    <span></span>
                </div>
                <div class="sel-dropdown _j_dropdown_filter_content">
                    <ul></ul>
                    <div class="empty">
                        <a class="btn" href="javascript:;">清空</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="htb-item htb-item-dropdown" id="_j_brand_filter">
            <div class="htb-title">品牌</div>
            <div class="htb-select">
                <div class="sel-trigger _j_dropdown_filter_trigger">
                    <i class="i-sel-arrow"></i>
                    <span></span>
                </div>
                <div class="sel-dropdown _j_dropdown_filter_content">
                    <ul></ul>
                    <div class="empty">
                        <a class="btn" href="javascript:;">清空</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="htb-item htb-item-dropdown" id="_j_airbnb_room_filter" style="display:none;">
            <div class="htb-title">整套/合住</div>
            <div class="htb-select">
                <div class="sel-trigger _j_dropdown_filter_trigger">
                    <i class="i-sel-arrow"></i>
                    <span></span>
                </div>
                <div class="sel-dropdown _j_dropdown_filter_content">
                    <ul></ul>
                    <div class="empty">
                        <a class="btn" href="javascript:;">清空</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="htb-item htb-item-dropdown" id="_j_airbnb_bedroom_filter" style="display:none;">
            <div class="htb-title">卧室数量</div>
            <div class="htb-select">
                <div class="sel-trigger _j_dropdown_filter_trigger">
                    <i class="i-sel-arrow"></i>
                    <span></span>
                </div>
                <div class="sel-dropdown _j_dropdown_filter_content">
                    <ul></ul>
                    <div class="empty">
                        <a class="btn" href="javascript:;">清空</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="htb-item htb-item-dropdown" id="_j_airbnb_facility_filter" style="display:none;">
            <div class="htb-title">设施</div>
            <div class="htb-select">
                <div class="sel-trigger _j_dropdown_filter_trigger">
                    <i class="i-sel-arrow"></i>
                    <span></span>
                </div>
                <div class="sel-dropdown _j_dropdown_filter_content">
                    <ul></ul>
                    <div class="empty">
                        <a class="btn" href="javascript:;">清空</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="htb-item htb-item-dropdown" id="_j_airbnb_property_type_filter" style="display:none;">
            <div class="htb-title">住宿类型</div>
            <div class="htb-select">
                <div class="sel-trigger _j_dropdown_filter_trigger">
                    <i class="i-sel-arrow"></i>
                    <span></span>
                </div>
                <div class="sel-dropdown _j_dropdown_filter_content">
                    <ul></ul>
                    <div class="empty">
                        <a class="btn" href="javascript:;">清空</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="htb-item htb-item-dist" id="_j_poi_filter">
            <div class="htb-title">与指定地点距离</div>
            <div class="htb-select">
                <div class="sel-trigger _j_dropdown_filter_trigger">
                    <i class="i-sel-arrow"></i>
                    <span class="dist-num"></span>
                    <span></span>
                </div>
                <div class="sel-dropdown _j_dropdown_filter_content">
                    <div class="dist-range">
                        <div class="dist-range-title"></div>
                        <div class="dist-range-box">
                            <div class="range-bar"></div>
                        </div>
                    </div>
                    <ul></ul>
                    <div class="empty">
                        <a class="btn" href="javascript:;">清空</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="hotel-sortbar clearfix">
        <div class="sortbar-info">
            <div class="total" id="_j_total_text"></div>
            <span class="hotel-switch" id="_j_available_switch">
                有房<span class="mui-switch"><i></i></span>全部酒店
					</span>
            <div class="checkbox-list clearfix" id="_j_checkbox_list"></div>
            <div class="htb-search" id="_j_keyword_filter">
                <div class="htb-searchbar">
                    <input type="text" placeholder="搜索关键词">
                    <a class="htb-icon-search" href="javascript:;"></a>
                    <i class="icon-search-clear" style="display:none;">×</i>
                </div>
            </div>
        </div>
        <div class="sortbar-nav" id="_j_sorter"></div>
    </div>

    <div class="n-content">
        <div class="hotel-loading" id="_j_hotel_list_loading"><i class="loading-m"></i></div>
        <div class="hotel-list" id="_j_hotel_list">
            <div class="hotel-item clearfix _j_hotel_item" data-id="15059" data-is-merge_room="0" data-name="锦江之星杭州西湖大道酒店" data-lat="30.24519" data-lng="120.17079" data-is-airbnb="0" data-cs-t="酒店list页点击入口分布">
                <div class="hotel-pic">
                    <a href="/hotel/15059.html?iMddid=10156" class="_j_hotel_info_link" target="_blank" data-cs-p="图片">
                        <img src="http://n2-q.mafengwo.net/s5/M00/D4/6C/wKgB3FILszGAQF4GAArpylI-cyU77.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90" alt="锦江之星杭州西湖大道酒店预订" style="width: 330px;">
                    </a>

                </div>
                <div class="hotel-title">
                    <div class="title">
                        <h3><a href="/hotel/15059.html?iMddid=10156" class="_j_hotel_info_link" target="_blank" title="锦江之星杭州西湖大道酒店 Jinjiang Inn Hangzhou Xihu Avenue Branch" data-cs-p="标题">锦江之星杭州西湖大道酒店</a></h3>
                        <a href="/hotel/activity/pigeon/index" target="_blank"><i class="icon-bird"></i></a>
                        <br>
                        <span>Jinjiang Inn Hangzhou Xihu Avenue Branch</span>
                        <span class="hotel-rate rate2"></span>
                    </div>
                </div>
                <div class="hotel-info ">
<%--                    <ul class="nums clearfix">
                        <li class="rating rating2">
                            <em>8.9</em>分
                            <br><strong>非常好</strong>
                        </li>
                        <li><a href="/hotel/15059.html?iMddid=10156#anchor=comment" class="_j_hotel_info_link" target="_blank"><em>743条</em><br>蜂蜂评价</a></li>
                        <li class="split"></li>
                        <li><a href="/hotel/15059.html?iMddid=10156#anchor=comment" class="_j_hotel_info_link" target="_blank"><em>16篇</em><br>游记提及</a></li>
                    </ul>--%>
                    <p class="summary" title="酒店位于南宋御街上，周边景点非常多，晚上出去逛逛很方便，街上还有一家人爆多的冷饮店，可以去尝试。">酒店位于南宋御街上，周边景点非常多，晚上出去逛逛很方便，街上还有一家人爆多的冷饮店，可以去尝试。</p>
                    <div class="location">
                        <span><i class="icon-location"></i>位于: <a href="/hotel/area_11912.html" data-id="11912" data-type="area">西湖</a></span>
                        <i class="icon-subway"></i>
                    </div>

                </div>
                <div class="hotel-btns">
                    <a class="btn-booking _j_booking_btn" href="javascript:" rel="nofollow" style="" data-ota="youyu_pkg" data-url="/booking/go2booking.php?from=hotel_list_new&amp;mddid=10156&amp;poi_id=15059&amp;to=youyu_pkg&amp;j=http%3A%2F%2Fwww.mafengwo.cn%2Fhotel_zx%2Fhotel%2Findex.php%3FiId%3D819189%26sRoom%3D1" data-price="266" data-is-cache-price="0" data-is-sold-out="0" data-pay-type="" data-ota-id="14">
                        <div class="ota">
                            <div class="name">
                                <strong><img src="http://images.mafengwo.net/images/hotel/ota/mafengwo_w100h20_2x_3.png" height="20" width="100"></strong>

                                <i class="icon-alipay" style=""></i>
                                <i class="icon-wxpay" style=""></i>
                            </div>
                            <p class="tips" style="display:none;"></p>
                        </div>
                        <div class="price _j_booking_price">
                            <strong>￥</strong><strong>267</strong>
                            <i class="arrow"></i>
                        </div>
                        <div class="price _j_booking_sold_out" style="display:none;">
                            <span>已售罄</span>
                        </div>
                    </a>
                </div>
<%--                <div class="hotel-other">
                    <div class="collect">
                        <a class="btn-addCollect _j_add_fav" href="javascript:;" data-id="15059" data-type_id="2" data-cs-p="收藏"><i></i>

                            收藏


                        </a>
                        <a class="btn-cancelCollect _j_del_fav" style="display:none;" href="javascript:;" data-id="15059" data-type_id="2"><i></i>

                            取消收藏


                        </a>
                    </div>
                </div>--%>
            </div>
<%--            <div class="page-hotel" align="right" id="list_paginator" rel="nofollow"><span class="count">共<span>196</span>页 / <span>3913</span>家旅店</span>
                <a class="ti first _j_pageitem" data-value="1" rel="nofollow">首页</a>
                <span class="this-page" data-value="1" rel="nofollow">1</span><a class="ti _j_pageitem" data-value="2" rel="nofollow">2</a>
                <a class="ti _j_pageitem" data-value="3" rel="nofollow">3</a>
                <a class="ti _j_pageitem" data-value="4" rel="nofollow">4</a>
                <a class="ti _j_pageitem" data-value="5" rel="nofollow">5</a>
                <a class="ti _j_pageitem prev" data-value="2" rel="nofollow">后一页</a><a class="ti first _j_pageitem" data-value="196" rel="nofollow">末页</a></div>
        </div>--%>
    </div>

    <div class="ft-nav simsun">
        <dl>
            <dt><h3>国外热门酒店预订<h3></dt>
            <dd>
                <ul class="clearfix">
                    <li>
                        <a href="/hotel/10754/" target="_blank" title="新加坡酒店预订">新加坡</a>
                    </li>
                    <li>
                        <a href="/hotel/10083/" target="_blank" title="泰国酒店预订">泰国</a>
                    </li>
                    <li>
                        <a href="/hotel/10184/" target="_blank" title="韩国酒店预订">韩国</a>
                    </li>
                    <li>
                        <a href="/hotel/10183/" target="_blank" title="日本酒店预订">日本</a>
                    </li>
                    <li>
                        <a href="/hotel/10067/" target="_blank" title="菲律宾酒店预订">菲律宾</a>
                    </li>
                    <li>
                        <a href="/hotel/10181/" target="_blank" title="印尼酒店预订">印尼</a>
                    </li>
                    <li>
                        <a href="/hotel/10180/" target="_blank" title="越南酒店预订">越南</a>
                    </li>
                    <li>
                        <a href="/hotel/10097/" target="_blank" title="马来西亚酒店预订">马来西亚</a>
                    </li>
                    <li>
                        <a href="/hotel/11058/" target="_blank" title="斯里兰卡酒店预订">斯里兰卡</a>
                    </li>
                    <li>
                        <a href="/hotel/10544/" target="_blank" title="新西兰酒店预订">新西兰</a>
                    </li>
                    <li>
                        <a href="/hotel/11761/" target="_blank" title="毛里求斯酒店预订">毛里求斯</a>
                    </li>
                    <li>
                        <a href="/hotel/10202/" target="_blank" title="澳大利亚酒店预订">澳大利亚</a>
                    </li>
                    <li>
                        <a href="/hotel/10069/" target="_blank" title="尼泊尔酒店预订">尼泊尔</a>
                    </li>
                    <li>
                        <a href="/hotel/10062/" target="_blank" title="美国酒店预订">美国</a>
                    </li>
                    <li>
                        <a href="/hotel/10177/" target="_blank" title="加拿大酒店预订">加拿大</a>
                    </li>
                    <li>
                        <a href="/hotel/10171/" target="_blank" title="法国酒店预订">法国</a>
                    </li>
                    <li>
                        <a href="/hotel/10122/" target="_blank" title="英国酒店预订">英国</a>
                    </li>
                    <li>
                        <a href="/hotel/10101/" target="_blank" title="马尔代夫酒店预订">马尔代夫</a>
                    </li>
                </ul>
            </dd>
        </dl>
        <dl>
            <dt><h3>热门城市酒店查询</h3></dt>
            <dd>
                <ul class="clearfix">
                    <li>
                        <a href="/hotel/10189/" target="_blank" title="香港酒店查询">香港</a>
                    </li>
                    <li>
                        <a href="/hotel/12684/" target="_blank" title="台湾酒店查询">台湾</a>
                    </li>
                    <li>
                        <a href="/hotel/10460/" target="_blank" title="巴厘岛酒店查询">巴厘岛</a>
                    </li>
                    <li>
                        <a href="/hotel/11047/" target="_blank" title="普吉岛酒店查询">普吉岛</a>
                    </li>
                    <li>
                        <a href="/hotel/11045/" target="_blank" title="曼谷酒店查询">曼谷</a>
                    </li>
                    <li>
                        <a href="/hotel/10130/" target="_blank" title="首尔酒店查询">首尔</a>
                    </li>
                    <li>
                        <a href="/hotel/11053/" target="_blank" title="胡志明市酒店查询">胡志明市</a>
                    </li>
                    <li>
                        <a href="/hotel/11046/" target="_blank" title="芭提雅酒店查询">芭提雅</a>
                    </li>
                    <li>
                        <a href="/hotel/10579/" target="_blank" title="纽约酒店查询">纽约</a>
                    </li>
                    <li>
                        <a href="/hotel/11049/" target="_blank" title="吉隆坡酒店查询">吉隆坡</a>
                    </li>
                    <li>
                        <a href="/hotel/15284/" target="_blank" title="清迈酒店查询">清迈</a>
                    </li>
                    <li>
                        <a href="/hotel/10926/" target="_blank" title="洛杉矶酒店查询">洛杉矶</a>
                    </li>
                    <li>
                        <a href="/hotel/11055/" target="_blank" title="河内酒店查询">河内</a>
                    </li>
                    <li>
                        <a href="/hotel/14210/" target="_blank" title="苏梅岛酒店查询">苏梅岛</a>
                    </li>
                    <li>
                        <a href="/hotel/10222/" target="_blank" title="东京酒店查询">东京</a>
                    </li>
                    <li>
                        <a href="/hotel/10819/" target="_blank" title="台北酒店查询">台北</a>
                    </li>
                    <li>
                        <a href="/hotel/15325/" target="_blank" title="花莲酒店查询">花莲</a>
                    </li>
                    <li>
                        <a href="/hotel/16111/" target="_blank" title="雅加达酒店查询">雅加达</a>
                    </li>
                </ul>
            </dd>
        </dl>
        <dl>
            <dt><h3>商圈周边酒店推荐<h3></dt>
            <dd>
                <ul class="clearfix">
                    <li>
                        <a href="/hotel/area_113.html" target="_blank" title="人民广场/南京路步行街酒店推荐">人民广场/南京路步行街</a>
                    </li>
                    <li>
                        <a href="/hotel/area_117.html" target="_blank" title="陆家嘴酒店推荐">陆家嘴</a>
                    </li>
                    <li>
                        <a href="/hotel/area_115.html" target="_blank" title="豫园酒店推荐">豫园</a>
                    </li>
                    <li>
                        <a href="/hotel/area_108.html" target="_blank" title="外滩酒店推荐">外滩</a>
                    </li>
                    <li>
                        <a href="/hotel/area_122.html" target="_blank" title="淮海中路酒店推荐">淮海中路</a>
                    </li>
                    <li>
                        <a href="/hotel/area_106.html" target="_blank" title="静安寺/南京西路酒店推荐">静安寺/南京西路</a>
                    </li>
                    <li>
                        <a href="/hotel/area_111.html" target="_blank" title="浦东新区酒店推荐">浦东新区</a>
                    </li>
                    <li>
                        <a href="/hotel/area_2797.html" target="_blank" title="新天地/田子坊酒店推荐">新天地/田子坊</a>
                    </li>
                    <li>
                        <a href="/hotel/area_1718.html" target="_blank" title="五角场/大柏树酒店推荐">五角场/大柏树</a>
                    </li>
                    <li>
                        <a href="/hotel/area_123.html" target="_blank" title="徐家汇酒店推荐">徐家汇</a>
                    </li>
                    <li>
                        <a href="/hotel/area_110.html" target="_blank" title="四川北路酒店推荐">四川北路</a>
                    </li>
                    <li>
                        <a href="/hotel/area_12261.html" target="_blank" title="迪士尼度假区酒店推荐">迪士尼度假区</a>
                    </li>
                    <li>
                        <a href="/hotel/area_119.html" target="_blank" title="中山公园酒店推荐">中山公园</a>
                    </li>
                    <li>
                        <a href="/hotel/area_120.html" target="_blank" title="虹桥机场酒店推荐">虹桥机场</a>
                    </li>
                    <li>
                        <a href="/hotel/area_109.html" target="_blank" title="上海火车站酒店推荐">上海火车站</a>
                    </li>
                    <li>
                        <a href="/hotel/area_112.html" target="_blank" title="世博园酒店推荐">世博园</a>
                    </li>
                    <li>
                        <a href="/hotel/area_116.html" target="_blank" title="浦东机场酒店推荐">浦东机场</a>
                    </li>
                    <li>
                        <a href="/hotel/area_11978.html" target="_blank" title="上海南站酒店推荐">上海南站</a>
                    </li>
                    <li>
                        <a href="/hotel/area_121.html" target="_blank" title="崇明岛酒店推荐">崇明岛</a>
                    </li>
                    <li>
                        <a href="/hotel/area_8709.html" target="_blank" title="普陀区酒店推荐">普陀区</a>
                    </li>
                    <li>
                        <a href="/hotel/area_9510.html" target="_blank" title="朱家角古镇酒店推荐">朱家角古镇</a>
                    </li>
                    <li>
                        <a href="/hotel/area_8997.html" target="_blank" title="闵行区/七宝古镇酒店推荐">闵行区/七宝古镇</a>
                    </li>
                    <li>
                        <a href="/hotel/area_9514.html" target="_blank" title="上海外国语大学/松江区酒店推荐">上海外国语大学/松江区</a>
                    </li>
                </ul>
            </dd>
        </dl>
    </div>

</div>

<script language="javascript" src="http://js.mafengwo.net/js/corelib/underscore-1.6.0.js?1493174421" type="text/javascript" crossorigin="anonymous"></script>

<script language="javascript" src="http://js.mafengwo.net/js/cv/js+underscore1.3.3:js+corelib+backbone-1.1.2^Z1E^1493174421.js" type="text/javascript" crossorigin="anonymous"></script>

<script language="javascript" src="http://js.mafengwo.net/js/jquery-ui-1.11.0.min.js?1493174421" type="text/javascript" crossorigin="anonymous"></script>

<script language="javascript" src="http://js.mafengwo.net/js/MouseTip.js?1493174421" type="text/javascript" crossorigin="anonymous"></script>

<link href="http://css.mafengwo.net/css/mfw-footer.css?1493174418" rel="stylesheet" type="text/css" />

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
                <dd>
                    <a class="highlight" href="http://www.mafengwo.cn/activity/sales_report2015/index" target="_blank">中国旅游行业第一部“玩法”</a>
                </dd>
            </dl>
            <dl class="ft-info-col ft-info-about">
                <dt>关于我们</dt>
                <dd>
                    <a href="http://www.mafengwo.cn/s/about.html" rel="nofollow">关于蚂蜂窝</a>
                </dd>
                <dd>
                    <a href="http://www.mafengwo.cn/s/property.html" rel="nofollow">网络信息侵权通知指引</a>
                </dd>
                <dd>
                    <a href="http://www.mafengwo.cn/s/private.html" rel="nofollow">隐私政策</a>
                    <a href="http://www.mafengwo.cn/s/agreement.html" rel="nofollow" class="m_l_10">服务协议</a>
                </dd>
                <dd>
                    <a href="http://www.mafengwo.cn/s/contact.html" rel="nofollow">联系我们</a>
                </dd>
                <dd>
                    <a href="http://www.mafengwo.cn/s/sitemap.html" target="_blank">网站地图</a>
                </dd>
                <dd>
                    <a class="joinus highlight" title="蚂蜂窝团队招聘" target="_blank" href="http://www.mafengwo.cn/s/hr.html" rel="nofollow">加入蚂蜂窝</a>
                </dd>
            </dl>
            <dl class="ft-info-col ft-info-service">
                <dt>旅行服务</dt>
                <dd>
                    <ul class="clearfix">
                        <li>
                            <a target="_blank" href="http://www.mafengwo.cn/gonglve/">旅游攻略</a>
                        </li>
                        <li>
                            <a target="_blank" href="http://www.mafengwo.cn/hotel/">酒店预订</a>
                        </li>
                        <li>
                            <a target="_blank" href="http://www.mafengwo.cn/sales/">旅游特价</a>
                        </li>
                        <li>
                            <a target="_blank" href="http://zuche.mafengwo.cn/">国际租车</a>
                        </li>
                        <li>
                            <a target="_blank" href="http://www.mafengwo.cn/wenda/">旅游问答</a>
                        </li>
                        <li>
                            <a target="_blank" href="http://www.mafengwo.cn/insure/">旅游保险</a>
                        </li>
                        <li>
                            <a target="_blank" href="http://z.mafengwo.cn">旅游指南</a>
                        </li>
                        <li>
                            <a target="_blank" href="http://huoche.mafengwo.cn">订火车票</a>
                        </li>
                        <li>
                            <a target="_blank" href="http://www.mafengwo.cn/travel-news/">旅游资讯</a>
                        </li>
                        <li>
                            <a target="_blank" href="http://www.mafengwo.cn/app/intro/gonglve.php">APP下载</a>
                        </li>
                        <li>
                            <a target="_blank" href="http://www.mafengwo.cn/sales/alliance.php" class="highlight">全球供应商入驻</a>
                        </li>
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
                <a class="s-b" href="https://ss.knet.cn/verifyseal.dll?sn=e130816110100420286o93000000&ct=df&a=1&pa=787189" target="_blank" rel="nofollow"></a>
                <a class="s-c" href="http://www.itrust.org.cn/Home/Index/itrust_certifi/wm/1669928206.html" target="_blank" rel="nofollow"></a>
            </div>
            <a href="http://www.mafengwo.cn"><i class="ft-mfw-logo"></i></a>
            <p>© 2018 Mafengwo.cn
                <a href="http://www.miibeian.gov.cn/" target="_blank" rel="nofollow">京ICP备11015476号</a> 京公网安备110105013401号
                <a href="http://images.mafengwo.net/images/about/icp.jpg" target="_blank" rel="nofollow">京ICP证110318号</a>
            </p>
            <p>
                <a href="http://images.mafengwo.net/images/about/licence.jpg" target="_blank" rel="nofollow">营业执照</a> 新出网证(京)字242号 蚂蜂窝客服：国内 <span class="highlight">4006-345-678</span><span class="m_l_10">海外</span> <span class="highlight">+86-10-5922-2799</span></p>
        </div>
    </div>
</div>

<link href="http://css.mafengwo.net/css/mfw-toolbar.css?1493174418" rel="stylesheet" type="text/css" />

<div class="mfw-toolbar" id="_j_mfwtoolbar">
    <div class="toolbar-item-top">
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
        <a role="button" class="mfw-code _j_code" >

            <img src="https://n3-q.mafengwo.net/s9/M00/01/7B/wKgBs1gjDcmAKFXuAAERZRJ4yus61.jpeg " width="300" height="192">
        </a>
        <!--<div class="wx-official-pop"><img src="http://images.mafengwo.net/images/qrcode-weixin.gif"><i class="_j_closeqrcode"></i></div>-->
    </div>
    <div class="toolbar-item-down">
        <a role="button" class="btn _j_gobottom">
            <i class="icon_down"></i>
            <em>页面底部</em>
        </a>
    </div>
</div>

<%--<script language="javascript" type="text/javascript">
    if(typeof M !== "undefined" && typeof M.loadResource === "function") {
        M.loadResource("http://js.mafengwo.net/js/cv/js+Dropdown:js+pageletcommon+pageHeadUserInfoWWWNormal:js+jquery.tmpl:js+M+module+InputListener:js+M+module+SuggestionXHR:js+M+module+DropList:js+M+module+Suggestion:js+M+module+MesSearchEvent:js+SiteSearch:js+AHeader:js+jquery.jgrowl.min:js+hotel+mfwmap+mfwmap-util:js+hotel+mfwmap+mfwmap-event:js+hotel+mfwmap+mfwmap-runtime-google:js+hotel+mfwmap+mfwmap-runtime-amap:js+hotel+mfwmap+mfwmap-runtime-leaflet:js+hotel+mfwmap+mfwmap:js+hotel+mfwmap+mfwmap-overlays:js+hotel+module+ListTips:js+M+module+Storage:js+hotel+module+Log:js+hotel+module+Search:js+hotel+module+Hash:js+xdate:js+hotel+module+ModuleProvider:js+hotel+module+BookingDate:js+hotel+module+BookingGuests:js+hotel+list_mvc_model:js+corelib+handlebars-2.0.0:js+hotel+module+FestivalDateConfig:js+jquery-ui-core:js+jquery-ui-datepicker:js+hotel+module+DateRangePicker:js+hotel+module+NumberGuestsPicker:js+hotel+list_mvc_filter_view:js+jquery.scrollTo:js+M+module+dialog+Layer:js+M+module+dialog+DialogBase:js+M+module+dialog+Dialog:js+M+module+dialog+alert:js+hotel+module+FavDialog:js+hotel+list_mvc_data_view:js+hotel+list_v6:js+M+module+PageAdmin:js+M+module+Cookie:js+M+module+ResourceKeeper:js+AMessage:js+M+module+FrequencyVerifyControl:js+M+module+FrequencySystemVerify:js+ALogin:js+M+module+ScrollObserver:js+M+module+QRCode:js+AToolbar:js+ACnzzGaLog:js+ARecruit:js+ALazyLoad^YlZXSg^1515641871.js");
    }
</script>--%>
<script>
    $("#_j_area_wrapper").css('display','block');

       /* $("#area").prepend('<li>\n' +
            '<a href="javascript:;" class="_j_area_name" data-id="108">外滩</a>\n' +
            '</li>');
        $("#area").prepend('<li>\n' +
            '                            <a href="javascript:;" class="_j_area_name" data-id="108">外滩2</a>\n' +
            '                        </li>');*/
    $(function (){
        /*动态生成area*/
        $.ajax({
            url:"${pageContext.request.contextPath}/hotel/areas",
            data:{"cid":${city.id}},
            datatype:"json",
            type:'GET',
            success:function (Data) {
                for (var i = 0; i < Data.length; i++){
                    var id = Data[i].id;
                    var areaname = Data[i].areaname;
                    var html = '<li><a href="javascript:;" class="_j_area_name" data-id="'+ id +'" onclick="selectArea(' + id +')">' +
                            areaname + '</a></li>' ;
                    /*$("#area").prepend(html)*/
                    $("#area").append(html)
                }
            },
            error:function () {
                alert("服务器未知错误");
            }
        })

        /*动态生成酒店*/
        $.ajax({
            url:"${pageContext.request.contextPath}/hotel/hotels",
            data:{"cid":${city.id},"areaid":${city.id},"current":"1"},
            datatype:"json",
            type:'GET',
            success:function (Data) {
                for (var i = 0; i < Data.length; i++){
                    var id = Data[i].id;
                    var name = Data[i].hotelname
                    var lat = Data[i].latitude;
                    var lng = Data[i].longitude;
                    var hotelpicture = Data[i].hotelpicture;
                    var ename = Data[i].ename;
                    var hotelnorms = Data[i].hotelnorms;
                    var areaid = Data[i].areaid;
                    var areaname = Data[i].areaname;
                    var html = '<div class="hotel-item clearfix _j_hotel_item" id="hotels" data-id="'+id+'" data-is-merge_room="0" data-name="'+name+'" data-lat="'+
                        lat+'" data-lng="'+lng+'" data-is-airbnb="0" data-cs-t="酒店list页点击入口分布"><div class="hotel-pic"><a href="${pageContext.request.contextPath}/hotel/'+id+'.html" class="_j_hotel_info_link" target="_blank" data-cs-p="图片">' +
                        hotelpicture +'</a></div><div class="hotel-title"><div class="title"><h3><a href="${pageContext.request.contextPath}/hotel/'+id+'.html" class="_j_hotel_info_link" target="_blank" title="'+
                        name+ename+'" data-cs-p="标题">'+name+'</a></h3><a href="/hotel/activity/pigeon/index" target="_blank"><i class="icon-bird"></i></a><br><span>'+
                        ename+'</span><span class="hotel-rate rate2"></span></div></div><div class="hotel-info "><p class="summary" title="'+
                        hotelnorms+'" style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow: hidden;">'+hotelnorms+'</p><div class="location"><span><i class="icon-location"></i>位于: <a href="javascript:;" class="_j_area_name" data-id="'+
                        areaid+'">'+areaname+ '</a></span><i class="icon-subway"></i></div></div>' ;
                    /*$("#area").prepend(html)*/
                    var hotelprice =Data[i].hotelprice;
                    var htmlpay = '<div class="hotel-btns"><a class="btn-booking _j_booking_btn" href="${pageContext.request.contextPath}/hotel/'+
                        id+'.html" rel="nofollow"><div class="ota"><div class="name"><strong><img src="http://images.mafengwo.net/images/hotel/ota/mafengwo_w100h20_2x_3.png" height="20" width="100"></strong><i class="icon-alipay" style=""></i><i class="icon-wxpay" style=""></i>'+
                        '</div><p class="tips" style="display:none;"></p></div><div class="price _j_booking_price" style="display:block;"><strong>￥</strong><strong>'+
                        hotelprice+'</strong><i class="arrow"></i></div><div class="price _j_booking_sold_out" style="display:none;"><span>已售罄</span></div></a></div></div>';
                    $("#_j_hotel_list").append(html+htmlpay)
                    setTimeout(function(){$("#_j_hotel_list_loading").css('display','none');},3000);

                }
                $.ajax({
                    url:"${pageContext.request.contextPath}/hotel/page",
                    data:{"cityid":${city.id},"areaid":${city.id},"current":"1"},
                    datatype:"json",
                    type:'GET',
                    success:function (Data) {
                        var cityid = Data.cityid;
                        var areaid=Data.areaid;
                        var current = Data.current;
                        var total = Data.total;
                        var count = Data.count;
                        var htmlhead = '<div class="page-hotel" align="right" id="list_paginator" rel="nofollow"><span class="count">共<span>'+
                            total+'</span>页 / <span>'+count+'</span>家旅店</span><a class="ti first _j_pageitem" data-value="1" rel="nofollow" data-cityid="'+
                            cityid +'" data-areaid="'+areaid+'">首页</a>';
                        var htmlfoot = '<a class="ti _j_pageitem prev" data-value="'+(current+1)+'" data-cityid="'+
                            cityid +'" data-areaid="'+areaid+'" rel="nofollow">后一页</a><a class="ti first _j_pageitem" data-value="'+total+'" data-cityid="'+
                            cityid +'" data-areaid="'+areaid+'" rel="nofollow">末页</a>';
                        var htmlup = '<a class="ti _j_pageitem prev" data-value="'+(current-1)+'" data-cityid="'+
                            cityid +'" data-areaid="'+areaid+'" rel="nofollow">前一页</a>';
                        if (current == 1){
/*                            var html = '<span class="this-page" data-value="'+current+'" rel="nofollow">'+current+'</span>';
                            for (var i = 2; i < 6; i++){
                                html += '<a class="ti _j_pageitem" data-value="'+i+'" data-cityid="'+
                                    cityid +'" data-areaid="'+areaid+'" rel="nofollow">'+i+'</a>';
                            }*/
                            for (var i = 0; i < Data.pages.length; i++){
                                if (current == Data.pages[i]){
                                    htmlhead += '<span class="this-page" data-value="'+current+'" rel="nofollow">'+current+'</span>';
                                }else {
                                    htmlhead += '<a class="ti _j_pageitem" data-value="'+Data.pages[i]+'" data-cityid="'+
                                        cityid +'" data-areaid="'+areaid+'" rel="nofollow">'+Data.pages[i]+'</a>';
                                }
                            }
                            $("#_j_hotel_list").append(htmlhead+htmlfoot)
                        }else {
                            for (var i = 0; i < Data.pages.length; i++){
                                if (current == Data.pages[i]){
                                    htmlup += '<span class="this-page" data-value="'+current+'" rel="nofollow">'+current+'</span>';
                                }else {
                                    htmlup += '<a class="ti _j_pageitem" data-value="'+Data.pages[i]+'" data-cityid="'+
                                        cityid +'" data-areaid="'+areaid+'" rel="nofollow">'+Data.pages[i]+'</a>';
                                }
                            }
                            $("#_j_hotel_list").append(htmlhead+htmlup+htmlfoot)
                        }
                    },
                    error:function () {
                        alert("服务器未知错误");
                    }
                })
            },
            error:function () {
                alert("服务器未知错误");
            }
        })


        $("body").on('click','._j_area_name',function(){
            var id = $(this).attr("data-id");
            if (id > 1000){
            $.ajax({
                url:"${pageContext.request.contextPath}/hotel/area",
                data:{"id":id},
                datatype:"json",
                type:'GET',
                success:function (Data) {
                    var areanorms = Data.areanorms;
                    var html = '<div id="des">' +areanorms+ '</div>'
                    $("#des").replaceWith(html);
                },
                error:function () {
                    alert("服务器未知错误");
                }
            })
            }else {
                $.ajax({
                    url:"${pageContext.request.contextPath}/hotel/cityDes",
                    data:{"id":id},
                    datatype:"json",
                    type:'GET',
                    success:function (Data) {
                        var areanorms = Data.areanorms;
                        var html = '<div id="des">' +areanorms+ '</div>'
                        $("#des").replaceWith(html);
                    },
                    error:function () {
                        alert("服务器未知错误");
                    }
                })
            }
            for (var i = 0; i < 10; i++) {
                $("#hotels").remove();
                $("#list_paginator").remove();
            }

            /*动态生成酒店*/
            $.ajax({
                url:"${pageContext.request.contextPath}/hotel/hotels",
                data:{"cid":${city.id},"areaid":id,"current":"1"},
                datatype:"json",
                type:'GET',
                success:function (Data) {
                    for (var i = 0; i < Data.length; i++){
                        $("#_j_hotel_list_loading").css('display','block')
                        var hotelId = Data[i].id;
                        var name = Data[i].hotelname
                        var lat = Data[i].latitude;
                        var lng = Data[i].longitude;
                        var hotelpicture = Data[i].hotelpicture;
                        var ename = Data[i].ename;
                        var hotelnorms = Data[i].hotelnorms;
                        var areaid = Data[i].areaid;
                        var areaname = Data[i].areaname;
                        var html = '<div class="hotel-item clearfix _j_hotel_item" id="hotels" data-id="'+hotelId+'" data-is-merge_room="0" data-name="'+name+'" data-lat="'+
                            lat+'" data-lng="'+lng+'" data-is-airbnb="0" data-cs-t="酒店list页点击入口分布"><div class="hotel-pic"><a href="${pageContext.request.contextPath}/hotel/\'+hotelId+\'.html?" class="_j_hotel_info_link" target="_blank" data-cs-p="图片">' +
                            hotelpicture +'</a></div><div class="hotel-title"><div class="title"><h3><a href="${pageContext.request.contextPath}/hotel/'+hotelId+'.html" class="_j_hotel_info_link" target="_blank" title="'+
                            name+ename+'" data-cs-p="标题">'+name+'</a></h3><a href="/hotel/activity/pigeon/index" target="_blank"><i class="icon-bird"></i></a><br><span>'+
                            ename+'</span><span class="hotel-rate rate2"></span></div></div><div class="hotel-info "><p class="summary" title="'+
                            hotelnorms+'" style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow: hidden;">'+hotelnorms+'</p><div class="location"><span><i class="icon-location"></i>位于: <a href="javascript:;" class="_j_area_name" data-id="'+
                            areaid+'">'+areaname+ '</a></span><i class="icon-subway"></i></div></div>' ;
                        /*$("#area").prepend(html)*/
                        var hotelprice =Data[i].hotelprice;
                        var htmlpay = '<div class="hotel-btns"><a class="btn-booking _j_booking_btn" href="${pageContext.request.contextPath}/hotel/'+
                            hotelId+'.html" rel="nofollow"><div class="ota"><div class="name"><strong><img src="http://images.mafengwo.net/images/hotel/ota/mafengwo_w100h20_2x_3.png" height="20" width="100"></strong><i class="icon-alipay" style=""></i><i class="icon-wxpay" style=""></i>'+
                            '</div><p class="tips" style="display:none;"></p></div><div class="price _j_booking_price" style="display:block;"><strong>￥</strong><strong>'+
                            hotelprice+'</strong><i class="arrow"></i></div><div class="price _j_booking_sold_out" style="display:none;"><span>已售罄</span></div></a></div></div>';
                        $("#_j_hotel_list").append(html+htmlpay)
                        setTimeout(function(){$("#_j_hotel_list_loading").css('display','none');},3000);
                    }
                    $.ajax({
                        url:"${pageContext.request.contextPath}/hotel/page",
                        data:{"cityid":${city.id},"areaid":id,"current":"1"},
                        datatype:"json",
                        type:'GET',
                        success:function (Data) {
                            var cityid = Data.cityid;
                            var areaid=Data.areaid;
                            var current = Data.current;
                            var total = Data.total;
                            var count = Data.count;
                            var htmlhead = '<div class="page-hotel" align="right" id="list_paginator" rel="nofollow"><span class="count">共<span>'+
                                total+'</span>页 / <span>'+count+'</span>家旅店</span><a class="ti first _j_pageitem" data-value="1" rel="nofollow" data-cityid="'+
                                cityid +'" data-areaid="'+areaid+'" id="pages">首页</a>';
                            var htmldown ='<a class="ti _j_pageitem prev" data-value="'+(current+1)+'" data-cityid="'+
                                cityid +'" data-areaid="'+areaid+'" rel="nofollow" id="pages">后一页</a>';
                            var htmlfoot = '<a class="ti first _j_pageitem" data-value="'+total+'" data-cityid="'+
                                cityid +'" data-areaid="'+areaid+'" rel="nofollow" id="pages">末页</a>';
                            var htmlup = '<a class="ti _j_pageitem prev" data-value="'+(current-1)+'" data-cityid="'+
                                cityid +'" data-areaid="'+areaid+'" rel="nofollow" id="pages">前一页</a>';
                            if (current == 1){
                                for (var i = 0; i < Data.pages.length; i++){
                                    if (current == Data.pages[i]){
                                        htmlhead += '<span class="this-page" data-value="'+current+'" rel="nofollow">'+current+'</span>';
                                    }else {
                                        htmlhead += '<a class="ti _j_pageitem" data-value="'+Data.pages[i]+'" data-cityid="'+
                                            cityid +'" data-areaid="'+areaid+'" rel="nofollow" id="pages">'+Data.pages[i]+'</a>';
                                    }
                                }
                                $("#_j_hotel_list").append(htmlhead+htmlfoot)
                            }else if (current == total){
                                for (var i = 0; i < Data.pages.length; i++){
                                    if (current == Data.pages[i]){
                                        htmlup += '<span class="this-page" data-value="'+current+'" rel="nofollow">'+current+'</span>';
                                    }else {
                                        htmlup += '<a class="ti _j_pageitem" data-value="'+Data.pages[i]+'" data-cityid="'+
                                            cityid +'" data-areaid="'+areaid+'" rel="nofollow" id="pages">'+Data.pages[i]+'</a>';
                                    }
                                }
                                $("#_j_hotel_list").append(htmlhead+htmlup+htmlfoot)
                            }else {
                                for (var i = 0; i < Data.pages.length; i++){
                                    if (current == Data.pages[i]){
                                        htmlup += '<span class="this-page" data-value="'+current+'" rel="nofollow">'+current+'</span>';
                                    }else {
                                        htmlup += '<a class="ti _j_pageitem" data-value="'+Data.pages[i]+'" data-cityid="'+
                                            cityid +'" data-areaid="'+areaid+'" rel="nofollow" id="pages">'+Data.pages[i]+'</a>';
                                    }
                                }
                                $("#_j_hotel_list").append(htmlhead+htmlup+htmldown+htmlfoot)
                            }
                        },
                        error:function () {
                            alert("服务器未知错误");
                        }
                    })
                },
                error:function () {
                    alert("服务器未知错误");
                }
            })
        })

        $("body").on('click','.ti',function() {
            var current = $(this).attr("data-value");
            var cityid = $(this).attr("data-cityid");
            var areasid = $(this).attr("data-areaid");

            for (var i = 0; i < 10; i++) {
                $("#hotels").remove();
                $("#list_paginator").remove();
            }

            /*动态生成酒店*/
            $.ajax({
                url:"${pageContext.request.contextPath}/hotel/hotels",
                data:{"cid":cityid,"areaid":areasid,"current":current},
                datatype:"json",
                type:'GET',
                success:function (Data) {
                    for (var i = 0; i < Data.length; i++){
                        $("#_j_hotel_list_loading").css('display','block')
                        var hotelId = Data[i].id;
                        var name = Data[i].hotelname
                        var lat = Data[i].latitude;
                        var lng = Data[i].longitude;
                        var hotelpicture = Data[i].hotelpicture;
                        var ename = Data[i].ename;
                        var hotelnorms = Data[i].hotelnorms;
                        var areaid = Data[i].areaid;
                        var areaname = Data[i].areaname;
                        var html = '<div class="hotel-item clearfix _j_hotel_item" id="hotels" data-id="'+hotelId+'" data-is-merge_room="0" data-name="'+name+'" data-lat="'+
                            lat+'" data-lng="'+lng+'" data-is-airbnb="0" data-cs-t="酒店list页点击入口分布"><div class="hotel-pic"><a href="${pageContext.request.contextPath}/hotel/'+hotelId+'.html" class="_j_hotel_info_link" target="_blank" data-cs-p="图片">' +
                            hotelpicture +'</a></div><div class="hotel-title"><div class="title"><h3><a href="${pageContext.request.contextPath}/hotel/'+hotelId+'.html" class="_j_hotel_info_link" target="_blank" title="'+
                            name+ename+'" data-cs-p="标题">'+name+'</a></h3><a href="/hotel/activity/pigeon/index" target="_blank"><i class="icon-bird"></i></a><br><span>'+
                            ename+'</span><span class="hotel-rate rate2"></span></div></div><div class="hotel-info "><p class="summary" title="'+
                            hotelnorms+'" style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow: hidden;">'+hotelnorms+'</p><div class="location"><span><i class="icon-location"></i>位于: <a href="javascript:;" class="_j_area_name" data-id="'+
                            areaid+'" >'+areaname+ '</a></span><i class="icon-subway"></i></div></div>' ;
                        /*$("#area").prepend(html)*/
                        var hotelprice =Data[i].hotelprice;
                        var htmlpay = '<div class="hotel-btns"><a class="btn-booking _j_booking_btn" href="${pageContext.request.contextPath}/hotel/'+
                            hotelId+'.html" rel="nofollow"><div class="ota"><div class="name"><strong><img src="http://images.mafengwo.net/images/hotel/ota/mafengwo_w100h20_2x_3.png" height="20" width="100"></strong><i class="icon-alipay" style=""></i><i class="icon-wxpay" style=""></i>'+
                            '</div><p class="tips" style="display:none;"></p></div><div class="price _j_booking_price" style="display:block;"><strong>￥</strong><strong>'+
                            hotelprice+'</strong><i class="arrow"></i></div><div class="price _j_booking_sold_out" style="display:none;"><span>已售罄</span></div></a></div></div>';
                        $("#_j_hotel_list").append(html+htmlpay)
                        setTimeout(function(){$("#_j_hotel_list_loading").css('display','none');},3000);
                    }
                    $.ajax({
                        url:"${pageContext.request.contextPath}/hotel/page",
                        data:{"cityid":cityid,"areaid":areasid,"current":current},
                        datatype:"json",
                        type:'GET',
                        success:function (Data) {
                            var cityid = Data.cityid;
                            var areaid=Data.areaid;
                            var current = Data.current;
                            var total = Data.total;
                            var count = Data.count;
                            var htmlhead = '<div class="page-hotel" align="right" id="list_paginator" rel="nofollow"><span class="count">共<span>'+
                                total+'</span>页 / <span>'+count+'</span>家旅店</span><a class="ti first _j_pageitem" data-value="1" rel="nofollow" data-cityid="'+
                                cityid +'" data-areaid="'+areaid+'" id="pages">首页</a>';
                            var htmldown ='<a class="ti _j_pageitem prev" data-value="'+(current+1)+'" data-cityid="'+
                                cityid +'" data-areaid="'+areaid+'" rel="nofollow" id="pages">后一页</a>';
                            var htmlfoot = '<a class="ti first _j_pageitem" data-value="'+total+'" data-cityid="'+
                                cityid +'" data-areaid="'+areaid+'" rel="nofollow" id="pages">末页</a>';
                            var htmlup = '<a class="ti _j_pageitem prev" data-value="'+(current-1)+'" data-cityid="'+
                                cityid +'" data-areaid="'+areaid+'" rel="nofollow" id="pages">前一页</a>';
                            if (current == 1){
                                for (var i = 0; i < Data.pages.length; i++){
                                    if (current == Data.pages[i]){
                                        htmlhead += '<span class="this-page" data-value="'+current+'" rel="nofollow">'+current+'</span>';
                                    }else {
                                        htmlhead += '<a class="ti _j_pageitem" data-value="'+Data.pages[i]+'" data-cityid="'+
                                            cityid +'" data-areaid="'+areaid+'" rel="nofollow" id="pages">'+Data.pages[i]+'</a>';
                                    }
                                }
                                $("#_j_hotel_list").append(htmlhead+htmlfoot)
                            }else if (current == total){
                                for (var i = 0; i < Data.pages.length; i++){
                                    if (current == Data.pages[i]){
                                        htmlup += '<span class="this-page" data-value="'+current+'" rel="nofollow">'+current+'</span>';
                                    }else {
                                        htmlup += '<a class="ti _j_pageitem" data-value="'+Data.pages[i]+'" data-cityid="'+
                                            cityid +'" data-areaid="'+areaid+'" rel="nofollow" id="pages">'+Data.pages[i]+'</a>';
                                    }
                                }
                                $("#_j_hotel_list").append(htmlhead+htmlup+htmlfoot)
                            }else {
                                for (var i = 0; i < Data.pages.length; i++){
                                    if (current == Data.pages[i]){
                                        htmlup += '<span class="this-page" data-value="'+current+'" rel="nofollow">'+current+'</span>';
                                    }else {
                                        htmlup += '<a class="ti _j_pageitem" data-value="'+Data.pages[i]+'" data-cityid="'+
                                            cityid +'" data-areaid="'+areaid+'" rel="nofollow" id="pages">'+Data.pages[i]+'</a>';
                                    }
                                }
                                $("#_j_hotel_list").append(htmlhead+htmlup+htmldown+htmlfoot)
                            }
                        },
                        error:function () {
                            alert("服务器未知错误");
                        }
                    })
                },
                error:function () {
                    alert("服务器未知错误");
                }
            })
        })

        function searchByCity(id){
            $.ajax({
                url:"${pageContext.request.contextPath}/hotel/cityDes",
                data:{"id":id},
                datatype:"json",
                type:'GET',
                success:function (Data) {
                    var areanorms = Data.areanorms;
                    var html = '<div id="des">' +areanorms+ '</div>'
                    $("#des").replaceWith(html);
                },
                error:function () {
                    alert("服务器未知错误");
                }
            })
        }


    })

</script>
</body>

</html>
