
//Object 終わり
function Object() {

    //特定のプロパティを所有しているか調べる
    obj.hasOwnProperty('');

    //コンストラクタ―を取得する
    obj.constructor;

    //所有するプロパティを固定する
    Object.seal();

    //プロパティを変更できない用にする
    Object.freeze();

    //2つの値の同一性を調べる
    Object.is(object1, object2);

    //オブジェクトをマージする
    Object.assign(obj, source);

    //プロトタイプを取得する
    Object.getPrototypeOf(obj)


    //プロパティの設定を行う
    Object.defineProperty();

    //複数のプロパティの設定を行う
    Object.defineProperties(obj, Property);

    //オブジェクトが持つプロパティを列挙する
    Object.keys();

    //プロトタイプを指定してオブジェクトを作る
    Object.create(obj);
}