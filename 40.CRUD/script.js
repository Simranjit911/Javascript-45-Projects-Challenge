let id = ""
function managedata() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    if (name == "" || email == "") {
        alert("Enter data")
    } else if (id == "") {
        let arr = JSON.parse(localStorage.getItem("name"))
        let arr2 = JSON.parse(localStorage.getItem("email"))
        if(arr==null || arr2==null){
            let data=[name]
            localStorage.setItem('name',JSON.stringify(data))
        }
    }else{
        arr.push(name)
        localStorage.setItem('name',JSON.stringify(arr))
    }
}
function select() {

}
function deletedata() {

}
function edit() {

}


// let template=
// ` <tr>
// <td>${nam}</td>
// <td>${email}</td>
// <td><button class="del">Delete</button> <button class="update">Update</button></td>
// </tr>`
// table.innerHTML += template