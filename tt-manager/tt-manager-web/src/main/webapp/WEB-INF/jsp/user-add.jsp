<%--
  User: Administrator
  Date: 2018/1/8
  Time: 10:03
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
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
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/bootstrap-table.js" ></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/bootstrap-table-editable.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/My97DatePicker/WdatePicker.js" ></script>
    <script src="https://cdn.bootcss.com/bootstrap-validator/0.5.3/js/bootstrapValidator.min.js"></script>
    <link href="https://cdn.bootcss.com/bootstrap-validator/0.5.3/css/bootstrapValidator.min.css" rel="stylesheet" />


</head>
<body>
<div align="center"><h2 class="form-signin-heading">添加用户</h2></div>
<div>
    <table id="tb_pro"></table>
</div>

<div id="toolbar">
    <div class="container">
        <form class="form-signin" id="addForm" name="addForm">


            <div class="form-group ">
                <input type="hidden" id="id" name="id">
            </div>
            <div class="form-group ">
                <label for="name">姓名：</label>
                <input type="text" id="name" name="name" class="form-control" placeholder="SceneryName" required>
            </div>
            <div class="form-group ">
                <label for="username">用户名：</label>
                <input type="text" id="username" name="username" class="form-control" placeholder="CityId" required>
            </div>
            <div class="form-group ">
                <label for="password">密码：</label>
                <input type="password" step="0.01" id="password" name="password" class="form-control" placeholder="ScneryPrice" required>
                <input type="hidden" id="price" name="price">
            </div>
            <div class="form-group ">
                <label for="phone">手机：</label>
                <input type="text" id="phone" name="phone" class="form-control" placeholder="SceneryPicture">
            </div>
            <div class="form-group ">
                <label for="address">地址：</label>
                <input type="text" id="address" name="address" class="form-control" placeholder="SceneryPicture">
            </div>
            <button type="button" onclick="submitForm()" style="background-color: #0b6cbc;font-size: 20px;width: 100px;margin-left: 300px;color: white">提交</button>
            <%--<button type="button"  style="background-color: #0b6cbc;font-size: 20px;width: 100px;margin-left: 100px;color: white">重置</button>--%>
        </form>
    </div>
</div>



<script>



    function submitForm() {
        $('#addForm').bootstrapValidator('validate');
        var flag = $("#addForm").data('bootstrapValidator').isValid();
        if (!flag) {
            sweetAlert("温馨提示", "填写有误，请重新填写！", "info");
        } else {
            var data = $('#addForm').serialize();
            //序列化获得表单数据，结果为：user_id=12&user_name=John&user_age=20
            var submitData = decodeURIComponent(data,true);
            //submitData是解码后的表单数据，结果同上

            $.ajax({
                url:'${pageContext.request.contextPath}/adduser',
                data:submitData,
                datatype:'json',
                type:'POST',
                success:function(data){
                    if (data == 1) {
                        //$.messager.alert('温馨提示','新增酒店成功！','success');
                        sweetAlert("温馨提示", "新增成功！", "success");
                        //$(location).attr('href', '${pageContext.request.contextPath}/hotels-list');
                    }
                },
                error:function(){
                    alert("服务器未知错误");
                }
            })
        }
    }


    <%--$.ajax({--%>
    <%--type:"post",--%>
    <%--url:"${pageContext.request.contextPath}/sceneryAdd",--%>
    <%--data:$('#addForm').serialize(),--%>
    <%--datatype:"json",--%>
    <%--success:function (data) {--%>
    <%--console.log(data)--%>
    <%--if(data==1){--%>
    <%--sweetAlert("提示", "添加成功!", "success");--%>
    <%--}else{--%>
    <%--sweetAlert("警告", "添加失败!", "error");--%>
    <%--}--%>
    <%--},--%>
    <%--error:function () {--%>
    <%--alert("服务器未知错误!");--%>
    <%--//刷新页面--%>
    <%--$('#table').bootstrapTable('close');--%>
    <%--}--%>
    <%--})--%>



    <%--function submitForm() {--%>
    <%--$.post(--%>
    <%--//url:请求后台的那个地址来进行处理，相当于url，string类型--%>
    <%--'${pageContext.request.contextPath}/sceneryAdd',--%>
    <%--//data，从前台提交那些数据到后台处理，相当于data，Object类型--%>

    <%--{'ids[]': ids},--%>
    <%--//后台成功处理的回调函数，相当于success，function类型--%>
    <%--function (data) {--%>
    <%--swal("Add!",--%>
    <%--"你已成功添加!",--%>
    <%--"success");--%>
    <%--//刷新页面--%>
    <%--$('#tb_pro').bootstrapTable('refresh');--%>

    <%--},--%>
    <%--// 返回的数据类型，json String类型--%>
    <%--'json'--%>
    <%--);--%>

    <%--}--%>

    //    //保存按钮
    //    function submitForm() {
    //        $('#addForm').form('submit', {
    //            //提交后台的谁进行处理
    //            url: 'sceneryAdd',
    //            //提交前需要做的处理操作，返回false终止提交
    //            onSubmit: function () {
    //                //将前台的元转换为后台的分，设置给隐藏域
    //                //$('#price').val($.trim($('#scneryprice').val()) * 100);
    //                //当所有控件校验通过才会返回true，否则返回false
    //                return $(this).form('validate');
    //            },
    //            success: function (data) {
    //                if (data > 0) {
    //                    $.messager.alert('温馨提示','新增商品成功！','info');
    //                    $('#tb_pro').bootstrapTable('refresh');
    //                }
    //            }
    //        })
    //    }
    $(function () {

        $('#username').data('bootstrapValidator', null);

        $('#username').bootstrapValidator({
            message: '不能为空',
            feedbackIcons: {/*输入框不同状态，显示图片的样式*/
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {/*验证*/
                sceneryname: {
                    validators: {
                        notEmpty: {
                            message: '不能为空'
                        },
                    }
                }
            }
        })

    });
</script>
</body>
</html>
