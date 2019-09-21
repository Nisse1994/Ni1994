/*const toggleBtn = document.querySelector('.toggle-btn'),
sidebar = document.getElementById("sidebar");
toggleBtn.addEventListener('click', function(){
    sidebar.classList.toggle('active')
}) */
let toggleBtn = document.querySelector('.toggle-btn')
let sidebar = document.querySelector('#sidebar')
let check = true
function btnChange() {
    if (check == true) {
        sidebar.style.cssText="margin-left: 250px"
        check=false
    }
    else {
        sidebar.style.cssText="margin-left: -250px"
        check=true
    }
}



