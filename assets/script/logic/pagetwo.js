cc.Class({
    extends: cc.Component,

    properties: {
         stageFour:{
            default:null,
            type:cc.Node,
            displayName:'stageFour',
        },
        stageFive:{
            default:null,
            type:cc.Node,
            displayName:'stageFive',
        },
        stageSix:{
            default:null,
            type:cc.Node,
            displayName:'stageSix',
        },
    },

    // use this for initialization
    onLoad: function () {
        var game = cc.sys.localStorage.game;
        if(game == 3){
            this.node.getChildByName('StageFour').getComponent(cc.Button).interactable = true;
            this.node.getChildByName('StageFive').getComponent(cc.Button).interactable = false;
            this.node.getChildByName('StageSix').getComponent(cc.Button).interactable = false;
        }else if(game == 4){
            this.node.getChildByName('StageFour').getComponent(cc.Button).interactable = true;
            this.node.getChildByName('StageFive').getComponent(cc.Button).interactable = true;
            this.node.getChildByName('StageSix').getComponent(cc.Button).interactable = false;
        }else if(game == 5){
            this.node.getChildByName('StageFour').getComponent(cc.Button).interactable = true;
            this.node.getChildByName('StageFive').getComponent(cc.Button).interactable = true;
            this.node.getChildByName('StageSix').getComponent(cc.Button).interactable = true;
        }
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
