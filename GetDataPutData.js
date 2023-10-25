<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get Data</title>
</head>
<body>

    <div class="main_area">
        <div class="div_one">
            <textarea id="get_data"></textarea>
            <div id="put_data"></div>
            <button type="button" id="button">Submit</button>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>

    <script>
$(document).ready(function(){
    $('#button').on('click',function(){
        let getValue = $('#get_data').val();
        if($.trim().getValue != ''){
            $('#put_data').text(getValue);
        }
    });
});
    </script>

</body>
</html>
