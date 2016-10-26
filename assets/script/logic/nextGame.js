cc.Class({
    extends: cc.Component,

    properties: {
        nextBtn:{
            default:null,
            type:cc.Node,
        },
    },

    // use this for initialization
    onLoad: function () {
        this.nextBtn.on('touchstart',function(){
            cc.director.loadScene('CutsceneTwo');
        },this);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
