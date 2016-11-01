cc.Class({
    extends: cc.Component,

    properties: {
        bgAudio:{
            default:null,
            url:cc.AudioClip,
        }
    },

    // use this for initialization
    onLoad: function () {

        cc.sys.localStorage.clear();
        cc.sys.localStorage.game = 0;
        cc.sys.localStorage.gold = 220;
        cc.audioEngine.playMusic(this.bgAudio,true);
    },

     
});
