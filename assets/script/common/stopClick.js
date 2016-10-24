cc.Class({
    extends: cc.Component,

    properties: {
        stopClick:{
            default:null,
            type:cc.Node,
            displayName:'stopClick',
        },
    },

    // use this for initialization
    onLoad: function () {
        this.node.on('touchstart',function(){
            event.stopPropagation();
        },this);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
