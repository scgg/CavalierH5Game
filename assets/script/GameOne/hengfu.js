cc.Class({
    extends: cc.Component,

    properties: {
        hfOne:{
            default:null,
            type:cc.Node,
            displayName:'hengfu1',
        },
        hfTwo:{
            default:null,
            type:cc.Node,
            displayName:'hengfu2',
        },
    },

    // use this for initialization
    onLoad: function () {
        this.hfTwo.active = false;

        this.hfOne.on('touchstart',function(){
            this.hfTwo.active = true;
            this.hfOne.active = false;
        },this);

        this.hfTwo.on('touchstart',function(){
            this.hfOne.active = true;
            this.hfTwo.active = false;
        },this);
    },


    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
