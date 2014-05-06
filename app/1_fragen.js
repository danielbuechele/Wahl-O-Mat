function write_1_fragen(){
    if (S_nTheseAktuell >= WOMT_nThesen){
        S_nTheseAktuell         = WOMT_nThesen-1;
    }

    b=S_nTheseAktuell+1;

    rw  =   '';
    
	rw += '<!-- Blindennavigation: Anfang -->\n';
	rw += '<div class="unsichtbar" id="bnseitenstart">\n';
	rw += '<ul>\n';
	rw += '<li><a href="#bnthese" tabindex="10" title="">' + wom_html(WOMT_aTexte["1_bn_zurthese_text"][S_nSprache]) + '<\/a><\/li>\n';
	rw += '<li><a href="#bnsteps" tabindex="11" title="">' + wom_html(WOMT_aTexte["1_bn_thesennavigation_text"][S_nSprache]) + '<\/a><\/li>\n';
	rw += '<li><a href="#bnleftnavi" tabindex="12" title="">';
	wom_html(WOMT_aTexte["a_bn_menue_text"][S_nSprache]) + '<\/a><\/li>\n';
	rw += '<\/ul>\n';
	rw += '<\/div>\n';
	rw += '<!-- Blindennavigation: Ende -->\n';

    rw += print_main_head();
    
        rw += '<!-- <div class="wrapper"> in Top-Nav drin//-->\n';
        rw += print_top_nav();
	    rw += '<!-- <div class="content"> in Top-Nav drin//-->\n';
	    rw += '<!-- include_side_nav (..) in Top-Nav drin//-->\n';
	    rw += '<!-- <div class="main_content"> in Top-Nav drin//-->\n';
			
	rw += '<div class="wahlomat">';
	rw += '<div class="thesen" id="bnthese">';
	rw += '<h1>'+(S_nTheseAktuell+1)+'<span class="thesenanzahl">/'+WOMT_nThesen+'<\/span> ';
    	lwKurzFrage = wom_html(WOMT_aThesen[S_nTheseAktuell][S_nSprache][0]);
    	//lwKurzFrage = lwKurzFrage.replace(/\- /,"");
	    rw += lwKurzFrage;
	rw += '<\/h1><p>';
    rw += wom_html(WOMT_aThesen[S_nTheseAktuell][S_nSprache][1]);
	rw += '<\/p>';
	        if (is_bogus()==1) {
            rw +=  '<span class="bogus">'+wom_html(WOMT_aTexte["1_fragen_bogus"][S_nSprache])+'<\/span>\n';
            reset_bogus();
        }
	rw += '<a class="skipper" href="" onclick="beantworteFrage(-2);return false;" tabindex="23" accesskey="w" title="' 
	    + wom_titletag(WOMT_aTexte["1_these_ueberspringen_taste_title"][S_nSprache]) 
	    + '">' + wom_html(WOMT_aTexte["a_button_theseueberspringen_text"][S_nSprache]) 
	    + '<\/a>\n';
	rw += '<ul class="entscheidung">\n';
	rw += '<li class="yes"><a class="';
		    if (S_aThesen[S_nTheseAktuell]==1){
		rw += 'decision';
	} else {
		rw += '';
	} 
	rw += '" href="" onclick="beantworteFrage(1);return false;" tabindex="20" accesskey="j"  title="' 
	    + wom_titletag(WOMT_aTexte["1_these_stimmezu_taste_title"][S_nSprache]) + '">' 
	    + wom_html(WOMT_aTexte["a_button_stimmezu_text"][S_nSprache]) 
	    + '<\/a><\/li>\n';
	
	rw += '<li class="neutral"><a class="';
    if (S_aThesen[S_nTheseAktuell]==0){
		rw += 'decision';
	} else {
		rw += '';
	} 
	rw += '" href="" onclick="beantworteFrage(0);return false;" tabindex="21" accesskey="x"  title="' 
	        + wom_titletag(WOMT_aTexte["1_these_neutral_taste_title"][S_nSprache]) 
	        + '">' 
	        + wom_html(WOMT_aTexte["a_button_neutral_text"][S_nSprache]) 
	        + '<\/a><\/li>\n';
	
	rw += '<li class="no"><a class="';
    if (S_aThesen[S_nTheseAktuell]==-1){
		rw += 'decision';
	} else {
		rw += '';
	} 
	rw += '" href="" onclick="beantworteFrage(-1);return false;" tabindex="22" accesskey="n"  title="' 
	    + wom_titletag(WOMT_aTexte["1_these_stimmenichtzu_taste_title"][S_nSprache]) + '">' 
	    + wom_html(WOMT_aTexte["a_button_stimmenichtzu_text"][S_nSprache]) + '<\/a><\/li>\n';
	
	rw += '<\/ul>\n';
	rw += '<\/div>\n';
	rw += '<ul class="points" id="bnsteps">\n';
					    
			for (a=0;a<WOMT_nThesen;a++){

                if (a == S_nTheseAktuell) {
                    // gehighligted / aktuelle These
                    arrowClass = 'arrow_left';
                    if (a >= 19 ) {    // Ab These 20
                        arrowClass = 'arrow_right';
                    }
                    rw += '<li class="active_point"><a href="" onclick="change_frage('+a+');return false;" title="';
                        lText = WOMT_aTexte["1_leiste_these_aktuell_title"][S_nSprache];
                        lText = lText.replace(/\[NR\]/,a+1);
                        rw += wom_titletag(lText + ': " ' + WOMT_aThesen[a][S_nSprache][0] + '"');
                     rw += '" tabindex="' + (a+40) + '"><\/a> <span class="' + arrowClass + '">&nbsp;<\/span><\/li>\n';
                    
                } else if (a <= S_nTheseMax) {
                    // schonmal beantwortet
                        rw += '<li class="previous_point">';
                        rw += '<a href="" onclick="change_frage('+a+');return false;" title="';
                            lText = WOMT_aTexte["1_leiste_these_nr_title"][S_nSprache] ;         
    						lText = lText.replace(/\[NR\]/,a+1);
    						
                        rw += wom_titletag(lText + ': " ' + WOMT_aThesen[a][S_nSprache][0] + '"');
                        rw += '" tabindex="' + (a+40) + '">&nbsp;<\/a><\/li>';
                } else {
                    // Noch nicht aktiv
                        rw += '<li><span>&nbsp;<\/span><\/li>\n';
                }
            }

    	rw += '<\/ul>';
    	rw += '<div class="clear"><\/div>';
    	rw += '<\/div>';
    	rw += '<div class="clear"><\/div>';
    	rw += '<\/div>';
    	rw += '<\/div>';
    	rw += '<div class="clear"><\/div>';
    	rw += '<!-- Blindennavigation: Anfang -->';
        	rw += '<div class="unsichtbar">';
        	rw += '<ul>';
            	rw += '<li><a href="#bnseitenstart" tabindex="580" title="">' + wom_html(WOMT_aTexte["a_bn_seitenstart_text"][S_nSprache]) + '<\/a><\/li>';
            	rw += '<li><a href="#bnthese" tabindex="581" title="">' + wom_html(WOMT_aTexte["1_bn_zurthese_text"][S_nSprache]) + '<\/a><\/li>';
            	rw += '<li><a href="#bnsteps" tabindex="582" title="">' + wom_html(WOMT_aTexte["1_bn_thesennavigation_text"][S_nSprache]) + '<\/a><\/li>';
        	rw += '<\/ul>';
        	rw += '<\/div>';
    	rw += '<!-- Blindennavigation: Ende -->';
    	rw += '<div class="clear"><\/div>';
    	rw += '<\/div>';

    return rw;
}
