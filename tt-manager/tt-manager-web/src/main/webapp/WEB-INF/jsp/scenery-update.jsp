<%--
  User: Administrator
  Date: 2018/1/8
  Time: 10:03
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="js/jquery-1.10.2.js"></script>
    <script src="js/bootstrap.js"></script>
    <link href="css/bootstrap.css" rel="stylesheet" />
<%--<link href="css/signin.css" rel="stylesheet">--%>
    <script src="https://cdn.bootcss.com/bootstrap-validator/0.5.3/js/bootstrapValidator.min.js"></script>
    <link href="https://cdn.bootcss.com/bootstrap-validator/0.5.3/css/bootstrapValidator.min.css" rel="stylesheet" />
</head>

<body>

<div class="container">
    <form class="form-signin" action="sceneryadd">
        <div align="center"><h2 class="form-signin-heading">添加景点信息</h2></div>

        <label for="sceneryname">名称</label>
        <input type="text" id="sceneryname" name="sceneryname" class="form-control" placeholder="SceneryName" required>
        <br>
        <label for="cityid">所属城市</label>
        <input type="text" id="cityid" name="cityid" class="form-control" placeholder="CityId" required>
        <br>
        <label for="scneryprice">门票价格</label>
        <input type="number" step="0.01" id="scneryprice" name="scneryprice" class="form-control" placeholder="ScneryPrice" required>
        <br>
        <label for="scenerypicture">图片</label>
        <input type="text" id="scenerypicture" name="scenerypicture" class="form-control" placeholder="SceneryPicture" required>
        <br>
        <label for="scneryprice">状态</label>
        <input type="number" step="0" id="status" name="status" class="form-control" placeholder="Status" required>
        <br>
        <button class="btn btn-lg btn-primary btn-block" type="submit">提交</button>

    </form>
</div>

</body>
</html>


</body>
</html>
