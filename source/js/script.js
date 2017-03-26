function my_alert() {
  alert('script running');
}

var whiteNoise = new iNotify({
    audio:{
        file: ["/sounds/RainyMood.mp3"]
    }
});

function loopWhiteNoise() {
    whiteNoise.loopPlay();
}

function stopWhiteNoise() {
    whiteNoise.stopPlay();
}

var iN = new iNotify({
    effect: 'flash',
    interval: 500,
    message:"有消息拉！2",
    audio:{
        file: ['msg.mp4']
    },
    notification:{
        title:"通知！",
        body:'您来了一条新消息'
    }
});

function inotifyTest(){
    iN.setFavicon(10).setTitle('新标题').notify({
        title:"新通知",
        body:"打雷啦，下雨啦..."
    }).player();
}

function inotifyStop() {
    iN.stopPlay()
}

function inotifyStart() {
    iN.player();
}

function inotifyLoop() {
    iN.loopPlay();
}

