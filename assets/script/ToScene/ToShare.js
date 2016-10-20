cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {

    },
    ToShare: function(){
        cc.director.loadScene('Share');
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
