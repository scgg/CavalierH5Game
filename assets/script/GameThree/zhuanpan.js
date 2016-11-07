cc.Class({
    extends: cc.Component,

    properties: {
        clickBtn: {
            default: null,
            type: cc.Node,
        },
        zhuanpan: {
            default: null,
            type: cc.Node,
        },
        GameSuccess: {
            default: null,
            type: cc.Node,
        },
        GameFailure: {
            default: null,
            type: cc.Node,
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
                cc.log('gameTwo');
            }
        }, 'json');
    },

    // use this for initialization
    onLoad: function () {
        this.GameSuccess.active = false;
        this.GameFailure.active = false;

        var zhuanpanAni = this.node.getComponent(cc.Animation);
        // var OneMoveOne = localStorage.OneMoveOne;
        this.clickBtn.on('touchstart', function () {
            zhuanpanAni.playAdditive('zhuanpan1');

            if (localStorage.OneMoveOne == 1) {
                this.schedule(function () {
                    this.GameSuccess.active = true;
                    cc.audioEngine.playEffect(this.shengliEffect,false);
                    cc.sys.localStorage.OneMoveOne = 0;
                    if (cc.sys.localStorage.game < 3) {
                        var gold = cc.sys.localStorage.gold;
                        var newGold = parseInt(gold);
                        cc.sys.localStorage.gold = newGold + 50;
                        cc.sys.localStorage.game = 3;
                        this.ajax();
                    }
                }, 3, 0, 3);
            } else {
                this.schedule(function () {
                    this.GameFailure.active = true;
                    cc.audioEngine.playEffect(this.shibaiEffect,false);
                }, 3, 0, 3);
            }
        }, this);

        this.GameSuccess.on('touchstart', function () {
            event.stopPropagation();
        }, this);
        this.GameFailure.on('touchstart', function () {
            event.stopPropagation();
        }, this);
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {

    },
});