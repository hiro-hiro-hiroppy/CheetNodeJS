enum LogType {
    Info,
    Debug,
    Warn,
    Error,
    Table,
}


class ConsoleJS {

    //処理時間にかかった時間を計測する
    public ConsoleTime(func:Function) {

        console.time();

        //関数を実行
        func;

        console.timeEnd();
    }

    //コンソールを出力する
    public ConsoleExport(log:string, logType: LogType) {

        switch (logType) {

            case LogType.Info:
                console.info(log);
                break;

            case LogType.Debug:
                console.debug(log);
                break;

            case LogType.Warn:
                console.warn(log);
                break;

            case LogType.Error:
                console.error(log);
                break;

            case LogType.Table:
                //Tableは表形式で出力する
                let objectLog = JSON.stringify(log);
                console.table(objectLog)
                break;

            default:
                console.log(log);
                break;
        }
    }

    //コンソールが呼ばれた回数を数える
    public ConsoleCount(consoleName: string): void {
        console.count(consoleName);
    }

    //console.countをリセットする
    public ConsoleCountReset(consoleName: string): void {
        console.countReset(consoleName);
    }

    //関数の呼び出し経路をコンソールに出力する
    public ConsoleTrace(): void {
        console.trace();
    }

    //アサーションを行う(条件式がfalseになるとコンソールに出力される)
    public ConsoleAsert(bool: boolean, log: string): void {
        console.assert(bool, log);
    }

}

