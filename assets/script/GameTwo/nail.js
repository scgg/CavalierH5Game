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
        this.nail.on('touchmove',onTouchMove,this.nail);

        cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDebugDraw = true;
    },

    onCollisionEnter: function(other) {
        // this.node.color = cc.Color.RED;
    },

    onCollisionStay: function(other) {
        if(other.node.group == 'red'){
            cc.sys.localStorage.nailStay = 'red';
        }else if(other.node.group == 'blue'){
            cc.sys.localStorage.nailStay = 'blue';
        }else if(other.node.group == 'black'){
            cc.sys.localStorage.nailStay = 'black';
        }else if(other.node.group == 'brown'){
            cc.sys.localStorage.nailStay = 'brown';
        }else if(other.node.group == 'white'){
            cc.sys.localStorage.nailStay = 'white';
        }
    },

    onCollisionExit: function() {
        cc.sys.localStorage.removeItem('nailStay');
        // this.node.color = cc.Color.
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
