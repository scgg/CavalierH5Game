cc.Class({
    extends: cc.Component,

    properties: {
         stageOne:{
            default:null,
            type:cc.Node,
            displayName:'stageOne',
        },
        stageTwo:{
            default:null,
            type:cc.Node,
            displayName:'stageTwo',
        },
        stagethree:{
            default:null,
            type:cc.Node,
            displayName:'stagethree',
        },
    },

    // use this for initialization
    onLoad: function () {
        var game = cc.sys.localStorage.game;
        if(game == 0){
            this.node.getChildByName('StageOne').getComponent(cc.Button).interactable = true;
            this.node.getChildByName('StageTwo').getComponent(cc.Button).interactable = false;
            this.node.getChildByName('StageThree').getComponent(cc.Button).interactable = false;
        }else if(game == 1){
            this.node.getChildByName('StageOne').getComponent(cc.Button).interactable = true;
            this.node.getChildByName('StageTwo').getComponent(cc.Button).interactable = true;
            this.node.getChildByName('StageThree').getComponent(cc.Button).interactable = false;
        }else if(game == 2){
            this.node.getChildByName('StageOne').getComponent(cc.Button).interactable = true;
            this.node.getChildByName('StageTwo').getComponent(cc.Button).interactable = true;
            this.node.getChildByName('StageThree').getComponent(cc.Button).interactable = true;
        }else{
            cc.log('wrong');
        }
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
