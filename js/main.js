let retype;

document.getElementById("select_1").addEventListener("click", function () {
    document.getElementById("filetype_btn").innerHTML = "PRL"
    document.getElementById("selecterp_btn").disabled = false;
});
document.getElementById("select_2").addEventListener("click", function () {
    document.getElementById("filetype_btn").innerHTML = "TOMMY"
    document.getElementById("selecterp_btn").disabled = false;
});
document.getElementById("select_prl").addEventListener("click", function () {
    document.getElementById("selecterp_btn").innerHTML = "configuration_PRL"
});
document.getElementById("select_tommy").addEventListener("click", function () {
    document.getElementById("selecterp_btn").innerHTML = "configuration_TOMMY"
});
document.getElementById("select_re").addEventListener("click", function () {
    document.getElementById("reselect_btn").innerHTML = "PRL"
    retype = "PRL";
});
document.getElementById("select_re1").addEventListener("click", function () {
    document.getElementById("reselect_btn").innerHTML = "TOMMY"
    retype = "TOMMY";
});


function show_func() {
    let l = document.querySelector('.list4')
    l.classList.remove('d-none')
    document.getElementById("addrule_btn").style.display = "none";
    // console.log(l.classList)
    document.getElementById("list5").style.display = "block";
    document.getElementById("trash_icon1").style.display = "none";
    document.getElementById("list6").style.display = "block";
    document.getElementById("trash_icon2").style.display = "none";
    document.getElementById("list7").style.display = "block";
    document.getElementById("trash_icon3").style.display = "none";
    document.getElementById("edit_btn").style.display = "block";
    document.getElementById("tabular_btn").disabled = true;;
    document.getElementById("module_btn").disabled = true;;
    document.getElementById("associate_btn").disabled = true;;
    document.getElementById("exampleFormControlInput2").disabled = true;
    document.getElementById("checkboxNoLabel").disabled = true;
    document.getElementById("checkboxNoLabe2").disabled = true;
    document.getElementById("checkboxNoLabe3").disabled = true;
    document.getElementById("id_label_single1").disabled = true;
    document.getElementById("id_label_single2").disabled = true;
    document.getElementById("id_label_single3").disabled = true;
}



function adderp_func() {
    let l = document.querySelector('.list4')
    l.classList.remove('d-none')
    // console.log(l.classList)
    document.getElementById("list5").style.display = "block";
    document.getElementById("list6").style.display = "block";
    document.getElementById("list7").style.display = "block";
    document.getElementById("addrule_btn").style.display = "block";
    document.getElementById("adderp_div").style.display = "none";
  
    let a = document.querySelector('.list8')
    a.classList.remove('d-none')
    // console.log(a.classList)
    // document.getElementById("save_btn").style.display = "block";
    // document.getElementById("cancel_btn").style.display = "block";
    document.getElementById("nameerp_inp").style.display = "block";
    document.getElementById("selecterp_div").style.display = "none";
    document.getElementById("edit_div").style.display = "none";
    // console.log(b.classList)
    document.getElementById("nameerp_div").style.display = "block";
    document.getElementById("trash_icon1").style.display = "block";
    document.getElementById("trash_icon2").style.display = "block";
    document.getElementById("trash_icon3").style.display = "block";
}


function edit_func() {
    document.getElementById("adderp_div").style.display = "none";
    document.getElementById("edit_div").style.display = "none";
    document.getElementById("filetype_btn").disabled = true;
    document.getElementById("selecterp_btn").disabled = true;
    document.getElementById("list3").style.display = "block";
    document.getElementById("adderp_btn").style.display = "none";
    document.getElementById("nameerp_div").style.display = "none";
    document.getElementById("addrule_btn").style.display = "block";
   
    let j = document.querySelector('.list8')
    j.classList.remove('d-none')
    // console.log(j.classList)
    // document.getElementById("save_btn").style.display = "block";
    // document.getElementById("cancel_btn").style.display = "block";
    document.getElementById("trash_icon1").style.display = "block";
    document.getElementById("trash_icon2").style.display = "block";
    document.getElementById("trash_icon3").style.display = "block";
    document.getElementById("tabular_btn").disabled = false;
    document.getElementById("module_btn").disabled = false;
    document.getElementById("associate_btn").disabled = false;
    document.getElementById("exampleFormControlInput2").disabled = false;
    document.getElementById("checkboxNoLabel").disabled = false;
    document.getElementById("checkboxNoLabe2").disabled = false;
    document.getElementById("checkboxNoLabe3").disabled = false;
    document.getElementById("id_label_single1").disabled = false;
    document.getElementById("id_label_single2").disabled = false;
    document.getElementById("id_label_single3").disabled = false;

}

if (document.getElementById("filetype_btn").innerHTML = "選擇檔案類型") {
    document.getElementById("selecterp_btn").disabled = true;
}

let num = [0]
$("id_label_single1").html('');
$('#id_label_single1').select2({

    language: 'zh-tw',
    width: '100%',
    maximizeInputLength: 10,
    minimizeInputLength: 0,
    tags: true,
    multiple: 'multiple',
    data: [
        {
            id: 0,
            text: "Board#"
        },
        {
            id: 1,
            text: "Board num"
        },
        {
            id: 2,
            text: "Board number"
        }
    ]

});
$("id_label_single1").val([0, 1]).trigger('change')

$("id_label_single2").html('');
$('#id_label_single2').select2({

    language: 'zh-tw',
    width: '100%',
    maximizeInputLength: 10,
    minimizeInputLength: 0,
    tags: true,
    multiple: 'multiple',
    data: [
        {
            id: 0,
            text: "type",
        },
        {
            id: 1,
            text: "Status"
        }
    ]
});
$("id_label_single2").val(num).trigger('change')

$("id_label_single3").html('');
$('#id_label_single3').select2({

    language: 'zh-tw',
    width: '100%',
    maximizeInputLength: 10,
    minimizeInputLength: 0,
    tags: true,
    multiple: 'multiple',
    data: [
        {
            id: 0,
            text: ""
        }
    ]
});
$("id_label_single3").val(num).trigger('change');


const baseUrl = 'http://localhost:3000/';
axios.get('/upload_file_option', {
    baseURL: baseUrl
})
    .then(res => {
        console.log(res);
        re_upload(res)
    })
    .catch(err => {
        console.log(err.response);
    })
function re_upload(res) {
    console.log(res.data.data)
    console.log(Object.keys(res.data.data)[0])
    document.getElementById("select_1").innerHTML = Object.keys(res.data.data)[0];
    document.getElementById("select_2").innerHTML = Object.keys(res.data.data)[1];
    document.getElementById("select_re").innerHTML = Object.keys(res.data.data)[0];
    document.getElementById("select_re1").innerHTML = Object.keys(res.data.data)[1];
}

axios.get('/get_key_value_mapping', {
    baseURL: baseUrl
})
    .then(res => {
        console.log(res);
        re_get(res)
    })
    .catch(err => {
        // console.log(err.response);
    })
function re_get(res) {
    console.log(res);
    document.getElementById("select_prl").innerHTML = Object.keys(res.data.data)[0];
    document.getElementById("select_tommy").innerHTML = Object.keys(res.data.data)[1];

    // console.log(res.data.data.configuration_PRL[0].table_version)
    // console.log(res.data.data.configuration_PRL.length)   
    for (let index = 0; index < res.data.data.configuration_PRL.length; index++) {
        console.log(res.data.data.configuration_PRL[index].table_version)
        document.getElementById("tabular_btn").innerHTML = res.data.data.configuration_PRL[index].table_version;
    }
    for (let index = 0; index < res.data.data.configuration_PRL.length; index++) {
        console.log(res.data.data.configuration_PRL[index].cell_type_version)
        document.getElementById("module_btn").innerHTML = res.data.data.configuration_PRL[index].cell_type_version;
    }
    for (let index = 0; index < res.data.data.configuration_PRL.length; index++) {
        console.log(res.data.data.configuration_PRL[index].relation_version)
        document.getElementById("associate_btn").innerHTML = res.data.data.configuration_PRL[index].relation_version;
    }
    for (let index = 0; index < res.data.data.configuration_PRL.length; index++) {
        console.log(res.data.data.configuration_PRL[index].model_name)
        document.getElementById("exampleFormControlInput2").value = res.data.data.configuration_PRL[index].model_name;
    }
}


axios.get('/autosave_key_value_mapping', {
    baseURL: baseUrl
})
    .then(res => {
        console.log(res);
        re_autosave(res)
    })
    .catch(err => {
        console.log(err.response);
    })
function re_autosave(re_autosave) {
    document.getElementById("selecterp_btn").innerHTML = Object.keys()[3];
}

function savefunc() {
    var inputValue = document.getElementById("exampleFormControlInput1").value;
    if (inputValue == null || inputValue == undefined || inputValue == "") {
    } else {
        document.getElementById("selecterp_btn").innerHTML = inputValue;
    }
    var selectvalue = retype;
    // console.log(selectvalue)
    if (selectvalue == null || selectvalue == undefined || selectvalue == "") {
    } else {
        document.getElementById("filetype_btn").innerHTML = selectvalue;
    }
    document.getElementById("addrule_btn").style.display = "none";
    document.getElementById("trash_icon1").style.display = "none";
    document.getElementById("trash_icon2").style.display = "none";
    document.getElementById("trash_icon3").style.display = "none";
    document.getElementById("list3").style.display = "none";
    document.getElementById("tabular_btn").disabled = true;
    document.getElementById("module_btn").disabled = true;
    document.getElementById("select_module").disabled = true;
    document.getElementById("associate_btn").disabled = true;
    // document.getElementById("list8").style.display = "none";
   document.querySelector('.list8').classList.add('d-none')
    
    // console.log(j.classList)
    document.getElementById("nameerp_inp").style.display = "none"
    document.getElementById("selecterp_btn").style.display = "block";
    document.getElementById("selecterp_div").style.display = "block";
    document.getElementById("adderp_btn").style.display = "block";
    document.getElementById("adderp_div").style.display = "block";
    document.getElementById("edit_div").style.display = "block";
    document.getElementById("edit_btn").style.display = "block";
    document.getElementById("checkboxNoLabel").disabled = true;
    document.getElementById("checkboxNoLabe2").disabled = true;
    document.getElementById("checkboxNoLabe3").disabled = true;
    document.getElementById("id_label_single1").disabled = true;
    document.getElementById("id_label_single2").disabled = true;
    document.getElementById("id_label_single3").disabled = true;
    document.getElementById("filetype_btn").disabled = false;
    document.getElementById("selecterp_btn").disabled = false;
    document.getElementById("exampleFormControlInput2").disabled = true;


}

function cancelfunc() {
    document.getElementById("addrule_btn").style.display = "none";
    document.getElementById("trash_icon1").style.display = "none";
    document.getElementById("trash_icon2").style.display = "none";
    document.getElementById("trash_icon3").style.display = "none";
    document.getElementById("list3").style.display = "none";
    document.getElementById("tabular_btn").disabled = true;
    document.getElementById("module_btn").disabled = true;
    document.getElementById("select_module").disabled = true;
    document.getElementById("associate_btn").disabled = true;
    // document.getElementById("list8").style.display = "none";
    document.querySelector('.list8').classList.add('d-none')
    document.getElementById("nameerp_inp").style.display = "none"
    document.getElementById("selecterp_btn").style.display = "block";
    document.getElementById("selecterp_div").style.display = "block";
    document.getElementById("adderp_btn").style.display = "block";
    document.getElementById("adderp_div").style.display = "block";
    document.getElementById("edit_div").style.display = "block";
    document.getElementById("edit_btn").style.display = "block";
    document.getElementById("checkboxNoLabel").disabled = true;
    document.getElementById("checkboxNoLabe2").disabled = true;
    document.getElementById("checkboxNoLabe3").disabled = true;
    document.getElementById("id_label_single1").disabled = true;
    document.getElementById("id_label_single2").disabled = true;
    document.getElementById("id_label_single3").disabled = true;
    document.getElementById("filetype_btn").disabled = false;
    document.getElementById("selecterp_btn").disabled = false;
    document.getElementById("exampleFormControlInput2").disabled = true;

}

