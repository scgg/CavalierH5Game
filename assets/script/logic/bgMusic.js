cc.Class({
    extends: cc.Component,

    properties: {
        play:{
            default:null,
            type:cc.Node,
        },
        pause:{
            default:null,
            type:cc.Node,
        },
    },

    // use this for initialization
    onLoad: function () {

        if(localStorage.bgMusic == 0){
            this.pause.active = true;
            this.play.active = false;
        }else if(localStorage.bgMusic == 1){
            this.pause.active = false;
            this.play.active = true;
        }

        this.play.on('touchstart',function(){
            cc.audioEngine.pauseAll();
            this.play.active = false;
            this.pause.active = true;
            localStorage.bgMusic = 0;
        },this);

        this.pause.on('touchstart',function(){
            cc.audioEngine.resumeAll();
            this.pause.active = false;
            this.play.active = true;
            localStorage.bgMusic = 1;
        },this);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
