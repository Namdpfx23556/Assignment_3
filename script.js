"use strict"

const view = document.querySelectorAll('.view');
const thongTin = document.querySelectorAll('.thongTin')
const input =  document.querySelector('input');
const message = document.querySelector('.message')
const submit = document.querySelector('.submit');
const xacThuc = document.querySelector('.xac-thuc');
const info = document.querySelector('.info');
const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

submit.addEventListener('click', function() {
    const email = input.value;
    console.log(email);
    if (!regex.test(email)) { 
    input.classList.add('is-invalid');
    alert('Email bạn nhập không hợp lệ!!!')
    message.textContent = 'ví dụ:NguyenvanA@gmail.com';
    input.focus();
}
    else{ 
        info.classList.remove('hidden');
        xacThuc.classList.add('hidden');
} 

})

// làm View More cho phần thông tin nghề nghiệp job-info

for (let i=0;i<view.length;i++) {
    view[i].addEventListener('click', function() {
            if (thongTin[i].classList.contains('hidden')) {
                thongTin[i].classList.remove('hidden');
                view[i].textContent = '▲ VIEW LESS'
            } else {
                thongTin[i].classList.add('hidden');
                view[i].textContent = '▼ VIEW MORE'
            }
        } );
}


// Làm nut menu cho phần navbar
const btnMenu = document.querySelector('.dropdownbtn');
const dropdownContent = document.querySelector('.dropdown-content');

btnMenu.addEventListener('click', function() {
    if (dropdownContent.classList.contains('hiddenMenu')){
    dropdownContent.classList.remove('hiddenMenu');}
    else {dropdownContent.classList.add('hiddenMenu')}
})



