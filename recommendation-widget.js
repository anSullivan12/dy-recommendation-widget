var products = document.querySelectorAll('[dy-needs-disclosure]');

console.log(window.sst)

window.sst.el.sendTrackEvent({ event: 'dy-notification', campaign: '${DY Test Name}', variant: '${trackerVariant}' });
