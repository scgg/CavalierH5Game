cc.Class({
    extends: cc.Component,

    properties: {
        sprite: cc.Node,
        speed: cc.v2(0, 0),
        displayName: 'car',
        gamesuccess: {
            default: null,
            type: cc.Node,
            displayName: 'Gamesuccess',
        },
        showGameSuccess: {
            default: null,
            type: cc.Node,
            displayName: 'showGameSuccess',
        },
        effect: {
            default: null,
            url: cc.AudioClip,
        },
    },

    // use this for initialization
    onLoad: function () {
        this.GSensor();
        this.showGameSuccess.active = false;
    },
    GSensor: function () {
        cc.inputManager.setAccelerometerEnabled(true);
        var self = this
        var listener1 = cc.EventListener.create({
            event: cc.EventListener.ACCELERATION,
            callback: function (accelEvent, event) {
                this.speed.x = accelEvent.x
                this.speed.y = accelEvent.y
                return true
            }.bind(self),
        });
        cc.eventManager.addListener(listener1, this.node);
    },

    ajax: function () {
        var openid = $('#openid').val();
        $.post("api.php", {
            act: 'edit',
            openid: openid,
            gold: localStorage.gold,
        }, function (data) {
            if(data.code == 200){
                cc.log('success!');
            }
        }, 'json')
    },

    // called every frame
    update: function (dt) {
        if (this.speed.y * 100 > 70) {
            this.showGameSuccess.active = true;
            if (cc.sys.localStorage.game < 1) {
                var gold = cc.sys.localStorage.gold;
                var newGold = parseInt(gold);
                cc.sys.localStorage.gold = newGold + 50;
                cc.sys.localStorage.game = 1;
            }

            this.schedule(function () {
                this.gamesuccess.active = true;
                // var self = this;
                cc.audioEngine.playEffect(this.effect, false);
                // this.ajax();
            }, 1, 0, 2);

            cc.log("Node Rotation Y: " + this.speed.y * 100);
        } else {
            // cc.log("no flip");
        }
    },
});