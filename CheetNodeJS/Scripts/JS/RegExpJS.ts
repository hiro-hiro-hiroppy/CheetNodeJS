//他便利関数 終わり
function Other() {

    //URIをエンコードする
    encodeURI(url);

    //文字列を整数に変換する(変換式は色々学んでおく)
    parseInt(number);

    //文字列を小数に変換する
    parseFloat();

    //非数値か調べる
    isNaN('');

    //エンコードされたURIをデコードする
    decodeURI(url);
}
//クロスサイトスクリプティング対策
function EscapeXSS(string) {

    // < > & " ' を置換する
    return string
        .replace(/?&/g, '&amp;')
        .replace(/?</g, '&lt;')
        .replace(/?>/g, '&gt;')
        .replace(/?"/g, '&quot;')
        .replace(/?'/g, '&#x27');
}

//ブラウザの種類を判断する
function CheckBrowserType() {

    var userAgent = window.navigator.userAgent.toLowerCase();

    if (userAgent.indexOf('msie') != -1 ||
        userAgent.indexOf('trident') != -1) {
        console.log('Internet Explorerをお使いですね');
    } else if (userAgent.indexOf('edge') != -1) {
        console.log('Edgeをお使いですね');
    } else if (userAgent.indexOf('chrome') != -1) {
        console.log('Google Chromeをお使いですね');
    } else if (userAgent.indexOf('safari') != -1) {
        console.log('Safariをお使いですね');
    } else if (userAgent.indexOf('firefox') != -1) {
        console.log('FireFoxをお使いですね');
    } else if (userAgent.indexOf('opera') != -1) {
        console.log('Operaをお使いですね');
    } else {
        console.log('そんなブラウザは知らん');
    }
}


//オブジェクトの型をチェック
//イベントをもっと増やす