cc.Class({
    extends: cc.Component,

    properties: {
        retry:{
            default:null,
            type:cc.Node,
            displayName:'retry',
        },
        retryBtn:{
            default:null,
            type:cc.Node,
            displayName:'retryBtn',
        },
    },

    // use this for initialization
    onLoad: function () {
        this.retryBtn.on('touchstart',function(){
            this.retry.active = false;
        },this);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
