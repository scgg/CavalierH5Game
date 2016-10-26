cc.Class({
    extends: cc.Component,

    properties: {
        confirm:{
            default:null,
            type:cc.Node,
        },
    },

    // use this for initialization
    onLoad: function () {
        this.confirm.on('touchstart',function(){
            if(localStorage.nailStay == localStorage.newCarColor){
                cc.log('cheng gong le !');
            }else{
                cc.log('shi bai lo !');
            }
        },this);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
