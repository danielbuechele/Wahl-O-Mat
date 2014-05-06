		
            function write_0_intro(){
                rw = '';
            	rw += '<!-- Blindennavigation: Anfang -->';
            	rw += '<div class="unsichtbar" id="bnseitenstart">';
                	rw += wom_html(WOMT_aTexte["0_bn_hinweis_text"][S_nSprache])
                	rw += '<ul>';
                    	rw += '<li><a href="#bnwelcome" tabindex="10" title="">' + wom_html(WOMT_aTexte["0_bn_willkommen_text"][S_nSprache]) + '<\/a><\/li>';
                    	rw += '<li><a href="#bnleftnavi" tabindex="11" title="">' + wom_html(WOMT_aTexte["a_bn_menue_text"][S_nSprache]) + '<\/a><\/li>';
                	rw += '<\/ul>';
            	rw += '<\/div>';
            	rw += '<!-- Blindennavigation: Ende -->';
                rw += print_main_head();
            
            	rw += '<!-- <div class="wrapper"> in Top-Nav drin//-->\n';
			    rw += print_top_nav();
            	rw += '<!-- <div class="content"> in Top-Nav drin//-->\n';
            	rw += '<!-- include_side_nav (..) in Top-Nav drin//-->\n';
            	rw += '<!-- <div class="main_content"> in Top-Nav drin//-->\n';
            	rw += '<div class="wahlomat_startseite">';
            	    rw += '<div class="welcome" id="bnwelcome">';
            	        rw += '<h1>' + wom_html(WOMT_aTexte["0_title_text"][S_nSprache]) + '<\/h1>';
            	        rw += '<p>';

        					    lText1 = WOMT_aTexte["0_intro_text_1"][S_nSprache];
        					    lText1 = lText1.replace(/\[THESENANZAHL\]/,WOMT_nThesen);
        					    lText1 = lText1.replace(/\[PARTEIENANZAHL\]/,WOMT_nParteien);
        					    
        					    lText2 = WOMT_aTexte["0_intro_text_2"][S_nSprache];
        					    lText2 = lText2.replace(/\[THESENANZAHL\]/,WOMT_nThesen);
        					    lText2 = lText2.replace(/\[PARTEIENANZAHL\]/,WOMT_nParteien);


                            rw += wom_html(lText1);
        					    
            	    rw += '<\/p>';
            	rw += '<p>' + wom_html(lText2) + '<\/p>\n';
            	rw += '<!-- Blindennavigation: Anfang -->\n';
            	rw += '<div class="unsichtbar">';
            	rw += wom_html(WOMT_aTexte["0_bn_hinweis_text_2"][S_nSprache]);
            	rw += '<\/div>';
            	rw += '<!-- Blindennavigation: Ende -->    						';
            	rw += '<a href="" onclick="replaceIFrame(1);return false;" tabindex="20" title="';
            	rw += wom_titletag(WOMT_aTexte["0_start_title"][S_nSprache])
            	rw += '">' + wom_html(WOMT_aTexte["0_button_text"][S_nSprache]) + '<\/a>';
            	rw += '<\/div>';
            	rw += '<\/div>';
            	rw += '<div class="clear"><\/div>';
            	rw += '<\/div>';
            	rw += '<\/div>';
            	rw += '<div class="clear"><\/div>';
            	rw += '<!-- Blindennavigation: Anfang -->';
            	rw += '<div class="unsichtbar">';
            	rw += '<ul>';
            	rw += '<li><a href="#bnseitenstart" tabindex="590" title="">' + wom_html(WOMT_aTexte["a_bn_seitenstart_text"][S_nSprache]) + '<\/a><\/li>';
            	rw += '<li><a href="#bnwelcome" tabindex="591" title="">' + wom_html(WOMT_aTexte["0_bn_willkommen_text"][S_nSprache]) + '<\/a><\/li>';			
            	rw += '<\/ul>';
            	rw += '<\/div>';
            	rw += '<!-- Blindennavigation: Ende -->';
            	rw += '<div class="clear"><\/div>';	    	
    	        rw +=   print_main_foot();
            	rw += '<\/div>';
		        if (CONST_UMFRAGE_SHOW == 1) {
		            rw += '<div style="position:relative">';
                        rw += '<div id="umfrage">';
                        rw += '</div>';
                    rw += '</div>';
                }            	
            	return rw;
                
            }
