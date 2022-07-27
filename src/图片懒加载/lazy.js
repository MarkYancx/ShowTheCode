let lazyImages = [...document.querySelectorAll('.lazy-load')]
let inAdvance = 300
function lazyLoad() {
    lazyImages.forEach(image => {
        if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
            image.src = image.dataset.src;   // 替换真实图片的  URL
        }
    })
}

lazyLoad();
window.addEventListener('scroll', _.throttle(lazyLoad, 50))
window.addEventListener('resize', _.throttle(lazyLoad, 50))