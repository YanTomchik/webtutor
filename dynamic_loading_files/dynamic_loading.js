let element = document.getElementById('btn');
let Current = document.getElementById("files").getAttribute("current");

request_for_group = () => {
    const current_url = '/dynamic_loading_files/dynamic_loading_server.html';
    const data_user = {"current" : Current};
    if (Current==null || Current==undefined || Current=="") {
        Current = 0;
    }
    $.ajax({
        url:current_url,
        data:data_user,
        type: 'post',
        success: function(resp) {
            let NewArr = JSON.parse(resp);
            for(let i = 0; i < NewArr.array.length; i++){
                $("#files").append("<div class = 'files_name' >" + NewArr.array[i].name +"</div>");
            }
            Current +=30;
        }
    });
}

request_for_group()


$(document).ready(function(){

    // var inProgress = false;

    $(window).scroll(function() {

        if($(window).scrollTop() + $(window).height() >= $(document).height() - 200 ) {
            // const current_url = '/dynamic_loading_files/dynamic_loading_server.html';
            // let Current = document.getElementById("files").getAttribute("current");
            // const data_user = {"current" : Current};
            // if (Current==null || Current==undefined || Current=="") {
            //     Current = 0;
            // }
            request_for_group();
            // $.ajax({
            //     url: current_url,
            //     type: 'post',
            //     data: data_user,
            //     beforeSend: function() {
            //         inProgress = true;}
            // }).done(function(data){
            //     data = JSON.parse(data);
            //     // ReturnedCurrent = data.current;
            //     // GetArray = data.array;
            //     // console.log(ReturnedCurrent+"\n"+GetArray);
            //     // document.getElementById("files").setAttribute("current", ReturnedCurrent);
            //     if (data.length > 0) {
            //         $.each(data, function(index, data){
            //             $("#files").append("<div class = 'files_name' >" + array[i].name +"</div>");
            //         });
            //         inProgress = false;
            //         Current +=30;
            //     }});
        }
    });
});



// element.addEventListener('click', function () {
//         request_for_group();
//         console.log('asdjfhjkdlsakdjfkdslajdfbhdskldjfkdmls')
//     });

// function check() {
//         let windowBottom = document.documentElement.getBoundingClientRect().bottom;
//         let windowTop = document.documentElement.getBoundingClientRect().top;
//         let windowHeight = document.documentElement.clientHeight;
//         if (windowBottom + windowTop <= windowHeight)
//         {
//             // console.log('Hello')
//             request_for_group()
//         }
//
// }
//
// window.addEventListener('scroll', check);



