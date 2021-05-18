//Promise 終わり
function Promise() {

    //非同期処理を扱うPromiseオブジェクトを生成する
    var promise = new Promise();

    //非同期処理が失敗した時の処理を設定する
    promise.catch(function () { });

    //Promiseオブジェクトの状態に応じて処理を行う
    promise.then();

    //複数の非同期処理を実行し、最初に解決した結果のみ取得する
    promise.race();

    //非同期処理を失敗とする
    promise.reject();

    //非同期処理を成功とする
    promise.resolve();

    //複数の非同期処理を実行する
    promise.all();

}
