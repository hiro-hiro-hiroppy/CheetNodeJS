class HistoryJS {

    constructor() {

    }

    //1つ前のページに移動する
    public HistoryBack(): void {
        history.back();
    }

    //1つ後のページに移動する
    public HistoryForward(): void {
        history.forward;
    }

    //任意のページに移動する
    public HistoryGo(pageNum: number): void {
        history.go(pageNum);
    }

    //ブラウザで表示した履歴の数を返す
    public HistoryLength(): number {
        return history.length;
    }

}

//History 終わり
//function History() {

//    //現在の履歴を置換する //これは少しつめる
//    history.replaceState();

//    //現在の履歴の状態を取得する
//    history.state;

//    //履歴リストに履歴を追加する
//    history.pushState();
//}z