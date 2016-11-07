cc.Class({
    extends: cc.Component,

    properties: {
        
        nc0: cc.Label,
        nc1: cc.Label,
        nc2: cc.Label,
        nc3: cc.Label,
        nc4: cc.Label,
        nc5: cc.Label,
        nc6: cc.Label,
        nc7: cc.Label,
        nc8: cc.Label,
        nc9: cc.Label,
        
        gb0: cc.Label,
        gb1: cc.Label,
        gb2: cc.Label,
        gb3: cc.Label,
        gb4: cc.Label,
        gb5: cc.Label,
        gb6: cc.Label,
        gb7: cc.Label,
        gb8: cc.Label,
        gb9: cc.Label,
        
        sj0: cc.Label,
        sj1: cc.Label,
        sj2: cc.Label,
        sj3: cc.Label,
        sj4: cc.Label,
        sj5: cc.Label,
        sj6: cc.Label,
        sj7: cc.Label,
        sj8: cc.Label,
        sj9: cc.Label,
    },


    // doPost: function (url, data) {
    //     createxmlHttpRequest();
    //     xmlHttp.open("POST", 'http://192.168.1.110/api.php');
    //     xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //     xmlHttp.send(data);
    //     xmlHttp.onreadystatechange = function () {
    //         if ((xmlHttp.readyState == 4) && (xmlHttp.status == 200)) {
    //             alert('success');
    //         } else {
    //             alert('fail');
    //         }
    //     };
    // },
    openXhr: function () {
        var xhr = new XMLHttpRequest();
        var self = this;
        xhr.open("POST", "http://www.puzzle-idea.com/m/hunlongyu/CavalierH5/api.php");
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var json = eval('(' + xhr.responseText + ')');
                    var i;
                    for(i in json.data){
                        self['nc'+i].string = json.data[i].nic;
                        self['gb'+i].string = json.data[i].gold;
                        self['sj'+i].string = json.data[i].time;
                    }
                }
            }
        }
        xhr.send("act=list");
    },

    // use this for initialization
    onLoad: function () {

        this.openXhr();
        // this.doPost();
        // this.nc.string = this.text;
                // $.ajax({
        //     type: 'post',
        //     url: 'http://192.168.1.110/api.php',
        //     dataType: 'json',
        //     data: {
        //         'openId': '<?php echo $openId; ?>',
        //         'nickname': '<?php echo $nickname; ?>',
        //         'pic': '<?php echo $pic; ?>',
        //         'gold': localStorage.gold,
        //     },
        // });
        // $.post("http://192.168.1.110/api.php",{act:'list',openid:123},function(data){
        //     cc.log(data);
        //     cc.log('haha');
        // }, 'json');
    },


    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});