﻿<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Default.aspx.vb" Inherits="Nethra._Default" %>

<!DOCTYPE html>
<html>
<head runat="server">
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Nethra</title>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.2/raphael-min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/prettify/r224/prettify.min.js"></script>
    <script src="libs/jquery/jquery.js"></script>
    <link rel="stylesheet" href="libs/morris.js/morris.css">
    <script src="libs/morris.js/morris.min.js"></script>
    <link rel="stylesheet" href="libs/bootstrap/css/bootstrap.min.css">
    <script src="libs/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
    <form id="frmMain" runat="server">
        <div class="container">
            <div class="row"> &nbsp;</div>
            <div>
                <ul class="nav nav-tabs">
                    <li ><a href="#/customers">Customer</a></li>
                    <li><a href="#/order">Order</a></li>
                   <li><a href="#/travel">Travel</a></li>
                 </ul>
                <div data-ng-view id="ng-view"></div>
            </div>
        </div>
    </form>
    <script data-main="html5/main" src="libs/require/require.js"></script>
</body>
</html>
