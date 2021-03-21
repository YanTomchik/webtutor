let elements = document.querySelectorAll('.lol');

request_for_user = (userid) => {
    const current_url = '/test/server_worker.html';
    const data_user = {};
    data_user.userid = userid;
    $.ajax({
        url:current_url,
        data:data_user,
        type: 'post',
        success: function(resp) {
            console.log(resp);
            console.log(data_user);
            alert(resp);
        }
    });

}

for (let i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.addEventListener('click', function () {
        //console.log(this.getAttribute('userid'));
        let userid = this.getAttribute('userid');
        request_for_user(userid);
    });
}

// const MONTH_NAME = ['Dec','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
//
// function formatDate(data_user) {
//     const date = new Date(data_user);
//     return `${date.getDate()} ${MONTH_NAME[date.getMonth()]}`;
// }


