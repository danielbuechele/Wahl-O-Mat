				
function write_5_detailauswertung() {

    popup_these = -1;
    popup_du = -1;
    
    popup_du 		= 0;
    popup_partei 	= S_nDetailAuswertung;
    popup_these 	= 0;
    popup_sprache 	= S_nSprache;

    S_nPartei		= S_nDetailAuswertung;
    S_nKommentarThese = 0;

    rw =  '';

 rw += '<!-- Blindennavigation: Anfang -->';
		rw += '<div class="unsichtbar" id="bnseitenstart">';
			rw += '<ul>';
				rw += '<li><a href="#bnthesen" tabindex="10" title="">' + wom_html(WOMT_aTexte["5_bn_thesen_text"][S_nSprache]) + '</a></li>';
				rw += '<li><a href="#bnself" tabindex="11" title="">' + wom_html(WOMT_aTexte["5_bn_self_text"][S_nSprache]) + '</a></li>';
				rw += '<li><a href="#bnparteien" tabindex="12" title="">' + wom_html(WOMT_aTexte["5_bn_parteien_text"][S_nSprache]) + '</a></li>';
    			rw += '<li><a href="#bnbreadcrumb" tabindex="13" title="">' + wom_html(WOMT_aTexte["a_bn_breadcrumb_text"][S_nSprache]) + '</a></li>';
    			rw += '<li><a href="#bnleftnavi" tabindex="14" title="">' + wom_html(WOMT_aTexte["a_bn_menue_text"][S_nSprache]) + '</a></li>';
			rw += '</ul>';
		rw += '</div>';
rw += '<!-- Blindennavigation: Ende -->';

        rw += print_main_head();

        rw += '<!-- <div class="wrapper"> in Top-Nav drin//-->';
		rw += print_top_nav();
			    rw += '<!-- <div class="content"> in Top-Nav drin//-->';
				rw += '<!-- include_side_nav (..) in Top-Nav drin//-->';
				rw += '<!-- <div class="main_content"> in Top-Nav drin//-->';
    			rw += '<div class="breadcrumb" id="bnbreadcrumb">';
					rw += '<a href="" onclick="change_frage('
        							+ (WOMT_nThesen - 1)
        							+ ');'
        							+ ';return false;" tabindex="11">' + wom_html(WOMT_aTexte["bc_1_thesen"][S_nSprache]) + '</a>';
					rw += '<ul class="breadcrumb_list">';
						rw += '<li class="first_position active"><a href="" onclick="replaceIFrame(2);return false;" tabindex="12">' + wom_html(WOMT_aTexte["bc_2_gewichtung"][S_nSprache]) + '</a></li>';
						rw += '<li class="active"><a href="" onclick="replaceIFrame(3);return false;" tabindex="13">' + wom_html(WOMT_aTexte["bc_3_partei"][S_nSprache]) + '</a></li>';
						rw += '<li class="active"><a href="" onclick="replaceIFrame(4);return false;" tabindex="14">' + wom_html(WOMT_aTexte["bc_4_ergebnis"][S_nSprache]) + '</a></li>';
						rw += '<li class="active">' + wom_html(WOMT_aTexte["bc_5_begruendungen"][S_nSprache]) + '</li>';
					rw += '</ul>';
					rw += '<div class="clear"></div>';
				rw += '</div>';
				rw += '<h1>'; 
				    rw += wom_html(WOMT_aTexte["5_title_text"][S_nSprache]);
				rw += '</h1>';
				
				
				rw += '<p>'; 
				    rw += wom_html(WOMT_aTexte["5_text_text"][S_nSprache]);
				rw += '</p>';
                 rw += '<!-- Blindennavigation: Anfang -->';
                    	rw += '<div class="unsichtbar">';
                    	
                    		rw += wom_html(WOMT_aTexte["5_bn_hinweis"][S_nSprache]);
                    	rw += '</div>';
                rw += '<!-- Blindennavigation: Ende -->';
				rw += '<div class="thesen_vergleich" id="bnthesen">';
					rw += '<div class="thesen_slider">';
						rw += '<div class="slider_border">';
							    aktivThese = 0;
    					        if ((S_nKommentarThese >= 0)
    					          &&(S_nKommentarThese < WOMT_nThesen)) {
    					            aktivThese = S_nKommentarThese;
    					        }
    					        offsetThesenBox = -558 * aktivThese;
    					        offsetVotumList = -560 * aktivThese;
    					        offsetThesenBox = 0;
    					        offsetVotumList = 0;
                        var p_pos = aktivThese;
                        
							rw += '<ul class="thesen_box" style="left:' + offsetThesenBox + 'px">\n';
							    
						        
						        for (a = 0; a < WOMT_nThesen; a++) {
    								rw += '<li';
    								
								    if (aktivThese == a) {
								       rw += ' class="active"';
								    }
								    rw += ' style="';
								    if (aktivThese != a) {
								        rw += 'display:none;'
								        
								    }
								    rw += '">';
									rw += '<div style="height:120px">';
								    rw += '<h2><span class="counter"><strong>' 
								                + (a+1) 
								            + '</strong>/' 
    									    + WOMT_nThesen 
    									    + '&nbsp;</span> ';
                                               
                                        rw += wom_html(WOMT_aThesen[a][S_nSprache][0]);
                                        
                                        rw += ' <a class="info_link" target="_blank" tabindex="615" title="';
                                          
                                            lText = WOMT_aTexte["5_thesen_info_title"][S_nSprache];
                                            lText = lText.replace(/\[THESE\]/,WOMT_aThesen[a][S_nSprache][0]);
                                            rw += wom_titletag(lText  + ' ' + WOMT_aTexte["wahlomat_footer_linkoeffnung"][S_nSprache]);
                                            rw += '" href="';
    
                                            rw += 'http://www.wahl-o-mat.de/' + CONST_WOMT_PATH_WL + '/weiterleitung.php?w=mehr&amp;these_nr=' 
                                                 + (a+1) 
                                                 + '&amp;these_id=' 
                                                 + WOMT_aThesen_N2ID[a];
    
                                            rw += '"><span>info</span></a>';
                                        rw += '</h2>';
								        rw += '<p>';
                                            rw += wom_html(WOMT_aThesen[a][S_nSprache][1]);
                                        rw += '</p>';
                                    rw += '</div>';
            
                                    rw += '<div>';
									    rw += '<a class="these_previous';
    									if (a==0) {
    									    rw += ' hide_link';
    									}
    							        
		    					        rw += '" href="">';
	    						        rw += wom_html(WOMT_aTexte['5_these_previous_text'][S_nSprache]);
    									rw += '</a><a class="these_next';
									    if (a==WOMT_nThesen-1) {
									        rw += ' hide_link';
									    }
    							        rw += '" href="">'; 									        
    									rw += wom_html(WOMT_aTexte['5_these_next_text'][S_nSprache]);
									
									    rw += '</a>';
								    rw += '</div>';
								rw += '</li>\n';
								}
							rw += '</ul>\n';
							rw += '<div class="clear"></div>';
						rw += '</div>';
						rw += '<div class="clear"></div>';
						rw += '<ul class="thesen_points">\n';
						        
    							for (a = 0; a < WOMT_nThesen; a++) {
    								nr = (a+1);
    								
    								classDot = 'dot_black';
    								classLiActive = '';
    								if (S_aThemen[a] == 1) {
    								    // Gewichtet
    								    if (aktivThese == a) {
    								        // Aktiv
    								        classDot = 'star_orange';
    								    } else {
    								        classDot = 'star_orange';
    								    }
    								    if (aktivThese == a) {
    								        classLiActive = ' class="active"';
    								    }
    								} else if (aktivThese == a) {
    								    classDot = 'dot_black active_dot';
    								    classLiActive = ' class="active"';
    								};    								
    								rw += '<li' + classLiActive + '><a title="';
    								        lText = WOMT_aTexte["5_these_nr"][S_nSprache];
    								        rw += wom_titletag(lText.replace('\[NR\]',(a+1)) 
    								            +  ' "' 
    								            + WOMT_aThesen[a][S_nSprache][0] 
    								            + '"');
								    rw += '" class="' 
								        + classDot + '" href=""><span class="arrow_kommentar">&nbsp;</span></a></li>\n';
								}
						rw += '</ul>\n';
					rw += '</div>';
					rw += '<div class="clear"></div>';
					rw += '<div class="parteiantworten" id="bnself">';
						rw += '<div class="antworten_box">';
						    rw += '<ul class="votum_list my_votum off">\n';
						        for (a = 0; a < WOMT_nThesen; a++) {
						            ichAntwortClass    = '';
						            ichAntwortText     = '';
								    switch(S_aThesen[a]){
								       case -2:
								            ichAntwortClass    = 'avoid';
								            ichAntwortText     = WOMT_aTexte["5_antwort_ich_text_uebersprungen"][S_nSprache];
								            break;
								        case -1:
								            ichAntwortClass = 'negative';
								            ichAntwortText     = WOMT_aTexte["5_antwort_ich_text_stimmenichtzu"][S_nSprache];
								            break;
								        case 0:
								            ichAntwortClass = 'neutral';
								            ichAntwortText     = WOMT_aTexte["5_antwort_ich_text_neutral"][S_nSprache];
								            break;
								        case 1:
								            ichAntwortClass    = 'approved';
								            ichAntwortText     = WOMT_aTexte["5_antwort_ich_text_stimmezu"][S_nSprache];				break;
								    }						
								    lText = ichAntwortText;
                                    ichAntwortText = lText.replace('\[THESE\]', WOMT_aThesen[a][S_nSprache][0]);
							    	    
						            rw += '<li';
						            if (aktivThese == a) {
						                rw += ' class="on"'; 
						            }
					                rw += '><span class="my_balken">' 
					                    + wom_html(WOMT_aTexte["5_position"][S_nSprache]) 
					                    + '</span><span class="antworten_partei ' 
					                    + ichAntwortClass + '" title="';
			    			            rw += wom_titletag(ichAntwortText);
				    			        rw += '"><span class="unsichtbar">';
				    			            rw += wom_html(ichAntwortText);
				    			    rw += '</span></span></li>\n';
						        }
						    rw += '</ul>\n';
						rw += '</div>';
						rw += '<div class="clear" id="bnparteien"></div>';

						    lMargin = 0;
							lCount = 0;
							
                        	for (f=0;f<WOMT_nParteien;f++){

                                if  ((S_nWeissNicht	>= CONST_WOMT_NOERGEBNIS_THESEUEBERSPRINGEN)
                        	       ||(S_nNeutral   	>= CONST_WOMT_NOERGEBNIS_NEUTRAL)
                        	       ||(S_nSame    	>= CONST_WOMT_NOERGEBNIS_SAME)) {
                        	        lNr = f;  // Nicht berechnet Reihenfolge der Parteien!
                        	        openAll = true;
                        	    } else {    	     
                        	        // Uebereinstimmungsreihenfolge
                        	        lNr = S_aSort[f];
                        	        openAll = false;
                        	    }
                        		if (S_aParteienAusgewaehlt[lNr]==1) {		
								    rw += '<div class="antworten_box">';
            							rw += '<ul class="votum_list';
            					    if ((lCount == 0)||(openAll == true)) {
            					        rw += ' on';
            					    }
            					    rw += '">\n';
				    			    for (a = 0; a < WOMT_nThesen; a++) {
				    			        abstimmung =parseInt(WOMT_aThesenParteien[a][lNr]);
								        parteiAntwortClass = '';
								        parteiAntwortText = '';
									    switch(abstimmung){
                                            case -2:
                                                parteiAntwortClass = 'white';
                                                parteiAntwortText = '';
                                                break;
                                            case -1:
                                                parteiAntwortClass = 'negative';
                                                parteiAntwortText = WOMT_aTexte["5_antwort_partei_text_stimmtnichtzu"][S_nSprache];
                                                break;
                                            case 0:
                                                parteiAntwortClass = 'neutral';
                                                parteiAntwortText = WOMT_aTexte["5_antwort_partei_text_neutral"][S_nSprache]; 
                                                break;
                                            case 1:
                                                parteiAntwortClass = 'approved';
                                                parteiAntwortText = WOMT_aTexte["5_antwort_partei_text_stimmtzu"][S_nSprache]; 
                                                break;
                                        }
                                        parteiAntwortText = parteiAntwortText.replace(/\[THESE\]/, WOMT_aThesen[a][S_nSprache][0]);
                                        parteiAntwortText = parteiAntwortText.replace(/\[PARTEI\]/, WOMT_aParteien[lNr][S_nSprache][1]);
                                        
                                        kommentar = '';
				    			        if (WOMT_aThesenParteienText[a][lNr][0]!="") {
                                	    	kommentar = '&bdquo;' 
                                	    	    + wom_html(WOMT_aThesenParteienText[a][lNr][0]) 
                                	    	    + '&rdquo;';
                                		} else {
                                			kommentar = WOMT_aTexte["5_partei_keinebegruendung"][S_nSprache];
                                		}
				    			        rw += '<li' 
				    			            if (aktivThese == a) {
				    			                rw += ' class="on"';
				    			            }
				    			            rw += '><span class="antworten_partei ' + parteiAntwortClass + '" title="';
				    			            rw += wom_titletag(parteiAntwortText);
				    			        rw += '"><span class="unsichtbar">';
				    			            rw += wom_html(parteiAntwortText);
				    			        rw += '</span></span><span class="partei_balken">' 
				    			            + wom_html(WOMT_aParteien[lNr][S_nSprache][1]) 
				    			            + '</span><div><p><span>' 
				    			            + wom_html(WOMT_aTexte["5_begruendung"][S_nSprache]) 
				    			            + '</span>' + kommentar + '</p></div></li>\n';
				    			    }
				    			    rw += '</ul>\n';
				    			    rw += '</div>';
				    			    lCount++;
                                }
							}
				rw += '<div class="skip">';
					rw += '<a href="" onclick="replaceIFrame(4);return false;" class="previous" title="' + wom_titletag(WOMT_aTexte["5_btn_zurueck_title"][S_nSprache]) + '" tabindex="580">' + wom_html(WOMT_aTexte["5_btn_zurueck_text"][S_nSprache]) + '</a>';
					rw += '<a href="main_app.html" class="next" tabindex="150" title="' + wom_titletag(WOMT_aTexte["5_btn_neustart_title"][S_nSprache]) + '">' + wom_html(WOMT_aTexte["5_btn_neustart_text"][S_nSprache]) + '</a>';
				rw += '</div>';
			rw += '</div>';
        rw += '</div>';
            rw += '</div>';
			
			rw += '<div class="clear"></div>';
rw += '<!-- Blindennavigation: Anfang -->';
				rw += '<div class="unsichtbar">';
					rw += '<ul>';
						rw += '<li><a href="#bnseitenstart" tabindex="580" title="">' + wom_html(WOMT_aTexte["a_bn_seitenstart_text"][S_nSprache]) + '</a></li>';
            			rw += '<li><a href="#bnbreadcrumb" tabindex="581" title="">' + wom_html(WOMT_aTexte["a_bn_breadcrumb_text"][S_nSprache]) + '</a></li>';
						rw += '<li><a href="#bnthesen" tabindex="582" title="">' + wom_html(WOMT_aTexte["5_bn_thesen_text"][S_nSprache]) + '</a></li>';
						rw += '<li><a href="#bnself" tabindex="583" title="">' + wom_html(WOMT_aTexte["5_bn_self_text"][S_nSprache]) + '</a></li>';
						rw += '<li><a href="#bnparteien" tabindex="584" title="">' + wom_html(WOMT_aTexte["5_bn_parteien_text"][S_nSprache]) + '</a></li>';
					rw += '</ul>';
				rw += '</div>';
rw += '<!-- Blindennavigation: Ende -->    ';
        rw += '</div>';

    rw += '</div>';
    return rw;
}
