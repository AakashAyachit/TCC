$(document).ready(function() {
    $('#textForm').submit(function(event) {
        event.preventDefault();

        var text = $('#textInput').val();

        $.ajax({
            type: 'POST',
            url: '/classify',
            contentType: 'application/json',
            data: JSON.stringify({ text: text }),
            success: function(response) {
                $('#result').text(response.prediction);
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
            }
        });
    });
});
