cc.Class({
    extends: cc.Component,

    properties: {
        guideBtn:{
            default:null,
            type:cc.Node,
            displayName:'guideBtn',
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
        prompt:{
            default:null,
            type:cc.Node,
            displayName:'prompt',
        }
    },

    // use this for initialization
    onLoad: function () {
        var guide = cc.sys.localStorage.guide;
        if(guide == undefined){
            guide = 1;
            cc.sys.localStorage.guide = 1;
        }
        this.showHdie.active = false;
        this.showAddGold.active = false;
       
        this.guideBtn.on('touchstart',function(){
            if(cc.sys.localStorage.guide == 1){
                if(parseInt(cc.sys.localStorage.gold) < 150){
                    if(this.showAddGold.active){
                        this.showAddGold.active = false;
                    }else{
                        this.showAddGold.active = true;
                        this.prompt.active = false;
                    }
                    cc.log('111')
                }else{
                    this.showHdie.active = true;
                    this.prompt.active = false;
                    var gold = cc.sys.localStorage.gold;
                    var minusgold = gold + '-150';
                    cc.sys.localStorage.gold = minusgold;
                    var e = function(){
                        cc.sys.localStorage.gold = gold - 150;
                    };
                    setTimeout(e,500);
                    cc.sys.localStorage.guide = 0;
                    cc.log('112')
                }
            }else if(cc.sys.localStorage.guide == 0){
                if(this.showHdie.active){
                    this.showHdie.active = false;
                }else{
                    this.showHdie.active = true;
                    this.showAddGold.active = false;
                    this.prompt.active = false;
                }
            }
        },this);
    },

    // e:function(){
    //     cc.sys.localStorage.gold = cc.sys.localStorage.gold - 150; 
    // },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
