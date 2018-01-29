var colorpickerText = '#000000';
$('#colorpicker-text').spectrum({
    color: colorpickerText,
    showAlpha: true,
    showInput: true,
    change: function(color) {
        $('.plumin-text').css({color: color.toHexString()});
        colorpickerText = color.toHexString();
    },
    move: function(color) {
        $('.plumin-text').css({color: color.toHexString()});
    },
    hide: function() {
        $('.plumin-text').css({color: colorpickerText});
    },
});
var colorpickerBackground = '#ffffff';
$('#colorpicker-bg').spectrum({
    color: colorpickerBackground,
    showAlpha: true,
    showInput: true,
    change: function(color) {
        $('.plumin-content').css({backgroundColor: color.toHexString()});
        colorpickerBackground = color.toHexString();
    },
    move: function(color) {
        $('.plumin-content').css({backgroundColor: color.toHexString()});
    },
    hide: function() {
        $('.plumin-content').css({backgroundColor: colorpickerBackground});
    },
});

$('#input-fontSize').on('input', function(event) {
    $('.plumin-text').css({fontSize: event.target.value + 'px'});
});


var tickDuration = 10;
var tickValue = 0.01;

$('#plumin-tick').val(tickDuration);
$('#plumin-tickValue').val(tickValue);
$('#plumin-tick').on('input', function(event){
    tickDuration = event.target.value;
});
$('#plumin-tickValue').on('input', function(event){
    tickValue = parseFloat(event.target.value);
});


var isInterpolating = false;
var interpolateInterval;
var sliderValue = 0;
var interpolatePositive = true;
$('.js-interpolate').on('click', function() {
    if(isInterpolating) {
        $('.js-interpolate a').text('Interpolate');
        isInterpolating = false;
        window.clearInterval(interpolateInterval);
        sliderValue = 0;
        _interpolate(sliderValue);
    } else {
        $('.js-interpolate a').text('Stop interpolation');
        isInterpolating = true;
        interpolateInterval = window.setInterval(function() {
            if (sliderValue >= 1) {
                interpolatePositive = false;
            }
            if (sliderValue <= 0) {
                interpolatePositive = true;
            }
            sliderValue = interpolatePositive ? sliderValue + tickValue : sliderValue - tickValue;
            $('#js-plumin').val(sliderValue);
            _interpolate(sliderValue);
        }, tickDuration);

    }
});

var isConfigHidden = false;
$('.js-hideConfig').on('click', function(){
    if (isConfigHidden) {
        $('.js-hideConfig a').text('Hide config');
        $('.jumbotron').show();
        isConfigHidden = false;
    } else {
        $('.js-hideConfig a').text('Show config');
        $('.jumbotron').hide();
        isConfigHidden = true;
    }
})