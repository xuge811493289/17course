window.onload = function(){
  (function(){
    window.My = window.My || {};
    window.My.Validate = {
      // 随机产生验证码并且显示在页面中
      createCode:function(){
        // 我们自己筛选出来的验证码
        this.code = "";
        // 验证码长度
        var codeLength = 4;
        // 验证码选取的集合
        var selectChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; 
        // 生成多位数的验证码
        for(var i = 0; i<codeLength; i++){
          var randomIndex = Math.floor(Math.random()*62);
          this.code += selectChar[randomIndex];
        }

        // 页面上的展示
        // var checkCode = document.getElementById("checkCode");
        // if(checkCode){
        //   checkCode.value = this.code;
        // }

        //获取canvas标签
        var canvas = document.getElementById("canvas");
        //获取画布,获取2d上下文
        var context = canvas.getContext("2d");
        context.clearRect(0,0,canvas.width,canvas.height);
        // 设置文字渐变
        var gradient = context.createLinearGradient(0,0,canvas.width,0);
        gradient.addColorStop("0","magenta");
        gradient.addColorStop("0.5","blue");
        gradient.addColorStop("1.0","red");
        context.fillStyle = gradient;
        //文字的绘制
        context.font = "italic small-caps bolder 30px 微软雅黑";
        context.textBaseline = 'top';
        context.fillText(this.code,0,0,100);
      },
      // 将产生的验证码和输入的验证码做比较，如果一致的话验证通过
      validate:function(){
        var inputCode = document.getElementById("input").value;
        if(!inputCode){
          alert("请输入验证码")
        }else{
          if(inputCode == this.code){
            alert("校验成功");
          }else{
            alert("验证码输入错误");
            //刷新验证码  
            window.My.Validate.createCode();
          }
        }
      }
    }
    My.Validate.createCode();
  })()
}