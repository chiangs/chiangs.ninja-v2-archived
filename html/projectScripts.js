$(document).ready(function() {
    console.log('loaded');
    hoverReplace();
})

var hoverReplace = function () {
    var $icon = $('.iconImg');
    var $jumbo = $('#about-jumbo');
    var $bj = $('#blackjack');
    var $pres = $('#presidents');
    if ($('#about-jumbo').is(':empty')) {
        $('#about-jumbo').load('partials.html #default', function () {});
    }
    $icon.hover(function() {
        switch ($(this).attr('id')) {
            case 'bjIcon':
                $($jumbo).load('partials.html #blackjack')
                break;
            case 'presIcon':
                $($jumbo).load('partials.html #presidents');
                break;
            case 'invIcon':
                $($jumbo).load('partials.html #inventory');
                break;
            case 'hrIcon':
                $($jumbo).load('partials.html #hr');
                break;
            case 'tripIcon':
                $($jumbo).load('partials.html #trip');
                break;
            case 'racerIcon':
                $($jumbo).load('partials.html #racer');
                break;
            case 'trackerIcon':
                $($jumbo).load('partials.html #consumption');
                break;
            case 'todoIcon':
                $($jumbo).load('partials.html #todo');
                break;
            default:
                $('#about-jumbo').load('partials.html #default');
        }
    });
}
