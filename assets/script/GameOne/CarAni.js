cc.Class({
    extends: cc.Component,

    properties: {
        car:{
            default:null,
            type:cc.Node,
            displayName:'car',
        },
    },

    // use this for initialization
    onLoad: function () {
        var car = this.node.getComponent(cc.Animation);
        this.car.on('touchstart',function(){
            car.playAdditive('CarAni');
        },this);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
