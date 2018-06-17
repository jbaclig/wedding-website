var map;
var markers;
var activeMarker;
var currentIndex;

document.addEventListener('DOMContentLoaded', function() {
    var detailsContext, ceremonyContext, receptionContext;

    renderNav();

    guideContext = {
        pageClass: 'guide',
        displayTitle: 'Guide',
    };

    document.getElementById('main-header').innerHTML = 
        MyApp.templates.pageHeader(guideContext);

    $('#listCarousel').each(function () {
        var $carousel = $(this);
        var hammertime = new Hammer(this, {
            recognizers: [
                [Hammer.Swipe, { direction: Hammer.DIRECTION_HORIZONTAL }]
            ]
        });
        hammertime.on('swipeleft', function () {
            $carousel.carousel('next');
        });
        hammertime.on('swiperight', function () {
            $carousel.carousel('prev');
        });
    });

    $('#listCarousel').on('slid.bs.carousel', function () {
        var active = this.querySelector('.active');
        map.setCenter({
            lat: parseFloat(active.dataset.lat),
            lng: parseFloat(active.dataset.lng)
        });
        activeMarker.setOpacity(0.5);
        activeMarker.setZIndex(1);
        activeMarker = markers[parseInt(active.dataset.index)];
        activeMarker.setOpacity(1);
        activeMarker.setZIndex(1000);

    });

});

function initMap() {
    var firstItem = document.querySelector('#listCarousel .active');
    currentIndex = parseInt(firstItem.dataset.index);
    map = new google.maps.Map(document.querySelector('#city-map'), {
        center: {
            lat: parseFloat(firstItem.dataset.lat), 
            lng: parseFloat(firstItem.dataset.lng)
        },
        zoom: 15
    });
    markers = createMarkers(map);
    activeMarker = markers[currentIndex];
    activeMarker.setOpacity(1);
    activeMarker.setZIndex(1000);
}

function createMarkers(map) {
    var markers = [];
    var marker;
    document.querySelectorAll('#listCarousel .carousel-item')
        .forEach(function(item, index) {
            marker = new google.maps.Marker({
                position: {
                    lat: parseFloat(item.dataset.lat),
                    lng: parseFloat(item.dataset.lng)
                },
                map: map,
                title: item.querySelector('.item-text>h3').textContent,
                zIndex: 1
            });
            marker.setOpacity(0.5);
            markers.push(marker);
        });
    return markers;
}