<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="css/write.css" rel="stylesheet">
</head>
<body>
    <form class="grades" action="write-ok.php" method="post" enctype="multipart/form-data">
        <table>
            <h1>PORTFOLIO</h1>
            <tr>
                <th>제목</th>
                <td><input type="text" name="title"></td>
            </tr>
            <tr>
                <th>PC 타입</th>
                <td><input type="text" name="pctype"></td>
            </tr>
            <tr>
                <th>썸네일</th>
                <td><input type="file" name="thum"></td>
            </tr>
            <tr>
                <th>스크린</th>
                <td><input type="file" name="screen"></td>
            </tr>
            
            <tr>
                <th>상세설명</th>
                <td class="con">
                    <textarea type="contents" name="contents" id ="ir1"></textarea>
                </td>
            </tr>
            <tr>
                <th>링크</th>
                <td><input type="text" name="detail"></td>
            </tr>
            <tr>
                <th></th>
                <td><input type="submit" value="저장하기"></td>
            </tr>
            <input type="hidden" name="mode" value="insert">
        </table>
    </form>

<script type="text/javascript" src="./smart2/js/HuskyEZCreator.js" charset="utf-8"></script>
<script type="text/javascript">




    var oEditors = [];

    // 추가 글꼴 목록
    //var aAdditionalFontSet = [["MS UI Gothic", "MS UI Gothic"], ["Comic Sans MS", "Comic Sans MS"],["TEST","TEST"]];

    const btnSubmit = document.querySelector('input[type=submit]');
    btnSubmit.onclick = function(e){
        e.preventDefault();
        submitContents(this);
    }

    nhn.husky.EZCreator.createInIFrame({
        oAppRef: oEditors,
        elPlaceHolder: "ir1",
        sSkinURI: "smart2/SmartEditor2Skin.html",	
        htParams : {
            bUseToolbar : true,				// 툴바 사용 여부 (true:사용/ false:사용하지 않음)
            bUseVerticalResizer : true,		// 입력창 크기 조절바 사용 여부 (true:사용/ false:사용하지 않음)
            bUseModeChanger : true,			// 모드 탭(Editor | HTML | TEXT) 사용 여부 (true:사용/ false:사용하지 않음)
            //bSkipXssFilter : true,		// client-side xss filter 무시 여부 (true:사용하지 않음 / 그외:사용)
            //aAdditionalFontList : aAdditionalFontSet,		// 추가 글꼴 목록
            fOnBeforeUnload : function(){
                //alert("완료!");
            }
        }, //boolean
        fOnAppLoad : function(){
            //예제 코드
            //oEditors.getById["ir1"].exec("PASTE_HTML", ["로딩이 완료된 후에 본문에 삽입되는 text입니다."]);
        },
        fCreator: "createSEditor2"
    });

    function submitContents(elClickedObj) {
        oEditors.getById["ir1"].exec("UPDATE_CONTENTS_FIELD", []);	// 에디터의 내용이 textarea에 적용됩니다.
        try {
            elClickedObj.form.submit();
        } catch(e) {}
    }

</script>

</body>
</html>