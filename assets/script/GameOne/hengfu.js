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
        // this.hfTwo.active = false;

        // this.hfOne.on('touchstart',function(){
        //     this.hfTwo.active = true;
        //     this.hfOne.active = false;
        // },this);

        // this.hfTwo.on('touchstart',function(){
        //     this.hfOne.active = true;
        //     this.hfTwo.active = false;
        // },this);

        var price = this.node.getComponent(cc.Animation);
        this.price.on('touchstart',function(){
            price.playAdditive('priceAni');
        },this);

        // this.price.on('touchstart',function(){
        //     price.playAdditive('priceAni');
        // },this);
    },

    // onLoad: function () {
    //     var price = this.node.getComponent(cc.Animation);
    //     this.price.on('touchstart',function(){
    //         price.playAdditive('priceAni');
    //     },this);
    // },


    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
