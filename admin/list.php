<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <a href="logout.php">logout</a>
    </div>
    <article>
        <ul>
            <?php
                include_once "check.php";
                // $root = $_SERVER['DOCUMENT_ROOT'];
                // include_once $root."/portfolio_kyo/admin/db.php";
                include_once "db.php";
                $query = "SELECT * FROM portfolio_kyo ORDER BY num DESC";

                @mkdir('../data');
                $jsonResult = mysqli_query($connect,$query);
                $data = array();
                while($row = mysqli_fetch_array($jsonResult)){
                    array_push($data, array(
                        "num" => $row['num'],
                        "title" => $row['title'],
                        "screen" => $row['screen'],
                        "detail" => $row['detail'],
                        "thum" => $row['thum'],
                        "contents" => $row['contents'],
                        "pctype" => $row['pctype']
                    ));
                }
                $jsonData = json_encode($data);
                file_put_contents('../data/data.json', $jsonData);



                $query = "SELECT * FROM portfolio_kyo ORDER BY num DESC";
                $result = mysqli_query($connect,$query);
                while($row = mysqli_fetch_array($result)){
            ?>
            <li>
                <div>
                    <div class="portImg">
                        <img src = "./files/<?=$row['thum']?>">
                    </div>
                    <p><?=$row['title']?></p>
                    <p><?=$row['detail']?></p>
                    <p>

                    <a href="update.php?num=<?=$row['num']?>">수정</a>
                    <a href="delete.php?num=<?=$row['num']?>">삭제</a>
                    </p>
                </div>
            </li>
            <? } ?>
            
        </ul>
    </article>
    <p>
        <a href="write.php">글쓰기</a>
    </p>

    <style>
        @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@900&display=swap");
        * {
        font-family: 'Noto Sans KR', sans-serif;
        }

        .portImg{
        width: 100%;
        }
        .portImg img{width:auto;}
        ul, li, a {
        text-decoration: none;
        list-style: none;
        margin: 0;
        padding: 0;
        }

        body {
        background-color: bisque;
        }

        li div p {
        font-size: 2em;
        font-weight: 400;
        }
    </style>
</body>
</html>