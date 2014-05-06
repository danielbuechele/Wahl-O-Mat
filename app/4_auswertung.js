	    
function write_4_auswertung() {
    /*
        Aus dem globalen reingewandert
    */
	if (S_nRecalculate==1){
	    calculate();
	    S_nRecalculate=0;
	}
    	
	b = S_nTheseAktuell + 1;

	popup_these = -1;
	popup_du = -1;
	
    popup_du 		= 0;
    popup_partei 	= -1;
    popup_these 	= 0;
    popup_sprache 	= S_nSprache;

    /*
        War schon lokal
    */
	p_highlight=-1;

  	mehrNeueZeile = new Array(
  	    0,  // CSU
  	    0,  // SDP
  	    1,  // Gruene
  	    1,  // FDP
  	    0,  // Linke
  	    
  	    0,  // CSU
  	    
  	    0,  // FW
  	    0,  // REP
  	    0,  // Tierschutz
  	    0,  // Familie
  	    0,  // Piraten

  	    1,  // Oedp
  	    1,  // PBC
  	    0,  // Volksabstimmung
  	    0,  // Baynerpartei
  	    0,  // CM

  	    1,  // AUF
  	    0,  // DKP
  	    1,  // Bueso
  	    1,  // PSG
  	    1,  // AFD

  	    0,  // Pronrw
  	    0,  // MLPD
  	    0,  // NPD
  	    0  // Die Partei
  	);
  	
    rw  =   '';
    	        
                rw += '<!-- Blindennavigation: Anfang -->';
                rw += '<div class="unsichtbar" id="bnseitenstart">';
                rw += '<ul>';
                rw += '<li><a href="#bnergebnis" tabindex="10" title="">' +  wom_html(WOMT_aTexte["4_bn_zumergebnis_text"][S_nSprache]) + '</a></li>';
                rw += '<li><a href="#bnbreadcrumb" tabindex="11" title="">' +  wom_html(WOMT_aTexte["a_bn_breadcrumb_text"][S_nSprache]) + '</a></li>';			
                rw += '<li><a href="#bnleftnavi" tabindex="12" title="">' +  wom_html(WOMT_aTexte["a_bn_menue_text"][S_nSprache]) + '</a></li>';
                rw += '</ul>';
                rw += '</div>';
                rw += '<!-- Blindennavigation: Ende -->';

                rw += print_main_head();

                rw += '<!-- <div class="wrapper"> in Top-Nav drin//-->';
    			
    			rw += print_top_nav();
    			
                rw += '<!-- <div class="content"> in Top-Nav drin//-->';
                rw += '<!-- include_side_nav (..) in Top-Nav drin//-->';
                rw += '<!-- <div class="main_content"> in Top-Nav drin//-->';
                rw += '<h1 class="unsichtbar">' +  wom_html(WOMT_aTexte["wahlomat_content_head"][S_nSprache]) + '</h1>';
                        rw += '<div class="breadcrumb" id="bnbreadcrumb">';
                        rw += '<a href="" onclick="change_frage('
        							+ (WOMT_nThesen - 1)
        							+ ');'
        							+ ';return false;">' +  wom_html(WOMT_aTexte["bc_1_thesen"][S_nSprache]) + '</a>';
                        rw += '<ul class="breadcrumb_list">';
                        rw += '<li class="first_position active"><a href="" onclick="replaceIFrame(2);return false;">' 
                            +  wom_html(WOMT_aTexte["bc_2_gewichtung"][S_nSprache]) + '</a></li>';
                        rw += '<li class="active"><a href="" onclick="replaceIFrame(3);return false;">' +  wom_html(WOMT_aTexte["bc_3_partei"][S_nSprache]) + '</a></li>';
                        rw += '<li class="active">' +  wom_html(WOMT_aTexte["bc_4_ergebnis"][S_nSprache]) + '</li>';
						
						if(((S_nWeissNicht 	>= CONST_WOMT_NOERGEBNIS_THESEUEBERSPRINGEN)
				          ||(S_nNeutral    	>= CONST_WOMT_NOERGEBNIS_NEUTRAL)
				          ||(S_nSame    	>= CONST_WOMT_NOERGEBNIS_SAME))
				         &&(CONST_WOMT_NOERGEBNIS_BEGRUENDUNGEN == 0) 
				    	) {
    						rw += '<li>' +  wom_html(WOMT_aTexte["bc_5_begruendungen"][S_nSprache]) + '</li>';
				    	} else {
						    rw += '<li><a href="" onclick="replaceIFrame(5);return false;">' +  wom_html(WOMT_aTexte["bc_5_begruendungen"][S_nSprache]) + '</a></li>';
						}
					rw += '</ul>';
					rw += '<div class="clear"></div>';
				rw += '</div>';
				rw += '<h1 id="bnergebnis">';
				    rw += wom_html(WOMT_aTexte["4_ergebnis_titel"][S_nSprache]);
				rw += '</h1>';
				
					if((S_nWeissNicht 	>= CONST_WOMT_NOERGEBNIS_THESEUEBERSPRINGEN)
				     ||(S_nNeutral    	>= CONST_WOMT_NOERGEBNIS_NEUTRAL)
				     ||(S_nSame    	>= CONST_WOMT_NOERGEBNIS_SAME)
				    	) {
				     	if (S_nWeissNicht >= CONST_WOMT_NOERGEBNIS_THESEUEBERSPRINGEN){
				     		lText = wom_html(WOMT_aTexte["4_erg_noergebnis"][S_nSprache]);
				     	} else {
				     		lText = wom_html(WOMT_aTexte["4_erg_noergebnis"][S_nSprache]);
				     	}
				     	rw += '<p>' + lText + '</p>';
				     	if (CONST_WOMT_NOERGEBNIS_BEGRUENDUNGEN == 1) {
            			    rw += '<div class="link_zu_kommentare">';
            			        rw += '<div class="links">&nbsp;</div>';
            			        rw += '<div class="rechts">';
                					rw += '<a href="" onclick="replaceIFrame(5);return false;"><span>' +  wom_html(WOMT_aTexte["4_kommentar_jnv"][S_nSprache]) 
        						        + '</span>';
        						    rw += '<br /><span>'
        						         +  wom_html(WOMT_aTexte["4_kommentar_parteidazu"][S_nSprache]) 
        						         + '</span></a>';
        						         rw += '<span>' + wom_html(WOMT_aTexte["4_kommentar_hinweis"][S_nSprache]) + '</span>';
            			        rw += '</div>';
            					rw += '<div class="clear"></div>';
            				rw += '</div>';
				     	}
				    } else {
				        if (CONST_UMFRAGE_SHOW == 1) {
				            rw += '<div style="position:relative">';
                                rw += '<div id="umfrage">';
                                rw += '</div>';
                            rw += '</div>';
                        	check_umfrage();
                        }
                    
        				rw += '<p>' +  wom_html(WOMT_aTexte["4_ergebnis_text"][S_nSprache]) + '</p>';
        			    rw += '<div class="link_zu_kommentare">';
        			        rw += '<div class="links">&nbsp;</div>';
        			        rw += '<div class="rechts">';
            					rw += '<a href="" onclick="replaceIFrame(5);return false;"><span>' +  wom_html(WOMT_aTexte["4_kommentar_jnv"][S_nSprache]) 
    						        + '</span>';
    						    rw += '<br /><span>'
    						         +  wom_html(WOMT_aTexte["4_kommentar_parteidazu"][S_nSprache]) 
    						         + '</span></a>';
    						         rw += '<span>' + wom_html(WOMT_aTexte["4_kommentar_hinweis"][S_nSprache]) + '</span>';
        			        rw += '</div>';
        					rw += '<div class="clear"></div>';
        				rw += '</div>';
                        rw += '<ul class="ergebnis_list">';
						
						lNr = 0;
                        for (f=0;f<WOMT_nParteien;f++) {
							tabIndex = 0;
							a=S_aSort[f];
							if (S_aParteienAusgewaehlt[a]==1) {
			  	    			prozent_b = Math.round((S_nDistanceMax-S_aParteienAbs[a])/S_nDistanceMax*1000)/10;
			  	    			lText = ' ' +prozent_b;
			  	    			lText = lText.replace(/\./,',') +  ' ' + WOMT_aTexte["4_prozent"][S_nSprache];
			  	    			
			  	    			prozent = lText;
								rw += '<li><span class="';
								if (lNr == 0) {
								    rw += 'ergebnis_balken_active on_modus ';
								}
								rw += 'ergebnis_balken"><span class="ergebnis_partei">' 
								        +  wom_html(WOMT_aParteien[a][S_nSprache][1]) 
								        + '</span><span class="ergebnis_prozent ' +  (lNr+1) + '" ';
								    rw += 'style="background-position:'; 
    								    fwidth = 558;
    								    width = fwidth;//Math.round((S_aParteienAbs[a]/S_nDistanceMax) * fwidth)-1;
    								    rw += width;
    								rw += 'px 0px">' 
    								    +  wom_html(prozent) 
    								    + '</span></span><div><div class="info_box"><img  style="border:0px;" src="' 
    								    +  WOMT_aParteienLogos2[a][0] 
    								    + '" alt="Logo von: '
    								        +  wom_titletag(WOMT_aParteien[a][S_nSprache][0]) 
    								    + '" /><h2>' 
    								        +  wom_html(WOMT_aParteien[a][S_nSprache][0]) 
    								    + '</h2><p>';
								    rw += wom_html(WOMT_aParteienBeschreibung[a][S_nSprache]);
								    

								        if (mehrNeueZeile[a] == 1) {
								            rw += '<br/>';
								        } else {
								            rw += ' ';
								        }
								        rw += '<a href="' 
    								        +  CONST_WSZW_URL + '?partei=' 
    								        +  WOMT_aParteien_N2ID[a] 
    								        + '" target="_blank" title="';
								       
                                        lText = WOMT_aTexte["3_mehr_informationen_title"][S_nSprache];
                                        lText = lText.replace('\[PARTEI\]',WOMT_aParteien[a][S_nSprache][1]);
                                        
                                        rw += wom_titletag(lText); 
                                        rw += '" class="more_info">' 
                                            + wom_html(WOMT_aTexte["3_mehr_informationen_text"][S_nSprache]) 
                                            + '</a></p><span class="close_two">&nbsp;</span></div></div></li>';
							    lNr++;	
                            } else {
                                // a=g_SessionArray['S_aSort'][f];
                                // rw += WOMT_aParteien[a][S_nSprache][0]."/a/".WOMT_aParteiFix[f]."<br>";
                            }
						}
						rw += '</ul>';
                        rw += '<div class="clear"></div>';
                        rw += '<br/><br/>';
                    }
 
                rw += '<h4 class="result">' +  wom_html(WOMT_aTexte["4_erg_pdf_titel"][S_nSprache]) + '</h4>';
                rw += '<p class="auswertung">'; 
				    lUrlPdf = '<a tabindex="40"  target="_blank" href="' + CONST_PDF_URL + '" class="pfeil_fett">';
                    lText = WOMT_aTexte["4_erg_pdf_text"][S_nSprache];
				    lText = lText.replace('\[PARTEIENANZAHL\]',WOMT_aParteien.length);				    
				    lText = lText.replace('\[PDF_TARGET\]',lUrlPdf);
                    rw += wom_html(lText);
                rw += ' </p>';
				rw += '<div class="skip">';
                rw += '<a href="" onclick="replaceIFrame(3);return false;" class="previous" title="' 
                    +  wom_titletag(WOMT_aTexte["4_btn_zurueck_title"][S_nSprache]) 
                    + '" tabindex="151">' 
                    +  wom_html(WOMT_aTexte["4_btn_zurueck_text"][S_nSprache]) + '</a>';
                    
					    if(((S_nWeissNicht 	< CONST_WOMT_NOERGEBNIS_THESEUEBERSPRINGEN)
				         &&(S_nNeutral    	< CONST_WOMT_NOERGEBNIS_NEUTRAL)
				         &&(S_nSame    	< CONST_WOMT_NOERGEBNIS_SAME))
				         ||(CONST_WOMT_NOERGEBNIS_BEGRUENDUNGEN == 1) // Begruedungen trotzdem anzeigen
				    	) {
					        rw += '<a href="" onclick="replaceIFrame(5);return false;" class="next" tabindex="150" title="' 
					            +  wom_titletag(WOMT_aTexte["4_btn_weiter_title"][S_nSprache]) 
					            + '">' 
					            +  wom_html(WOMT_aTexte["4_btn_weiter_text"][S_nSprache]) 
					            + '</a>';
						} else {
						     rw += '<a href="main_app.html" class="next" tabindex="150" title="' 
						        +  wom_titletag(WOMT_aTexte["5_btn_neustart_title"][S_nSprache]) 
						        + '">' +  wom_html(WOMT_aTexte["5_btn_neustart_text"][S_nSprache]) 
						        + '</a>';
						}
				rw += '</div>';
    		rw += '</div>';	
    rw += '<div class="clear"></div>';
    rw += '<!-- Blindennavigation: Anfang -->';
    				rw += '<div class="unsichtbar">';
    					rw += '<ul>';
    						rw += '<li><a href="#bnseitenstart" tabindex="580" title="">' +  wom_html(WOMT_aTexte["a_bn_seitenstart_text"][S_nSprache]) + '</a></li>';
                			rw += '<li><a href="#bnbreadcrumb" tabindex="581" title="">' +  wom_html(WOMT_aTexte["a_bn_breadcrumb_text"][S_nSprache]) + '</a></li>';	
    						rw += '<li><a href="#bnergebnis" tabindex="582" title="">' +  wom_html(WOMT_aTexte["4_bn_zumergebnis_text"][S_nSprache]) + '</a></li>';
    					rw += '</ul>';
    				rw += '</div>';
    rw += '<!-- Blindennavigation: Ende -->';		
        rw += '</div>';
	rw += '</div>';
	
	
	return rw;
}

   
   
function auswertung_slideErgebnis() {
    /*
    lNr = 0;
    for (f=0;f<WOMT_nParteien;f++) {
		a=S_aSort[f];
		if (S_aParteienAusgewaehlt[a]==1) {
		    $('.ergebnis_prozent.'+(lNr+1)).css('background-position','558px 0px');
		    lNr++;
        }
    }
    */
    $('.ergebnis_prozent').addClass('transition');  
    
    lNr = 0;
    for (f=0;f<WOMT_nParteien;f++) {
		a=S_aSort[f];
		if (S_aParteienAusgewaehlt[a]==1) {
		    fwidth = 558;
		    width = Math.round((S_aParteienAbs[a]/S_nDistanceMax) * fwidth)-1;
            $('.ergebnis_prozent.'+(lNr+1)).css('background-position',width+'px 0px');
            lNr++;
        }
    }
}
