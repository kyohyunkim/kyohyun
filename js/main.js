let num = location.hash.substr(1);

fetch('./data/data.json')
.then(res=>res.json())
.then(data => {
    dataFind(data);
});
function dataFind(works){
    // console.log(works);
    const gugus = document.querySelectorAll('.gugus_link');
    const kolon = document.querySelectorAll('.kolon_link');
    const eye = document.querySelectorAll('.eye_link');
    const drop = document.querySelectorAll('.drop_link');


    gugus.forEach((link)=>{
        link.addEventListener('click',function(e){
            e.preventDefault();
            pageload('./detail.html');
            localStorage.num = 1;
        })
    })

    kolon.forEach((link)=>{
        link.addEventListener('click',function(e){
            e.preventDefault();
            pageload('./detail.html');
            localStorage.num = 2;
        })
    })

    eye.forEach((link)=>{
        link.addEventListener('click',function(e){
            e.preventDefault();
            pageload('./detail.html');
            localStorage.num = 3;
        })
    })

    drop.forEach((link)=>{
        link.addEventListener('click',function(e){
            e.preventDefault();
            pageload('./detail.html');
            localStorage.num = 4;
        })
    })

}


//메인 이미지 변경
const myimg1 = document.querySelector('.myimg1');
const myimg2 = document.querySelector('.myimg2');
const myimg3 = document.querySelector('.myimg3');
const nextBtn = document.querySelector('.next');
const leftBtn = document.querySelector('.next .left');
const rightBtn = document.querySelector('.next .right');
const nextP1 = document.querySelector('.next p:nth-of-type(1)');
const nextP2 = document.querySelector('.nextp:nth-of-type(2)');
const nextP3 = document.querySelector('.next p:nth-of-type(3)');


let a = -80;
let b = 1;
let c = 80;
rightBtn.addEventListener('click',function(){
    if(a >= 80){
        a = -80;
    }
    b++;
    a+=80;
    nextBtn.style = `transform:translateX(${a}%)`;
    if(a == 0){
        myimg1.classList.add('active');
        myimg2.classList.add('active');
        nextP3.innerHTML = '';
        nextP1.innerHTML = '2#';
        nextP1.innerHTML = '';
    }else if(a == 80){
        myimg2.classList.remove('active');
        myimg3.classList.add('active');
        nextP1.innerHTML = '#3';
    }
})

leftBtn.addEventListener('click',function(){
    if(a <= -80){
        a = 80;
    }
    b--;
    a-=80;
    nextBtn.style = `transform:translateX(${a}%)`;
    if(a == 0){
        myimg3.classList.remove('active');
        myimg2.classList.add('active');
        nextP3.innerHTML = '';
        nextP1.innerHTML = '2#';
        nextP1.innerHTML = '';
    }else if(a == -80){
        myimg2.classList.remove('active');
        myimg1.classList.remove('active');
        nextP3.innerHTML = '#1';
    }
})


//메인 우측 1,2,3 버튼
const count = document.querySelectorAll('.count p');
const h4 = document.querySelectorAll('h4');
const detail = document.querySelectorAll('.detail');

let ccc=0;
count[0].classList.add('active');
h4[ccc].classList.add('active');
detail[ccc].classList.add('active');
for(let i=0; i<count.length; i++){
    count[i].addEventListener('click',function(){
        h4[ccc].classList.remove('active');
        detail[ccc].classList.remove('active');
        count[ccc].classList.remove('active');
        setTimeout(() => {
            h4[i].classList.add('active');
            detail[i].classList.add('active');
        }, 600);
        count[i].classList.add('active');
        ccc=i;
    })
}


//워크스페이스 gugus 토글 버튼
const shopBtn = document.querySelectorAll('.shop p');
const bag = document.querySelectorAll('.bag p');
let aaa = 0;
for(let i=0; i<shopBtn.length; i++){
    shopBtn[i].addEventListener('click',function(){
            shopBtn[aaa].classList.remove('active');
            bag[aaa].classList.remove('active');
            shopBtn[i].classList.add('active');
            bag[i].classList.add('active')
            aaa = i;
    })
}

//eye 기능
var pc = window.matchMedia("screen and (min-width: 1025px)");
if (pc.matches) {
    
const main = document.querySelector('.index_main');

function rotate (event) 
{
    const elImg = document.querySelector('.svg-1');
    const x =event.clientX;
    const y = event.clientY;
    const w = window.innerWidth/2;
    const h = window.innerHeight/2;
    const kyo = x - w;
    const m = y - h;
    const img1 = (kyo / w)*30;
    const img2 = (m / h)*30;

        elImg.style.transform = `translateY(${img2}px) translateX(${img1}px)`;
}
main.addEventListener("mousemove", function (event){
	rotate (event)
});

}else{
    const elEyeball = document.querySelector('.svg-1');

    let pos = {y:0, y2:0, state: '', eyeMove: true}
    let bbb = 0;

    window.addEventListener('scroll',function(){

        if(pos.eyeMove){
            elEyeball.style.transform = `translateX(${bbb}px)`;
            bbb += 1.5;
            if(bbb == 12) pos.eyeMove = false;
        }else{
            elEyeball.style.transform = `translateX(${bbb}px)`;
            bbb -= 1.5;
            if(bbb == -12) pos.eyeMove = true;
        }

    })

}

const mobill = window.matchMedia("screen and (max-width: 767px)");
const right = document.querySelector('.right');
const left = document.querySelector('.left');

if (mobill.matches) {
    // console.log(left);
    left.src = "img/Top2.svg";
    right.src = "img/Top2.svg";
}else{
    left.src = "img/Top.svg";
    right.src = "img/Top.svg";
}

