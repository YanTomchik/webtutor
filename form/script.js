const dataOfFiles = {};

$('#file-input').change(function () {
    let files = this.files;
    sendFiles(files);
});

function sendFiles(files) {
    const maxFileSize = 5242880;//5мб
    const currentUrl = '';
    const typeDoc = 'application/msword';
    const typeDocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    const typePdf = 'application/pdf';
    let Data = new FormData();
    $(files).each(function (index, file) {
        if ((file.size <= maxFileSize) && ((file.type == typeDoc) || (file.type == typeDocx) || (file.type == typePdf))) {
            Data.append('files[]', file);
            dataOfFiles.fileName = file.name;
            dataOfFiles.fileType = file.type;
            fileToBase64(file)
        } else {
            alert('Поддерживаемые файлы ".pdf",".doc",".docx"');
        }
    });
    $.ajax({
        url: currentUrl,
        type: 'POST',
        data: Data,
        contentType: false,
        processData: false,
        success: function (data) {
            // alert ('Файл был успешно загружены!');
        }

    });
}

function findWorker() {
    let result_worker = document.getElementById('result_worker');
    let worker = document.getElementById('worker').value;

    let currentLetterNumber = worker.length;
    if (currentLetterNumber > 2) {
        requestForWorker(worker);
    }
    requestForWorker = (workerid) => {
        const current_url = '/form/server_worker.html';
        const dataWorker = {};
        dataWorker.workerid = workerid;
        $.ajax({
            url: current_url,
            data: dataWorker,
            type: 'post',
            success: function (resp) {
                result_worker.innerHTML = resp;
                chooseWorker(resp);
                result_worker.style.display = "";
            }
        });
    }
}

function findLeader() {
    let result_leader = document.getElementById('result_leader');
    let leader = document.getElementById('leader').value;

    let currentLetterNumber = leader.length;
    if (currentLetterNumber > 2) {
        requestForLeader(leader);
    }
    requestForLeader = (workerid) => {
        const current_url = '/form/server_worker.html';
        const dataLeader = {};
        dataLeader.workerid = workerid;
        $.ajax({
            url: current_url,
            data: dataLeader,
            type: 'post',
            success: function (resp) {
                result_leader.innerHTML = resp;
                chooseLeader();
                result_leader.style.display = "";
            }
        });
    }
}

function chooseWorker() {
    let workers = document.querySelectorAll('.user');

    for (let i = 0; i < workers.length; i++) {
        var worker = workers[i];
        worker.addEventListener('click', function () {
            dataOfFiles.nameWorker = this.innerText;
            dataOfFiles.workerId = this.getAttribute('colid');
            document.querySelector('.result_worker').style.display = "none";
            document.getElementById('worker').value = "";
        });
    }

}

function chooseLeader() {
    let workers = document.querySelectorAll('.user');

    for (let i = 0; i < workers.length; i++) {
        var worker = workers[i];
        worker.addEventListener('click', function () {
            dataOfFiles.nameLeader = this.innerText;
            dataOfFiles.leaderId = this.getAttribute('colid');
            document.querySelector('.result_leader').style.display = "none";
            document.getElementById('leader').value = "";
        });
    }
}

function fileToBase64(file) {
    let reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = function () {
        dataOfFiles.content = reader.result;
    };
}

let submitButton = document.querySelector(".btn_to_submit");
submitButton.addEventListener('click', function () {
    setInformation();
})

function setInformation() {
    const urlServer = '/form/server_send_information.html';
    let fileInformationJSON = JSON.stringify(dataOfFiles);

    $.ajax({
        url: urlServer,
        type: 'POST',
        data: {"json":fileInformationJSON},
        success: function (resp) {
            alert(resp)
        }

    });

}



