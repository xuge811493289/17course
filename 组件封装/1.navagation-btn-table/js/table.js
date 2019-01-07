$(function(){
  // 点击按钮
  $(".btn").click(function(){
    // 准备好一个空数组用于装已经被选中的ID
    var checkedIds = [];
    var checkedBox = $(".checked");
    // 遍历所有的多选框，将选中的id全部塞进数组中
    for(var i=0;i<checkedBox.length;i++){
      // 判断是否被选中，选中的话就塞
      if(checkedBox[i].checked){
        // 塞
        checkedIds.push(checkedBox[i].value);
      }
    }
    alert(checkedIds.toString());
  })
})