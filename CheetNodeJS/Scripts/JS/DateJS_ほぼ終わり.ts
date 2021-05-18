interface DateTime {
    //年
    Year: number,
    //月
    Month: number,
    //日
    Date: number,
    //曜日
    Day: number,
    //時
    Hours: number,
    //分
    Minutes: number,
    //秒
    Seconds: number,
    //ミリ秒
    Milliseconds: number
}


class DateJS {

    //今の時間
    private nowDate: Date;

    constructor() {
        this.nowDate = new Date();
    }

    //日付を分解
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

    //日付を設定
    public SetDate(dt: Date, dtDetail: DateTime): void {

        //if (dtDetail.Year !== null) { dt.setFullYear(dtDetail.Year) };
        //if (dtDetail.Year !== null) { dt.setMonth(dtDetail.Month) };
        //if (dtDetail.Year !== null) { dt.setDate(dtDetail.Date) };
        //if (dtDetail.Year !== null) { dt.setHours(dtDetail.Hours) };
        //if (dtDetail.Year !== null) { dt.setMinutes(dtDetail.Minutes) };
        //if (dtDetail.Year !== null) { dt.setSeconds(dtDetail.Seconds) };
        //if (dtDetail.Year !== null) { dt.setMilliseconds(dtDetail.Milliseconds) };
    }


    //日付を加算する
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



    //日付と日付の差の時間を求める(ここあとでやっとくこと)
    public GetBetweenDate(dtStart: Date, dtEnd: Date):DateTime {

        let betweenDate: DateTime;

        if (dtStart >= dtEnd) {

            betweenDate.Year = dtStart.getFullYear() - dtEnd.getFullYear();


        } else {

        }

        return betweenDate;
    }

    //月初日を求める
    public GetFirstDate(dt: Date): Date {
        let dtFirst: Date = new Date(dt.getFullYear(), dt.getMonth(), 1);

        return dtFirst;
    }

    //月末日を求める
    public GetLastDate(dt: Date): Date {

        let dtLast: Date = new Date(dt.getFullYear(), dt.getMonth() + 1, 0);

        return dtLast;
    }

}
