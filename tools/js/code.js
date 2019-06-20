var codelist = [
  `// 依赖jQuery
<script>
	$(function(){
            $('#alert').click(function(){
                $('#alert').fadeOut();
            });
            $('#alert .close').click(function(){
                $('#alert').fadeOut();
            });
            $('.alert').click(function(event){
                event.stopPropagation();
            });
        })
        function showAlert(){
            $('#alert').fadeIn();
        }

</script>
<style>
	#alert {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		/* background:rgba(0,0,0,0.5); */
		display: none;
		z-index: 99999;
	}

	.alert {
		position: relative;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: #fff;
		border-radius: 10px;
		width: 90%;
		max-width: 500px;
		padding: 15px 0 0 0;
	}

	.alert img {
		width: 100%;
	}

	.alert center {
		color: Red;
	}

	.alert .close {
		position: absolute;
		width: 25px;
		height: 25px;
		top: -5px;
		right: -5px;
		background: #333;
		border-radius: 50%;
		text-align: center;
		line-height: 25px;
		color: #fff;
		cursor: pointer;
	}

	.alert .close::after {
		content: "X";
		font-size: 16px;
		font-weight: 600;
	}

	#footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;

	}

	.footer {
		max-width: 640px;
		height: 60px;
		background: #e05547;
		margin: 0 auto;
		text-align: center;
		line-height: 60px;
		color: #fff;
		font-weight: 600;
	}

	.footer img {
		height: 40px;
		width: 40px;
		vertical-align: middle;
	}

	.setcolor {
		border-radius: 20px;
		padding-bottom: 20px;
		background: linear-gradient(180deg, #D1F386 0%, #FFC1C1 100%);
		box-shadow: 0px -1px 20px #917C7E;
		color: #000000;
		text-align: center;
		font-weight: bold;
	}

	.setcolor .close {
		display: none;
	}

	.setcolor .weixinpic {
		width: 50%;
	}

	.text2 {
		font-weight: bold;
		border-bottom: #F00 dotted 3px;
		color: #000000;
		padding-bottom: 6px;
		font-size: 18px;
		display: inline-block;
		margin-bottom: 10px;
	}

	.copyword {
		animation: twinkling 4s infinite ease-in-out;
		display: inline-block;
		-webkit-animation: twinkling 4s infinite ease-in-out;
		padding: 5px 10px;
		border-radius: 25px;
		-moz-border-radius: 25px;
		margin-bottom: 10px;
		background-color: #CC376D;
		color: white;
		font-size: 16px;
		font-weight: 500;
		-webkit-box-shadow: -2px 3px 38px -7px rgba(0, 0, 0, 0.44);
		-moz-box-shadow: -2px 3px 38px -7px rgba(0, 0, 0, 0.44);
		box-shadow: -2px 3px 38px -7px rgba(0, 0, 0, 0.44);
	}

	.slita {
		color: red;
		font-weight: bold;
	}
</style>
<div id="alert">
	<div class="alert setcolor">
		<text class="text2">教你祛斑良方，做精致女人!</text>
		<br/>
			<text class="copyword">打开微信扫一扫下方二维码</text>
			<img src="" alt="" class="weixinpic">
        <div>或者添加吉米老师微信号:&nbsp;<span class="slita slt"><script>document.write(stxlwx);</script></span></div>
    </div>
</div>
<div id="footer">
    <div class="footer" onclick="showAlert()">
        <img src="data:image/png;base64,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" alt="">
        点击添加老师微信
    </div>
</div>`,
`// 依赖jQuery
<script>
	$(function(){
        $('#alert').click(function(){
            $('#alert').fadeOut();
        });
        $('#alert .close').click(function(){
            $('#alert').fadeOut();
        });
        $('.alert').click(function(event){
            event.stopPropagation();
        });
    })
    function showAlert(){
        $('#alert').fadeIn();
    }

</script>
<style>
	#alert {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		display: none;
		z-index: 99999;
	}

	.alert {
		position: relative;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: #fff;
		border-radius: 10px;
		width: 90%;
		max-width: 500px;
		padding: 15px 0 0 0;
	}

	.alert img {
		width: 100%;
	}

	.alert center {
		color: Red;
	}

	.alert .close {
		position: absolute;
		width: 25px;
		height: 25px;
		top: -5px;
		right: -5px;
		background: #333;
		border-radius: 50%;
		text-align: center;
		line-height: 25px;
		color: #fff;
		cursor: pointer;
	}

	.alert .close::after {
		content: "X";
		font-size: 16px;
		font-weight: 600;
	}

	#footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;

	}

	.footer {
		max-width: 640px;
		height: 60px;
		background: #e05547;
		margin: 0 auto;
		text-align: center;
		line-height: 60px;
		color: #fff;
		font-weight: 600;
	}

	.footer img {
		height: 40px;
		width: 40px;
		vertical-align: middle;
	}
</style>
<div id="alert">
	<div class="alert">
		<center>↓↓长按识别下方二维码↓↓</center>
		<img src="" alt="" class="weixinpic">
        <div class="close"></div>
    </div>
</div>
<div id="footer">
    <div class="footer" onclick="showAlert()">
        <img src="data:image/png;base64,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" alt="">
        点击添加老师微信
    </div>
</div>`,
`<style>
.leftside {
  position: fixed;
  top: 20px;
  left: 50%;
  margin-left: 325px;
  border: 1px #beaf03 solid;
  width: 200px;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 0 3px #beaf03;
  font-weight: 600;
}
</style>
<div class="leftside">
<img class="weixinpic" width="200px" height="200px" alt="">
  扫一扫 免费咨询
</div>`,
`function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}
alert(GetQueryString("id"));`,
`function browserRedirect() {
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
		// 移动端
	} else {
		// PC端
	}
}
browserRedirect();`
]