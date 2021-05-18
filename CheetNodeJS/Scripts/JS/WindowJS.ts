enum DialogType {

    Alert,
    Confirm,



}

interface WindowWidthHeight {
    innerWidth: number;
    innerHeight: number;
    outerWidth: number;
    outerHeight: number;
}

interface WindowOpenOption {

    top: number;
    left: number;
    width: number;
    height: number;

    //ここからはIE, Firefox向けなので無視
    //https://www.sejuku.net/blog/48540

}


class WIndowJS {

    private windowName: string;

    constructor() {
        this.windowName = window.name;
    }

    public OpenWindowDialog() {




    }

    public GetWindowWH(): WindowWidthHeight {

        let wh: WindowWidthHeight;

        //ブラウザウィンドウの内側の高さを取得する
        wh.innerWidth = window.innerWidth; //スクロールバーの幅を含む
        wh.innerHeight = window.innerHeight; //スクロールバーの高さを含む

        //ブラウザウィンドウの外側の高さを取得する
        wh.outerWidth = window.outerWidth; //サイドバー、ウィンドウの操作部分、ウィンドウをリサイズする境界やハンドルを含む
        wh.outerHeight = window.outerHeight; //サイドバー、ウィンドウの操作部分、ウィンドウをリサイズする境界やハンドルを含む

        return wh;
    }


    //新しいウィンドウを開く
    public WIndowOpen(url: string, windowName: string, option: WindowOpenOption): void {

        let optionStr: string = `top=${option.top},left=${option.left}, width=${option.width}, height=${option.height}`;

        window.open(url, windowName, optionStr);
    }

    //一定時間ごとに処理を行う
    public SetIntervalFunc(betweenTime: number, func: Function) {

        window.setInterval(betweenTime, func);

    }





}


//遅延処理をキャンセルする
windows.clearTimeOut(timerID);

//デバイスピクセル比を取得する
window.devicePixelRatio;

//URLを取得・設定する
window.locatin.href; //現在のURLを取得
window.location.href = 'URL'; //移動する

//アニメーション処理を設定する //よくわからない
window.requestAnimationFrame();

//別のウィンドウへデータを送信する
window.postMessage();

//ブラウザのユーザーエージェントを取得する
window.navigator.userAgent;

//ウィンドウを指定した分スクロールさせる
window.scrollBy(横方向, 縦方向);

//現在のURLを特定のURLに置換する
window.location.replace('');

//処理を遅延させて実行する
window.setTimeout();

//URLのホスト名を取得・設定する
window.location.hostname;

//ブラウザの使用言語を取得する
window.navigator.language;

//アニメーション処理をキャンセルする
window.cancelAnimationFrame();

//URLのプロトコルを取得・設定する
window.location.protocol;

//ウィンドウを閉じる
window.close();

//警告ダイアログを表示する
window.alert('');

//スクリーンの端からブラウザの端までの距離を取得する
window.screenX;
window.screenY;

//ブラウザがオンラインで動作しているか調べる
window.navigator.onLine;

//確認ダイアログを表示する
if (window.confirm('')) {

}

//スクリーン情報を取得する
window.screen;

//一定時間ごとの処理をキャンセルする
window.clearInterval();

//ブラウザを更新する
window.location.reload();

//URLのクエリ文字列を取得・設定する
window.location.search; //設定した場合、変更されたURLへの遷移が発生する

//現在のスクロール量を取得する
window.scrollX;
window.scrollY;

//ウィンドウをスクロールさせる
window.scrollTo(X座標, Y座標);

//ブラウザの読み込みを停止する
window.stop();

//特定のURLへ移動する
window.location.assign('');

//URLのハッシュを取得・設定する
window.location.hash;

//URLのホスト名を取得・設定する
window.location.hostname;

//現在のURLを特定のURLに置換する
window.location.replace();
