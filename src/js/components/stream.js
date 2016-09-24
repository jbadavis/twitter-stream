twitterStream.stream = (function() {

    var createStream = function() {
        $.ajax({
            url: '/api/stream',
            type: 'GET',
            data: {
              format: 'json'
            },
            dataType: 'json',
            error: function() {
              console.log('Error :(');
            },
            success: function(data) {
                console.log('Success!');
            }
        });
    };

    var setListener = function() {
        $('.topicField').keypress(function(e) {
            if(e.which == 13) {
                createStream();
            }
        });
    };

	var init = function() {
        setListener();
	};

	init();

})();
