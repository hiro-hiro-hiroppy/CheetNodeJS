class JsonJS {

    constructor() {

    }

    //JSON��������I�u�W�F�N�g�ɕϊ�����
    public JsonParse(jsonData: string): any {
        let parseObject = JSON.parse(jsonData);
        return parseObject;
    }

    //�C�ӂ̒l��JSON������ɕϊ�����
    public JsonStringify(anyData: any): string {
        let jsonData = JSON.stringify(anyData);
        return jsonData;
    }

}
