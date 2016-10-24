cc.Class({
    extends: cc.Component,

    properties: {
        goldLabel:cc.Label,
    },

    // use this for initialization
    onLoad: function () {
        var gold = cc.sys.localStorage.gold;
        this.goldLabel.string = gold;
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        var gold = cc.sys.localStorage.gold;
        this.goldLabel.string = gold;
    },
});
