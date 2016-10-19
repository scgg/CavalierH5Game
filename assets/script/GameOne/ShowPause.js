cc.Class({
    extends: cc.Component,

    properties: {
        pause:{
            default:null,
            type:cc.Node,
            displayName:'Pause',
        },
        pauseBtn:{
            default:null,
            type:cc.Node,
            displayName:'PauseBtn',
        },
    },

    // use this for initialization
    onLoad: function () {
        this.pause.active = false;
    },

    showpause: function(){
        this.pause.active = true;
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
