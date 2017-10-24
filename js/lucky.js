/**
 * Created by hrh on 2016/11/2.
 */
$(function() {

    // $(function(){
    //  $(".circle1").addClass("turn").rotate({ 　
    // 　　　　angle:0,  //起始角度
    // 　　　　animateTo:180,  //结束的角度
    // 　　　　duration:500 //转动时间
    //  })
    // })

    var w=$(window).width();
    var h=$(window).height();

    var b=0.65/w*h;

    var cw=$('.circle').width()*b;

    $('.circle').css({
    	"width":cw+"px",
    	"padding-bottom":cw+"px",
    	"left":(w-cw)/2+"px"
    });

    var rotateFunc = function(angle, text) { //awards:奖项，angle:奖项对应的角度，text:提示文字
        $('.circle1').stopRotate();
        $(".circle1").addClass("turn").rotate({
            angle: 0,
            duration: 5000,
            animateTo: angle + 1440, //angle是图片上各奖项对应的角度，1440是我要让指针旋转4圈。所以最后的结束的角度就是这样子
            callback: function() {
                layer.open({
                    content: '<div class="tc-main"><img class="tm-img" src="./images/lucky_tc888.png" alt="" /><div class="tcd"><button>确认</button></div></div>'
                });

                if (text == '10') {
                    $('.tm-img').attr("src", "./images/lucky_tc10.png");
                } else if (text == '30') {
                    $('.tm-img').attr("src", "./images/lucky_tc1111.png");
                } else if (text == '70') {
                    $('.tm-img').attr("src", "./images/lucky_tc70.png");
                } else if (text == '150') {
                    $('.tm-img').attr("src", "./images/lucky_tc150.png");
                } else if (text == '300') {
                    $('.tm-img').attr("src", "./images/lucky_tc300.png");
                } else if (text == 'vip') {
                    $('.tm-img').attr("src", "./images/lucky_tcls588.png");
                } else {
                    $('.tm-img').attr("src", "./images/lucky_tchbq688.png");
                }

                $('.tc-main').parent().css({
                    'padding': '0',
                    'background': 'transparent'
                });

                $('.tc-main').parent().parent().css({
                    'padding': '0',
                    'background': 'transparent'
                });

                $('.tc-main button').click(function() {
                    layer.closeAll();
                    $(".share").css("visibility", "visible");
                    $(".bc").css("visibility", "visible");
                });

            }
        });
    };

    function notAgain() {
        layer.open({
            content: '<div class="tc-main"><img class="tm-img" src="./images/lucky_tc0.png" alt="" /><div class="tcd"><button>确认</button></div></div>'
        });

        $('.tc-main').parent().css({
            'padding': '0',
            'background': 'transparent'
        });

        $('.tc-main').parent().parent().css({
            'padding': '0',
            'background': 'transparent'
        });

        $('.tc-main button').click(function() {
            layer.closeAll();
            $(".share").css("visibility", "visible");
            $(".bc").css("visibility", "visible");
        });
    }

    $('.bc').on('touchstart', function() {
        $(".share").css("visibility", "hidden");
        $(".bc").css("visibility", "hidden");
    });

    var rotateFunc1 = function() {
        var data = [1, 2, 3, 4, 5, 6, 0]; //返回的数组

        data = data[Math.floor(Math.random() * data.length)]; //这里的data是抽中的奖项类型（这里设成随机，后端人员可根据实际情况自行修改），data等于1用户将抽中乐视会员、为2是150M、为3是300M、为4是70M、为5是30M、为6是10M、为0是和包券

        if (data == 1) {
            rotateFunc(25.7, 'vip')
        }
        if (data == 2) {
            rotateFunc(77.1, '150')
        }
        if (data == 3) {
            rotateFunc(128.5, '300')
        }
        if (data == 4) {
            rotateFunc(179.9, '70')
        }
        if (data == 5) {
            rotateFunc(231.3, '30')
        }
        if (data == 6) {
            rotateFunc(282.7, '10')
        }
        if (data == 0) {
            rotateFunc(334.1, 'coupon')
        }
    };

    $('.circle3').click(function() {
        rotateFunc1();
    });

    $('.spe-a').click(function() {
        layer.open({
            title: [
                '活动规则',
                'background-color: #ff6f05; color:#fff;'
            ],
            content: '<div class="rule">' + '<p>1、活动时间：11月11日-12月11日</p>' + '<p>2、每人有一次领奖机会，凭抽到保存图片，关注“意腾留学”，发送得奖信息，可获取相应奖品</p>' + '<p>3、每个仅能领取一份意腾代金券</p>' + '<p>4、推荐朋友，发送朋友圈，凭截图发送到“意腾留学”公众号，可获得奖励奖品一份</p>' + '<p>5、礼物将在七个工作日内派发（具体发放时间及发放形式请以实际情况为准）</p>' + '<p>6、代金券不可兑换现金，不可因个人喜好进行调换。</p>' + '<p>7、请在活动截止前关注“意腾留学”公众号并领取代金券，逾期不候。</p>' +  '<p>8、活动最终解释权归意腾教育信息咨询有限公司所有</p>' + '</div>'
        });

        $('.layui-m-layerchild>h3').css({
            position: 'relative'
        });
        $('.layui-m-layerchild h3').append('<button class="dia-close"><img src="images/close.png" alt="" /></button>');
        $('.dia-close').click(function() {
            layer.closeAll();
        });

        $('.rule').parent().css({ "padding": "1rem" });
    });

    var loginWinHtml = "";
    loginWinHtml += '<form class="me-form">';
    loginWinHtml += '<div class="me-header">';
    loginWinHtml += '<span class="me-span">&times;</span>';
    loginWinHtml += '</div>';
    loginWinHtml += '<div class="me-user">';
    
    loginWinHtml += '</div>';
    loginWinHtml += '<div class="me-psw">';
   
  
    loginWinHtml += '</div>';
    loginWinHtml += '<div class="me-chk"><span></span></div>';
    loginWinHtml += '<div class="me-login">';
    loginWinHtml += '<button type="button">马上参与</button></div>';
    loginWinHtml += '</form><br>';

    layer.open({
        title: false,
        content: loginWinHtml,
        shadeClose: false
    });

    $('.me-form').parent().css({
        padding: '0'
    });

    $('.me-form .me-header').height($('.me-form .me-header').width() * 0.12);

    var muiw = $('.me-user i').width() * 4 / 3;
    var mpiw = $('.me-psw i').width() * 4 / 3;

    var muitw = $('.me-user input').width() - muiw;
    var mpitw = $('.me-psw input').width() - mpiw;

    $('.me-user input').css({
        'width': muitw,
        'padding-left': muiw
    });

    $('.me-psw input').css({
        'width': mpitw,
        'padding-left': mpiw
    });

    $('.me-span ').click(function() {
        layer.closeAll();
    });
    $('.me-login').click(function() {
        layer.closeAll();
    });
    
    


});
