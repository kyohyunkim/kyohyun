$('header').load('inc.html header > .head', function(){


        const msvgB1 = document.querySelector('.menu ul li:nth-of-type(1)');
        const msvgB2 = document.querySelector('.menu ul li:nth-of-type(2)');
        const msvgB3 = document.querySelector('.menu ul li:nth-of-type(3)');

        const msvgBall1 = document.querySelector('.menu ul li:nth-of-type(1) circle:nth-of-type(2)');
        const msvgBall2 = document.querySelector('.menu ul li:nth-of-type(2) circle:nth-of-type(2)');
        const msvgBall3 = document.querySelector('.menu ul li:nth-of-type(3) circle:nth-of-type(2)');

        const mainchange = document.querySelector('body');

        
        msvgBall1.classList.add('active');
        msvgBall2.classList.remove('active');
        msvgBall3.classList.remove('active');


            msvgB1.addEventListener('click',function(e){
                    e.preventDefault();
                    
                    msvgBall1.classList.add('active');
                    msvgBall2.classList.remove('active');
                    msvgBall3.classList.remove('active');
                    mainchange.classList.remove('active');
                    localStorage.num = "index";
                    setTimeout(() => {
                        pageload('./main.html',this.dataset.num);
                    }, 500);
            })
            msvgB2.addEventListener('click',function(e){
                    e.preventDefault();

                    msvgBall3.classList.remove('active');
                    msvgBall2.classList.add('active');
                    msvgBall1.classList.remove('active');
                    mainchange.classList.remove('active');
                    localStorage.num = "work";
                    setTimeout(() => {
                        pageload('./work.html', this.dataset.num);
                    }, 500);
            })
            msvgB3.addEventListener('click',function(e){
                e.preventDefault();
                msvgBall3.classList.add('active');
                msvgBall2.classList.remove('active');
                msvgBall1.classList.remove('active');
                mainchange.classList.remove('active');
                localStorage.num = "about";
                setTimeout(() => {
                    pageload('./about.html', this.dataset.num);
                }, 500);
            })

            var mql = window.matchMedia("screen and (max-width: 767px)");
            
            const head = document.querySelector('.head');
            if (mql.matches) {
                // console.log("화면의 너비가 767px 보다 작습니다.");
                window.addEventListener('scroll',function(){
                    if(283 < this.window.scrollY){
                        head.style = "background-color:#fffbee";
                    }else{
                        head.style = "background-color:none";
                    }
                })
            } else {
                // console.log("화면의 너비가 767px 보다 큽니다.");
            }

            const elBuger = document.querySelector('.menu-trigger');
            const elNav = document.querySelector('.nav');
            elBuger.addEventListener('click',function(){
                this.classList.toggle('active-1');
                elNav.classList.toggle('active');
            })

            const navBtn1 = document.querySelector('.navLi li:nth-of-type(2)');
            const navBtn2 = document.querySelector('.navLi li:nth-of-type(3)');
            const navBtn3 = document.querySelector('.navLi li:nth-of-type(4)');
        
            navBtn1.addEventListener('click',function(){
                elNav.classList.remove('active');
                elBuger.classList.remove('active-1');
                setTimeout(() => {
                    pageload('./main.html', this.dataset.num);
                }, 500);
            })
            navBtn2.addEventListener('click',function(){
                elNav.classList.remove('active');
                elBuger.classList.remove('active-1');
                setTimeout(() => {
                    pageload('./work.html', this.dataset.num);
                }, 500);
            })
            navBtn3.addEventListener('click',function(){
                elNav.classList.remove('active');
                elBuger.classList.remove('active-1');
                setTimeout(() => {
                    pageload('./about.html', this.dataset.num);
                }, 500);
            })

    })


    //header inc
    
    
    //footer inc
    $('footer').load('inc.html footer > div',function(){

        const mainchange = document.querySelector('body');


        //click event footerMenu
        const footmenu1 = document.querySelector('.footMenu a:nth-of-type(1)');
        const footmenu2 = document.querySelector('.footMenu a:nth-of-type(2)');
        const footmenu3 = document.querySelector('.footMenu a:nth-of-type(3)');

        const msvgBall1 = document.querySelector('.menu ul li:nth-of-type(1) circle:nth-of-type(2)');
        const msvgBall2 = document.querySelector('.menu ul li:nth-of-type(2) circle:nth-of-type(2)');
        const msvgBall3 = document.querySelector('.menu ul li:nth-of-type(3) circle:nth-of-type(2)');

            footmenu1.addEventListener('click',function(e){
                e.preventDefault();
                mainchange.classList.remove('active');

                msvgBall1.classList.add('active');
                msvgBall2.classList.remove('active');
                msvgBall3.classList.remove('active');
                setTimeout(() => {
                    pageload('./main.html', this.dataset.num);
                }, 500);
            })

            footmenu2.addEventListener('click',function(e){
                e.preventDefault();
                mainchange.classList.remove('active');

                msvgBall1.classList.remove('active');
                msvgBall2.classList.add('active');
                msvgBall3.classList.remove('active');
                setTimeout(() => {
                    pageload('./work.html', this.dataset.num);
                }, 500);
            })

            footmenu3.addEventListener('click',function(e){
                e.preventDefault();
                mainchange.classList.remove('active');

                msvgBall1.classList.remove('active');
                msvgBall2.classList.remove('active');
                msvgBall3.classList.add('active');
                setTimeout(() => {
                    pageload('./about.html', this.dataset.num);
                }, 500);
            })
    
        // let music_name = "audio/rainforest.MP3"
        const prevBtn = document.querySelector("#prev");
        const musicName = document.querySelector('.name');
        const play_btn = document.querySelector("#play");
        const range = document.querySelector("#range");
        const play_img = document.querySelector("#play_img");
        const soundBall = document.querySelector('.soundAni');
        let songs = ['audio/Firewood.mp3','audio/rainforest.mp3','audio/Nightbugs.mp3','audio/Thunder.mp3'];
        let songsName = ['FIREWOOD','RAINFOREST','NIGHTBUGS','THUNDER'];
        let total_time = 0;
        // let currentTime = 0;
        let num = 0;
        let isPlaying = false;
        let song = new Audio();
        // console.log(song);
        // window.onload = function(){
            
            
            song.src = songs[num];
            prevBtn.addEventListener('click',function(){
                num++;
                if(num > 3){
                    num = 0;
                }
                song.src = songs[num];
                musicName.innerHTML = songsName[num];
                song.play();
                isPlaying = true;
                // console.log(num);
                // console.log("go")
            })

            play_btn.addEventListener('click',function(e){
                // console.log(e.target);
                // console.log(isPlaying);
                if(!isPlaying){
                    song.play();
                    isPlaying = true;
                    total_time = song.duration;
                    range.max = total_time;
                    play_img.src = "img/pause.svg";
                    soundBall.classList.add('active');
                    // console.log("play");
                }else{
                    song.pause();
                    isPlaying = false;
                    play_img.src = "img/play.svg";
                    soundBall.classList.remove('active');
                    // console.log("pause");
                }
                song.addEventListener('ended',function(){
                    num++;
                    if(num > 3){
                        num = 0;
                    }
                    song.src = songs[num];
                    musicName.innerHTML = songsName[num];
                    song.play();
                    isPlaying = true;
                })
                song.addEventListener('timeupdate',function(){
                    range.value = song.currentTime;
                })
                range.addEventListener('change',function(){
                    song.currentTime = range.value;
                })
        
            })
        // }

        // const ftmenu = document.querySelectorAll('.footMenu div a');
        //     let ft = 0;
        //     for(let i = 0; i < ftmenu.length; i++ ){
        //         // ftmenu[0].classList.add('active');
        //         ftmenu[i].addEventListener('click',function(){
        //             ftmenu[ft].classList.remove('active');
        //             ftmenu[i].classList.add('active');
        //             ft = i;
        //         })
        //     }

    })

            
    function pageload(url){
        fetch(url)
        .then(res => res.text())
        .then(data => {
            $('.container').html(data);
            setTimeout(() => {
                const mainchange = document.querySelector('body');
                mainchange.classList.add('active');
            }, 300);

        });
        
    }
    pageload('./main.html');
