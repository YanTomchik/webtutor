let btn = document.getElementById('enter');
let result = document.getElementById('result');

function find_user() {
    var user = document.getElementById('name').value;
    // result.innerHTML = user;
    request_for_user(user);
}

 btn.addEventListener('click', function () {
     find_user();
 } );

request_for_user = (textid) => {
    const current_url = '/input/input_server.html';
    const data_user = {};
    data_user.text = textid;
    $.ajax({
        url:current_url,
        data:data_user,
        type: 'post',
        success: function(resp) {
            $(result).html(resp)
        }
    });

}
