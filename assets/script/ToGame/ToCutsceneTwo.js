cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {

    },

    ToCutsceneTwo: function(){
        cc.director.loadScene('CutsceneTwo');
        cc.sys.localStorage.removeItem('prompt');
        cc.sys.localStorage.removeItem('guide');
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
