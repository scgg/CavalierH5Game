var answer = [
    ['科沃兹的产品定位是( )', 'A、超乎期待的精品全能家轿', 'B、全民理想家轿', 'C、新一代性能车', 'D、家轿旗舰车','A'],
	['科沃兹具有同级最低油耗，手动挡车型综合工况下百公里油耗仅( )L', 'A、5.1', 'B、5.2', 'C、5.3', 'D、5.4','D'],
    ['( )曾是通用汽车雪佛兰品牌旗下的入门款产品，这款诞生于1982年的车型是80年代雪佛兰迎击来自日本小型车挑战的有力法宝', 'A、Corvettes', 'B、Camaro', 'C、Cavalier', 'D、Malibu','C'],
	['科沃兹是同级唯一全系标配发动机智能启停系统，手动挡为GM最先进( )公里时速加强型智能启停系统', 'A、5', 'B、10', 'C、15', 'D、20','B'],
	['科沃兹精致动感的车头承袭了雪佛兰全新家族式双格栅，采用( )设计', 'A、流体雕塑纹样', 'B、“疾风”渐变纹样	', 'C、硬朗线条纹样', 'D、圆润平滑纹样','B'],
	['科沃兹采用( )和5速手动加强型智能启停变速箱的动力组合', 'A、7速双离合变速器', 'B、6速双离合变速器', 'C、6速自动DSS智能启停变速箱', 'D、4速变速箱','C'],
	['科沃兹中高配以上车型搭载( )项车身电子稳定系统', 'A、11', 'B、12', 'C、13', 'D、14','D'],
	['科沃兹车身高强度钢使用率高达( )，其中超过一半为超高强度钢', 'A、65%', 'B、67%', 'C、60%', 'D、70%','B'],
	['科沃兹的轴距达到( )mm，使后排乘客乘坐更舒适', 'A、2616', 'B、2605', 'C、2600', 'D、2603','C'],
	['科沃兹1.5L车型的功率扭矩是( )', 'A、83kW/6000rpm、 141N.m/4000rpm', 'B、85kW/4400rpm、 144N.m/6000rpm', 'C、82kW/6000rpm、 142N.m/4000rpm', 'D、85kW/4000rpm、 134N.m/6000rpm','A'],
	['科沃兹中高配车型标配了( )寸高清触摸大屏', 'A、6.5', 'B、7', 'C、6', 'D、8','B'],
	['下列车型中，标配Carlife的车型是( )', 'A、新桑塔纳', 'B、福睿斯', 'C、昕锐', 'D、科沃兹','D'],
	['科沃兹采用了( )一体化笼式车身', 'A、BFI', 'B、GOA	', 'C、ZONEBODY', 'D、3H','A'],
	['科沃兹的车顶与侧围激光钎焊采用业内领先的激光钎焊工艺，长度达( )米', 'A、5', 'B、4', 'C、3', 'D、2','C'],
	['科沃兹采用大量结构胶，总长度达( )米，不仅使车体轻量化，还有效增加车身的结构刚性、强度和耐久性能', 'A、20', 'B、26', 'C、30', 'D、34','B'],
	['科沃兹采用电动加热外后视镜，在-5℃下，仅需( )分钟即可去除后视镜雨雪，提高用车安全性', 'A、4', 'B、3', 'C、2', 'D、1','B'],
	['科沃兹由上汽通用汽车( )工厂负责制造', 'A、武汉', 'B、烟台', 'C、沈阳', 'D、上海','A'],
	['科沃兹MT车型具有5.4L/100KM的同级最低油耗表现，桑塔纳MT车型的最低油耗是( )L/100km。相比之下，科沃兹油耗优势明显', 'A、5.9', 'B、6.0', 'C、6。1', 'D、6.2','B'],
	['科沃兹软包覆达到( )搭配马鞍棕时尚色：提升舒适性和豪华感', 'A、100%', 'B、95%', 'C、90%', 'D、85%','A'],
	['科沃兹使用( )寸固特异安乘轮胎：以其卓越的湿地，刹车及操控性能，让驾驶者从容应对湿滑路面的挑战，在行驶途中更添一份安心和信心', 'A、14’/15’', 'B、15’/16’', 'C、16’/17’', 'D、17’/18’','B'],
	['科沃兹大灯多棱面：多达( )多个棱面切割，更为精巧美观，提升光效质感', 'A、130', 'B、120', 'C、110', 'D、100','D'],
	['科沃兹后排地板平整性：克服内部架构布局挑战，低至( )cm凸起，为后排乘员提供更舒适的乘坐空间', 'A、3', 'B、4', 'C、5', 'D、6','B'],
	['科沃兹经过超( )万公里的耐久性试验，从最炎热到最严寒，历经各种恶劣环境的终极考验', 'A、300', 'B、350', 'C、400', 'D、450','A'],
	['以下车型中具有ECO节油驾驶提醒功能的是( )', 'A、科沃兹', 'B、福睿斯', 'C、昕锐', 'D、桑塔纳','A'],
	['科沃兹全车进行了多达( )处轻量化设计', 'A、7', 'B、8', 'C、9', 'D、10','D'],
	['科沃兹不仅有同级主流轴距和宽大车体，更凭借同级最佳的前排头部空间、后排座椅宽度，结合多达( )处储物空间设计，给你意想不到的宽大实用', 'A、18', 'B、19', 'C、20', 'D、21','C'],
	['新桑塔纳的轴距长度是( )mm', 'A、2545', 'B、2500', 'C、2555', 'D、2603','D'],
	['科沃兹具有同级最佳前排头部空间，其中( )mm的前排有效头部空间，提供更为宽裕的头部空间', 'A、960', 'B、961', 'C、962', 'D、963','C'],
	['科沃兹拥有大视野电动天窗，其面积达到( )平米', 'A、0.15', 'B、0.21', 'C、0.23', 'D、0.28','C'],
	['科沃兹的后备箱容积是( )L', 'A、405', 'B、448', 'C、490', 'D、446','A'],
	['科沃兹的ESC子功能中能够在极速过弯时赋予车辆更高的灵活性，带来更轻松的驾驶体验的是( )', 'A、HSA', 'B、MSD', 'C、TVBB', 'D、FBS','C'],
	['科沃兹全系配备PM2.5空气过滤系统，对于粒径范围0.3~10微米的颗粒物，吸附能力可达到( )以上', 'A、97%', 'B、98%', 'C、99%', 'D、100%','C'],
	['TRB变截面滚压专利技术，提升了B柱强度及延展性，且能有效减重，单车减重达( )KG', 'A、3.1', 'B、3.2', 'C、3.3', 'D、3.4','B'],
	['科沃兹具有众多先进的节油环保配置，而桑塔纳全系没有配备( )技术配备', 'A、电喷技术', 'B、铝制缸盖发动机', 'C、铝制缸体发动机', 'D、加强型自动启停系统','D'],
	['福睿斯1.5L车型的功率/扭矩是( )，相比科沃兹83kw/141Nm的数据差别不大，但是油耗比科沃兹高', 'A、80kw/141Nm', 'B、81kw/141Nm', 'C、83kw/142Nm', 'D、82kw/142Nm','C'],
	['科沃兹自动挡车型的油耗同级最低仅有5.8L/100km，( )自动挡车型的油耗是6.8L/100km', 'A、福睿斯', 'B、桑塔纳', 'C、.昕锐', 'D、捷达','A'],
	['在科沃兹众多的安全配置中，福睿斯全系没有配备( )，而科沃兹有此项配置', 'A、安全气囊', 'B、ESC车身稳定系统', 'C、胎压监测', 'D、儿童安全锁','C'],
	['昕锐的长宽高分别为4501*1706*1469mm，轴距( )mm', 'A、2600', 'B、2601', 'C、2603', 'D、2607','C'],
	['昕锐1.4L车型的功率和扭矩是( )，相比科沃兹1.5L车型逊色太多', 'A、65kw/131Nm', 'B、66kw/132Nm', 'C、66kw/133Nm', 'D、65kw/133Nm','B'],
	['科沃兹顶配车型采用的轮胎规格是205/55 R16，抓地力更强。而昕锐1.6L顶配车型采用的轮胎规格是( )', 'A、175/60 R15', 'B、185/70 R15', 'C、175/70 R15', 'D、185/60 R15','D'],
	['科沃兹全系标配而昕锐没有全系标配的配置是( )', 'A、ABS', 'B、安全带未带提醒', 'C、遥控钥匙', 'D、主/副驾驶气囊','C'],
	['以下哪个配置是科沃兹、昕锐和桑塔纳采用的，而福睿斯全系没有采用的( )', 'A、安全带未带提示', 'B、安全气囊', 'C、TMPS', 'D、ABS','C'],
	['与竞品相比，以下ESC系统中，不是科沃兹独有的是哪项？( )', 'A、EBP电子预制动', 'B、TVBB过弯辅助系统', 'C、SLS直线稳定性控制系统', 'D、HSA坡道辅助系统','D'],
	['以下车型配备倒车影像的是( )', 'A、昕锐', 'B、福睿斯', 'C、桑塔纳', 'D、科沃兹','D'],
	['下列车型中配备智能启停系统的车型是( )', 'A、昕锐', 'B、福睿斯', 'C、桑塔纳', 'D、科沃兹','D'],
	['科沃兹配备的百度Car Life系统包含四大常用功能，以下不是这四大功能的是( )', 'A、发现（找车位、去加油等周边搜索）', 'B、电话（导入电话簿）', 'C、电台记忆', 'D、音乐（本地、在线）','C'],
	['科沃兹智能启停技术具有的优点中，不包含( )', 'A、环保节能', 'B、设计轻量化', 'C、可靠耐用', 'D、可关闭式','B'],
	['胎压监测系统能提升用车的便利性和安全性，科沃兹采用的是直接式智能独立数显胎压监测系统，而桑塔纳用的是间接式胎压监测系统，且此项配置在桑塔纳( )才有', 'A、低配', 'B、中配', 'C、高配', 'D、入门级','C'],
	['科沃兹采用越级主动安全配备，ESC具有14项子功能，带给客户安心的行车安全，而桑塔纳仅配备( )', 'A、EBP电子预制动', 'B、TVBB过弯辅助系统', 'C、SLS直线稳定性控制系统', 'D、ABS','D'],
	['科沃兹相比桑塔纳描述正确的是( )', 'A、科沃兹和桑塔纳都全系标配自动启停', 'B、科沃兹自动挡和桑塔纳都全系标配14项子功能的ESC', 'C、科沃兹轴距比桑塔纳仅仅少了6mm', 'D、科沃兹在信息娱乐系统上更丰富，桑塔纳全系无中控大屏','D'],
	['科沃兹的车身尺寸4544mm*1779mm*1467mm和轴距2600mm，相比桑塔纳的车身尺寸，优势在于( )和宽', 'A、长', 'B、宽', 'C、.高', 'D、轴距','A'],
	['以下配置是福睿斯和科沃兹都没有配备的是( )', 'A、中控大屏', 'B、倒车影像', 'C、百度CarLife', 'D、电动调节座椅','D'],
	['以下在驾控方面的配置，哪个是科沃兹配备而福睿斯没有配备的( )', 'A、全框式副车架', 'B、麦弗逊前悬', 'C、扭力梁后悬', 'D、EPS','A'],
	['科沃兹相比福睿斯描述正确的是( )', 'A、科沃兹超低油耗,科沃兹自动挡油耗（5.8L/百公里）都远低于福睿斯手动挡（6.5L/百公里）', 'B、科沃兹和福睿斯一样全系标配了中控大屏', 'C、科沃兹和福睿斯同样全系标配了14项子功能的ESC', 'D、科沃兹和福睿斯都全系标配全框式副车架','A'],
	['福睿斯车型配备的变速箱形式包括：5挡手动和( )', 'A、6挡手动', 'B、6挡手自一体 ', 'C、7速双离合', 'D、4挡自动','B'],
	['科沃兹自动挡全系标配ECS车身稳定系统拥有众多子功能，福睿斯仅具有哪项子功能( )', 'A、SLS直线稳定性系统', 'B、VSC车辆脱困功能', 'C、EBD电子制动力分配', 'D、TVBB过弯辅助系统','C'],
	['科沃兹与昕锐对比，下列描述不正确的是( )', 'A、科沃兹车体更为宽大', 'B、昕锐全系配备中控大屏', 'C、科沃兹自动挡全系标配ESC，昕锐自动挡未全系标配', 'D、科沃兹尾灯全系标配LED制动灯+示宽灯,昕锐是卤素尾灯','B'],
	['在多媒体配置方面，科沃兹对比昕锐描述正确的是( )', 'A、科沃兹配备中控彩色大屏（除欣享版需要选装）', 'B、科沃兹在中高配车型上配备车载蓝牙电话，而昕锐全系没有配备', 'C、科沃兹和昕锐全系均配备USB+AUX+SD卡插槽', 'D、以上都是','A'],
	['科沃兹全系标配14项子功能的ESC车身稳定系统，而昕锐没有的子功能是( )', 'A、ABS', 'B、EBD', 'C、CBC', 'D、EBP','D'],
];

// var an = parseInt(cc.random0To1()*5,10);
cc.Class({
    extends: cc.Component,

    properties: {
        subject:{
            default:null,
            type:cc.Label,
        },
        A:{
            default:null,
            type:cc.Label,
        },
        B:{
            default:null,
            type:cc.Label,
        },
        C:{
            default:null,
            type:cc.Label,
        },
        D:{
            default:null,
            type:cc.Label,
        },
        AT:{
            default:null,
            type:cc.Node,
        },
        BT:{
            default:null,
            type:cc.Node,
        },
        CT:{
            default:null,
            type:cc.Node,
        },
        DT:{
            default:null,
            type:cc.Node,
        },
        ABtnS:{
            default:null,
            type:cc.Node,
        },
        BBtnS:{
            default:null,
            type:cc.Node,
        },
        CBtnS:{
            default:null,
            type:cc.Node,
        },
        DBtnS:{
            default:null,
            type:cc.Node,
        },
        dadui:{
            default:null,
            type:cc.Node,
        },
        dacuo:{
            default:null,
            type:cc.Node,
        },
        tishu:{
            default:null,
            type:cc.Label,
        },
        gold:{
            default:null,
            type:cc.Label,
        },
    },


    showAnswer:function(){

        if(localStorage.nextAnswer == undefined){
            var an = parseInt(cc.random0To1()*5,10);
            this.subject.string = answer[an][0];
            this.A.string = answer[an][1];
            this.B.string = answer[an][2];
            this.C.string = answer[an][3];
            this.D.string = answer[an][4];
            cc.sys.localStorage.correctAnswer = answer[an][5];
        }
        
    },
    d:function(){
        cc.director.loadScene('Answer');
    },
    nextAnswer:function(){
        if(localStorage.nextAnswer == 1){
            setTimeout(this.d,2000);
            cc.sys.localStorage.removeItem('nextAnswer');
        }
    },
    judge:function(){
        if(localStorage.Answer == localStorage.correctAnswer){
            cc.sys.localStorage.AnswerTimes  = parseInt(localStorage.AnswerTimes) + 1;
            cc.sys.localStorage.nextAnswer = 1;
            this.dadui.active = true;
            localStorage.gold = parseInt(localStorage.gold) + 10;
        }else{
            cc.sys.localStorage.AnswerTimes  = parseInt(localStorage.AnswerTimes) + 1;
            cc.sys.localStorage.nextAnswer = 1;
            this.dacuo.active = true;
        }
    },
    changeSprite:function(){
        this.ABtnS.active = false;
        this.BBtnS.active = false;
        this.CBtnS.active = false;
        this.DBtnS.active = false;
        
        this.AT.on('touchstart',function(){
                this.ABtnS.active = true;
                this.BT.active = false;
                this.CT.active = false;
                this.DT.active = false;
                cc.sys.localStorage.Answer = 'A';
                this.judge();
        },this);
        this.BT.on('touchstart',function(){
                this.BBtnS.active = true;
                this.AT.active = false;
                this.CT.active = false;
                this.DT.active = false;
                cc.sys.localStorage.Answer = 'B';
                this.judge();
        },this);
        this.CT.on('touchstart',function(){
                this.CBtnS.active = true;
                this.BT.active = false;
                this.AT.active = false;
                this.DT.active = false;
                cc.sys.localStorage.Answer = 'C';
                this.judge();
        },this);
        this.DT.on('touchstart',function(){
                this.DBtnS.active = true;
                this.BT.active = false;
                this.CT.active = false;
                this.AT.active = false;
                cc.sys.localStorage.Answer = 'D';
                this.judge();
        },this);
    },
    addAnswerTimes: function(){
        if(localStorage.AnswerTimes == undefined){
            localStorage.AnswerTimes = 0;
        }
    },
    showtishu:function(){
        // var atat = localStorage.AnswerTimes;
        this.tishu.string = localStorage.AnswerTimes + '/10';
    },
    showgold:function(){
        this.gold.string = localStorage.gold;
    },
    endAnswer:function(){
        var answerToScene = localStorage.addGoldScene;
        if(localStorage.AnswerTimes > 10){
            cc.director.loadScene(answerToScene);
            localStorage.removeItem('AnswerTimes');
        }
    },

    // use this for initialization
    onLoad: function () {
        this.dadui.active = false;
        this.dacuo.active = false;
        this.showAnswer();
        this.changeSprite();
        this.addAnswerTimes();
        this.showtishu();
        this.showgold();
        this.endAnswer();
        // this.nextAnswer();
        // this.judge();
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        this.nextAnswer();
    },
});