$("document").ready(function () {
    $('#envoyer').click(function (e) {
        $('#champManquant').css("display", "none");
        if ($('#erreurServeur')) {
            $('#erreurServeur').css("display", "none");
        }
        if ($('#titreInput').val() == "" || $('#messageInput').val() == "") {
            e.preventDefault();
            $('#champManquant').show();
        }
    });
});