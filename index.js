

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
    let contentHTML = '';
    for(let i = 1; i <= 10; i++) {

      
       const  tich = i * n;
        let content = `${n} x ${i} = ${tich} </br>`;

        contentHTML+=content;

    
       
        
        document.querySelector("#bangCuuChuong").innerHTML=contentHTML

    }
}

//Bài 8
function chiaBai(){
    let players = [[], [], [], []];
    let cards = ["4K", "KH", "5C", "KA", "QH", "KD", "2H", "10S", "AS", "7H", "9K", "10D"];
    let contentHTML = "";
    for(let i=0; i<players.length; i++){
        for(let j=i; j< cards.length; j=j+4){
            players[i].push(cards[j]);
        }
        contentHTML+=` Player ${i+1} = ${players[i]} <br>`;
    }
    document.getElementById("share").innerHTML = contentHTML;


}


//Bài 9
function tim(){
    let m=document.getElementById("nhapSoTong").value*1; 
    let n=document.getElementById("nhapSoChan").value*1; 

    let soChanGa = (4 * m - n) / 2;
    let soChanCho = (n - 2 * m) / 2;

    document.querySelector("#soGa").innerHTML=`<h2 class="mt-5 text-danger text-center">
    Số gà là: ${soChanGa}</h2>`

    document.querySelector("#soCho").innerHTML=`<h2 class="mt-5 text-danger text-center">
    Số chó là: ${soChanCho}</h2>`

}
//Bài 10

function angle() { 
    let minute=document.getElementById("nhapSoPhut").value*1; 
    console.log("🚀 ~ file: index.js:131 ~ angle ~ minute", minute)
    let hour=document.getElementById("nhapSoGio").value*1; 
    console.log("🚀 ~ file: index.js:133 ~ angle ~ hour", hour)
   //60 phút kim phút quay được 360 độ =>1 phút quay được 360/60 = 6 độ
   //12 giờ kim giờ quay được 360 độ=> 1 giờ quay được 360/12-30 độ
   // 1 phút kim giờ quay được 0.5 độ 
   // A=|kim phút - kim giờ|
   /*   =|m*6- 0.5(h*60+m)|

   */

   let goc=Math.abs(minute*6 -(0.5*(hour*60+minute)))
   console.log("🚀 ~ file: index.js:143 ~ angle ~ goc", goc)
  
    
  
  document.getElementById("tinhDo").innerHTML = `<h2 class="mt-5 text-danger text-center">
 Góc lệch giữa kim giờ và kim phút là:  ${goc}</h2>`
   
    }
 
   
