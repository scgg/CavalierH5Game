cc.Class({
    extends: cc.Component,

    properties: {
        Btn:{
            default:null,
            type:cc.Node,
        },
        success:{
            default:null,
            type:cc.Node,
        },
        failure:{
            default:null,
            type:cc.Node,
        },
    },

    // use this for initialization
    onLoad: function () {
        this.success.active = false;
        this.failure.active = false;
        this.Btn.on('touchstart',function(){
            var nail = localStorage.nailStay;
            var car = localStorage.newCarColor;
            if(nail == car){
                this.success.active = true;
            }else{
                this.failure.active = true;
            }
        },this);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
