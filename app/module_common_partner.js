
/**
 * Partner-Einstellungen 
 */
var CONST_PARTNER_VERSION       = 0;


var CONST_PARTNER_SMALL_HEADER  = 0;

var CONST_PARTNER_ID            = 'partner';

var CONST_PARTNER_NAME          = 'Medienpartner: partner';
var CONST_PARTNER_NAME_SPAN     = 'partner';
var CONST_PARTNER_URL           = 'http://partner.url';

/**
 * Datenschutz-Hinweise anzeigen / Url dazu
 */
var CONST_PARTNER_DATENSCHUTZ_HINWEIS       = 1;
var CONST_PARTNER_DATENSCHUTZ_URL           = 'http://partner.url/datenschutz/';

/**
 * Umfrage einbinden
 */

var CONST_UMFRAGE_SHOW = 1;

if (CONST_PARTNER_VERSION != 1) {
    CONST_PARTNER_SMALL_HEADER = 0;
    CONST_UMFRAGE_SHOW  = 0;
}

var CONST_UMFRAGE_JSONP_URL_LAYER	= "https://www.wahl-o-mat.de/" + CONST_WOMT_BL_VERSION + "/umfrage_pslayer.php";


function print_main_foot_partner() {
    rw = '';
	if ((gStatusURL_Status!=0)
	&&(gStatusURL_Status!="0")){
		//return '';
	} else {
         rw += '<div class="footer" style="margin-top:0px">\n';
            rw += '<div class="clear"><\/div>\n';
            rw += '<div class="footertext">\n';             
            rw += wom_html(WOMT_aTexte["wahlomat_footer_medienpartner_text"][S_nSprache])+'<\/div>\n';
            
            lTextNF = '(Dieser Link öffnet sich in einem neuen Fenster.)';
            
            rw += '<div class="clear">&nbsp;<\/div>';
            rw += '<div class="bpartner"><a href="'
                + CONST_PARTNER_URL
                + '" target="_blank" tabindex="701" title="'
                    + CONST_PARTNER_NAME
                + ' '+wom_titletag(lTextNF)
                + '"><span>'
                    + CONST_PARTNER_NAME_SPAN
                + '<\/span><\/a><\/div>';
            rw += '<\/div>';                
    }
    return rw;		            
}

function check_umfrage() {
    
    if (CONST_UMFRAGE_SHOW == 0) {
        return false;
    }
    // nur einmal einbinden
    if (S_UmfrageShown != 0) {
        return false;
    }
    S_UmfrageShown = 1;
    
    jsonUrl = CONST_UMFRAGE_JSONP_URL_LAYER;
    
    $.jsonp({
      "url": jsonUrl,
      "callback": "umfrage",
      "data": {
          "alt": "json-in-script"
      },
      "success": function(data) {
            showumfrage         = 0;
            refuid              = 0;
            umfrageurl          = '';
            waitmilliseconds    = 0;
            $.each( data, function( key, val ) {
                if (key == 'showumfrage') {
                    if (val == 1 ) {
                        showumfrage = 1;
                    }
                } else if (key == 'refuid') {
                    refuid = val;
                } else if (key == 'server') {
                    S_UmfrageJServer = val;
                } else if (key == 'umfrageurl') {
                    S_UmfrageJUrl = val;                    
                } else if (key == 'popupoptions') {                    
                    S_UmfrageJPopupOptions = val;
                } else if (key == 'waitmilliseconds') {
                    waitmilliseconds = val;
                }
            });
            if ((showumfrage == 1)&&(S_UmfrageJUrl != '')) {
                partner = CONST_PARTNER_ID;
                if (S_UmfrageJServer != '') {
                    partner = S_UmfrageJServer;
                }
                urlString = $.param(
                    {
                        'refuid': refuid, 
                        'server': partner
                    }
                );
                S_UmfrageOpenUrl = S_UmfrageJUrl + '?' + urlString;
                window.setTimeout(function() {
                    umfrage_show_div();
                }, waitmilliseconds);
            }
      },
      "error": function(d,msg) {
          //alert("Fehler in der Umfrage");
      }
    });
    return;
}
 
function umfrage_close_div() {
    $('#umfrage').hide();
}

function umfrage_show_div() {
    
    htmlUmfrage = '';
    htmlUmfrage += '<div id="closeUmfrage" class="close" onclick="umfrage_close_div();return false;">';
    htmlUmfrage += '<\/div>';
    htmlUmfrage += '<div>';
        htmlUmfrage += '<b>'+ wom_html(WOMT_aTexte["4_umfrage_titel"][S_nSprache])+'<\/b>';
        htmlUmfrage += '<br\/><br\/>';
        htmlUmfrage += '<p>';
            htmlUmfrage += wom_html(WOMT_aTexte["4_umfrage_text"][S_nSprache]) + '<\/p><br\/>';
        htmlUmfrage += '<a class="umfragestart" href="" title="';
            htmlUmfrage += wom_titletag(WOMT_aTexte["4_umfrage_title_starten"][S_nSprache]);
            htmlUmfrage += '" target="_blank" onclick="umfrage_close_div();umfrage_open(\'';
            htmlUmfrage +=  S_UmfrageOpenUrl +'\');return false;">';
            htmlUmfrage +=  wom_titletag(WOMT_aTexte["4_umfrage_title_starten"][S_nSprache]);
        htmlUmfrage +=  '<\/a>';
    htmlUmfrage +=  '<\/div>';
    
    $('#umfrage').html(htmlUmfrage);
    $('#umfrage').show();
}

function umfrage_open() {
 	umfrage_win = window.open(S_UmfrageOpenUrl, 'UmfrageEuropawahl2014', S_UmfrageJPopupOptions);
   	if (umfrage_win) umfrage_win.focus();
} 
