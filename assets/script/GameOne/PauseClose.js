cc.Class({
    extends: cc.Component,

    properties: {
        pause:{
            default:null,
            type:cc.Node,
            displayName:'Pause',
        },
        close:{
            default:null,
            type:cc.Node,
            displayName:'PauseClose',
        },
    },

    // use this for initialization
    onLoad: function () {
        this.close.on('touchstart',function(){
            this.pause.active = false;
        },this);

        this.pause.on('touchstart',function(){
            event.stopPropagation();
        },this);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
