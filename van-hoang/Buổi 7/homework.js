//Bai1: Su dung vong lap for de xuat ra cac so chan tu 2 den 10 
/* for(var i = 1; i < 12; i++) {
    if (i % 2 == 0) {
        console.log(i)
    } 
} */

/* Bai2:
var a = parseInt(prompt("Nhập số a"));
if (a > 100){
    console.log("Da nhap thanh cong")
} else a = parseInt(prompt("Nhap a"))
*/

/*
Bai3:
var a = 100;
var b = 40;
function minFunct(){
    if(a>b){
        console.log("So lon hon la: ", a)
    }else console.log("So lon hon la: ", b)
}
minFunct() */

/*
Bai4:
var a = parseInt(prompt("Nhập số a"));
var b = parseInt(prompt("Nhập số b"));
var phepTinh = parseInt(prompt("Nhap phepTinh"));
function tinhToan() {
    function tong() {
        console.log(a+b)
    }    
    function hieu() {
        console.log(a-b)
    }    
    function nhan() {
        console.log(a*b)
    }    
    function chia() {
        console.log(a/b)
    }    

    switch(phepTinh) {
        case 1:
            phepTinh = 1
            tong()
            break;
        case 2:
            phepTinh = 2
            hieu()
            break;
        case 3:
            phepTinh = 3
            chia()
            break;
        default:
            phepTinh = 4
            nhan()
            break;
    }
}
tinhToan()

*/

/*
//Bai 5:
var x = parseInt(prompt("Nhap so can kiem tra"))
function soNguyenTo(){
    switch(x){
        case 1:
            x = 1
            console.log("x la so nguyen to")
            break;
        case 2:
            x = 2
            console.log("x la so nguyen to")
            break;
        case 3:   
            x = 3
            console.log("x la so nguyen to")
            break;
        default: 
            for (i=2; i<x;i++){
                if(x%i == 0){
                    console.log("x khong la so nguyen to")
                }else console.log("x la so nguyen to")
            }
    }
}
soNguyenTo()
*/