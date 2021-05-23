// ///////////////////////////////////// //
// ////////////// GENERAL ////////////// //
// ///////////////////////////////////// //

$("#routes_svg").load("svg/carte_petite_routes-01.html");

// ///////////////////////////////////// //
// //////////// INFORMATIONS /////////// //
// ///////////////////////////////////// //

$(".point").on('click', function (pointclick) {
    $(".point_texte").css("display", "none");
    $("#croixPointTexte").css("display", "block");
    $(this).find(".point_texte").css("display", "block");
    $(".point").off("mouseout mouseover");
});

$("#croixPointTexte").on('click', function () {
    $(".point_texte").css("display", "none");
    $(this).css("display", "none");
    $(".point").on('click', function (pointclick) {});
    $(".point").mouseover(function (pointMouseover) {
        $(".point_texte").css("display", "none");
        $(this).find(".point_texte").css("display", "block");
    });
    $(".point").mouseout(function (pointMouseout) {
        $(".point_texte").css("display", "none");
    });
});

$(".point").mouseover(function (pointMouseover) {
    $(".point_texte").css("display", "none");
    $(this).find(".point_texte").css("display", "block");
});

$(".point").mouseout(function (pointMouseout) {
    $(".point_texte").css("display", "none");
});

// ///////////////////////////////////// //
// /////////////// NAVBAR ////////////// //
// ///////////////////////////////////// //

// // chien // //
$("#plus_chien").on('click', function () {
    $("#chien").css("display", "block");
    $(this).css("opacity", "0.2");
});
$("#chien").on('click', function () {
    $(this).css("display", "none");
    $("#plus_chien").css("opacity", "1");
});

// // repas // //
$("#plus_repas").on('click', function () {
    $("#repas, circle.repas, p.repas").css("display", "block");
    $("#plus_repas").css("opacity", "0.2");
});
$("#repas").on('click', function () {
    $("#repas, circle.repas, p.repas").css("display", "none");
    $("#plus_repas").css("opacity", "1");
});

// // plus_medecin_dent // //
$("#plus_medecin_dent").on('click', function () {
    $("#medecin_dent, circle.medecin_dent, p.medecin_dent").css("display", "block");
    $("#plus_medecin_dent").css("opacity", "0.2");
});
$("#medecin_dent").on('click', function () {
    $("#medecin_dent, circle.medecin_dent, p.medecin_dent").css("display", "none");
    $("#plus_medecin_dent").css("opacity", "initial");
});

// // plus_medecin_dent // //
$("#plus_medecin_dent").on('click', function () {
    $("#medecin_dent").css("display", "block");
    $(this).css("opacity", "0.2");
});
$("#medecin_dent").on('click', function () {
    $(this).css("display", "none");
    $("#plus_medecin_dent").css("opacity", "1");
});