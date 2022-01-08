// 왜 안되지
let summoon = $('.sunmoon').text;
function dnm() {
    if (summoon === '🌝') {
        $('header').css('backgroundColor', "white");
        $('section').css('backgroundColor', "white");
        $('.sunmoon').text('🌞');
    }
    else if (summoon === '🌞') {
        $('header').css('backgroundColor', "black");
        $('section').css('backgroundColor', "black");
        $('.sunmoon').text('🌝');
    }
    }