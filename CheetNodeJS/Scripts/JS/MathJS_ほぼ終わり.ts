enum ChangeNumType {

    //��Βl
    Abs,
    //�؂�グ
    Ceil,
    //�؂�̂�
    Floor,
    //�l�̌ܓ�
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

    //�~����
    private pi: number;
    //2�̕�����
    private sqrt2: number;
    //2����1�̕�������Ԃ�
    private sqrt1_2: number;
    //���R�ΐ��̒�e��Ԃ�
    private e: number;
    //2�̎��R�ΐ���Ԃ�
    private ln2: number;
    //10�̎��R�ΐ���Ԃ�
    private ln10: number;
    //2���Ƃ���e�̑ΐ���Ԃ�
    private log2e: number;
    //10���Ƃ���e�̑ΐ���Ԃ�
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

    //���E���E0�̂�����ł��邩��Ԃ�
    public MathSign(num: number): number {

        let returnVal = Math.sign(num);

        return returnVal;
    }

    //Number�^�����H����
    //num:Number�^�̒l
    //type:��Βl�A�؂�グ�A�؂�̂āA�l�̌ܓ�
    //decimalDigit:�����_�扽��(�f�t�H���g��0��)
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

    //�����_���Ȓl��Ԃ�(�����͋l�߂�)
    //minNum:�����_���Ȓl�̍ŏ��l
    //maxNum:�����_���Ȓl�̍ő�l
    public MathRandom(minNum: number, maxNum: number) {

        if (minNum > maxNum) {
            throw new Error("MathRandom:�G���[!");
        }

        let random: number = Math.random();

        return random;
    }

    //�ő�l��Ԃ�
    public MathMax(num: number) {
        Math.max();
        Math.min();
    }

    //�����������߂�
    public MathSqrt(num: number): number {
        return Math.sqrt(num);
    }

    //�ݏ悵���l�����߂�
    public MathPow(num: number, powNum: number): number {
        return Math.pow(num, powNum);
    }

    //���R�ΐ������߂�
    public MathLog(num: number) {
        return Math.log(num);
    }

    //sin�`atan�����߂�
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
