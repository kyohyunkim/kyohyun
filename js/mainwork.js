
    function mobOpen(e) {
        e.preventDefault();
        window.open('https://kyohyunkim.github.io/pro3/','_blank',"location=1,toolbar=1,menubar=1,resizable=1,width=360,height=640,top=250, left=350");
        return false;
    }

    const alink = document.querySelector('.page-link-mobill');

    alink.addEventListener('click',function(e){
        mobOpen(e);
    })

    // <a className="goSite goMobile" href="javascript:void(0);" onClick={mobOpen}>사이트 바로가기</a>
    // <a class="page-link-mobill" href="javascript:void(0);" onclick="winPopup();"></a>
