cc.Class({
    extends: cc.Component,

    properties: {
        bianpao: {
            default: null,
            type: cc.Node,
            displayName: 'bianpao',
        },
        GameFailure:{
            default:null,
            type:cc.Node,
            displayName:'GameFailure',
        },
    },

    // use this for initialization
    onLoad: function () {
        this.GameFailure.active = false;

        var bianpao = this.node.getComponent(cc.Animation);
        // bianpao.playAdditive('bianpaoAni');
        this.bianpao.on('touchstart', function () {
            bianpao.playAdditive('bianpaoAni');


            // setTimeout(Gf,2);
            this.GameFailure.active = true;
        }, this);

        this.GameFailure.on('touchstart',function(){
            event.stopPropagation();
        },this);

    },

    // Gf:function(){
    //     this.GameFailure.active = true;
    // },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});