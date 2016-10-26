cc.Class({
    extends: cc.Component,

    properties: {
        women:{
            default:null,
            type:cc.Node,
        },
        say:{
            default:null,
            type:cc.Node,
        },
    },

    // use this for initialization
    onLoad: function () {
        this.say.active = false;
        this.women.on('touchstart',function(){
            if(this.say.active){
                this.say.active = false;
            }else{
                this.say.active = true;
            }
        },this);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
