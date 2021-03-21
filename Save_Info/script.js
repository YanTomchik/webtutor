let elements_name = document.querySelectorAll('.name' );
let elements_group = document.querySelectorAll('.group_name' );
 console.log(elements_group);

request_for_group = (userid) => {
    const current_url = '/Save_Info/server_worker.html';
    const data_user = {};
    data_user.userid = userid;
    // console.log('elements_group')
    $.ajax({
        url:current_url,
        data:data_user,
        type: 'post',
        success: function(resp) {
            draw_group_users();
            // alert(resp)
        }
    });

}

for (let i = 0; i < elements_name.length; i++) {
    var element_name = elements_name[i];
    element_name.addEventListener('click', function () {
        let userid = this.getAttribute('userid');
        request_for_group(userid);
    });
}

function draw_group_users() {
    console.log('sfddsdd')
    // let total = resp;
    elements_group.innerHTML = "total";
}