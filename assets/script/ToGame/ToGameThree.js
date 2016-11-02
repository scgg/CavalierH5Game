cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {
        setTimeout(function() {
            cc.director.loadScene('GameThree');
        }, 3500);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
