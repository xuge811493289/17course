window.onload = function(){
  var btn = document.getElementsByClassName("button")[0];
  var input = document.getElementsByClassName("input");
  input[0].onblur = function(){
    var pattern = /^[0-9][a-z][A-Z]{6,10}/;
    var boolean = pattern.test(input[0].value);
    console.log(boolean);    
  }
  input[2].onblur = function(){
    var pattern3 = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    var boolean2 = pattern3.test(input[2].value);
    console.log(boolean2);
  }
  //点击获取值
  btn.onclick = function(){
    var obj = {
      username:input[0].value,
      password:input[1].value,
      tele:input[2].value
    }
    console.log(JSON.stringify(obj));
  }
}