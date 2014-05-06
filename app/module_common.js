// Version 0.99 vom 18.4.2014 20:53

var CONST_WOMT_BL_VERSION					= "europawahl2014";
var CONST_WOMT_PATH							= "europawahl2014";

function print_main_foot(){
    rw = '';
    rw += '<div id="main_foot_sub">\n';
    rw += '<div class="clear">&nbsp;<\/div>\n';
    rw += '<br />\n';
    if (CONST_PARTNER_VERSION == 0) {
        rw += print_main_foot_all();
    } else if (CONST_PARTNER_VERSION == 1) {
         rw += print_main_foot_partner();
    } else if (CONST_PARTNER_VERSION==2) {
    }
    rw += '<\/div>\n';
    return rw;
}    

function print_main_foot_all() {
    rw = '';
	if ((gStatusURL_Status!=0)
	&&(gStatusURL_Status!="0")){
		//return '';
	} else {
            lTextNF = WOMT_aTexte["wahlomat_footer_linkoeffnung"][S_nSprache];
            
            rw += '<div class="footer" style="margin-top:0px">\n';
                rw += '<div class="clear"><\/div>\n';
                rw += '<div class="footertext">' + wom_html(WOMT_aTexte["wahlomat_footer_medienpartner_text"][S_nSprache])+'<\/div>\n';
                rw += '<div style="clear:both;height:10px;"><\/div>\n';
                
                rw += '<div class="b1 fh">\n';
                rw += '<a href="http://www.zdf.de" title="zdf.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="701"><span>zdf.de</span></a>\n';
                rw += '</div>\n';
                
                rw += '<div class="b2 fh">\n';
                rw += '<a href="http://www.tagessschau.de" title="tagessschau.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="702"><span>tagessschau.de</span></a>\n';
                rw += '</div>\n';
                
                rw += '<div class="b3 fh">\n';
                rw += '<a href="http://www.ndr.de" title="ndr.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="703"><span>ndr.de</span></a>\n';
                rw += '</div>\n';
                
                rw += '<div class="b4 fh">\n';
                rw += '<a href="http://www.wdr.de" title="wdr.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="704"><span>wdr.de</span></a>\n';
                rw += '</div>\n';
                
                rw += '<div class="b5 fh">\n';
                rw += '<a href="http://www.swr.de" title="swr.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="706"><span>swr.de</span></a>\n';
                rw += '</div>\n';
		
                rw += '<div class="b6 fh">\n';
                rw += '<a href="http://www.br.de" title="BR.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="707"><span>BR.de</span></a>\n';
                rw += '</div>\n';
                
                rw += '<div class="b7 fh">\n';
                rw += '<a href="http://www.hr-online.de" title="hr-online.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="708"><span>hr-online.de</span></a>\n';
                rw += '</div>\n';
                
                rw += '<div class="b8 fh">\n';
                rw += '<a href="http://www.rbb-online.de/" title="rbb-online.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="709"><span>rbb-online.de/</span></a>\n';
                rw += '</div>\n';
                
                rw += '<div class="b9 fh">\n';
                rw += '<a href="http://www.radiobremen.de" title="radiobremen.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="710"><span>radiobremen.de</span></a>\n';
                rw += '</div>\n';
                
                rw += '<div class="b10 fh">\n';
                rw += '<a href="http://www.mdr.de" title="mdr.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="711"><span>mdr.de</span></a>\n';
                rw += '</div>\n';
				
                rw += '<div class="b11 fh">\n';
                rw += '<a href="http://www.sr-online.de" title="sr-online.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="712"><span>sr-online.de</span></a>\n';
                rw += '</div>\n';
                
                rw += '<div class="b12 fh">\n';
                rw += '<a href="http://www.dw.de" title="dw.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="713"><span>dw.de</span></a>\n';
                rw += '</div>\n';
                
                rw += '<div class="b13 fh">\n';
                rw += '<a href="http://www.spiegel.de" title="spiegel.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="714"><span>spiegel.de</span></a>\n';
                rw += '</div>\n';
        
                rw += '<div class="b14 fh">\n';
                rw += '<a href="http://www.zeit.de" title="zeit.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="715"><span>zeit.de</span></a>\n';
                rw += '</div>\n';
        
                rw += '<div class="b15 fh">\n';
                rw += '<a href="http://www.faz.net" title="faz.net ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="716"><span>faz.net</span></a>\n';
                rw += '</div>\n';

                rw += '<div class="b16 fh">\n';
                rw += '<a href="http://www.taz.de" title="taz.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="717"><span>taz.de</span></a>\n';
                rw += '</div>\n';

                rw += '<div class="b17 fh">\n';
                rw += '<a href="http://www.handelsblatt.com" title="handelsblatt.com ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="718"><span>handelsblatt.com</span></a>\n';
                rw += '</div>\n';

                rw += '<div class="b18 fh">\n';
                rw += '<a href="http://www.n24.de" title="n24.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="719"><span>n24.de</span></a>\n';
                rw += '</div>\n';

                rw += '<div class="b19 fh">\n';
                rw += '<a href="http://www.focus.de" title="focus.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="720"><span>focus.de</span></a>\n';
                rw += '</div>\n';

                rw += '<div class="b20 fh">\n';
                rw += '<a href="http://www.bild.de" title="bild.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="721"><span>bild.de</span></a>\n';
                rw += '</div>\n';
                
                rw += '<div class="b21 fh">\n';
                rw += '<a href="http://www.welt.de" title="welt.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="722"><span>welt.de</span></a>\n';
                rw += '</div>\n';
                
                rw += '<div class="b22 fh">\n';
                rw += '<a href="http://www.wiwo.de" title="wiwo.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="723"><span>wiwo.de</span></a>\n';
                rw += '</div>\n';

                rw += '<div class="b23 fh">\n';
                rw += '<a href="http://www.haz.de" title="haz.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="724"><span>haz.de</span></a>\n';
                rw += '</div>\n';

                rw += '<div class="b24 fh">\n';
                rw += '<a href="http://www.freenet.de" title="freenet.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="725"><span>freenet.de</span></a>\n';
                rw += '</div>\n';
                
                rw += '<div class="b25 fh">\n';
                rw += '<a href="http://home.1und1.de" title="1und1.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="726"><span>1und1.de</span></a>\n';
                rw += '</div>\n';

                rw += '<div class="b26 fh">\n';
                rw += '<a href="http://www.hamburg.de" title="hamburg.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="727"><span>hamburg.de</span></a>\n';
                rw += '</div>\n';
                
                rw += '<div class="b27 fh">\n';
                rw += '<a href="http://www.du-bist-entscheidend.de/" title="du-bist-entscheidend.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="728"><span>du-bist-entscheidend.de</span></a>\n';
                rw += '</div>\n';

                rw += '<div class="b28 fh">\n';
                rw += '<a href="http://www.rp-online.de" title="rp-online.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="729"><span>rp-online.de</span></a>\n';
                rw += '</div>\n';
                rw += '<div class="b29 fh">\n';
                rw += '<a href="http://www.volksfreund.de" title="volksfreund.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="730"><span>volksfreund.de</span></a>\n';
                rw += '</div>\n';
		
                rw += '<div class="b30 fh">\n';
                rw += '<a href="http://www.koeln.de" title="koeln.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="731"><span>koeln.de</span></a>\n';
                rw += '</div>\n';

                rw += '<div class="b31 fh">\n';
                rw += '<a href="http://www.general-anzeiger-bonn.de" title="general-anzeiger-bonn.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="732"><span>general-anzeiger-bonn.de</span></a>\n';
                rw += '</div>\n';
                rw += '<div class="b32 fh">\n';
                rw += '<a href="http://www.mt-online.de" title="mt-online.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="733"><span>mt-online.de</span></a>\n';
                rw += '</div>\n';

                rw += '<div class="b33 fh">\n';
                rw += '<a href="http://www.rhein-zeitung.de" title="rhein-zeitung.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="734"><span>rhein-zeitung.de</span></a>\n';
                rw += '</div>\n';
                rw += '<div class="b34 fh">\n';
                rw += '<a href="http://www.thueringer-allgemeine.de" title="thueringer-allgemeine.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="735"><span>thueringer-allgemeine.de</span></a>\n';
                rw += '</div>\n';
		
                rw += '<div class="b35 fh">\n';
                rw += '<a href="http://www.lvz-online.de" title="lvz-online.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="736"><span>lvz-online.de</span></a>\n';
                rw += '</div>\n';
                rw += '<div class="b36 fh">\n';
                rw += '<a href="http://www.gaeubote.de" title="gaeubote.de ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="737"><span>gaeubote.de</span></a>\n';
                rw += '</div>\n';
                rw += '<div class="b37 fh">\n';
                rw += '<a href="http://www.eurotopics.net?womfooter" title="eurotopics.net ' + wom_titletag(lTextNF)+ '" target="_blank" tabindex="738"><span>eurotopics.net</span></a>\n';
                rw += '</div>\n';
            rw += '<\/div>\n';
    }
	return rw;				
}
        	
function print_meta(){	
		rw = '\n';
		//rw +=   '<title>'+wom_html(WOMT_aTexte["wahlomat_head_titel"][S_nSprache])+'<\/title>\n';
		//rw +=   '<meta http-equiv="content-type" content="text/html; charset=ISO-8859-1" />\n';
		rw +=   '<meta http-equiv="expires" content="0" \/>\n';
		rw +=   '<meta http-equiv="pragma" content="no-cache" \/>\n';
		rw +=   '<meta http-equiv="cache-control" content="no-cache" \/>\n';
		rw +=   '<meta name="keywords" content="'+wom_titletag(WOMT_aTexte["wahlomat_head_keywords"][S_nSprache])+'" \/>\n';
		rw +=   '<meta name="description" content="'+wom_titletag(WOMT_aTexte["wahlomat_head_description"][S_nSprache])+'" \/>\n';
		rw +=   '<meta name="Robots" content="index,follow" \/>\n';
        rw +=   '<link media="screen, print)" href="./media/styles/style_all.css" type="text/css" rel="stylesheet" \/>';
		
		rw  += '<style type="text/css" media="screen, print">\n';
        if (CONST_PARTNER_VERSION == 0) {
            rw  += '@import url("./media/styles/footer_v1_00_all_in_one.css");\n';
        } else {
            rw  += '@import url("./media/styles/footer_partner.css");\n';
        }
        rw  += '<\/style>\n';
        
        rw  += '<style type="text/css" media="Screen, print">\n';
        rw  += '.auswertung input[type=checkbox]{position:absolute; right:45px; top:10px;}\n';
    
        rw  += '.auswertung span.point_star{background:url(media/pix/icon/dot_black_8px.png) no-repeat 21px 1px; position:absolute; width:auto; right:-45px; bottom:-8px; padding:0 20px;}\n';
    
        rw  += '.label_check span.star{ width:16px; height:16px; position:absolute; right:45px; bottom:14px; text-indent:-9999em; }\n';
    
        rw  += '.auswertung .trigger{background:url(media/pix/icon/thesen_hinterlegung.png) no-repeat -32px 0px;}\n';
    
        rw  += '.label_over:hover {background-position:-32px 0; color:#fff;}\n';
        rw  += '.trigger_active label{ color:#fff; background:url(media/pix/icon/thesen_hinterlegung_aktiv.png) no-repeat -32px 0px;}\n';
    
        rw  += '</style>\n';
        
	return rw;
}

function wom_titletag(text){
	text = wom_html(text);
    text = text.replace(/\<br\>/g," ");
    text = text.replace(/\<p\>/g," ");
    text = text.replace(/\r\n/g," ");
    text = text.replace(/\n/g," ");
    text = text.replace(/\r/g," ");
    text = text.replace(/\"/g,'&quot;');
    return text;
	//return text.replace(/[^A-Za-z0-9 .&;,\/:-]%/,"");   		                
}

function wom_html(text,ergebnis){
    text = text.replace(/\#/g,"'");
    text = text.replace(/\~\@\-\@\~/g,"'");
    if (ergebnis==1){
        text = text.replace(/\[BSLZ\]/g,"- ");
        text = text.replace(/\[LZ\]/g," ");
    } else {
        text = text.replace(/\[BSLZ\]/g,"");
        text = text.replace(/\[LZ\]/g,"");
    }		   	    
    
	//text = text.replace(/&/,"&amp;");
    text = text.replace(/Ü/,"&Uuml;");
    text = text.replace(/Ä/,"&Auml;");
    text = text.replace(/Ö/,"&Ouml;");
    text = text.replace(/ü/,"&uuml;");
    text = text.replace(/ä/,"&auml;");
    text = text.replace(/ö/,"&ouml;");
    text = text.replace(/ß/,"&szlig;");
	//text = text.replace(/©/,"&copy;");
	return text;
}

function wom_url(text){
	return text;
}