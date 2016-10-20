cc.Class({
    extends: cc.Component,

    properties: {
        GameFailure:{
            default:null,
            type:cc.Node,
        },
    },

    // use this for initialization
    onLoad: function () {

    },

    GameFailure: function(){
        this.GameFailure.active = true;
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
