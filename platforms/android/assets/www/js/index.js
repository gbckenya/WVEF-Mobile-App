//start cordova
document.addEventListener("deviceready",onDeviceReady,false);
//
function onDeviceReady() {
    //run cordova services
}
$(function(){
    //start alo carousel
    $('.carousel').carousel({
        interval: 4000
    });
    // Off canvas left animation right
    $('.glyphicon-menu-hamburger').click(function(){
        $('.off-canvas-left').animate({
            left:'+=80%'
        },300,'swing')
    });
    $('.off-canvas-left .glyphicon-remove').click(function(){
        $('.off-canvas-left').animate({
            left:'-=80%'
        },200,'swing')
    });
    // Off canvas left animation right
    $('.glyphicon-lock').click(function(){
        $('.off-canvas-right').animate({
            left:'-=80%'
        },300,'swing')
    });
    $('.off-canvas-right .glyphicon-remove').click(function(){
        $('.off-canvas-right').animate({
            left:'+=80%'
        },200,'swing')
    });
    // Start the html for WOB list
    var woblist = '';
    for (var i = 1; i <= 11; i++) {
        woblist += '<div class="list-group-item" data-toggle="modal" data-target=".bs-example-modal-lg-one'+ [i] +'">';
        woblist += '<p><strong>Company A' + [i] + '</strong></p>';
        woblist += '<p>Sunny Vale California</p>';
        woblist += '<p><a href="tel:+254 720 000 00'+ [i] +'">+254 720 000 00'+ [i] +'</a></p>';
        woblist += '<p><a href="mailto:info@company' +[i]+ '.co.ke">info@company'+ [i] +'.co.ke</a></p>';      
        woblist += '</div>';
        woblist += '<div class="modal fade bs-example-modal-lg-one'+ [i] +'" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">';
        woblist += '<div class="modal-dialog modal-lg">';
        woblist += '<div class="modal-content">';
        woblist += '<div class="modal-header">';
        woblist += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
        woblist += '<h4 class="modal-title" id="gridSystemModalLabel">Company '+ [i] +'</h4>';
        woblist += '</div>';
        woblist += '<div class="modal-body">';
        woblist += '<div class="container-fluid">';
        woblist += '<p>Sunny Vale California</p>';
        woblist += '<p><a href="tel:+254 720 000 00'+ [i] +'">+254 720 000 00'+ [i] +'</a></p>';
        woblist += '<p><a href="mailto:info@company' +[i]+ '.co.ke">info@company'+ [i] +'.co.ke</a></p>';
        woblist += '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet rhoncus tempor.Suspendisse dapibus vulputate dolor ut tincidunt. Suspendisse tristique laoreet dui, ut tempor orci dictum ut. Quisque aliquam urna ac justo tristique interdum. Aliquam in dui eget lectus elementum lacinia eget eu sem.</p>';
        woblist += '<p>Services / Products</p>';
        woblist += '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">';
        //repeat from here
        for(var k = 1; k <= 3; k++){
            woblist += '<div class="panel panel-default">';
            woblist += '<div class="panel-heading" role="tab" id="headingOne' +[i]+[k]+ '">';
            woblist += '<h4 class="panel-title">';
            woblist += '<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne' +[i]+[k]+ '" aria-expanded="true" aria-controls="collapseOne' +[i]+[k]+ '">Service #' +[i]+[k]+ '</a>';
            woblist += '</h4>';
            woblist += '</div>';
            woblist += '<div id="collapseOne' +[i]+[k]+ '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne' +[i]+[k]+ '">';
            woblist += '<div class="panel-body">';
            woblist += 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus';
            woblist += '<nav><ul class="pagination">';
            woblist += '<li><a href="mailto:imailto:info@company' +[i]+ '.co.ke"><span class="glyphicon glyphicon-envelope"></span></a></li>';
            woblist += '<li><span class="glyphicon glyphicon-share"></span></li>';
            woblist += '<li><a href="tel:+254 720 000 00'+ [i] +'"><span class="glyphicon glyphicon-phone"></span></a></li>';
            woblist += '</ul></nav>';
            woblist += '</div>';
            woblist += '</div>';
            woblist += '</div>';
            woblist += '</div>';
        }
        //end repeat
        woblist += '<div class="map-info"><div style="overflow:hidden;height:150px;resize:none;max-width:100%;"><div id="embed-map-display" style="height:150px;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Rehema+House,+Nairobi,+Kenya&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU"></iframe></div><a class="embedded-map-code" rel="nofollow" href="https://www.embed-map.com" id="enable-maps-data">https://www.embed-map.com</a><style>#embed-map-display .map-generator{max-width: 100%; max-height: 100%; background: none;</style></div></div>';
        woblist += '</div>';
        //end of accordion services        
        woblist += '</div>';
        woblist += '</div>';
        woblist += '</div>';
        woblist += '</div>';
    };
    $('.wob-list .list-group').html(woblist);
    //ebd WOBlist
    // Start the html for Buyers list
    var buyerslist = '';
    for (var i = 1; i <= 8; i++) {
        buyerslist += '<div class="list-group-item" data-toggle="modal" data-target=".bs-example-modal-lg-one'+ [i] +'">';
        buyerslist += '<p><strong>Buyer A' + [i] + '</strong></p>';
        buyerslist += '<p>Sunny Vale California</p>';
        buyerslist += '<p><a href="tel:+254 720 000 00'+ [i] +'">+254 720 000 00'+ [i] +'</a></p>';
        buyerslist += '<p><a href="mailto:info@buyer' +[i]+ '.co.ke">info@buyer'+ [i] +'.co.ke</a></p>';      
        buyerslist += '</div>';
        buyerslist += '<div class="modal fade bs-example-modal-lg-one'+ [i] +'" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">';
        buyerslist += '<div class="modal-dialog modal-lg">';
        buyerslist += '<div class="modal-content">';
        buyerslist += '<div class="modal-header">';
        buyerslist += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
        buyerslist += '<h4 class="modal-title" id="gridSystemModalLabel">Buyer '+ [i] +'</h4>';
        buyerslist += '</div>';
        buyerslist += '<div class="modal-body">';
        buyerslist += '<div class="container-fluid">';
        buyerslist += '<p>Sunny Vale California</p>';
        buyerslist += '<p><a href="tel:+254 720 000 00'+ [i] +'">+254 720 000 00'+ [i] +'</a></p>';
        buyerslist += '<p><a href="mailto:info@company' +[i]+ '.co.ke">info@buyer'+ [i] +'.co.ke</a></p>';
        buyerslist += '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet rhoncus tempor.Suspendisse dapibus vulputate dolor ut tincidunt. Suspendisse tristique laoreet dui, ut tempor orci dictum ut. Quisque aliquam urna ac justo tristique interdum. Aliquam in dui eget lectus elementum lacinia eget eu sem.</p>';
        buyerslist += '<p>Tenders / Bids / RFPs </p>';
        buyerslist += '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">';
        //repeat from here
        for(var k = 1; k <= 2; k++){
            buyerslist += '<div class="panel panel-default">';
            buyerslist += '<div class="panel-heading" role="tab" id="headingOne' +[i]+[k]+ '">';
            buyerslist += '<h4 class="panel-title">';
            buyerslist += '<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne' +[i]+[k]+ '" aria-expanded="true" aria-controls="collapseOne' +[i]+[k]+ '">Tender #' +[i]+[k]+ '</a>';
            buyerslist += '</h4>';
            buyerslist += '</div>';
            buyerslist += '<div id="collapseOne' +[i]+[k]+ '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne' +[i]+[k]+ '">';
            buyerslist += '<div class="panel-body">';
            buyerslist += 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus';
            buyerslist += '<nav><ul class="pagination">';
            buyerslist += '<li><a href="mailto:imailto:info@company' +[i]+ '.co.ke"><span class="glyphicon glyphicon-envelope"></span></a></li>';
            buyerslist += '<li><span class="glyphicon glyphicon-share"></span></li>';
            buyerslist += '<li><a href="tel:+254 720 000 00'+ [i] +'"><span class="glyphicon glyphicon-phone"></span></a></li>';
            buyerslist += '</ul></nav>';
            buyerslist += '</div>';
            buyerslist += '</div>';
            buyerslist += '</div>';
            buyerslist += '</div>';
        }
        //end repeat
        buyerslist += '</div>';
        //end of accordion services
        buyerslist += '</div>';
        buyerslist += '</div>';
        buyerslist += '</div>';
        buyerslist += '</div>';
    };
    $('.buyers-list .list-group').html(buyerslist);
    //ebd Buyers
    //hide fields on toggle buyer or wob
    $('select.group').change(function(){
        var group = $(this).val();
        if(group == 'wob'){
            $('.buyer-display').hide();
            $('.wob-display').show();
        }else if(group == 'buyer'){
            $('.wob-display').hide();
            $('.buyer-display').show();
        }
    });
});