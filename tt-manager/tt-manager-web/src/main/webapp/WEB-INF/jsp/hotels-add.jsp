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
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/ueditor.min.css" />
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
<div style="text-align: center"><h2>添加酒店信息</h2></div>
<div id="dataTable">
    <table id="tb_pro"></table>
</div>
<div id="toolbar" class="container">
    <form id="hotelAddForm" name="hotelAddForm" class="form-signin">
<%--        <div class="form-group ">
            <label for="orderid">酒店编号</label>
            <input type="text" class="form-control" id="orderid" width="50%"
                   placeholder="禁止修改" readonly>
        </div>--%>
        <div class="form-group ">
            <label for="name">酒店名称</label>
            <input type="text" class="form-control" id="name" name="hotelname" width="50%"
                   placeholder="请输入名称" data-options="validType:'length[0,150]',multiline:true">
        </div>
    <div class="form-group ">
        <label for="ename">酒店英文名称</label>
        <input type="text" class="form-control" id="ename" name="ename" width="50%"
               placeholder="请输入名称" data-options="validType:'length[0,150]',multiline:true">
    </div>
    <div class="form-group ">
        <label for="address">酒店地址</label>
        <input type="text" class="form-control" id="address" name="hoteladdress" width="50%"
               placeholder="请输入地址" required>
    </div>
        <div class="form-group ">
            <label for="combotree1">城市</label>
            <div id="combotree1"></div>
        </div>
    <div class="form-group ">
        <label for="combotree1">区域</label>
        <div id="combotree2"></div>
    </div>
    <div class="form-group ">
        <label for="latitude">经度</label>
        <input type="number" class="form-control"  id="latitude" name="latitude" width="50%"
               placeholder="请输入数值" required>
    </div>
    <div class="form-group ">
        <label for="longitude">纬度</label>
        <input type="number" class="form-control"  id="longitude" name="longitude" width="50%"
               placeholder="请输入数值" required>
    </div>
    <div class="form-group ">
        <label for="openTime">酒店开业时间</label>
        <input type="number" class="form-control"  id="openTime" name="openTime" width="50%"
               placeholder="请输入数值" required>
    </div>
    <div class="form-group ">
        <label for="roomsCount">酒店房间数</label>
        <input type="number" class="form-control"  id="roomsCount" name="roomsCount" width="50%"
               placeholder="请输入数值" required>
    </div>
    <div class="form-group ">
        <label for="price">酒店价格</label>
        <input type="number" class="form-control" step="0.01" id="price" name="hotelprice" width="50%"
               placeholder="请输入数值" required>
    </div>
    <div class="form-group ">
        <label for="picture">酒店图片</label>
        <input type="file" class="form-control" id="picture" name="hotelpicture" style="width: auto;height: auto"
               placeholder="请插入图片">
    </div>
    <div class="form-group ">
        <label for="leve">酒店等级</label>
        <select  class="form-control" style="width: auto;" id="leve" name="hotelleve" required>
            <option value="">全部</option>
            <option value="5">5星级</option>
            <option value="4">4星级</option>
            <option value="3">3星级</option>
            <option value="2">2星级及以下</option>
        </select>
    </div>
    <div class="form-group ">
        <label for="cid">酒店类型</label>
        <select  class="form-control" style="width: auto;" id="cid" name="cid" required>
            <option value="">全部</option>
            <option value="7">奢侈酒店</option>
            <option value="6">度假村</option>
            <option value="5">高端酒店</option>
            <option value="4">公寓</option>
            <option value="3">民宿</option>
            <option value="2">经济/连锁</option>
            <option value="1">客栈/青旅</option>
        </select>
    </div>
    <div class="form-group ">
        <label for="status">状态</label>
        <select  class="form-control" style="width: auto;" id="status" name="status" required>
            <option value="">全部</option>
            <option value="1">正常</option>
            <option value="2">审核</option>
        </select>
    </div>
    <div>
        <label for="container">酒店描述</label>
        <script id="container" name="hotelDesc" type="text/plain"></script>
    </div>
        <%--<div class="">创建时间<input readonly="readonly"  name="date" class="form-control" type="text" style="height: 28px;"
                    onfocus="WdatePicker({skin:'whyGreen',dateFmt:'yyyy-MM-dd HH:mm:ss',minDate:'1920-03-08 ',maxDate:'2020-12-12'})"></div>
        <div class="">更新时间<input readonly="readonly"  name="date" class="form-control" type="text" style="height: 28px;"
                        onfocus="WdatePicker({skin:'whyGreen',dateFmt:'yyyy-MM-dd HH:mm:ss',minDate:'1920-03-08 ',maxDate:'2020-12-12'})"></div>--%>
<%--        <div class="form-group ">
            <label for="orderother">订单备注</label>
            <textarea class="form-control" rows="3" id="orderother" placeholder="备注信息"></textarea>
        </div>--%>
        <br>
        <button type="button" name="submit" class="btn btn-default" onclick="submitForm()">提交</button>
        <button type="button" class="btn btn-default">重置</button>
    </form>



</div>
<script>

    function submitForm() {
/*        $('#hotelAddForm').form('submit', {
            //提交后台的谁进行处理
            url: '',
            //提交前需要做的处理操作，返回false终止提交
            onSubmit: function () {
                //将前台的元转换为后台的分，设置给隐藏域
                $('#price').val($.trim($('#price').val()) * 100);
                //当所有控件校验通过才会返回true，否则返回false
                return $(this).form('validate');
            },
            success: function (data) {
                if (data > 0) {
                    $.messager.alert('温馨提示','新增酒店成功！','info');
                    var href = "javascript:addTabs({id:'11',title: '查询酒店',close: true,url: '${pageContext.request.contextPath}/hotels-list'});"
                    $(location).attr('href', 'http://www.jb51.net');
                }
            }
        })*/


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
            url:'${pageContext.request.contextPath}/hotel',
            data:submitData,
            datatype:'json',
            type:'POST',
            success:function(data){
                if (data == 3) {
                    //$.messager.alert('温馨提示','新增酒店成功！','success');
                    //sweetAlert("温馨提示", "新增酒店成功！", "success");
                    //$(location).attr('href', '${pageContext.request.contextPath}/hotels-list');
                    swal({
                            title: "温馨提示",
                            text: "新增酒店成功！",
                            type: "success",
                            //showCancelButton: true,
                            closeOnConfirm: false,
                            showLoaderOnConfirm: true,
                        },
                        function(){
                            setTimeout(function(){
                                window.location.href = '${pageContext.request.contextPath}/hotels-list';
                                /*tttravel.addTabs({id:11,url: '${pageContext.request.contextPath}/hotels-list'})*/
                            }, 1000);
                        });

                }
            },
            error:function(){
                alert("服务器未知错误");
            }
        })
        }

    }
    //实例化之前先删除容器
    UE.delEditor('container');
    //实例化富文本编辑器
    //UE.getEditor('container');
    var ue = UE.getEditor('container', {
        initialFrameWidth: '100%',
        initialFrameHeight: '300',
        serverUrl:'${pageContext.request.contextPath}/file/upload'
    });
    $(function () {
        //加载商品类别

/*        $('#city').combotree({
            url: '/city?parentId=0',
            required: true,
            onBeforeSelect: function (node) {
                var isLeaf = $('#cityid').tree('isLeaf', node.target);
                if (!isLeaf) {
                    $.messager.alert('警告', '请选择最终分类！', 'info');
                    return false;
                }
            },
            onBeforeExpand: function (node) {
                //获取树控件的属性
                var options = $('#city').combotree('tree').tree('options');
                options.url = '/city?parentId=' + node.id;
            }
        });*/
        $.ajax({
            url:"${pageContext.request.contextPath}/city",
            data:{"parentId":"0"},
            datatype:"json",
            type:'POST',
            success:function (Data) {

                $("#combotree1").bootstrapCombotree({
                    defaultLable: '请选择列表',//默认按钮上的文本
                    data: Data,//data应符合实例的data格式
                    showIcon: true,//显示图标
                    width: 400,//下拉列表宽度
                    name: 'cityid',//combotree值域的name，可以用在表单提交
                    maxItemsDisplay: 1,//按钮上最多显示多少项，如果超出这个数目，将会以‘XX项已被选中代替’
                    //selectToCheck : true,//为了兼容移动设备，点击属性菜单项时自动选中节点
                    onCheck: function (node) {//树形菜单被选中时触发事件, node为选中的那个节点
                        var  a = $("#combotree1").bootstrapCombotree('getValue');
                        var cids = [];
                        cids.push(a);
                        $.ajax({

                            url:"${pageContext.request.contextPath}/ttcity/ttareacid",
                            data:{"cid[]":cids},
                            datatype:"json",
                            type:'POST',
                            success:function (Data) {
                                $("#combotree2").bootstrapCombotree({
                                    defaultLable: '请选择列表',//默认按钮上的文本
                                    data: Data,//data应符合实例的data格式
                                    showIcon: true,//显示图标
                                    width: 400,//下拉列表宽度
                                    name: 'areaid',//combotree值域的name，可以用在表单提交
                                    maxItemsDisplay: 1,//按钮上最多显示多少项，如果超出这个数目，将会以‘XX项已被选中代替’
                                    //selectToCheck : true,//为了兼容移动设备，点击属性菜单项时自动选中节点
                                    onCheck: function (node) {//树形菜单被选中时触发事件, node为选中的那个节点
                                    },
                                    onBeforeCheck: function (node) {//树形菜单被选中前触发事件, node为选中的那个节点
                                        return false;
                                    },
                                    onBeforeUnCheck: function (node) {//树形菜单被取消选中前触发事件, node为选中的那个节点

                                    },
                                    onUnCheck: function (node) {////树形菜单被取消选中时触发事件, node为选中的那个节点

                                    }

                                });
                            },
                            error:function () {
                                alert("服务器未知错误");
                            }
                        })

                    },
                    onBeforeCheck: function (node) {//树形菜单被选中前触发事件, node为选中的那个节点
                        return false;
                    },
                    onBeforeUnCheck: function (node) {//树形菜单被取消选中前触发事件, node为选中的那个节点

                    },
                    onUnCheck: function (node) {////树形菜单被取消选中时触发事件, node为选中的那个节点

                    }

                });
                /*$('#combotree1').treeview({
                    data: Data,         // 数据源
                    //showCheckbox: true,   //是否显示复选框
                    highlightSelected: true,    //是否高亮选中
                    //nodeIcon: 'glyphicon glyphicon-user',    //节点上的图标
                    nodeIcon: 'glyphicon glyphicon-globe',
                    emptyIcon: '',    //没有子节点的节点图标
                    multiSelect: false,    //多选
                    onNodeChecked: function (event,data) {
                        alert(data.nodeId);
                    },
                    onNodeSelected: function (event, data) {
                        alert(data.nodeId);
                    }
                });*/
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

