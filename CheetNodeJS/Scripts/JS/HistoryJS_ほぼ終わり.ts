class HistoryJS {

    constructor() {

    }

    //1�O�̃y�[�W�Ɉړ�����
    public HistoryBack(): void {
        history.back();
    }

    //1��̃y�[�W�Ɉړ�����
    public HistoryForward(): void {
        history.forward;
    }

    //�C�ӂ̃y�[�W�Ɉړ�����
    public HistoryGo(pageNum: number): void {
        history.go(pageNum);
    }

    //�u���E�U�ŕ\�����������̐���Ԃ�
    public HistoryLength(): number {
        return history.length;
    }

}

//History �I���
//function History() {

//    //���݂̗�����u������ //����͏����߂�
//    history.replaceState();

//    //���݂̗����̏�Ԃ��擾����
//    history.state;

//    //�������X�g�ɗ�����ǉ�����
//    history.pushState();
//}z