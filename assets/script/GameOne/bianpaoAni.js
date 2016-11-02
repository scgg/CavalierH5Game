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
        shibaiEffect:{
            default:null,
            url:cc.AudioClip,
        },
    },



    // use this for initialization
    onLoad: function () {

        
        this.GameFailure.active = false;

        var bianpao = this.node.getComponent(cc.Animation);
        this.bianpao.on('touchstart', function () {
            bianpao.playAdditive('bianpaoAni');

            this.schedule(function(){
                cc.audioEngine.playEffect(this.shibaiEffect,false);
                this.GameFailure.active = true;
            },1,0,1);
        }, this);

        this.GameFailure.on('touchstart', function () {
            event.stopPropagation();
        }, this);

    },
});