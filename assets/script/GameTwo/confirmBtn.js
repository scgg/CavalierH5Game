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
                if(cc.sys.localStorage.game < 2){
                    var gold = cc.sys.localStorage.gold;
                    var newGold = parseInt(gold);
                    cc.sys.localStorage.gold = newGold + 50;
                    cc.sys.localStorage.game = 2;
                } 
            }else{
                this.failure.active = true;
            }
        },this);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
