let elements = document.querySelectorAll('.group_name');
// console.log(elements);

request_for_group = (groupid) => {
    const current_url = '/group/server_group.html';
    const data_user = {};
    data_user.groupid = groupid;
    $.ajax({
        url:current_url,
        data:data_user,
        type: 'post',
        success: function(resp) {
            alert(resp);
        }
    });

}

for (let i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.addEventListener('click', function () {
        let groupid = this.getAttribute('groupid');
        request_for_group(groupid);
    });
}