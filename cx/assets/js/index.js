function select(){

var text1 = document.getElementById("id1").value;//获取第一个文本框的值
var text2 = document.getElementById("id2").value;//获取第二个文本框的值
var text3 = document.getElementById("id3").value;//获取第三个文本框的值
var text4 = document.getElementById("id4").value;//获取第四个文本框的值

if (text1 != ""){
  if(isQQ(text1)){
   q_to_phone (text1);
}else{
    alert("请输入正确的QQ号，阿喂！");
    document.getElementById("id1").value = "";
}
}

if (text2 != ""){
  if(isPhone(text2)){
     phone_to_q(text2);
}else{
    alert("请输入正确的手机号，阿喂！");
    document.getElementById("id2").value = "";
}
}

if (text3 != ""){
  wb_to_phone(text3);
}

if (text4 != ""){
  if(isPhone(text4)){
     phone_to_wb(text4);
}else{
    alert("请输入正确的手机号，阿喂！");
    document.getElementById("id4").value = "";
}
}

if ((text1 =="") & (text2 =="") & (text3 =="") &(text4 =="") ){
      alert("查不了，什么都不对根本查不了嘛！（派蒙声）");
}
    
}//选择查询


function isPhone(phone){

<!-- 验证一个手机号：第一位是1，第二位是3-9，以后每一位都是0-9 -->
var pattern = /^[1][3-9][\d]{9}/;
if (pattern.test(phone)){
     var bool = true;
     return bool;//验证正确
}  
else{
   return false;//验证失败
}

}//判断是否为手机号


function isQQ(aQQ) {

var bValidate = RegExp(/^[1-9][0-9]{4,9}$/).test(aQQ);

if (bValidate) {
return true;
}

else{
return false;
}

}//判断是否为QQ


function q_to_phone (qq){
var url = "https://zy.xywlapi.cc/qqapi";//Q查手机接口地址
$.ajax({
   url: url,
data:{qq:qq},
type: "POST",
dataType:'json',
 success:function(data){
    if (data.phone != undefined){
          var id1_data ="手机号："+data.phone+"，QQ号："+data.qq+"，手机归属地："+data.phonediqu+"，答应俺，别去干坏事哦！";
          document.getElementById("id1").value = id1_data;
          Phone = data.phone;//定义全局变量，方便函数访问
          QQ = data.qq;//定义全局变量，方便函数访问
          address = data.phonediqu;//定义全局变量，方便函数访问
          alert("诶嘿，找到数据啦，查找到的信息在框框里嗷！");
}
    else{
          alert("呜呜呜，未找到数据！");
          document.getElementById("id1").value = "";
}
 },
   error:function(er){
       alert("呜呜呜，申し訳ありません，该接口已失效！");
       BackErr(er);
 }
});

}//Q查手机


function phone_to_q(phone1){

var url = "https://zy.xywlapi.cc/qqphone";//手机查Q接口地址
$.ajax({
   url: url,
data:{phone:phone1},
type: "POST",
dataType:'json',
 success:function(data){
    if ((data.status == 200) & (data.message == "查询成功")){
          var id2_data ="手机号："+phone1+"，QQ号："+data.qq+"，手机归属地："+data.phonediqu+"，答应俺，别去干坏事哦！";
          document.getElementById("id2").value = id2_data;
          Phone = phone1;//定义全局变量，方便函数访问
          QQ = data.qq;//定义全局变量，方便函数访问
          address = data.phonediqu;//定义全局变量，方便函数访问
          alert("诶嘿，找到数据啦，查找到的信息在框框里嗷！");
}
    else{
          alert("呜呜呜，未找到数据！");
          document.getElementById("id2").value = "";
}
 },
   error:function(er){
       alert("呜呜呜，申し訳ありません，该接口已失效！");
       BackErr(er);
 }
});

}//手机查Q


function wb_to_phone(id){
    
var url = "https://zy.xywlapi.cc/wbapi?id="+id;//微博查手机接口地址
$.ajax({
   url: url,
type: "GET",
dataType:'json',
 success:function(data){
    if ((data.status == 200) & (data.message == "查询成功")){
          var id3_data ="微博ID："+data.id+"，手机号："+data.phone+"，手机归属地："+data.phonediqu+"，答应俺，别去干坏事哦！";
          document.getElementById("id3").value = id3_data;
          Phone = data.phone;//定义全局变量，方便函数访问
          ID = data.id;//定义全局变量，方便函数访问
          address = data.phonediqu;//定义全局变量，方便函数访问
          alert("诶嘿，找到数据啦，查找到的信息在框框里嗷，已为你复制到剪切板！");
}
    else{
          alert("呜呜呜，未找到数据！");
          document.getElementById("id3").value = "";
}
 },
   error:function(er){
       alert("呜呜呜，申し訳ありません，该接口已失效！");
       BackErr(er);
 }
});

}//微博查手机


function phone_to_wb(phone2){

var url = "https://zy.xywlapi.cc/wbphone?phone="+phone2;//手机查微博接口地址
$.ajax({
   url: url,
type: "GET",
dataType:'json',
 success:function(data){
    if ((data.status == 200) & (data.message == "查询成功")){
          var id4_data ="微博ID："+data.id+"，手机号："+data.phone+"，手机归属地："+data.phonediqu+"，答应俺，别去干坏事哦！ ";
          document.getElementById("id4").value = id4_data;
          Phone = data.phone;//定义全局变量，方便函数访问
          ID = data.id;//定义全局变量，方便函数访问
          address = data.phonediqu;//定义全局变量，方便函数访问
          alert("诶嘿，找到数据啦，查找到的信息在框框里嗷！");
}
    else{
          alert("呜呜呜，未找到数据！");
          document.getElementById("id4").value = "";
}
 },
   error:function(er){
       alert("呜呜呜，申し訳ありません，该接口已失效！");
       BackErr(er);
 }
});

}//手机查微博

function copy(){

if((typeof(qq) == "undefined") & (typeof(phone) == "undefined") & (typeof(address) == "undefined") & (typeof(ID) == "undefined")){
                alert("复制不了，什么都没有生成怎么都复制不了吧！（派蒙声）");
}               
    else{
         
          var infor="";
          if(typeof(QQ) != "undefined"){
                infor = "QQ号："+QQ+"，";
}
          if(typeof(Phone) != "undefined"){
                infor += "手机号："+Phone+"，";
}         
           if(typeof(address) != "undefined"){
                infor += "手机归属地："+address+"，";
}         
            if(typeof(ID) != "undefined"){
                infor += "微博ID："+ID;
}         
          final_infor = infor+"，答应俺，别去干坏事哦！";//获取所有生成的数据
          var inp =document.createElement('input'); // create input标签
          document.body.appendChild(inp) // 添加到body中
          inp.value = final_infor; // 给input设置value属性为需要copy的内容
          inp.select(); // 选中
          document.execCommand('copy',false); // copy已经选中的内容
          alert("芜湖，已经把找到的所有信息复制到剪切板！");
          inp.remove(); // 删除掉这个dom	

}

}
