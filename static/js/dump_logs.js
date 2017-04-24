$(document).ready(function(){
    
    var socket_dumplogs = io.connect('http://' + document.domain + ':' + location.port + '/dumplogs');
    var wasAtBottom
    
    socket_dumplogs.on('dumplogs1', function(line_received) {
        document.write(line_received);
        $('html, body').scrollTop( $(document).height());
    });
    socket_dumplogs.emit('dumplogs');
});

function isAtBottom() {
    return $(window).scrollTop() + $(window).height() === $(document).height();
}

function jumpToPageBottom() {
    $('html, body').scrollTop( $(document).height());
}