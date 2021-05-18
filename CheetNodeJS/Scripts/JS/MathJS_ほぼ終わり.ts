enum ChangeNumType {

    //絶対値
    Abs,
    //切り上げ
    Ceil,
    //切り捨て
    Floor,
    //四捨五入
    Round
}

interface Trigonometricratio {

    sin: number,
    cos: number,
    tan: number,
    asin: number,
    acos: number,
    atan: number,
    atan2: number
}

class MathJS {

    //円周率
    private pi: number;
    //2の平方根
    private sqrt2: number;
    //2分の1の平方根を返す
    private sqrt1_2: number;
    //自然対数の底eを返す
    private e: number;
    //2の自然対数を返す
    private ln2: number;
    //10の自然対数を返す
    private ln10: number;
    //2を底としたeの対数を返す
    private log2e: number;
    //10を底としたeの対数を返す
    private log10e: number;

    constructor() {
        this.pi = Math.PI;
        this.sqrt2 = Math.SQRT2;
        this.sqrt1_2 = Math.SQRT1_2;
        this.e = Math.E;
        this.ln2 = Math.LN2;
        this.ln10 = Math.LN10;
        this.log2e = Math.LOG2E;
        this.log10e = Math.LOG10E;
    }

    //正・負・0のいずれであるかを返す
    public MathSign(num: number): number {

        let returnVal = Math.sign(num);

        return returnVal;
    }

    //Number型を加工する
    //num:Number型の値
    //type:絶対値、切り上げ、切り捨て、四捨五入
    //decimalDigit:小数点第何位(デフォルトは0位)
    public MathChangeNum(num: number, type: ChangeNumType, decimalDigit: number): number {

        let returnVal: number;

        if (type !== ChangeNumType.Abs) {
            num = num * (Math.pow(10, decimalDigit));
        }

        switch (type) {

            case ChangeNumType.Abs:
                returnVal = Math.abs(num);
                break;

            case ChangeNumType.Ceil:
                returnVal = Math.ceil(num);
                break;

            case ChangeNumType.Floor:
                returnVal = Math.floor(num);
                break;

            case ChangeNumType.Round:
                returnVal = Math.round(num);
                break;

            default:
                break;
        }

        if (type !== ChangeNumType.Abs) {
            returnVal = returnVal * (Math.pow(10, -decimalDigit));
        }

        return returnVal;
    }

    //ランダムな値を返す(ここは詰める)
    //minNum:ランダムな値の最小値
    //maxNum:ランダムな値の最大値
    public MathRandom(minNum: number, maxNum: number) {

        if (minNum > maxNum) {
            throw new Error("MathRandom:エラー!");
        }

        let random: number = Math.random();

        return random;
    }

    //最大値を返す
    public MathMax(num: number) {
        Math.max();
        Math.min();
    }

    //平方根を求める
    public MathSqrt(num: number): number {
        return Math.sqrt(num);
    }

    //累乗した値を求める
    public MathPow(num: number, powNum: number): number {
        return Math.pow(num, powNum);
    }

    //自然対数を求める
    public MathLog(num: number) {
        return Math.log(num);
    }

    //sin～atanを求める
    public MathTrigonometricRatio(num: number) {

        let returnVal: Trigonometricratio;

        returnVal.sin = Math.sin(num);
        returnVal.cos = Math.cos(num);
        returnVal.tan = Math.tan(num);
        returnVal.asin = Math.asin(num);
        returnVal.acos = Math.acos(num);
        returnVal.atan = Math.atan(num);
        //returnVal.atan2 = Math.atan2(num);
    }
}
