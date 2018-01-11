<%--
  User: Administrator
  Date: 2018/1/7
  Time: 16:11
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <link href="css/bootstrap-table.css" rel="stylesheet" type="text/css">
    <script src="js/jquery-1.11.0.js" type="text/javascript"></script>
    <script src="js/bootstrap.js"></script>
    <script src="https://cdn.bootcss.com/bootstrap-table/1.11.1/bootstrap-table.js"></script>
    <script src="https://cdn.bootcss.com/bootstrap-table/1.11.1/locale/bootstrap-table-zh-CN.min.js"></script>

</head>
<body>
    <button id="build" type="button" style="height: 28px;"  class="btn btn-success" data-toggle="modal" data-target="" onclick="location.href='${pageContext.request.contextPath}/travelgroup-add'">
        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>添加
    </button>
    <button id="btnEdit"  type="button" style="height: 28px;" class="btn btn-warning">
        <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>修改
    </button>
    <button id="btnDel" type="button" style="height: 28px;" class="btn btn-danger" data-toggle="modal" data-target="#DeleteForm">
        <span class="glyphicon glyphicon-minus" aria-hidden="true"></span>删除
    </button>
    <%--<button id="btnUp" type="button" style="height: 28px;" class="btn btn-success" data-toggle="modal" data-target="#DeleteForm" onclick="up()">
        <span class="glyphicon glyphicon-minus" aria-hidden="true"></span>上架
    </button>
    <button id="btnDown" type="button" style="height: 28px;" class="btn btn-warning " data-toggle="modal" data-target="#DeleteForm" onclick="down()">
        <span class="glyphicon glyphicon-minus" aria-hidden="true"></span>下架--%>
    </button>
<table id="table_server" ></table>
<script type="text/javascript">
    $(function () {
        var t = $("#table_server").bootstrapTable({
            url: 'http://localhost:8080/travel/travelGroups',
            method: 'get',
            dataType: "json",
            striped: true,//设置为 true 会有隔行变色效果
            undefinedText: "空",//当数据为 undefined 时显示的字符
            pagination: true, //分页
            //paginationLoop:true,//设置为 true 启用分页条无限循环的功能。
            //showToggle: "true",//是否显示 切换试图（table/card）按钮
            //showColumns: "true",//是否显示 内容列下拉框
            pageNumber: 1,//如果设置了分页，首页页码
            showPaginationSwitch:false,//是否显示 数据条数选择框
            pageSize: 15,//如果设置了分页，页面数据条数
            //pageList: [5, 10, 20, 40],  //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
            paginationPreText: '‹',//指定分页条中上一页按钮的图标或文字,这里是<
            paginationNextText: '›',//指定分页条中下一页按钮的图标或文字,这里是>
            //singleSelect: false,//设置True 将禁止多选
            search: true, //显示搜索框
/*            queryParams: function (params) {//自定义参数，这里的参数是传给后台的，我这是是分页用的
                return {//这里的params是table提供的
                    cp: params.offset,//从数据库第几条记录开始
                    ps: params.limit//找多少条
                };
            },*/
            columns: [
                {field: 'ck', checkbox: true},
                {
                    title: '旅游团编号',//表的列名
                    field: 'id',//json数据中rows数组中的属性名
                    align: 'center'//水平居中
                },
                {
                    title: '标题',
                    field: 'title',
                    align: 'center'
                },
                {
                    title: '出发地',
                    field: 'startplace',
                    align: 'center'
                },
                {
                    //EMAIL
                    title: '目的地',
                    field: 'destination',
                    align: 'center'
                },
                {
                    //部门名字
                    title: '价格',
                    field: 'travelgroupprice',//可以直接取到属性里面的属性，赞
                    align: 'center'
                },
                {
                    title: '旅游内容',
                    field: 'travelcontent',
                    align: 'center',
                },
                {
                    title: '旅游天数',
                    field: 'travelday',
                    align: 'center',
                }

            ]
        });
    });
    function getIdSelections() {
        return $.map($("table").bootstrapTable('getSelections'), function (row) {
            return row.id
        });
    }
    $("#btnDel").click(function () {
        var ids = getIdSelections();
        if (ids.length == 0) {
            alert('请选中至少一条记录！');
            return;
        }
        console.log(ids);
        $.post(
            'deleteTravelGroup',
            {"ids[]": ids},
            function (data) {
                if (data > 0) {
                    $("#table_server").bootstrapTable('refresh',{url : 'http://localhost:8081/travel/travelGroups'});
                }
            }

        );
    });

    $("#btnEdit").click(function () {
        var ids = getIdSelections();
        if (ids.length >1) {
            alert('修改时只能选择一条记录！');
            return;
        }
        if (ids.length == 0) {
            alert('请至少选择一条记录！');
            return;
        }
        console.log(ids);
        window.location.href = 'travelgroup-update?ids[]='+ids;
        /*$.post(

            'travelGroupById',
            {"ids[]": ids},
            function (data) {
                window.location.href = 'travelgroup-update';
            }
        );*/
    });
</script>

</body>

</html>
