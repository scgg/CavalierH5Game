cc.Class({
    extends: cc.Component,

    properties: {
        price:{
            default:null,
            type:cc.Node,
            displayName:'price',
        },
    },

    // use this for initialization
    onLoad: function () {
        var price = this.node.getComponent(cc.Animation);
        this.price.on('touchstart',function(){
            price.playAdditive('priceAni');
        },this);
    },

});
