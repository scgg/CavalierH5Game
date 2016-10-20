cc.Class({
    extends: cc.Component,

    properties: {
        sprite: cc.Node,
        speed: cc.v2(0, 0),
        displayName:'car',
        gamesuccess:{
            default:null,
            type:cc.Node,
            displayName:'Gamesuccess',
        },
    },

    // use this for initialization
    onLoad: function() {
        this.GSensor()
    },
    GSensor: function() {
        cc.inputManager.setAccelerometerEnabled(true);
        var self = this
        var listener1 = cc.EventListener.create({
            event: cc.EventListener.ACCELERATION,
            callback: function(accelEvent, event) {
                this.speed.x = accelEvent.x
                this.speed.y = accelEvent.y
                return true
            }.bind(self),
        });
        cc.eventManager.addListener(listener1, this.node);
    },

    // called every frame
    update: function(dt) {

        // this.sprite.x += this.speed.x * 10
        // this.sprite.y += this.speed.y * 10
        // cc.log("Node Rotation Y: " + this.speed.y*100);
        //
        // if(this.speed.y*100 > 50 || this.speed.y*100 < -90){
        //     this.sprite.rotationX = 180;
        //     cc.log("Node Rotation Y: " + this.speed.y*100);
        // }else{
        //     // cc.log("no flip");
        // }
        if(this.speed.y*100 > 50){
            this.sprite.rotationX = 180;

            this.gamesuccess.active = true;
            cc.log("Node Rotation Y: " + this.speed.y*100);
        }else{
            // cc.log("no flip");
        }
    },
});
