// gallery calls
for (let i=1; i <= 14; i++) {
  lightGallery(document.getElementById('gallery-' + i), {
    startClass: 'lg-start-fade',
    mode: 'lg-fade',
    preload: 2,
    enableDrag: false,
    enableSwipe: false,
    backdropDuration: 300,
    mousewheel: false,
    download: false
  });
}