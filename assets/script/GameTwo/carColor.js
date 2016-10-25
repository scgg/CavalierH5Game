cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        this.node.getChildByName('blackCar').getComponent(cc.Sprite).active = false;
        this.node.getChildByName('brownCar').getComponent(cc.Sprite).active = false;
        this.node.getChildByName('whiteCar').getComponent(cc.Sprite).active = false;
        this.node.getChildByName('blueCar').getComponent(cc.Sprite).active = false;
        this.node.getChildByName('redCar').getComponent(cc.Sprite).active = false;
        var carColor;
        carColor = parseInt(cc.random0To1()*5+1,10);
        if(carColor == 1){
            this.node.getChildByName('blackCar').getComponent(cc.Sprite).active = true;
        }else if(carColor == 2){
            this.node.getChildByName('brownCar').getComponent(cc.Sprite).active = true;
        }else if(carColor == 3){
            this.node.getChildByName('whiteCar').getComponent(cc.Sprite).active = true;
        }else if(carColor == 4){
            this.node.getChildByName('blueCar').getComponent(cc.Sprite).active = true;
        }else if(carColor == 5){
            this.node.getChildByName('redCar').getComponent(cc.Sprite).active = true;
        }
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
