cc.Class({
    extends: cc.Component,

    properties: {
        bianpao: {
            default: null,
            type: cc.Node,
            displayName: 'bianpao',
        },
        GameFailure: {
            default: null,
            type: cc.Node,
            displayName: 'GameFailure',
        },
    },



    // use this for initialization
    onLoad: function () {
        var bianpao = this.node.getComponent(cc.Animation);
        this.bianpao.on('touchstart', function () {
            bianpao.playAdditive('bianpaolAni');

            this.schedule(function(){
                cc.log('lala');
                this.GameFailure.active = true;
            },1,0,1);
        }, this);

        this.GameFailure.on('touchstart', function () {
            event.stopPropagation();
        }, this);

    },
});