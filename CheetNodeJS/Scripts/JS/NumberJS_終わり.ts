class NumberJS {

    //JavaScript�ŗ��p�\�ȍő�l
    private maxValue: number;
    //JavaScript�ŗ��p�\�ȍő�l
    private minValue: number;
    //���̖�����
    private positiveInf: number;
    //���̖�����
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

    //�����_�ȉ��̌����𒲐�����
    public ToFixed(num: number, digits: number) {
        num.toFixed(digits);
    }
}

