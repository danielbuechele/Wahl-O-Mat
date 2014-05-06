

function bindTriggers() {
	
	if($('#socialshareprivacy').length > 0){
		$('#socialshareprivacy').socialSharePrivacy(); 
	}


	$('.trigger').not('.trigger_active').next().hide();
	$('.ergebnis_balken').not('.ergebnis_balken_active').next().hide();
	$('.label_check .star').css('background','url(./media/pix/icon/dot_black_8px.png) no-repeat 4px 3px');
	// $('.ergebnis_prozent').addClass('transition'); -> in das File 4_ergebnis
	
	$('.parteien_list li div').css('display','none');
	$('.parteien_list li').css({'float':'left','position':'absolute'});
	$('.parteien_list li.partei_01').css('left','0');
	$('.parteien_list li.partei_02').css('left','115px');
	$('.parteien_list li.partei_03').css('left','230px');
	$('.parteien_list li.partei_04').css('left','345px');
	$('.parteien_list li.partei_05').css('left','460px');
  $('.parteien_list li.partei_01 div ').css({'left':'0px','position':'absolute'});
  $('.parteien_list li.partei_02 div ').css({'left':'-115px','position':'absolute'});
	$('.parteien_list li.partei_03 div ').css({'left':'-230px','position':'absolute'});
	$('.parteien_list li.partei_04 div ').css({'left':'-345px','position':'absolute'});
	$('.parteien_list li.partei_05 div ').css({'left':'-460px','position':'absolute'});
	$('.parteien_list').css('height','120px');
	$('input[type=checkbox].hidecheckbox').css('opacity','0');
	
	
/*Thesen aufklappen*/

	$(".trigger").siblings('input').bind(navigator.userAgent.indexOf('MSIE 8.0') != -1 ? 'propertychange': 'change', function(e) {

		var t = $(this);
		var tr = t.siblings('.trigger');
		var lc = tr.find('.label_check');
		if(t.is(':checked')){
			tr.next().slideToggle('slow');
			tr.addClass('trigger_active');
		  	lc.find('.star').css('background', 'url(./media/pix/icon/star_yellow_17px.png) no-repeat 0px 0px ' );	
			lc.addClass('star_active');							
		}else{
			tr.next().slideToggle('slow');
			tr.removeClass('trigger_active');
			lc.find('.star').css('background', 'url(./media/pix/icon/dot_black_8px.png) no-repeat 4px 3px' );
			lc.removeClass('star_active');
		}
	});
	

	
	$('.faq_list span').on('click',function(){
		$(this).next().slideToggle();
		$(this).parent().siblings().find('> span').next().slideUp();
	});
	

	$('.ergebnis_balken').click( function() {
		var ergebnis = $(this); 
    
		
		if (ergebnis.hasClass('ergebnis_balken_active') ) {
			ergebnis.next().slideToggle('slow');
			ergebnis.removeClass('ergebnis_balken_active');
      			ergebnis.removeClass('on_modus');
		} else {
			$('.ergebnis_balken_active').next().slideToggle('slow');
			$('.ergebnis_balken_active').removeClass('ergebnis_balken_active');
			$('.on_modus').removeClass('on_modus');
      		ergebnis.next().slideToggle('slow');
			ergebnis.addClass('ergebnis_balken_active');
      		ergebnis.addClass('on_modus');
							
		};
	});
   
	 
	    
/*Stern Checkbox*/	 
	$('label').not('.star_active').hover(function(){
		$(this).children('.star').css('background', 'url(./media/pix/icon/star_yellow_17px.png) no-repeat 0px 0px');
	},function(){
		$(this).children('.star').css('background', 'url(./media/pix/icon/dot_black_8px.png) no-repeat 4px 3px');
	});

	
	
	$('.skipper').click( function() {
		if ( $(this).hasClass('skipping') ) {
			$(this).removeClass('skipping');
		} else {
			$(this).addClass('skipping');						
		};
	});
	
		
    $('.entscheidung a').click( function() {	
        // Fuer Javascript raus, da sonstn die Markierung beim wiederholten Abstimmen weg ist!
		if ( $(this).hasClass('decision') ) {
			//$(this).removeClass('decision');
		} else {
			//$('.decision').addClass('decision');
			//$('.decision').removeClass('decision');
			//$(this).addClass('decision');					
		};
	});

	
	
	
	/*Infoboxen Parteien*/			  	
	$('.box input').bind(navigator.userAgent.indexOf('MSIE 8.0') != -1 ? 'propertychange': 'change', function(e) {
		var box = $(this).parent();
		var f = box.parents('form');		
		var label = $(this).siblings('label');

		if($(this).is(':checked')){
			f.find('ul').removeClass('ul_active').stop().animate({height:'120px'});
			f.find('li div').css('display', 'none');

			box.find('div').css('display', 'block');			
			box.parent('ul').addClass('ul_active').stop().animate({height:'340px'});			
			
			label.addClass('on');
		}else{			
			label.removeClass('on');
      		f.find('li div').css('display','none');
      		f.find('ul').removeClass('ul_active').stop().animate({height:'120px'});
		}
		
	});
	
	
	$('.close').click(function(){
		var close = $(this);
		
		close.parents('ul').find('div').css('display','none');
		close.parents('form').find('ul').stop().animate({height:'120px'});
		close.parents('li').find('span').next('div').slideUp('slow');
		close.parents('li').find('span').removeClass('ergebnis_balken_active');
		close.parents('li').find('span').removeClass('on_modus');
	}); 
  
  	$('.close_two').click(function(){
		var close_two = $(this);    
		close_two.parents('li').find('span').next('div').slideUp('slow');
		close_two.parents('li').find('span').removeClass('ergebnis_balken_active');
		close_two.parents('li').find('span').removeClass('on_modus');
	}); 
	
	
	//IE HACK to fix the "image in label bug" of ie7 / ie8
	if(navigator.userAgent.indexOf('MSIE 8.0') != -1 || navigator.userAgent.indexOf('MSIE 7.0') != -1){
		$img = $("label img");
		$img.click(function(e){
			$("#" + $(this).parent().attr("for")).change().click();
		});
    }
  	if(navigator.userAgent.indexOf('MSIE 6.0') != -1){
		$('.parteien_list input').css('opacity','1');
    }
    
  if(navigator.userAgent.match(/iPad/i)){
    $('.label_over').removeClass('label_over');
    $('.grayfilter_over').removeClass('grayfilter_over');
    $('.wrapper').css('margin-top','15px');
    $('.content').css('margin-top','15px'); 
  }
  
 
 
	var index = $('.thesen_points a').index();
    
	$('.these_next').click(function(){
		p_pos +=1;
    	setPosition(p_pos);
		return false;
	});
	
	$('.these_previous').click(function(){
		p_pos -=1;
    	setPosition(p_pos);
		return false;
	});
  
	
	$('.thesen_points').find('li').on('click',function(){
		p_pos = $(this).index();
		setPosition(p_pos);
		return false;	
	});
  
	
  	var p_pos = 0;

  	var pa = $('.parteiantworten');
  	var pa_p = pa.find('> *');
  	


  	
  	//switch between questions
  	function setPosition(x){ 
		$('.partei_balken_active:not(.my_votum)').each(function(){
		  $(this).height($(this).find('li').eq(x).height());
		});
		
		$('.thesen_box > li').eq(x).show().siblings().hide();
		$('.thesen_points').find('li').eq(x).addClass('active').siblings().removeClass('active');
		

		pa_p.each(function(){
			$(this).find('li').eq(x).addClass('on').siblings().removeClass('on');
		});
		setvote();
	}

	setPosition(p_pos);
	
	
  	//toggle answer lists  		
	function setvote(v){
		if(v){
			pa_p.eq(v).find('ul').toggleClass('on');
			pa_p.find('ul.on').find('li.on div').slideDown('slow');
		}else{
			pa_p.find('ul.on').find('li.on div').show();
		}
		pa_p.find('ul:not(.on)').find('li div').slideUp('slow');
		
	}
	
  	pa_p.find('> ul').on('click',function() {
 		setvote($(this).parent().index());
 		return false;
	}); 
	
}
