cc.Class({
    extends: cc.Component,

    properties: {
        car:{
            default:null,
            type:cc.Node,
        },
        blackCar:{
            default:null,
            type:cc.Node,
        },
        brownCar:{
            default:null,
            type:cc.Node,
        },
        whiteCar:{
            default:null,
            type:cc.Node,
        },
        blueCar:{
            default:null,
            type:cc.Node,
        },
        redCar:{
            default:null,
            type:cc.Node,
        },
    },

    // use this for initialization
    onLoad: function () {
        this.blackCar.active = false;
        this.brownCar.active = false;
        this.whiteCar.active = false;
        this.blueCar.active = false;
        this.redCar.active = false;
        var carColor;
        carColor = parseInt(cc.random0To1()*5+1,10);
        cc.sys.localStorage.carColor = carColor;
        if(carColor == 1){
            this.blackCar.active = true;
        }else if(carColor == 2){
            this.brownCar.active = true;
        }else if(carColor == 3){
            this.whiteCar.active = true;
        }else if(carColor == 4){
            this.blueCar.active = true;
        }else if(carColor == 5){
            this.redCar.active = true;
        }

        this.car.on('touchstart',function(){
            if(cc.sys.localStorage.carColor == 1){
                this.brownCar.active = true;
                this.blackCar.active = false;
                this.whiteCar.active = false;
                this.blueCar.active = false;
                this.redCar.active = false;
                cc.sys.localStorage.carColor = parseInt(cc.sys.localStorage.carColor) + 1;
            }else if(cc.sys.localStorage.carColor == 2){
                this.whiteCar.active = true;
                this.blackCar.active = false;
                this.brownCar.active = false;
                this.blueCar.active = false;
                this.redCar.active = false;
                cc.sys.localStorage.carColor = parseInt(cc.sys.localStorage.carColor) + 1;
            }else if(cc.sys.localStorage.carColor == 3){
                this.blueCar.active = true;
                this.blackCar.active = false;
                this.brownCar.active = false;
                this.whiteCar.active = false;
                this.redCar.active = false;
                cc.sys.localStorage.carColor = parseInt(cc.sys.localStorage.carColor) + 1;
            }else if(cc.sys.localStorage.carColor == 4){
                this.redCar.active = true;
                this.blackCar.active = false;
                this.brownCar.active = false;
                this.whiteCar.active = false;
                this.blueCar.active = false;
                cc.sys.localStorage.carColor = parseInt(cc.sys.localStorage.carColor) + 1;
            }else if(cc.sys.localStorage.carColor == 5){
                this.blackCar.active = true;
                this.brownCar.active = false;
                this.whiteCar.active = false;
                this.blueCar.active = false;
                this.redCar.active = false;
                cc.sys.localStorage.carColor = parseInt(cc.sys.localStorage.carColor) - 4;
            }
        },this);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
