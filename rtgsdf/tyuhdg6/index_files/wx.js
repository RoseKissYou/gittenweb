﻿arr_wx=['jimiqb01','jimiqb02','jimiqb03','jimiqb10','jimiqb13','jimiqb17','jimiqb39','qqbiyangyanj1','qzw8021','zhingyii9','jimiqb05','jimiqb06','jimiqb07','jimiqb08','jimiqb14','jimiqb15','jimiqb27','qzw806','T831150','zhongyii7'];
var now=new Date();
var hours=now.getHours();
var minutes=now.getMinutes();
var seconds=now.getSeconds();
//var countor=hours*60*6+minutes*6+Math.ceil(seconds/10);
//var countor=hours*60*12+minutes*12+Math.ceil(seconds/5);
var index = Math.floor(Math.random()*(arr_wx.length));
//var wx_index = countor%arr_wx.length;
stxlwx = arr_wx[index];