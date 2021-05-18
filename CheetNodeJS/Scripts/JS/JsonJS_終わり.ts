class JsonJS {

    constructor() {

    }

    //JSON文字列をオブジェクトに変換する
    public JsonParse(jsonData: string): any {
        let parseObject = JSON.parse(jsonData);
        return parseObject;
    }

    //任意の値をJSON文字列に変換する
    public JsonStringify(anyData: any): string {
        let jsonData = JSON.stringify(anyData);
        return jsonData;
    }

}
