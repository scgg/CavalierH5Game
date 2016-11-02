cc.Class({
    extends: cc.Component,

    properties: {
        anyway:{
            default:null,
            type:cc.Node,
        },
    },

    // use this for initialization
    onLoad: function () {
        // this.widthheight();
    },
    widthheight:function(){
        var width = cc.director.getWinSize().width - this.anyway.getPositionX();
        var height = cc.director.getWinSize().height - this.anyway.getPositionY();
        if(width > height){
            cc.director.loadScene('Start');
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
       this.widthheight();
    },
});
