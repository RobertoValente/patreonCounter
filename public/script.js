function getData() {
    $.ajax({
        type: 'GET',
        url: '/getData',
        dataType: 'json',
        success: function(data) {
            //$('#total-bar').width(data.patronCount);
            let percent = (data.patronCount * 100) / data.maxPatronos;
            if(percent > 100) percent = 100;
            
            $('#goal-current').text(data.patronCount);
            $('#total-bar').width("calc(" + percent + '% - 8px)');
            $('#goal-total').text(data.maxPatronos);
        },
        error: function(xhr, status, error) {
            console.error(error);
        }
    });
}

$(document).ready(function() {
    getData();
    setInterval(getData, 30000);
});