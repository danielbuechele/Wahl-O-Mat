
		
function ergebnis() {
    if (CONST_GEWICHTUNG == 1) {
		ct = WOMT_nThesen;
	} else {
		ct = WOMT_nThemen;
	}
    for (a = 0; a < ct; a++) {
        val = 'cb_themen_' + a;
        if (document.forms['themen'].elements[val].checked == true) {
            set_thema(a, 1);
        } else {
            set_thema(a,0);
        }
    }
    replaceIFrame(3);
}

function write_2_gewichtung(){
    b=S_nTheseAktuell+1;
    
    rw = '';    
        rw += '<!-- Blindennavigation: Anfang -->';
        rw += '<div class="unsichtbar" id="bnseitenstart">';
            rw += '<ul>';
                rw += '<li><a href="#bngewichtung" tabindex="10" title="">' + wom_html(WOMT_aTexte["2_bn_thesengewichtung_text"][S_nSprache]) + '</a></li>';
                rw += '<li><a href="#bnbreadcrumb" tabindex="11" title="">' + wom_html(WOMT_aTexte["a_bn_breadcrumb_text"][S_nSprache]) + '</a></li>			';
                rw += '<li><a href="#bnleftnavi" tabindex="12" title="">' + wom_html(WOMT_aTexte["a_bn_menue_text"][S_nSprache]) + '</a></li>';
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
                rw += '<li class="first_position active">' + wom_html(WOMT_aTexte["bc_2_gewichtung"][S_nSprache]) + '</li>';
                rw += '<li>' + wom_html(WOMT_aTexte["bc_3_partei"][S_nSprache]) + '</li>';
                rw += '<li>' + wom_html(WOMT_aTexte["bc_4_ergebnis"][S_nSprache]) + '</li>';
                rw += '<li>' + wom_html(WOMT_aTexte["bc_5_begruendungen"][S_nSprache]) + '</li>';
            rw += '</ul>';		
        rw += '<div class="clear">&nbsp;</div>';
        rw += '</div>';
        rw += '<h1>' + wom_html(WOMT_aTexte["2_titel_text"][S_nSprache]) + '</h1>';
        rw += '<p>' + wom_html(WOMT_aTexte["2_text_text"][S_nSprache]);
        
        					rw += '<br/><br/>\n';
					
				    rw += '<span style="float:left;font-size:16px;line-height:20px"><br/>These</span><span style="float:right;text-align:right;font-size:16px;line-height:20px">Ihre <br/>Position</span>\n';

                    rw += '</p>\n';
                    
                    rw += '<div style="clear:both"></div>\n';
                    
            rw += '<form enctype="multipart/form-data" name="themen" method="get" action="main_app.html">\n';
            rw += '<input type="hidden" name="cb_themen" value="change" />\n';
                            
        rw += '<!-- Blindennavigation: Anfang -->';
        rw += '<div class="unsichtbar">';
		    rw += wom_html(WOMT_aTexte["2_bn_hinweis"][S_nSprache]);
        rw += '</div>';
        rw += '<!-- Blindennavigation: Ende -->';
        rw += '<ul class="auswertung" id="bngewichtung">\n';
							    for (a = 0; a < WOMT_nThesen; a++) {

							    	nr = (a+1);
				    	            if (S_aThemen[a] == 1) {
							    		checked        = ' checked="checked" ';
							    		labelClass     = ' star_active';
							    		triggerClass   = ' trigger_active';
							    	} else {
							    		checked        = '';
							    		labelClass     = '';
							    		triggerClass   = '';
							    	}						    
                    							    	
                            rw += '<li class="default">';
                            rw += '<div class="trigger' + triggerClass + '">';
                            rw += '<label class="label_check label_over' + labelClass + '" for="these' + a + '">';
                            rw += '<span class="number">' + nr + '</span> ';
                                rw += wom_html(WOMT_aThesen[a][S_nSprache][0]);
                            rw += '<span class="star">auswaehlen</span>';
                            rw += '</label>';
                            rw += '</div>\n';
                            rw += '<div><p>';
                                rw += wom_html(WOMT_aThesen[a][S_nSprache][1]);
                            rw += '</p></div>\n';
                            rw += '<input class="hidecheckbox" type="checkbox" '
                                + checked 
                                + ' id="these'
                                + a + '" name="cb_themen_' 
                                + a + '" value="1" tabindex="' 
                                + (20+a) + '" />';
                                
                                rw += '<div style="width:30px">';
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
								            ichAntwortText     = WOMT_aTexte["5_antwort_ich_text_stimmezu"][S_nSprache];
								            break;
								    }						
                                    ichAntwortText = ichAntwortText.replace('[THESE]', WOMT_aThesen[a][S_nSprache][0]);
							    	    
						            rw += '<b style="margin-right:0px;margin-top:1px;" class="antworten_partei ' + ichAntwortClass + '" title="'; 
				    			            rw += wom_titletag(ichAntwortText);
				    			        rw += '"><b class="unsichtbar">';
				    			            rw += wom_html(ichAntwortText);
				    			    rw += '</b></b>';
						        rw += '</div>';
						        
                            rw += '</li>\n';
                            //onchange="markbox();"
                } 
        rw += '</ul>';
        rw += '<div class="skip">';
						    
        rw += '<a class="previous" href="" onclick="change_frage('
        							+ (WOMT_nThesen - 1)
        							+ ');'
        							+ ';return false;" tabindex="101" title="' 
        							+ wom_titletag(WOMT_aTexte["2_btn_zurueck_title"][S_nSprache]) 
        							+ '">' + wom_html(WOMT_aTexte["2_btn_zurueck_text"][S_nSprache]) 
        							+ '<span>&nbsp;</span></a>';
        rw += '<input class="next" type="submit" onclick="ergebnis();return false;" tabindex="100" value="' + wom_titletag(WOMT_aTexte["2_form_submit_text"][S_nSprache]) + '" title="' + wom_titletag(WOMT_aTexte["2_form_submit_title"][S_nSprache]) + '" />';
        rw += '</div>';
        rw += '</form>';				
        rw += '</div>\n';	
        rw += '<!-- Blindennavigation: Anfang -->';
        rw += '<div class="clear"></div>';
        rw += '<div class="unsichtbar">';
            rw += '<ul>';
                rw += '<li><a href="#bnseitenstart" tabindex="580" title="">' + wom_html(WOMT_aTexte["a_bn_seitenstart_text"][S_nSprache]) + '</a></li>';
                rw += '<li><a href="#bnbreadcrumb" tabindex="581" title="">' + wom_html(WOMT_aTexte["a_bn_breadcrumb_text"][S_nSprache]) + '</a></li>';	
                rw += '<li><a href="#bngewichtung" tabindex="582" title="">' + wom_html(WOMT_aTexte["2_bn_thesengewichtung_text"][S_nSprache]) + '</a></li>';
            rw += '</ul>';
        rw += '</div>';
        rw += '<!-- Blindennavigation: Ende -->';
        rw += '</div>';
        rw += '</div>';
    return rw;    
}


    function markbox(box){
        return;
        lCount = 0;
        for(a = 0;a<38;a++){
            lCheckboxName = 'these'+a;
            lCheckbox = document.getElementById(lCheckboxName);
            if (lCheckbox){
                if (lCheckbox.checked){
                    if (lCheckbox.parentNode) {
                        if (lCheckbox.parentNode.firstChild) {
                            divChilds = lCheckbox.parentNode.getElementsByTagName('div');
                            if (divChilds) {
                                for (i = 0; i < divChilds.length; i++) {
                                    divChilds[i].className = 'trigger trigger_active';
                                    i = divChilds.length;
                                }
                                labelChilds = lCheckbox.parentNode.getElementsByTagName('label');
                                if (labelChilds) {
                                    for (i = 0; i < labelChilds.length; i++) {
                                        labelChilds[i].className = 'label_check star_active';
                                        i = divChilds.length;
                                    }
                                } 
                            }                            
                            //lCheckbox.parentNode.className = 'trigger';
                        }
                    }
                    //lCheckbox.parentNode.style.backgroundColor = "#ff0000";
                    lCount++;
                } else {
                    if (lCheckbox.parentNode) {
                        if (lCheckbox.parentNode.firstChild) {
                            divChilds = lCheckbox.parentNode.getElementsByTagName('div');
                            if (divChilds) {
                                for (i = 0; i < divChilds.length; i++) {
                                    divChilds[i].className = 'trigger';
                                    i = divChilds.length;
                                }
                                labelChilds = lCheckbox.parentNode.getElementsByTagName('label');
                                if (labelChilds) {
                                    for (i = 0; i < labelChilds.length; i++) {
                                        labelChilds[i].className = 'label_check';
                                        i = divChilds.length;
                                    }
                                }                       
                            }     
                            //lCheckbox.parentNode.className = 'trigger';
                        }
                    }
                    //f.find('li div').css('display', 'none');
                    //lCheckbox.parentNode.style.backgroundColor = "#008800";
                }
            }
        }
        
    }
