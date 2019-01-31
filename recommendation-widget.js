// iterates over the data-position
var position = 0;
$('.rec_container').each(function(position){
  $(this).attr('data-position', position++);
});

// advertiser disclosure code
function addDisclosure() {
  $('.advertiser-disclosure').attr('hidden', false);
}

var isCreditCard = $('.disclosure-link:visible').length > 0;
if (isCreditCard) {
  addDisclosure();
}


// data tracking
window.sst.el.sendTrackEvent({ event: '${tracker event}', value: '${DY Test Name}', variant: '${trackerVariant}' });
