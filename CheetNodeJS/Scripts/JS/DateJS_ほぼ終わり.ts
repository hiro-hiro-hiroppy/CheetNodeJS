interface DateTime {
    //�N
    Year: number,
    //��
    Month: number,
    //��
    Date: number,
    //�j��
    Day: number,
    //��
    Hours: number,
    //��
    Minutes: number,
    //�b
    Seconds: number,
    //�~���b
    Milliseconds: number
}


class DateJS {

    //���̎���
    private nowDate: Date;

    constructor() {
        this.nowDate = new Date();
    }

    //���t�𕪉�
    public GetDate(dt: Date): DateTime {

        let dtDetail: DateTime;

        dtDetail.Year = dt.getFullYear();
        dtDetail.Month = dt.getMonth() + 1;
        dtDetail.Date = dt.getDate();
        dtDetail.Day = dt.getDay();
        dtDetail.Hours = dt.getHours();
        dtDetail.Minutes = dt.getMinutes();
        dtDetail.Seconds = dt.getSeconds();
        dtDetail.Milliseconds = dt.getMilliseconds();

        return dtDetail;
    }

    //���t��ݒ�
    public SetDate(dt: Date, dtDetail: DateTime): void {

        //if (dtDetail.Year !== null) { dt.setFullYear(dtDetail.Year) };
        //if (dtDetail.Year !== null) { dt.setMonth(dtDetail.Month) };
        //if (dtDetail.Year !== null) { dt.setDate(dtDetail.Date) };
        //if (dtDetail.Year !== null) { dt.setHours(dtDetail.Hours) };
        //if (dtDetail.Year !== null) { dt.setMinutes(dtDetail.Minutes) };
        //if (dtDetail.Year !== null) { dt.setSeconds(dtDetail.Seconds) };
        //if (dtDetail.Year !== null) { dt.setMilliseconds(dtDetail.Milliseconds) };
    }


    //���t�����Z����
    public AddDate(dt: Date, addTime: DateTime): Date {

        let newDt: Date = new Date(
            dt.getFullYear() + addTime.Year,
            dt.getMonth() + 1 + addTime.Month,
            dt.getDate() + addTime.Date,
            dt.getDay() + addTime.Day,
            dt.getHours() + addTime.Hours,
            dt.getMinutes() + addTime.Minutes,
            dt.getSeconds() + addTime.Seconds,
        );

        return newDt
    }



    //���t�Ɠ��t�̍��̎��Ԃ����߂�(�������Ƃł���Ƃ�����)
    public GetBetweenDate(dtStart: Date, dtEnd: Date):DateTime {

        let betweenDate: DateTime;

        if (dtStart >= dtEnd) {

            betweenDate.Year = dtStart.getFullYear() - dtEnd.getFullYear();


        } else {

        }

        return betweenDate;
    }

    //�����������߂�
    public GetFirstDate(dt: Date): Date {
        let dtFirst: Date = new Date(dt.getFullYear(), dt.getMonth(), 1);

        return dtFirst;
    }

    //�����������߂�
    public GetLastDate(dt: Date): Date {

        let dtLast: Date = new Date(dt.getFullYear(), dt.getMonth() + 1, 0);

        return dtLast;
    }

}
