document.addEventListener('DOMContentLoaded', (event) => {
    var myCarousel = document.querySelector('#carouselExampleAutoplaying')
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000, // Time interval in milliseconds
        ride: 'carousel'
    })
})