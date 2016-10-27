cc.Class({
    extends: cc.Component,

    properties: {
        ABtn:{
            default:null,
            type:cc.Node,
        },
        BBtn:{
            default:null,
            type:cc.Node,
        },
        CBtn:{
            default:null,
            type:cc.Node,
        },
        DBtn:{
            default:null,
            type:cc.Node,
        },
        ABtnS:{
            default:null,
            type:cc.Node,
        },
        BBtnS:{
            default:null,
            type:cc.Node,
        },
        CBtnS:{
            default:null,
            type:cc.Node,
        },
        DBtnS:{
            default:null,
            type:cc.Node,
        },
        
    },

    changeSprite:function(){
        this.ABtnS.active = false;
        this.BBtnS.active = false;
        this.CBtnS.active = false;
        this.DBtnS.active = false;
        
        this.ABtn.on('touchstart',function(){
                this.ABtnS.active = true;
        },this);
        this.BBtn.on('touchstart',function(){
                this.BBtnS.active = true;
        },this);
        this.CBtn.on('touchstart',function(){
                this.CBtnS.active = true;
        },this);
        this.DBtn.on('touchstart',function(){
                this.DBtnS.active = true;
        },this);
    },

    // use this for initialization
    onLoad: function () {
        this.changeSprite();
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
