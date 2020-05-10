$(document).ready(function()
{
    $('.body_menu .info dt:eq(0)').show();
    $('.body_menu .info dd:eq(0)').show();
    $('.body_menu li dl:eq(0)').stop().animate({top:'330px'},{queue:false,duration:160});
      
    $('.body_menu .pr_img li').click(function(){
        var ind2 = $(this).index();
        
        $('.body_menu .info dt').hide();
        $('.body_menu .info dd').hide();
        
        $('.body_menu .info dt:eq('+ind2+')').fadeIn('slow');
        $('.body_menu .info dd:eq('+ind2+')').fadeIn('slow');
        
        $(this).siblings('li').find('dl').stop().animate({top:'0px'},{queue:false,duration:160});
		$("dl", this).stop().animate({top:'330px'},{queue:false,duration:160});
    });
})

$(function(){
    $('#php').unbind('click').bind('click', function(){
        $('#hid').val('php');
        $('.php').show('normal');
        $('.app').hide();
        $('.java').hide();
    })
    $('#app').unbind('click').bind('click', function(){
        $('#hid').val('app');
        $('.app').show('normal');
        $('.php').hide();
        $('.java').hide();
    })
    $('#java').unbind('click').bind('click', function(){
        $('#hid').val('java');
        $('.java').show('normal');
        $('.php').hide();
        $('.app').hide();
    })

    if($('#hid').val('php')){
       $('.app').hide();
       $('.java').hide();
    } 
})
