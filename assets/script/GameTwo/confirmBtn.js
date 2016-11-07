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
        shengliEffect:{
            default:null,
            url:cc.AudioClip,
        },
        shibaiEffect:{
            default:null,
            url:cc.AudioClip,
        },
    },

    ajax: function () {
        var openid = $('#openid').val();
        $.post("api.php", {
            act: 'edit',
            openid: openid,
            gold: localStorage.gold,
        }, function (data) {
            if(data.code == 200){
                cc.log('gameThree');
            }
        }, 'json');
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
                cc.audioEngine.playEffect(this.shengliEffect,false);
                if(cc.sys.localStorage.game < 2){
                    var gold = cc.sys.localStorage.gold;
                    var newGold = parseInt(gold);
                    cc.sys.localStorage.gold = newGold + 50;
                    cc.sys.localStorage.game = 2;
                    this.ajax();
                } 
            }else{
                this.failure.active = true;
                cc.audioEngine.playEffect(this.shibaiEffect,false);
            }
        },this);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
