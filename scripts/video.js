// window.onload=function () {
    var video = document.querySelector('video');
    // video.style="display:none";
    var mask =document.querySelector('.video_mask');
    var playButton =document.querySelector('.play_button');
    mask.onclick=function () {
        video.play();
        mask.style="display:none";
    };
    mask.onmouseenter=function(){
        playButton.innerHTML='&#xe708;';
        mask.style="cursor:pointer"
    };
    mask.onmouseleave=function(){
        playButton.innerHTML='&#xe64b;';
    };
    video.onclick=function () {
        video.pause();
        mask.style="display:block";
    };
    window.onresize=function () {
        // 其实我想隐藏controller来着，是能隐藏，但是不标准
        // console.log(1);
    };

// };
