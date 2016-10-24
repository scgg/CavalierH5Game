cc.Class({
    extends: cc.Component,

    properties: {
        btn:{
            default:null,
            type:cc.Node,
            displayName:'btn',
        },
        showHdie:{
            default:null,
            type:cc.Node,
            displayName:'showHdie',
        },
        showAddGold:{
            default:null,
            type:cc.Node,
            displayName:'shwoAddGold',
        },
    },

    // use this for initialization
    onLoad: function () {
        this.showHdie.active = false;
        this.showAddGold.active = false;
        this.btn.on('touchstart',function(){
            if(this.showHdie.active){
                this.showHdie.active = false;
            }else{
                this.showHdie.active = true;
            }
        },this);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
