
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
        <button id="btnUp" type="button"  class="btn btn-success" data-toggle="modal" data-target="#DeleteForm" onclick="up()">
            <span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span>上架
        </button>
        <button id="btnDown" type="button"  class="btn btn-warning " data-toggle="modal" data-target="#DeleteForm" onclick="down()">
            <span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span>审核
        </button>

    </div>

</div>

<script>

    function searchScenery() {
        var title=$("#sceneryname").val();
        var status=$("#scneryprice").val();
        $('#tb_pro').bootstrapTable('refresh',{
            url:"sceneryLists?sceneryname="+sceneryname+"&scneryprice="+scneryprice
        });
    }
    function remove() {
        var a=$('#tb_pro').bootstrapTable('getSelections');
        if(a.length==0){
            sweetAlert("你犯了个错误", "请至少选着一条数据!", "error");
            return ;
        }
        sweetAlert({
            title: "确认要删除?",
            text: "你将删除这个景点!!!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的!确认删除!",
            closeOnConfirm: false
        }, function(r){
            if(r) {
                //为了存放id创立的一个集合
                var ids = [];
                //遍历选中的记录，将id存放到js数组中
                for (var i = 0; i < a.length; i++) {
                    ids.push(a[i].id);
                }
                $.post(
                    //url:请求后台的那个地址来进行处理，相当于url，string类型
                    '${pageContext.request.contextPath}/scenery/batch',
                    //data，从前台提交那些数据到后台处理，相当于data，Object类型
                    {'ids[]': ids,"aa":"3"},
                    //后台成功处理的回调函数，相当于success，function类型
                    function (data) {
                        swal("Deleted!",
                            "你已成功删除!",
                            "success");
                        //刷新页面
                        $('#tb_pro').bootstrapTable('refresh');

                    },
                    // 返回的数据类型，json String类型
                    'json'
                );
            }
        });

    }

    function up() {
        var a=$('#tb_pro').bootstrapTable('getSelections');
        if(a.length==0){
            sweetAlert("你犯了个错误", "请至少选着一条数据!", "error");
            return ;
        }
        sweetAlert({
            title: "确认要上架?",
            text: "这个景点将上架!!!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的!上架!",
            closeOnConfirm: false
        }, function(r){
            if(r) {
                //为了存放id创立的一个集合
                var ids = [];
                //遍历选中的记录，将id存放到js数组中
                for (var i = 0; i < a.length; i++) {
                    ids.push(a[i].id);
                }
                $.post(
                    //url:请求后台的那个地址来进行处理，相当于url，string类型
                    '${pageContext.request.contextPath}/scenery/batch',
                    //data，从前台提交那些数据到后台处理，相当于data，Object类型
                    {'ids[]': ids,"aa":"1"},
                    //后台成功处理的回调函数，相当于success，function类型
                    function (data) {
                        swal("Success!",
                            "你已成功上架景点!",
                            "success");
                        //刷新页面
                        $('#tb_pro').bootstrapTable('refresh');

                    },
                    // 返回的数据类型，json String类型
                    'json'
                );
            }
        });

    }

    function down() {
        var a=$('#tb_pro').bootstrapTable('getSelections');
        if(a.length==0){
            sweetAlert("你犯了个错误", "请至少选着一条数据!", "error");
            return ;
        }
        sweetAlert({
            title: "确认要审核?",
            text: "你将审核这个景点!!!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的!审核!",
            closeOnConfirm: false
        }, function(r){
            if(r) {
                //为了存放id创立的一个集合
                var ids = [];
                //遍历选中的记录，将id存放到js数组中
                for (var i = 0; i < a.length; i++) {
                    ids.push(a[i].id);
                }
                $.post(
                    //url:请求后台的那个地址来进行处理，相当于url，string类型
                    '${pageContext.request.contextPath}/scenery/batch',
                    //data，从前台提交那些数据到后台处理，相当于data，Object类型
                    {'ids[]': ids,"aa":"2"},
                    //后台成功处理的回调函数，相当于success，function类型
                    function (data) {
                        swal("Success!",
                            "该景点进入审核状态!",
                            "success");
                        //刷新页面
                        $('#tb_pro').bootstrapTable('refresh');

                    },
                    // 返回的数据类型，json String类型
                    'json'
                );
            }
        });

    }
    function editor() {
        sweetAlert("编辑方式", "直接点击数据进行编辑修改!", "warning");
    }
</script>



<div>
    <table id="tb_pro"></table>
</div>
<script type="text/javascript">
    $(function () {
        var t = $("#tb_pro").bootstrapTable({
            url: '${pageContext.request.contextPath}/sceneryLists',
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
                {
                    field: 'ck', checkbox: true
                },{
                    title: '景点编号',
                    field: 'id',
                    align: 'center',
                },
                {
                    title: '景点名称',
                    field: 'sceneryname',
                    align: 'center',
                    editable: {
                        type: 'text',
                        title: '景点名称',
                        validate: function (v) {
                            if (!v) return '景点名称不能为空';

                        }
                    }
                },
                {
                    title: '所属城市',
                    field: 'cityid',
                    align: 'center',
                    editable: {
                        type: 'text',
                        title: '所属城市',
                        validate: function (v) {
                            if (!v) return '所属城市不能为空';

                        }
                    }
                },
                {
                    //EMAIL
                    title: '门票价格',
                    field: 'scneryprice',
                    align: 'center',
                    editable: {
                        type: 'text',
                        title: '门票价格',
                        validate: function (v) {
                            if (!v) return '门票价格不能为空';

                        }
                    }
                },
                {
                    //部门名字
                    title: '图片',
                    field: 'scenerypicture',//可以直接取到属性里面的属性，赞
                    align: 'center',
                    editable: {
                        type: 'text',
                        title: '图片',
                        validate: function (v) {
                            if (!v) return '图片不能为空';

                        }
                    }
                },
                {
                    field: 'status',
                    title: '状态',
                    /*       editable: {
                               type: 'select',
                               source:[{value:1,text:"上架"},{value:2,text:"下架"}],
                               title: '状态',
                               validate: function (v) {
                                   if (!v) return '状态不能为空';

                               }
                           }*/
                    formatter:function(value){
                        switch(value){
                            case 1:return "正常";break;
                            case 2:return "审核";break;
                            case 3:return "删除";break;
                        }
                    }
                }],
            /*四个参数field, row, oldValue, $el分别对应着当前列的名称
         当前行数据对象、更新前的值、编辑的当前单元格的jQuery对象。*/
            onEditableSave:function (filed,row,oldValue,$el) {
                var Data={id:row.id,sceneryname:row.sceneryname,cityid:row.cityid,scneryprice:row.scneryprice,scenerypicture:row.scenerypicture,
                    status:row.status}
                $.ajax({
                    type:"post",
                    url:"${pageContext.request.contextPath}/updateScenery",
                    data:Data,
                    datatype:"json",
                    success:function (data) {
                        if(data==1){
                            sweetAlert("提示", "修改成功!", "success");
                        }else{
                            sweetAlert("警告", "修改失败!", "error");
                        }
                    },
                    error:function () {
                        alert("服务器未知错误");
                        //刷新页面
                        $('#table').bootstrapTable('refresh');
                    }
                })
            },
            locale:'zh-CN',//中文支持,
        });
    });


</script>

</body>

</html>
