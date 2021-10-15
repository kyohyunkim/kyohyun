function detail(){
    let num = localStorage.num;

    fetch('./data/data.json')
    .then(res=>res.json())
    .then(data => {
        dataFind(data);
    });
    function dataFind(works){
        works.forEach(data => {
            if(data.num == num) view(data) ;
        });    
    }

    
    function view(work){
        //좌측 사이드 메뉴 svg / on off
        const sideMenu = document.querySelectorAll('.work-menu li');
        const svgCircle = document.querySelectorAll('.work-menu svg');
        // console.log(svgCircle);
        const bottombtn = document.querySelectorAll('.btM ul li');
    
        svgOnOff();



        sideMenu.forEach((li) =>{
            
            li.addEventListener('click',function(e){
                e.preventDefault();
                localStorage.num = this.dataset.num;
                detail();
                svgOnOff();
            })
        })

        bottombtn.forEach((btm) =>{
            
            btm.addEventListener('click',function(e){
                e.preventDefault();
                localStorage.num = this.dataset.num;
                detail();
                window.scrollTo(0,0);
            })
            
        })
   



        function svgOnOff(){
            if(work.num == "1"){
                svgCircle[0].classList.add('active');
                svgCircle[1].classList.remove('active');
                svgCircle[2].classList.remove('active');
                svgCircle[3].classList.remove('active');
            }else if(work.num == "2"){
                svgCircle[0].classList.remove('active');
                svgCircle[1].classList.add('active');
                svgCircle[2].classList.remove('active');
                svgCircle[3].classList.remove('active');
            }else if(work.num == "3"){
                svgCircle[0].classList.remove('active');
                svgCircle[1].classList.remove('active');
                svgCircle[2].classList.add("active");
                svgCircle[3].classList.remove('active');
            }else if(work.num == "4"){
                svgCircle[0].classList.remove('active');
                svgCircle[1].classList.remove('active');
                svgCircle[2].classList.remove("active");
                svgCircle[3].classList.add('active');
            }
        }
        
        // mobill 반응형 일때 스타일
        const mobill = window.matchMedia("screen and (max-width: 767px)");
        const nullbox = document.querySelector('.null p');
        const btM = document.querySelectorAll(".btM ul li");
        const btM1 = document.querySelector(".btM ul li:nth-of-type(1) .btname");
        const btM2 = document.querySelector(".btM ul li:nth-of-type(2) .btname");
        const btM3 = document.querySelector(".btM ul li:nth-of-type(3) .btname");
        const btM4 = document.querySelector(".btM ul li:nth-of-type(4) .btname");
        let btmText = ['GUGUS','KOLON','EYE','DROP'];

        if (mobill.matches) {
            nullbox.innerHTML = work.title;

                if(work.title == "gugus" && work.num == "1"){
                    btM[0].classList.add('active');
                    btM[1].classList.remove('active');
                    btM[2].classList.remove('active');
                    btM[3].classList.remove('active');
                    btM1.innerHTML = `${btmText[0]}`;
                    btM2.innerHTML = `${btmText[1]}`;
                    btM3.innerHTML = `${btmText[2]}`;
                    btM4.innerHTML = `${btmText[3]}`;
                }else if(work.title == "kolon" && work.num == "2"){
                    btM[0].classList.remove('active');
                    btM[1].classList.add('active');
                    btM[2].classList.remove('active');
                    btM[3].classList.remove('active');
                    btM1.innerHTML = `${btmText[0]}`;
                    btM2.innerHTML = `${btmText[1]}`;
                    btM3.innerHTML = `${btmText[2]}`;
                    btM4.innerHTML = `${btmText[3]}`;
                }else if(work.title == "eye" && work.num == "3"){
                    btM[0].classList.remove('active');
                    btM[1].classList.remove('active');
                    btM[2].classList.add('active');
                    btM[3].classList.remove('active');
                    btM1.innerHTML = `${btmText[0]}`;
                    btM2.innerHTML = `${btmText[1]}`;
                    btM3.innerHTML = `${btmText[2]}`;
                    btM4.innerHTML = `${btmText[3]}`;
                }else if(work.title == "drop" && work.num == "4"){
                    btM[0].classList.remove('active');
                    btM[1].classList.remove('active');
                    btM[2].classList.remove('active');
                    btM[3].classList.add('active');
                    btM1.innerHTML = `${btmText[0]}`;
                    btM2.innerHTML = `${btmText[1]}`;
                    btM3.innerHTML = `${btmText[2]}`;
                    btM4.innerHTML = `${btmText[3]}`;
                }
        }
        // 모바일 일때만 스타일 변경해주기
        let contents = document.querySelector('.contents');
        let title = document.querySelector('.title_name');
        let screen = document.querySelectorAll('.screen-img');
        let pcLink = document.querySelector('.page-link');
        let mobillLink = document.querySelector('.page-link-mobill');
        
        const macImg = document.querySelector('.mac img');
        const mobImg1 = document.querySelector('.mobill1 img');
        const mobImg2 = document.querySelector('.mobill2 img');

        const elLink = document.querySelector('.link');

        const work_cp = document.querySelector('.work_cp');
        const work_cp_mobill = document.querySelector('.work_cp_mobill');

        const mobcon = document.querySelector('.contents');

        contents.innerHTML = work.contents;
        title.innerHTML = work.title;
        screen.forEach((mb) =>{
            mb.src = `./admin/files/${work.screen}`;
        })

        pcLink.innerHTML = work.detail;
        pcLink.href = work.detail;

        if(work.pctype == "mobill"){

            mobillLink.innerHTML = '';

            macImg.classList.add('active');
            mobImg1.classList.add('active');
            mobImg2.classList.add('active');

            work_cp.classList.add('active');
            work_cp_mobill.classList.add('active');

            mobillLink.classList.add('active');
            pcLink.classList.add('active');

            // mobillLink.href = work.detail;
            mobillLink.innerHTML = work.detail;

            //모바일 컨텐츠 마진값
            const tabelet = window.matchMedia("screen and (min-width: 768px) and (max-width: 1024px)");
            const mobill = window.matchMedia("screen and(max-width:767px)");
            if (tabelet.matches) {
                mobcon.style = "margin-top:800px";
            }
            
            if (mobill.matches) {
                mobcon.style = "margin-top:0";
            }

        }else{
            pcLink.innerHTML = '';
            macImg.classList.remove('active');
            mobImg1.classList.remove('active');
            mobImg2.classList.remove('active');

            work_cp.classList.remove('active');
            work_cp_mobill.classList.remove('active');

            mobillLink.classList.remove('active');
            pcLink.classList.remove('active');

            pcLink.href = work.detail;

            pcLink.innerHTML = work.detail;


        }
    }
}
detail();


const atag = document.querySelectorAll('.work-menu ul li');

atag.forEach((el)=>{
el.addEventListener('click',function(){
    setTimeout(detail,10);
})
})


// location.href = 'detail.html';

//좌측 사이즈 메뉴 버튼 온오프




