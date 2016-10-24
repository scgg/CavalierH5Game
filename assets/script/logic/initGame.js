cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {

        cc.sys.localStorage.clear();
        cc.sys.localStorage.game = 0;
        cc.sys.localStorage.gold = 220;
    },

     
});
