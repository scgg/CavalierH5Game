cc.Class({
    extends: cc.Component,

    properties: {
        nail:{
            default:null,
            type:cc.Node,
        },
    },

    // use this for initialization
    onLoad: function () {
        function onTouchMove(event){
            var x = event.getDeltaX();
            var y = event.getDeltaY();
            this.x += x;
            this.y += y;
        }
        // this.nail.on('touchmove',function(event){
        //     var x = event.getDeltaX();
        //     var y = event.getDeltaY();
        //     this.x += x;
        //     this.y += y;
        // },this);
        this.nail.on('touchmove',onTouchMove,this.nail);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
