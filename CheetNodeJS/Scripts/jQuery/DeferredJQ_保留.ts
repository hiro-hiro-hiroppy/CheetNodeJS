class DeferredJQ {

    constructor() { }

}



//非同期処理が失敗した時のコールバックを一つ以上設定する
deferred.fail()

//非同期処理完了時に結果を問わないコールバックを設定する
deferred.always()

//非同期処理の成功・失敗・進行中のコールバックをまとめて設定する
deferred.then()

//非同期処理の状態を取得する
deferred.state()

//非同期処理が失敗した時のコールバックを設定する
deferred.catch()

//非同期処理が成功した時のコールバックを一つ以上設定する
deferred.done()

//非同期処理の進行時のコールバックを呼び出す
deferred.notify()

//非同期処理を成功としてコールバックをコンテキストを指定して呼び出す
deferred.resolveWith()

//非同期処理の進行時のコールバックを設定する
deferred.progress()

//複数の非同期処理を扱う
$.when()

//非同期処理を扱うDeferredオブジェクトを生成する
$.Deferred()

//非同期処理を失敗としてコールバックをコンテキストを指定して呼び出す
deferred.rejectWith()

//非同期処理の進行時のコールバックをコンテキストを指定して呼び出す
deferred.notifyWIth()

//非同期処理を成功としてコールバックを呼び出す
deferred.resolve()

//非同期処理を失敗としてコールバックを呼び出す
deferred.reject()























































