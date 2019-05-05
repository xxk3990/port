"use strict";
//what the below JS does is it makes it so when you hover over the project images, the opacity goes to 50% and
// their names + a link to their spot on the page appears. When you mouseout,
//the text disappears and the opacity returns to normal.
$("#partyWrap").mouseover(function () {
    $(".party").css('opacity', '.5');
    $(".partyLabel").css('visibility', 'visible');
});
$("#partyWrap").mouseout(function () {
    $(".party").css('opacity', '1');
    $(".partyLabel").css('visibility', 'hidden');
});

$("#carWrap").mouseover(function () {
    $(".car").css('opacity', '.5');
    $(".carLabel").css('visibility', 'visible');
});
$("#carWrap").mouseout(function () {
    $(".car").css('opacity', '1');
    $(".carLabel").css('visibility', 'hidden');
});

$("#genAWrap").mouseover(function () {
    $(".genA").css('opacity', '.5');
    $(".genALabel").css('visibility', 'visible');
});
$("#genAWrap").mouseout(function () {
    $(".genA").css('opacity', '1');
    $(".genALabel").css('visibility', 'hidden');
});

$("#csharpWrap").mouseover(function () {
    $(".csharp").css('opacity', '.5');
    $(".csharpLabel").css('visibility', 'visible');
});
$("#csharpWrap").mouseout(function () {
    $(".csharp").css('opacity', '1');
    $(".csharpLabel").css('visibility', 'hidden');
});