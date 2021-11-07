document.getElementById("select_1").addEventListener("click", function () {
    document.getElementById("filetype_btn").innerHTML = "PRL"
});
document.getElementById("select_prl").addEventListener("click", function () {
    document.getElementById("selecterp_btn").innerHTML = "configuration_PRL"
});
document.getElementById("select_tommy").addEventListener("click", function () {
    document.getElementById("selecterp_btn").innerHTML = "configuration_TOMMY"
});


function show_func() {
    let l = document.querySelector('.list4')
    l.classList.remove('d-none')
    document.getElementById("addrule_btn").style.display = "none";
    console.log(l.classList)
    document.getElementById("list5").style.display = "block";
    document.getElementById("trash_icon1").style.display = "none";
    document.getElementById("list6").style.display = "block";
    document.getElementById("trash_icon2").style.display = "none";
    document.getElementById("list7").style.display = "block";
    document.getElementById("trash_icon3").style.display = "none";
    document.getElementById("edit_btn").style.display = "block";
}

function adderp_func() {
    let l = document.querySelector('.list4')
    l.classList.remove('d-none')
    console.log(l.classList)
    document.getElementById("list5").style.display = "block";
    document.getElementById("list6").style.display = "block";
    document.getElementById("list7").style.display = "block";
    document.getElementById("addrule_btn").style.display = "block";
    document.getElementById("adderp_div").style.display = "none";
    let a = document.querySelector('.list8')
    a.classList.remove('d-none')
    console.log(a.classList)
    document.getElementById("nameerp_inp").style.display = "block";
    document.getElementById("selecterp_div").style.display = "none";
    document.getElementById("edit_div").style.display = "none";
    document.getElementById("nameerp_div").style.display = "block";
}

document.getElementById("select_tabular").addEventListener("click", function () {
    document.getElementById("tabular_btn").innerHTML = "table_version"
});
document.getElementById("select_module").addEventListener("click", function () {
    document.getElementById("module_btn").innerHTML = "cell_type_version"
});
document.getElementById("select_associate").addEventListener("click", function () {
    document.getElementById("associate_btn").innerHTML = "relation_version"
});

function edit_func(){
    document.getElementById("adderp_div").style.display = "none";
    document.getElementById("edit_div").style.display = "none";
    document.getElementById("filetype_btn").disabled=true;
    document.getElementById("selecterp_btn").disabled=true;
    document.getElementById("list3").style.display = "block";
    document.getElementById("adderp_btn").style.display = "none";
    document.getElementById("nameerp_div").style.display = "none";

}