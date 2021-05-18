enum LogType {
    Info,
    Debug,
    Warn,
    Error,
    Table,
}


class ConsoleJS {

    //�������Ԃɂ����������Ԃ��v������
    public ConsoleTime(func:Function) {

        console.time();

        //�֐������s
        func;

        console.timeEnd();
    }

    //�R���\�[�����o�͂���
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
                //Table�͕\�`���ŏo�͂���
                let objectLog = JSON.stringify(log);
                console.table(objectLog)
                break;

            default:
                console.log(log);
                break;
        }
    }

    //�R���\�[�����Ă΂ꂽ�񐔂𐔂���
    public ConsoleCount(consoleName: string): void {
        console.count(consoleName);
    }

    //console.count�����Z�b�g����
    public ConsoleCountReset(consoleName: string): void {
        console.countReset(consoleName);
    }

    //�֐��̌Ăяo���o�H���R���\�[���ɏo�͂���
    public ConsoleTrace(): void {
        console.trace();
    }

    //�A�T�[�V�������s��(��������false�ɂȂ�ƃR���\�[���ɏo�͂����)
    public ConsoleAsert(bool: boolean, log: string): void {
        console.assert(bool, log);
    }

}

