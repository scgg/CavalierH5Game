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
        // bianpao.playAdditive('bianpaoAni');
        this.bianpao.on('touchstart',function(){
            bianpao.playAdditive('bianpaolAni');
        },this);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});