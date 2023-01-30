

//Bài tập 2
    var arr=[];

    var themSo=function(){
        const n= document.getElementById('txt-number').value*1;
    arr.push(n);
    document.querySelector("#result").innerHTML=`<h2 class="mt-5 text-danger text-center">
    Mảng gồm:
    ${arr} </h2>`
    }  

    const isPrime = num => {
        if(num<2) return 0;
        for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if(num % i === 0) return false;
        }
        return num > 1;
    }
var arr2=[];
    function timSNT(){
    
    for(var i=0;i<arr.length;i++){
        if(isPrime(arr[i])){
            arr2.push(arr[i])
            document.querySelector("#soNguyenTo").innerHTML=`<h2 class="mt-5 text-danger text-center">
    Các số nguyên tố là: 
    ${arr2} </h2>`
        }
    }
    arr2=[];

    }

//Bài tập 3
function tinhTong(){
    let n=document.getElementById("nhapN").value*1;
    s=0;
    for(let i=2;i<=n;i++){
        s=+i;
    }
    document.querySelector("#sum").innerHTML=`<h2 class="mt-5 text-danger text-center">
   Tổng là: 
    ${s+2*n} </h2>`
}

//Bài tập 4
var arr4=[];
function timUoc(){
    let n=document.getElementById("nhapSoN").value*1;
    for(let i=n;i>0;i--){
        if(n%i==0){
            arr4.push(i);
        }
    }
    document.querySelector("#uoc").innerHTML=`<h2 class="mt-5 text-danger text-center">
    Ước là: 
     ${arr4} </h2>`
     arr4=[];
}
//Bài tập 5
function daoNguocSo()
{
    let num=document.getElementById("nhapSoNguyenDuong").value*1;
    const reverse = (num) => parseInt(String(num)
    .split("")
    .reverse()
    .join(""), 10);
    document.querySelector("#daoNguoc").innerHTML=`<h2 class="mt-5 text-danger text-center">
Số đảo ngược là: 
 ${reverse(num)} </h2>`
}
//Bài tập 6

function timSoNguyenDuongLonNhat(){
    let s=0;
    x=0;
    do{
        x=x+1;
        s=s+x;

    }while(s+x+1<100)
    document.querySelector("#timX").innerHTML=`<h2 class="mt-5 text-danger text-center">
Số X lớn nhất là: 
 ${x} </h2>`
 return 0;
}

//Bài tập 7

function bangCuuChuong(){
    let n=document.getElementById("nhapSoBatKy").value*1; 
    for(let i = 1; i <= 10; i++) {

        // multiply i with number
        const result = i * n;
    
        // display the result
        console.log(`${n} * ${i} = ${result}`);
        document.querySelector("#timX").innerHTML=`<h2 class="mt-5 text-danger text-center">
</h2>`
    }
}