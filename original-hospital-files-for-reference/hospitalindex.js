var htmlDiv = document.getElementById("rs-plugin-settings-inline-css");
var htmlDivCss = ".tp-caption.Furniture-Plus,.Furniture-Plus{color:rgba(230,207,163,1.00);font-size:20px;line-height:20px;font-weight:400;font-style:normal;font-family:\"Raleway\";padding:6px 7px 4px 7px;text-decoration:none;background-color:rgba(255,255,255,1.00);border-color:transparent;border-style:none;border-width:0px;border-radius:30px 30px 30px 30px;text-shadow:none;box-shadow:rgba(0,0,0,0.1) 0 1px 3px}.tp-caption.FatRounded,.FatRounded{color:rgba(255,255,255,1.00);font-size:30px;line-height:30px;font-weight:900;font-style:normal;font-family:Raleway;padding:20px 22px 20px 25px;text-decoration:none;text-align:left;background-color:rgba(0,0,0,0.50);border-color:rgba(211,211,211,1.00);border-style:none;border-width:0px;border-radius:50px 50px 50px 50px;text-shadow:none}.tp-caption.FatRounded:hover,.FatRounded:hover{color:rgba(255,255,255,1.00);text-decoration:none;background-color:rgba(0,0,0,1.00);border-color:rgba(211,211,211,1.00);border-style:none;border-width:0px;border-radius:50px 50px 50px 50px;cursor:pointer}";
if (htmlDiv) {
    htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
    var htmlDiv = document.createElement("div");
    htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
    document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
}

/******************************************
-	PREPARE PLACEHOLDER FOR SLIDER	-
******************************************/

var setREVStartSize = function () {
    try {
        var e = new Object, i = jQuery(window).width(), t = 9999, r = 0, n = 0, l = 0, f = 0, s = 0, h = 0;
        e.c = jQuery('#rev_slider_2_1');
        e.gridwidth = [1180];
        e.gridheight = [500];

        e.sliderLayout = "fullwidth";
        if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function (e, f) { f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e) }), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) { var u = (e.c.width(), jQuery(window).height()); if (void 0 != e.fullScreenOffsetContainer) { var c = e.fullScreenOffsetContainer.split(","); if (c) jQuery.each(c, function (e, i) { u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u }), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0)) } f = u } else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight); e.c.closest(".rev_slider_wrapper").css({ height: f })

    } catch (d) { console.log("Failure at Presize of Slider:" + d) };
};


setREVStartSize();
function revslider_showDoubleJqueryError(sliderID) {
    var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
    errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
    errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
    errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
    errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>";
    jQuery(sliderID).show().html(errorMessage);
}
var tpj = jQuery;
tpj.noConflict();
var revapi2;
tpj(document).ready(function () {
    if (tpj("#rev_slider_2_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_2_1");
    } else {
        revapi2 = tpj("#rev_slider_2_1").show().revolution({
            sliderType: "standard",
            jsFileLocation: "//www.kingscarehospitals.com/wp-content/plugins/revslider/public/assets/js/",
            sliderLayout: "fullwidth",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "on",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 0.7,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                }
                ,
                arrows: {
                    style: "hesperiden",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    }
                }
            },
            viewPort: {
                enable: true,
                outof: "wait",
                visible_area: "80%"
            },
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: 1180,
            gridheight: 500,
            lazyType: "none",
            shadow: 0,
            spinner: "spinner2",
            stopLoop: "on",
            stopAfterLoops: 1,
            stopAtSlide: 1,
            shuffle: "off",
            autoHeight: "off",
            disableProgressBar: "on",
            hideThumbsOnMobile: "on",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 1271,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }
});	/*ready*/



var htmlDivCss = ' #rev_slider_2_1_wrapper .tp-loader.spinner2{ background-color: #FFFFFF !important; } ';
var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
if (htmlDiv) {
    htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
}
else {
    var htmlDiv = document.createElement('div');
    htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
    document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
}




var htmlDivCss = unescape(".hesperiden.tparrows%20%7B%0A%09cursor%3Apointer%3B%0A%09background%3A%23000%3B%0A%09background%3Argba%280%2C0%2C0%2C0.5%29%3B%0A%09width%3A40px%3B%0A%09height%3A40px%3B%0A%09position%3Aabsolute%3B%0A%09display%3Ablock%3B%0A%09z-index%3A100%3B%0A%20%20%20%20border-radius%3A%2050%25%3B%0A%7D%0A.hesperiden.tparrows%3Ahover%20%7B%0A%09background%3A%23000%3B%0A%7D%0A.hesperiden.tparrows%3Abefore%20%7B%0A%09font-family%3A%20%22revicons%22%3B%0A%09font-size%3A20px%3B%0A%09color%3A%23fff%3B%0A%09display%3Ablock%3B%0A%09line-height%3A%2040px%3B%0A%09text-align%3A%20center%3B%0A%7D%0A.hesperiden.tparrows.tp-leftarrow%3Abefore%20%7B%0A%09content%3A%20%22%5Ce82c%22%3B%0A%20%20%20%20margin-left%3A-3px%3B%0A%7D%0A.hesperiden.tparrows.tp-rightarrow%3Abefore%20%7B%0A%09content%3A%20%22%5Ce82d%22%3B%0A%20%20%20%20margin-right%3A-3px%3B%0A%7D%0A");
var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
if (htmlDiv) {
    htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
}
else {
    var htmlDiv = document.createElement('div');
    htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
    document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
}

var WpvPushMenu = { "items": { "title": "Menu", "description": "", "type": "root", "children": [{ "url": "http:\/\/www.kingscarehospitals.com\/", "title": "Home", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page", "current-menu-item", "page_item", "page-item-7832", "current_page_item"], "type": "item", "children": [] }, { "url": "http:\/\/www.kingscarehospitals.com\/?page_id=29", "title": "About us", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }, { "title": "Departments", "description": "", "type": "item", "children": [{ "url": "http:\/\/www.kingscarehospitals.com\/?page_id=7043", "title": "Departments", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }, { "url": "http:\/\/www.kingscarehospitals.com\/?page_id=8084", "title": "Ct scan", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }, { "url": "http:\/\/www.kingscarehospitals.com\/?page_id=8082", "title": "Ultra Sound", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }, { "url": "http:\/\/www.kingscarehospitals.com\/?page_id=8078", "title": "Mammogram", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }, { "url": "http:\/\/www.kingscarehospitals.com\/?page_id=8076", "title": "Dental", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }, { "url": "http:\/\/www.kingscarehospitals.com\/?page_id=8074", "title": "MRI", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }, { "url": "http:\/\/www.kingscarehospitals.com\/?page_id=8072", "title": "EEG and adult intensive care unit", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }, { "url": "http:\/\/www.kingscarehospitals.com\/?page_id=8070", "title": "Laboratory", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }, { "url": "http:\/\/www.kingscarehospitals.com\/?page_id=8068", "title": "Physiotherapy", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }, { "url": "http:\/\/www.kingscarehospitals.com\/?page_id=8066", "title": "Eye clinic", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }, { "url": "http:\/\/www.kingscarehospitals.com\/?page_id=8059", "title": "Pharmacy", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }] }, { "title": "Medical services", "description": "", "type": "item", "children": [{ "url": "#", "title": "Medical services", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-custom", "menu-item-object-custom"], "type": "item", "children": [] }, { "url": "http:\/\/www.kingscarehospitals.com\/?page_id=8126", "title": "Dialysis Unit", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }, { "url": "http:\/\/www.kingscarehospitals.com\/?page_id=8124", "title": "Ophthalmic Care and Eye Clinic", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }, { "url": "http:\/\/www.kingscarehospitals.com\/?page_id=8122", "title": "Pharmaceutical", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }, { "url": "http:\/\/www.kingscarehospitals.com\/?page_id=8120", "title": "Radiological", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }, { "url": "http:\/\/www.kingscarehospitals.com\/?page_id=8118", "title": "Laboratory", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }, { "url": "http:\/\/www.kingscarehospitals.com\/?page_id=8116", "title": "Paediatrics", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }, { "url": "http:\/\/www.kingscarehospitals.com\/?page_id=8112", "title": "Surgeries", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }, { "url": "http:\/\/www.kingscarehospitals.com\/?page_id=8106", "title": "Family Medicine and specialized clinics", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }, { "url": "http:\/\/www.kingscarehospitals.com\/?page_id=8102", "title": "General Health", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }, { "url": "http:\/\/www.kingscarehospitals.com\/?page_id=8128", "title": "Other services", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }] }, { "url": "http:\/\/www.kingscarehospitals.com\/?page_id=1849", "title": "Facility tour", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }, { "url": "http:\/\/www.kingscarehospitals.com\/?page_id=8211", "title": "Gallery", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }, { "url": "http:\/\/www.kingscarehospitals.com\/?page_id=7580", "title": "Testimonials", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }, { "title": "Branches", "description": "", "type": "item", "children": [{ "url": "#", "title": "Branches", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-custom", "menu-item-object-custom"], "type": "item", "children": [] }, { "url": "http:\/\/www.kingscarehospitals.com\/?page_id=8214", "title": "Kubwa", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }, { "url": "http:\/\/www.kingscarehospitals.com\/?page_id=8216", "title": "Maraba", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }] }, { "url": "http:\/\/www.kingscarehospitals.com\/?page_id=31", "title": "Contact us", "attr_title": "", "description": "", "classes": ["", "menu-item", "menu-item-type-post_type", "menu-item-object-page"], "type": "item", "children": [] }] }, "back": "Back", "jspath": "http:\/\/www.kingscarehospitals.com\/wp-content\/plugins\/vamtam-push-menu\/js\/", "limit": "959" };