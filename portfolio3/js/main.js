//タイトルのエフェクト//
$(function() {
    var $allMsg = $('h1');
    var $wordList = $('h1').html().split("");
    $('h1').html("");
    $.each($wordList, function(idx, elem) {
        var newEL = $("<span/>").text(elem).css({ opacity: 0 });
        newEL.appendTo($allMsg);
        newEL.delay(idx * 200);
        newEL.animate({ opacity: 1 }, 1100);
    });
});
