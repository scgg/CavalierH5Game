cc.Class({
    extends: cc.Component,

    properties: {
        bianpao:{
            default:null,
            type:cc.Node,
            displayName:'bianpao',
        },
    },

    // use this for initialization
    onLoad: function () {
        var bianpao = this.node.getComponent(cc.Animation);
        this.bianpao.on('touchstart',function(){
            bianpao.playAdditive('bianpaoAni');
        },this);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
