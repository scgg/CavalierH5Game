cc.Class({
    extends: cc.Component,

    properties: {
        black:{
            default:null,
            type:cc.Node,
        },
        brown:{
            default:null,
            type:cc.Node,
        },
        white:{
            default:null,
            type:cc.Node,
        },
        blue:{
            default:null,
            type:cc.Node,
        },
        red:{
            default:null,
            type:cc.Node,
        },
        confirmBtn:{
            default:null,
            type:cc.Node,
        },
        blackTick:cc.Node,
        brownTick:cc.Node,
        whiteTick:cc.Node,
        blueTick:cc.Node,
        redTick:cc.Node,
    },

    getColorPosition:function(){
        var blackP = cc.v2(this.black.getPosition());
        var brownP = cc.v2(this.brown.getPosition());
        var whiteP = cc.v2(this.white.getPosition());
        var blueP = cc.v2(this.blue.getPosition());
        var redP = cc.v2(this.red.getPosition());
        var confirmBtnP = cc.v2(this.confirmBtn.getPosition());
        cc.sys.localStorage.blackPx = blackP.x;
        cc.sys.localStorage.blackPy = blackP.y;
        cc.sys.localStorage.brownPx = brownP.x;
        cc.sys.localStorage.brownPy = brownP.y;
        cc.sys.localStorage.whitePx = whiteP.x;
        cc.sys.localStorage.whitePy = whiteP.y;
        cc.sys.localStorage.bluePx = blueP.x;
        cc.sys.localStorage.bluePy = blueP.y;
        cc.sys.localStorage.redPx = redP.x;
        cc.sys.localStorage.redPy = redP.y;
        cc.sys.localStorage.confirmBtnPx = confirmBtnP.x;
        cc.sys.localStorage.confirmBtnPy = confirmBtnP.y;
    },

    changeColorPosition:function(){
        this.black.on('touchstart',function(){
            if(localStorage.newCarColor == 'black'){
                if(this.black.x == localStorage.blackPx){
                    this.black.setPosition(localStorage.whitePx,localStorage.whitePy);
                    this.white.setPosition(localStorage.blackPx,localStorage.blackPy);
                    this.whiteTick.active = true;
                    this.blackTick.active = false;
                    this.brownTick.active = false;
                    this.blueTick.active = false;
                    this.redTick.active = false;
                }else{
                    this.white.setPosition(localStorage.whitePx,localStorage.whitePy);
                    this.black.setPosition(localStorage.blackPx,localStorage.blackPy);
                    this.whiteTick.active = true;
                    this.blackTick.active = false;
                    this.brownTick.active = false;
                    this.blueTick.active = false;
                    this.redTick.active = false;
                }
            }
        },this);

        this.white.on('touchstart',function(){
            if(localStorage.newCarColor == 'white'){
                if(this.white.x == localStorage.whitePx){
                    this.black.setPosition(localStorage.whitePx,localStorage.whitePy);
                    this.white.setPosition(localStorage.blackPx,localStorage.blackPy);
                    this.whiteTick.active = false;
                    this.blackTick.active = true;
                    this.brownTick.active = false;
                    this.blueTick.active = false;
                    this.redTick.active = false;
                }else{
                    this.white.setPosition(localStorage.whitePx,localStorage.whitePy);
                    this.black.setPosition(localStorage.blackPx,localStorage.blackPy);
                    this.whiteTick.active = false;
                    this.blackTick.active = true;
                    this.brownTick.active = false;
                    this.blueTick.active = false;
                    this.redTick.active = false;
                }
            }
        },this);

        this.blue.on('touchstart',function(){
            if(localStorage.newCarColor == 'blue'){
                if(this.blue.x == localStorage.bluePx){
                    this.blue.setPosition(localStorage.redPx,localStorage.redPy);
                    this.red.setPosition(localStorage.bluePx,localStorage.bluePy);
                    this.whiteTick.active = false;
                    this.blackTick.active = false;
                    this.brownTick.active = false;
                    this.blueTick.active = false;
                    this.redTick.active = true;
                }else{
                    this.red.setPosition(localStorage.redPx,localStorage.redPy);
                    this.blue.setPosition(localStorage.bluePx,localStorage.bluePy);
                    this.whiteTick.active = false;
                    this.blackTick.active = false;
                    this.brownTick.active = false;
                    this.blueTick.active = false;
                    this.redTick.active = true;
                }
            }
        },this);

        this.red.on('touchstart',function(){
            if(localStorage.newCarColor == 'red'){
                if(this.red.x == localStorage.redPx){
                    this.blue.setPosition(localStorage.redPx,localStorage.redPy);
                    this.red.setPosition(localStorage.bluePx,localStorage.bluePy);
                    this.whiteTick.active = false;
                    this.blackTick.active = false;
                    this.brownTick.active = false;
                    this.blueTick.active = true;
                    this.redTick.active = false;
                }else{
                    this.red.setPosition(localStorage.redPx,localStorage.redPy);
                    this.blue.setPosition(localStorage.bluePx,localStorage.bluePy);
                    this.whiteTick.active = false;
                    this.blackTick.active = false;
                    this.brownTick.active = false;
                    this.blueTick.active = true;
                    this.redTick.active = false;
                }
            }
        },this);

        this.brown.on('touchstart',function(){
            if(localStorage.newCarColor == 'brown'){
                if(this.brown.x == localStorage.brownPx){
                    this.brown.setPosition(localStorage.confirmBtnPx,localStorage.confirmBtnPy);
                    this.confirmBtn.setPosition(localStorage.brownPx,localStorage.brownPy);
                    this.whiteTick.active = false;
                    this.blackTick.active = false;
                    this.brownTick.active = false;
                    this.blueTick.active = false;
                    this.redTick.active = false;
                }else{
                    this.confirmBtn.setPosition(localStorage.confirmBtnPx,localStorage.confirmBtnPy);
                    this.brown.setPosition(localStorage.brownPx,localStorage.brownPy);
                    this.whiteTick.active = false;
                    this.blackTick.active = false;
                    this.brownTick.active = false;
                    this.blueTick.active = false;
                    this.redTick.active = false;
                }
            }
        },this); 
    },

    // use this for initialization
    onLoad: function () {
        this.blackTick.active = false;
        this.brownTick.active = false;
        this.whiteTick.active = false;
        this.blueTick.active = false;
        this.redTick.active = false;
        cc.sys.localStorage.colorClickTimes = 0;
        this.getColorPosition();
        this.changeColorPosition();
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
