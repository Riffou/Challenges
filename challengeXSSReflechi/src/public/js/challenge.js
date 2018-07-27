$("document").ready(function () {
    $('#rechercher').click(function (e) {
        $('#champManquant').css("display", "none");
        if ($('#erreurServeur')) {
            $('#erreurServeur').css("display", "none");
        }
        if ($('#article').val() == "") {
            e.preventDefault();
            $('#champManquant').show();
        }
    });
});
