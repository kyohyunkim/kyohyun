    // 우측 작은이미지 슬라이더 클릭시 큰 이미지로 출력
 
    const slideImg = document.querySelectorAll('.slidelist li');
    const slideImg2 = document.querySelectorAll('.slidelist2 li');
    const slideImg3 = document.querySelectorAll('.slidelist3 li');
    const slideImg4 = document.querySelectorAll('.slidelist4 li');
    const slideImg5 = document.querySelectorAll('.slidelist5 li');
    const big = document.getElementById("bigreversal");
    const bigcho = document.getElementById("bigchoco");
    const bigsticker = document.getElementById("bigsticker");
    const bigheadal = document.getElementById("bigheadal");
    const bigillust = document.getElementById("bigillust");
    const bigphoto = document.querySelector('.big-photo')
    let aaa = 0;
    let reversmalImgs = [
        'img/ban8/reversal/ph1.jpg',
        'img/ban8/reversal/ph2.jpg',
        'img/ban8/reversal/ph3.jpg',
        'img/ban8/reversal/ph4.jpg',
        'img/ban8/reversal/dog.png',
        'img/ban8/reversal/bear.png',
        'img/ban8/reversal/pig.png',
        'img/ban8/reversal/ring.png',
        'img/ban8/reversal/cow.png',
        'img/ban8/reversal/egg.png',
        'img/ban8/reversal/been.png',
        'img/ban8/reversal/ham.png'
    ]
    let chocosmallImags = [
        'img/ban8/choco/cho_ph1.jpg',
        'img/ban8/choco/cho_ph2.jpg',
        'img/ban8/choco/cho_ph3.jpg',
        'img/ban8/choco/cho_ph4.jpg',
        'img/ban8/choco/cho1.png',
        'img/ban8/choco/cho2.png'
    ]
    let stickersmallImags= [
        'img/ban8/funnysticker/sticker1.jpg',
        'img/ban8/funnysticker/sticker2.jpg',
        'img/ban8/funnysticker/sticker3.jpg',
        'img/ban8/funnysticker/sticker4.jpg',
        'img/ban8/funnysticker/sticker5.jpg'
    ]
    let headalsmallImags = [
        'img/headal/headal1.png',
        'img/headal/headal2.png',
        'img/headal/headal3.png',
        'img/headal/headal4.png',
        'img/headal/headal5.png',
        'img/headal/headal6.png',
        'img/headal/headal7.png',
    ]
    let illustsmallImage = [
        "img/lego.png",
        "img/rion.png",
        "img/kaus.png",
        "img/illust/basket.png",
        "img/illust/butterfly.png",
    ]
    // 반전봉투 이벤트
    for(let i=0; i<slideImg.length; i++){
        slideImg[i].addEventListener('click',function(){
            aaa = i;
            big.src = reversmalImgs[aaa];
            bigphoto.classList.add('active')
        });
    }
    // 초콜릿 이벤트
    for(let i=0; i<slideImg2.length; i++){
        slideImg2[i].addEventListener('click',function(){
            aaa = i;
            bigcho.src = chocosmallImags[aaa];
            bigphoto.classList.add('active')
        });
    }
    // 스티커 이벤트
    for(let i=0; i<slideImg3.length; i++){
        slideImg3[i].addEventListener('click',function(){
            aaa = i;
            bigsticker.src = stickersmallImags[aaa];
            bigphoto.classList.add('active')
        });
    }
    // 해달이 이벤트
    for(let i=0; i<slideImg4.length; i++){
        slideImg4[i].addEventListener('click',function(){
            aaa = i;
            bigheadal.src = headalsmallImags[aaa];
            bigphoto.classList.add('active')
        });
    }
    // 지구사랑 이벤트
    sec6.addEventListener('click',function(){
        bigphoto.classList.add('active')
    });
    // 일러러스 이벤트
    for(let i=0; i<slideImg5.length; i++){
        slideImg5[i].addEventListener('click',function(){
            aaa = i;
            bigillust.src = illustsmallImage[aaa];
            bigphoto.classList.add('active')
        });
    }
    //----------------------------------------------------------------------------

    // 초콜릿 브레이킹
    const click1 = document.getElementById('click1');
    const click2 = document.getElementById('click2');
    const choco1 = document.querySelector('.chococrush1');
    const choco2 = document.querySelector('.chococrush2');

    click1.addEventListener('click',function(){
        click1.classList.toggle('active');
        click2.classList.toggle('active');
        choco1.classList.toggle('active');
        choco2.classList.toggle('active');
    })
    click2.addEventListener('click',function(){
        click1.classList.toggle('active');
        click2.classList.toggle('active');
        choco1.classList.toggle('active');
        choco2.classList.toggle('active');
    })
    // 해달이 비행기
    const startBtn = document.querySelector('.start');
    const go1 = document.querySelector('.go1');

    startBtn.addEventListener('click',function(){
        go1.classList.add('active');
    })
    // 지구사랑 쓰레기통
    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }
    function dragOver(ev) {
        ev.preventDefault();
    }
    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }
    // 일러스트 레고 빌드
    const build = document.querySelector('.build');
    const buildAni1 = document.querySelector('.buildAni1');
    const buildAni2 = document.querySelector('.buildAni2');

    build.addEventListener('click',function(){
        buildAni1.classList.add('active');
        buildAni2.classList.add('active');
    })

    const backBtn = document.querySelector('.backhistory')

    function back(){
        location.reload();
    }

    //우측 섹션 바꾸기
    winHei = window.scrollY;
    const reversal = document.querySelector('.reversal');
    const works = document.querySelector('.sec-1');
    console.log();
    window.addEventListener('scroll',function(){
        if(localStorage.num == "work"){
            let winHei = window.scrollY;
            // console.log(window.scrollY);

            if(0 <= winHei && 1400 >= winHei){
                //반전봉투
                this.bigreversal.classList.add('active');
                this.bigchoco.classList.remove('active');

                this.sec1.classList.add('active');
                this.sec2.classList.remove('active');
                this.sec5.classList.remove('active');

                // this.ban8title.classList('active');

            }else if(1400 < winHei && 2300 >= winHei){
                //초콜릿
                this.bigchoco.classList.add('active');
                this.bigreversal.classList.remove('active');
                this.bigsticker.classList.remove('active');

                this.sec1.classList.remove('active');
                this.sec2.classList.add('active');
                this.sec3.classList.remove('active');
                this.sec5.classList.remove('active');

            }else if(2300 < winHei && 3500 >= winHei){
                //스티커
                this.bigsticker.classList.add('active');
                this.bigchoco.classList.remove('active');
                this.bigheadal.classList.remove('active');

                this.sec2.classList.remove('active');
                this.sec3.classList.add('active');
                this.sec4.classList.remove('active');
                this.sec5.classList.remove('active');

                this.ban8title.classList.remove('active');
                this.headaltitle.classList.remove('active');

            }else if(3500 < winHei && 5900 >= winHei){
                //해달
                this.bigheadal.classList.add('active');
                this.bigsticker.classList.remove('active');
                this.bigearthlove.classList.remove('active');
                
                this.sec6.classList.remove('active');
                this.sec5.classList.remove('active');
                this.sec4.classList.add('active');
                this.sec3.classList.remove('active');
                this.smallphoto.classList.remove('active');

                this.ban8title.classList.add('active');
                this.headaltitle.classList.add('active');
                this.earthtitle.classList.remove('active');

            }else if(5900 < winHei && 8200 >= winHei){
                //지구사랑
                const tabelet = window.matchMedia("screen and (min-width: 1025px)");
                if (tabelet.matches) {
                this.smallphoto.classList.add('active');
                }

                this.bigearthlove.classList.add('active');
                this.bigheadal.classList.remove('active');
                this.bigillust.classList.remove('active');
                
                this.sec4.classList.remove('active');
                this.sec5.classList.remove('active');
                this.sec6.classList.add('active');

                this.headaltitle.classList.remove('active');
                this.earthtitle.classList.add('active');
                this.illusttitle.classList.remove('active');
            }else if(8200 < winHei){
                this.bigearthlove.classList.remove('active');
                this.bigillust.classList.add('active');

                this.smallphoto.classList.remove('active');
                this.sec4.classList.remove('active');
                this.sec5.classList.add('active');
                this.sec6.classList.remove('active');

                this.earthtitle.classList.remove('active');
                this.illusttitle.classList.add('active');
            }
        }
    })
    // 8300
    //좌측 첫번째 사이드 메뉴 호버

    const li1 = document.getElementById('li1');
    const li2 = document.getElementById('li2');
    const li3 = document.getElementById('li3');
    const li4 = document.getElementById('li4');
    li1.classList.add('active');
    window.addEventListener('scroll',function(){
        let winHei = window.scrollY;

        if(0 <= winHei && 3500 >= winHei){
            li1.classList.add('active');
            li2.classList.remove('active');
        }else if(3500 < winHei && 5900 >= winHei){
            li1.classList.remove('active');
            li2.classList.add('active');
            li3.classList.remove('active');
        }else if(5900 < winHei && 8200 >= winHei){
            li2.classList.remove('active');
            li3.classList.add('active');
            li4.classList.remove('active');
        }else if(8200 < winHei){
            li3.classList.remove('active');
            li4.classList.add('active');
        }

    })



    const companyM = document.querySelector('.companyM');
    const inmenu = document.querySelector('.inmenu');
    const workmenu = document.querySelector('.work-menu');
    companyM.addEventListener('mouseover',function(){
        inmenu.classList.add('active');
    })


    workmenu.addEventListener('mouseleave',function(){
        inmenu.classList.remove('active');
    })
    inmenu.addEventListener('click',function(){
        inmenu.classList.add('active');
    })
    companyM.addEventListener('click',function(){
        companyM.classList.toggle('active');
    })
    
    //------------tabelet---------------------------------------------------------

    const tabelet = window.matchMedia("screen and (max-width: 1024px)");

    if (tabelet.matches) {
        const workmenu = document.querySelector('.work-menu');
        const myphoto = document.querySelector('.my-photo');
        const sec6 = document.querySelector('.small_section6');
        myphoto.before(workmenu);
        
        
        bigphoto.addEventListener('click',function(){
            bigphoto.classList.remove('active');
        })

    }

    const mobill = window.matchMedia("screen and (max-width: 767px)");

    if (mobill.matches) {
        const photo = document.querySelector('.earth_photo img');

        photo.src = "./img/earthlove/earthloveposter1.png";
    }

