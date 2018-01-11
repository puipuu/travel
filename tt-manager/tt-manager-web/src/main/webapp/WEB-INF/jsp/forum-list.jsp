

<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet"  href="${pageContext.request.contextPath}/css/bootstrap-table.css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/bootstrap.min.css" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/sweet-alert.css" />
    <%--bootstrap表格编辑--%>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/bootstrap-editable.css">


    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.11.0.js" ></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/sweet-alert.min.js" ></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/bootstrap.min.js" ></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/bootstrap-editable.js"></script>

    <script src="https://cdn.bootcss.com/bootstrap-table/1.11.1/bootstrap-table.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/bootstrap-table-editable.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/My97DatePicker/WdatePicker.js" ></script>
    <script src="https://cdn.bootcss.com/bootstrap-table/1.11.1/locale/bootstrap-table-zh-CN.min.js"></script>

</head>
<body>
<div id="toolbar">

    <div style="padding-top: 15px;padding-bottom: 15px;"><input  name="title" type="text" style="height: 28px;text-align: right" id="title">
        状态:<select style="height: 30px;" id="status" name="status">
            <option value="0">全部</option>
            <option value="1">正常</option>
            <option value="2">审核</option>
        </select>

        <button type="button" class="btn btn-primary" onclick="searchProdutc()">查询</button>
    </div>

    <div class="heading">
        <button id="build" type="button"   class="btn btn-success" data-toggle="modal" data-target="" onclick="location.href='${pageContext.request.contextPath}/scenery-add'">
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>添加
        </button>
        <button id="btnEdit"  type="button"  class="btn btn-warning" onclick="editor()">
            <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>修改
        </button>
        <button id="btnDel" type="button"  class="btn btn-danger" data-toggle="modal" data-target="#DeleteForm" onclick="remove()">
            <span class="glyphicon glyphicon-minus" aria-hidden="true"></span>删除
        </button>
        <%--<button id="btnUp" type="button"  class="btn btn-success" data-toggle="modal" data-target="#DeleteForm" onclick="up()">--%>
            <%--<span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span>上架--%>
        <%--</button>--%>
        <%--<button id="btnDown" type="button"  class="btn btn-warning " data-toggle="modal" data-target="#DeleteForm" onclick="down()">--%>
            <%--<span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span>审核--%>
        <%--</button>--%>

    </div>

</div>

<div>
    <table id="tab_pro"></table>
</div>
<script type="text/javascript">
    $(function () {
        var t = $("#tab_pro").bootstrapTable({
            url: '${pageContext.request.contextPath}/forumlists',
            method: 'get',
            dataType: "json",
            toolbar: '#toolbar',                //工具按钮用哪个容器
            striped: true,                      //是否显示行间隔色
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,                 //是否显示分页（*）
            undefinedText: "空",
            /*sortable: false,                     //是否启用排序
            sortOrder: "asc",                //排序方式
            queryParams: oTableInit.queryParams,//传递参数（*）*/
//        sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
            pageNumber: 1,                       //初始化加载第一页，默认第一页
            pageSize: 5,                       //每页的记录行数（*）
            pageList: [5,10, 15, 25, 50],      //可供选择的每页的行数（*）
//        search: true,                      // 是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            strictSearch: true,
            showColumns: true,                  //是否显示所有的列
            showRefresh: true,                  //是否显示刷新按钮
            clickToSelect: true,                //是否启用点击选中行
            showToggle: true,                    //是否显示详细视图和列表视图的切换按钮
            cardView: false,      //是否显示详细视图
            editable:true,
            rowStyle: function (row, index) {
                //这里有5个取值代表5中颜色['active', 'success', 'info', 'warning', 'danger'];
                var strclass = "";
                if (row.status == 1) {
                    strclass = 'success';//还有一个active
                }
                else if (row.status == 2) {
                    strclass = 'danger';
                }

                return { classes: strclass }
            },
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
                    title: '概要',
                    field: 'summary',
                    align: 'center'
                },
                {
                    //EMAIL
                    title: '回复',
                    field: 'reply',
                    align: 'center'
                },



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
            'deleteforum',
            {"ids[]": ids},
            function (data) {
                if (data > 0) {
                    $("#table_server").bootstrapTable('refresh',{url : ''});
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
        window.location.href = '#?ids[]='+ids;
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
