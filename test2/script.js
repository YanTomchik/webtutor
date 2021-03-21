let elements = document.querySelectorAll('.text');
console.log(elements)
let btn = document.querySelector('.btn');

request_for_user = (textid) => {

    const current_url = '/test/server_test.html';
    const data_user = {};
    data_user.textid = textid;
    $.ajax({
        url:current_url,
        data:data_user,
        type: 'post',
        success: function(resp) {
            alert(resp)
        }
    });
}

btn.addEventListener('click', function () {
    let textid = this.getAttribute('textid');
    console.log(textid)
    // request_for_user(textid);
});

// for (let i = 0; i < elements.length; i++) {
//     var element = elements[i];
//     element.addEventListener('click', function () {
//         //console.log(this.getAttribute('userid'));
//
//     });
// }