class NumberJS {

    //JavaScriptで利用可能な最大値
    private maxValue: number;
    //JavaScriptで利用可能な最大値
    private minValue: number;
    //正の無限大
    private positiveInf: number;
    //負の無限大
    private negativeInf: number;
    //NaN
    private nan: number;

    constructor() {
        this.maxValue = Number.MAX_VALUE;
        this.minValue = Number.MIN_VALUE;
        this.positiveInf = Number.POSITIVE_INFINITY;
        this.negativeInf = Number.NEGATIVE_INFINITY;
        this.nan = Number.NaN;
    }

    //小数点以下の桁数を調整する
    public ToFixed(num: number, digits: number) {
        num.toFixed(digits);
    }
}

