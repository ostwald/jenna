function log (s) {
    if (window.console)
        window.console.log(s);
}

var image_name_re = /images\/(.*)\.jpg/;;

$(function () {

    $('img.thumbnail')
        .click (function (event) {

            var m = image_name_re.exec($(event.target).attr('src'))
            if (!m) {
                return
            } else {
                var name = m[1]
                log (name + ' was clicked')
                $('#pop-up img.j_image').attr('src', 'images/'+name+'.jpg')
            }

            event.preventDefault();

            this.blur();
            $('#pop-up').appendTo('body').modal()
        })

});
