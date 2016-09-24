twitterStream.stream = (function() {
    var topic;

    var connect = function() {
        var socket = io.connect('http://localhost:3000', {
             query: "topic=" + topic
         });

        socket.on('tweet', function(obj){
            $('.tweet-container').prepend('<p class="tweet">'+obj+'</p>');
        });
    };

    var setListener = function() {
        $('.topic-field').keypress(function(e) {
            if(e.which == 13) {
                topic = $('.topic-field').val();
                console.log(topic);
                connect();
            }
        });
    };

	var init = function() {
        setListener();
	};

	init();

})();
