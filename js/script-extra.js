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

// jQuery smooth scroll to element
$("#navbar ul li a, .site-link").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 48,
      },
      450
    );
  }
});