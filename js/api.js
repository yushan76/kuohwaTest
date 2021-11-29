$.ajax({
    url: "localhot:3000/api",
    type: "POST",
    async: false,
    data: JSON.stringify({}),
    dataType: "json",
    contentType: "application/json"
}).done(function (res) {

    var clientList = res.data;
    for (client in clientList) {
        for (clientFileType in clientList[client]) {
            $("#dictionarySelect").append("<option value='"+clientFileType+"'>"+clientFileType+"</option>");       
        }
    }
})