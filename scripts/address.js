// 百度地图API功能
function loadJScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://api.map.baidu.com/api?v=3.0&ak=BDxCYr3iNeiUnVmTVRS6b6mrsizsikfB&callback=init";//核心是回调函数
    document.body.appendChild(script);
}
//也不一定要用上面那种创建，直接再html里面引入也可以，有回调就行
function init() {
    // var map = new BMap.Map("mapContainer");
    // console.log(map);
    // var point = new BMap.Point(113.2473001017,23.1501416555);
    // map.centerAndZoom(point,18);
    // map.enableScrollWheelZoom(true);
    var mp = new BMap.Map("mapContainer");// 创建Map实例
    var centerPoint = new BMap.Point(113.3553001017,23.1101416555);
    mp.centerAndZoom(centerPoint, 13);// 创建中心点坐标
    mp.enableScrollWheelZoom(true);//启用滚轮放大缩小


    //干脆自己封装一个创建标记点的函数
    function markSomePlayground(jingdu,weidu,biaoti,dizhi) {
        var pointXiehe =new BMap.Point(jingdu,weidu);//协和球场地址
        var markerXiehe = new BMap.Marker(pointXiehe);  // 创建标注
        mp.addOverlay(markerXiehe);              // 将标注添加到地图中
        var optsXiehe = {
            width : 200,     // 信息窗口宽度
            height: 100,     // 信息窗口高度
            title : biaoti, // 信息窗口标题
            enableMessage:true,//设置允许信息窗发送短息
        };
        var infoWindow = new BMap.InfoWindow(dizhi, optsXiehe);  // 创建信息窗口对象
        markerXiehe.addEventListener("click", function(){
            mp.openInfoWindow(infoWindow,pointXiehe); //开启信息窗口
        });
    }
    markSomePlayground(113.2473001017,23.1501416555,"协和中学轮滑球场","地址：广州市荔湾区西湾路93号师源楼正对面");
    markSomePlayground(113.2455193366,23.0776738267,"旋风体育轮滑球场","地址：广州市荔湾区鹤洞路176号3号楼1层");
    markSomePlayground(113.2789997579,23.0985689836,"岭南画派纪念中学轮滑球场","地址：广州市海珠区江南西路玫瑰二街12号");
    markSomePlayground(113.4217177472,23.1369982754,"追风冰场","地址：广州市天河区奥体南路12号优托邦购物中心2层");
    markSomePlayground(113.3890702502,23.1300130321,"骏景中学轮滑球场","地址：广州市天河区天河区和风街1号");
    markSomePlayground(113.3686375834,23.0703774231,"广州drk综合运动场","地址：南沙港快速路桥下");
    markSomePlayground(113.3172972909,23.1076485330,"绿翠现代实验学校","地址：广州市海珠区滨江东路810号");


    // //在地图添加标记点
    // var canvasLayer = new BMap.CanvasLayer({
    //     update: update
    // });
    // function update() {
    //     var ctx = this.canvas.getContext("2d");
    //
    //     if (!ctx) {
    //         return;
    //     }
    //
    //     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    //
    //     var temp = {};
    //     ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
    //     ctx.beginPath();
    //     var data = [
    //         new BMap.Point(113.3890702502,23.1300130321),
    //         new BMap.Point(113.2455193366,23.0776738267),
    //         new BMap.Point(113.4217177472,23.1369982754),
    //         new BMap.Point(113.2473001017,23.1501416555),
    //         new BMap.Point(113.2789997579,23.0985689836),
    //     ];
    //
    //     for (var i = 0, len = data.length; i < len; i++) {
    //         var pixel = mp.pointToPixel(data[i]);
    //         ctx.fillRect(pixel.x, pixel.y, 30, 30);
    //     }
    // }
    // mp.addOverlay(canvasLayer);

}
// window.onload = loadJScript;  //异步加载地图既然永远进不了这里，那我定时器得了把

// setTimeout(loadJScript(),5000);//也没必要定时器，直接执行也能生效，百度找答案被带偏了，根本不用等onload
loadJScript();