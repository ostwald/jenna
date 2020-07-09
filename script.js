function log (s) {
    if (window.console)
        window.console.log(s);
}

var image_name_re = /images\/(.*)\.jpg/;;

$(function () {

    $( "#dialog").dialog({autoOpen:false});

    $('img.thumbnail')
        .click (function (event) {

            var m = image_name_re.exec($(event.target).attr('src'))
            if (!m) {
                return
            } else {
                var name = m[1]
                log (name + ' was clicked')
                $('#dialog img.j_image').attr('src', 'images/'+name+'.jpg')
            }
            $( "#dialog").dialog({
                width:'80%',
                maxHeight:'80%',
                title:name,
                position:{ my: "top", at: "top+50", of: window },
                modal:true

            })
            $( "#dialog" ).dialog( "open" );

            event.preventDefault()
        })

});
