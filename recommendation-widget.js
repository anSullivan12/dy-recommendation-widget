// iterates over the data-position
var position = 0;
$('.rec_container').each(function(position){
  $(this).attr('data-position', position++);
});


console.log(window.sst)

window.sst.el.sendTrackEvent({ event: '${tracker event}', value: '${DY Test Name}', variant: '${trackerVariant}' });
