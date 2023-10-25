<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Show Password</title>
</head>
<body>
    <form>
        <label>Email</label>
        <input type="email" name="email" />
        <br />
        <br />
        <label>Password</label>
        <input type="password" name="email" id="password" value="" required />
        <div id="error_message"></div>
        <br />
        <br />
        <input type="button" id="showPassword" value="Show">
    </form>
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
    <script>
        $(document).ready(function(){
            $('#showPassword').on('click',function(){
                let getPassField = $('#password');
                let getPassFieldType = getPassField.attr('type');
                let getPassFieldValue = getPassField.val();
                if(getPassFieldValue == ''){
                    $('#error_message').text('Please Enter the Password');
                }
                else if(getPassFieldType == 'password'){
                    getPassField.attr('type','text');
                    $(this).val('Hide');
                }
                else{
                    getPassField.attr('type','password');
                    $(this).val('Show');
                }
            });
        });
    </script>

</body>
</html>
