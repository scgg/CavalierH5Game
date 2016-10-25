cc.Class({
    extends: cc.Component,

    properties: {
        promptBtn:{
            default:null,
            type:cc.Node,
            displayName:'promptBtn',
        },
        showHdie:{
            default:null,
            type:cc.Node,
            displayName:'showHdie',
        },
        showAddGold:{
            default:null,
            type:cc.Node,
            displayName:'shwoAddGold',
        },
        guide:{
            default:null,
            type:cc.Node,
            displayName:'guide',
        }
    },

    // use this for initialization
    onLoad: function () {
        var prompt = cc.sys.localStorage.prompt;
        if(prompt == undefined){
            prompt = 1;
            cc.sys.localStorage.prompt = 1;
        }
        this.showHdie.active = false;
        this.showAddGold.active = false;
       
        this.promptBtn.on('touchstart',function(){
            if(cc.sys.localStorage.prompt == 1){
                if(cc.sys.localStorage.gold < 50){
                   if(this.showAddGold.active){
                        this.showAddGold.active = false;
                    }else{
                        this.showAddGold.active = true;
                        this.guide.active = false;
                    }
                }else{
                    this.showHdie.active = true;
                    this.guide.active = false;
                    var gold = cc.sys.localStorage.gold;
                    var minusgold = gold + '-50';
                    cc.sys.localStorage.gold = minusgold;
                    var e = function(){
                        cc.sys.localStorage.gold = gold - 50;
                    };
                    setTimeout(e,1500);
                    cc.sys.localStorage.prompt = 0;
                }
            }else if(cc.sys.localStorage.prompt == 0){
                if(this.showHdie.active){
                    this.showHdie.active = false;
                }else{
                    this.showHdie.active = true;
                    this.showAddGold.active = false;
                    this.guide.active = false;
                }
            }
        },this);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
