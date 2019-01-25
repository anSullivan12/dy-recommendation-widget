// iterates over the data-position
var position = 0;
$('.rec_container').each(function(position){
  $(this).attr('data-position', position++);
});

var products = document.querySelectorAll('[dy-needs-disclosure]');
if (products > 1) {
  $('#disclosure').addClass('show');
}


console.log(window.sst)

window.sst.el.sendTrackEvent({ event: '${tracker event}', value: '${DY Test Name}', variant: '${trackerVariant}' });
