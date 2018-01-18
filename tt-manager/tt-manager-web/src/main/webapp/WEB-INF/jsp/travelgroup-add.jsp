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
    <script src="js/jquery-1.11.0.js"></script>
    <script src="js/bootstrap.js"></script>
    <link href="css/bootstrap.css" rel="stylesheet" />
<%--<link href="css/signin.css" rel="stylesheet">--%>
    <script src="https://cdn.bootcss.com/bootstrap-validator/0.5.3/js/bootstrapValidator.min.js"></script>
    <link href="https://cdn.bootcss.com/bootstrap-validator/0.5.3/css/bootstrapValidator.min.css" rel="stylesheet" />
</head>

<body>

<div class="container">
    <form class="form-signin" action="addTravelGroup">
        <h2 class="form-signin-heading">添加旅游团信息</h2>
        <label for="title">标题</label>
        <input type="text" id="title" name="title" class="form-control" placeholder="Title" required >

        <label for="startplace">出发地</label>
        <input type="text" id="startplace" name="startplace" class="form-control" placeholder="StartPlace" required>

        <label for="destination">目的地</label>
        <input type="text" id="destination" name="destination" class="form-control" placeholder="Destination" required>

        <label for="travelgroupprice">价格</label>
        <input type="number" step="0.01" id="travelgroupprice" name="travelgroupprice" class="form-control" placeholder="TravelGroupPrice" required>

        <label for="travelday">旅游天数</label>
        <input type="number" id="travelday" name="travelday" class="form-control" placeholder="TravelDay" required>

        <label for="travelfeature">旅游特色</label>
        <input type="text" id="travelfeature" name="travelfeature" class="form-control" placeholder="TravelFeature">

        <br>

        <button class="btn btn-lg btn-primary btn-block" type="submit">提交</button>

    </form>
</div>

</body>
</html>

