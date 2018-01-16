<%--
  Created by IntelliJ IDEA.
  User: Shinelon
  Date: 2018/1/8
  Time: 20:48
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet"  href="${pageContext.request.contextPath}/css/bootstrap-table.css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/bootstrap.min.css" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/bootstrap-treeview.css" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/sweet-alert.css" />
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.11.0.js" ></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/bootstrap.min.js" ></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/bootstrap-table.js" ></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/bootstrap-treeview.js" ></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/bootstrap-combotree.js" ></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/My97DatePicker/WdatePicker.js" ></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/sweet-alert.min.js" ></script>
    <!-- 百度富文本编辑器 -->
    <!-- 配置文件 -->
    <script src="${pageContext.request.contextPath}/js/ueditor.config.js"></script>
    <!-- 编辑器源码文件 -->
    <script src="${pageContext.request.contextPath}/js/ueditor.all.js"></script>
    <script src="https://cdn.bootcss.com/bootstrap-validator/0.5.3/js/bootstrapValidator.min.js"></script>
    <link href="https://cdn.bootcss.com/bootstrap-validator/0.5.3/css/bootstrapValidator.min.css" rel="stylesheet" />
    <script src="https://cdn.bootcss.com/bootstrap-validator/0.5.3/js/language/zh_CN.min.js"></script>

</head>

<body>
<div style="text-align: center"><h2>添加区域信息</h2></div>
<div id="dataTable">
    <table id="tb_pro"></table>
</div>
<div id="toolbar" class="container">
    <form id="hotelAddForm" name="hotelAddForm" class="form-signin">
        <div class="form-group ">
            <label for="name">区域名称</label>
            <input type="text" class="form-control" id="name" name="areaname" width="50%"
                   placeholder="请输入名称" data-options="validType:'length[0,150]',multiline:true">
        </div>
        <div class="form-group ">
            <label for="combotree1">城市</label>
            <div id="combotree1"></div>
        </div>
    <div>
        <label for="container">区域描述</label>
        <script id="container" name="areanorms" type="text/plain"></script>
    </div>
        <br>
        <button type="button" name="submit" class="btn btn-default" onclick="submitForm()">提交</button>
        <button type="button" class="btn btn-default">重置</button>
    </form>



</div>
<script>

    function submitForm() {

        $('#hotelAddForm').bootstrapValidator('validate');
        var flag = $("#hotelAddForm").data('bootstrapValidator').isValid();
        if (!flag) {
            sweetAlert("温馨提示", "填写有误，请重新填写！", "info");
        } else {

            var data=$('#hotelAddForm').serialize();
        //序列化获得表单数据，结果为：user_id=12&user_name=John&user_age=20

        var submitData=decodeURIComponent(data,true);
        //submitData是解码后的表单数据，结果同上

        $.ajax({
            url:'${pageContext.request.contextPath}/ttcity/area',
            data:submitData,
            datatype:'json',
            type:'POST',
            success:function(data){
                if (data == 1) {
                    swal({
                            title: "温馨提示",
                            text: "新增区域成功！",
                            type: "success",
                            //showCancelButton: true,
                            closeOnConfirm: false,
                            showLoaderOnConfirm: true,
                        }/*,
                        function(){
                           /!* setTimeout(function(){
                                window.location.href = '${pageContext.request.contextPath}/hotels-list';
                                /!*tttravel.addTabs({id:11,url: '${pageContext.request.contextPath}/hotels-list'})*!/
                            }, 1000);*!/
                        }*/);

                }
            },
            error:function(){
                alert("服务器未知错误");
            }
        })
        }

    }

    //实例化富文本编辑器
    UE.getEditor('container');
    $(function () {
        $.ajax({
            url:"${pageContext.request.contextPath}/city",
            data:{"parentId":"0"},
            datatype:"json",
            type:'POST',
            success:function (Data) {
                $("#combotree1").bootstrapCombotree({
                    defaultLable : '请选择列表',//默认按钮上的文本
                    data: Data,//data应符合实例的data格式
                    showIcon: true,//显示图标
                    width : 400,//下拉列表宽度
                    name : 'cid',//combotree值域的name，可以用在表单提交
                    maxItemsDisplay : 1,//按钮上最多显示多少项，如果超出这个数目，将会以‘XX项已被选中代替’
                    //selectToCheck : true,//为了兼容移动设备，点击属性菜单项时自动选中节点
                    onCheck : function (node) {//树形菜单被选中时触发事件, node为选中的那个节点

                    },
                    onBeforeCheck : function (node) {//树形菜单被选中前触发事件, node为选中的那个节点
                        return false;
                    },
                    onBeforeUnCheck : function (node) {//树形菜单被取消选中前触发事件, node为选中的那个节点

                    },
                    onUnCheck : function (node) {////树形菜单被取消选中时触发事件, node为选中的那个节点

                    }

                })
            },
            error:function () {
                alert("服务器未知错误");
            }
        })

        $('#hotelAddForm').bootstrapValidator({
            message: '不能为空',
            feedbackIcons: {/*输入框不同状态，显示图片的样式*/
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {/*验证*/
                hotelname: {/*键名username和input name值对应*/
                    validators: {
                        notEmpty: {/*非空提示*/
                            message: '酒店名称不能为空'
                        },
//       stringLength: {/*长度提示*/
//        min: 6,
//        max: 30,
//        message: '用户名在6到30之间'
//       }/*最后一个没有逗号*/
                    }
                },
                hoteladdress: {
                    validators: {
                        notEmpty: {
                            message: '酒店地址不能为空'
                        },
                    }
                }
            }
        })

    });

</script>
</body>

</html>

