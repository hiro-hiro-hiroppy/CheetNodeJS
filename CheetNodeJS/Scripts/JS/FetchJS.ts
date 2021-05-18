//Fetch 終わり
function Fetch() {

    //リソースを取得するためのリクエスト処理を行う
    fetch();

    //レスポンスをテキストとして処理する
    response.text();

    fetch('data.txt')
        .then(response => reseponse.text())
        .then(text => {
            console.log(text);
        })
        ;

    //レスポンスをblobとして解決する
    response.blob();

    //レスポンスをjsonとして処理する
    response.json();


}
