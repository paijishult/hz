        //公告弹窗
    layui.use('layer', function(){
        var $ = layui.jquery, layer = layui.layer; 
        //储存弹窗Cookies(24小时一次)
        window.onload = function () {//判断Cookie是否存在
            //================
            var s = document.cookie;//得到Cookie
            if (s.indexOf('notice=1') != -1) return; //存在cookie退出下面代码的执行
            var d = new Date();
            d.setHours(d.getHours() + 999); //Cookie有效期24小时
            document.cookie = 'notice=1;expires='+d.toGMTString();//设置cookie
            //================
            /*自己弹窗代码*/
            popnotice();//弹出提示层
            //console.log("控制台弹出信息！");
        }
        //触发弹窗事件
        window.popnotice = function popnotice() {
            layer.open({
                type: 1,
                title: '<strong>公告：</strong>',//公告标题
                closeBtn: false, //不显示标题栏
                area: 'auto;',//提示窗宽度
                shade: 0.8,//透明度
                id: 'CX-Sport', //设定一个id，防止重复弹出
                btn: '我晓得了',//按钮
                btnAlign: 'c',
                moveType: 1, //拖拽模式，0或者1
                                // padding:弹窗两侧边距 line-height:行距
                content: '<div style="padding: 30px; line-height: 24px; background-color: #393D49; color: #fff; font-weight: 300; font-size: 16px;"><p><font color="yellow">仅供查询个人信息是否泄漏，请勿用于违法行为！</font></p><p>本网站支持多个查询，即一次可以查询多项，查询结果会在原来文本框展示。</p>点击复制即可把所有查询结果复制到剪切板。</p>查找数据来自互联网API接口，具有时效性，可能随时跑路失效！',
                success: function(layero){
                }
            });
        }
        $('#layerDemo .layui-btn').on('click', function() {
            var othis = $(this), method = othis.data('method');
            active[method] ? active[method].call(this, othis) : '';
        });
    });