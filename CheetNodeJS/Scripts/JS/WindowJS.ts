enum DialogType {

    Alert,
    Confirm,



}

interface WindowWidthHeight {
    innerWidth: number;
    innerHeight: number;
    outerWidth: number;
    outerHeight: number;
}

interface WindowOpenOption {

    top: number;
    left: number;
    width: number;
    height: number;

    //���������IE, Firefox�����Ȃ̂Ŗ���
    //https://www.sejuku.net/blog/48540

}


class WIndowJS {

    private windowName: string;

    constructor() {
        this.windowName = window.name;
    }

    public OpenWindowDialog() {




    }

    public GetWindowWH(): WindowWidthHeight {

        let wh: WindowWidthHeight;

        //�u���E�U�E�B���h�E�̓����̍������擾����
        wh.innerWidth = window.innerWidth; //�X�N���[���o�[�̕����܂�
        wh.innerHeight = window.innerHeight; //�X�N���[���o�[�̍������܂�

        //�u���E�U�E�B���h�E�̊O���̍������擾����
        wh.outerWidth = window.outerWidth; //�T�C�h�o�[�A�E�B���h�E�̑��암���A�E�B���h�E�����T�C�Y���鋫�E��n���h�����܂�
        wh.outerHeight = window.outerHeight; //�T�C�h�o�[�A�E�B���h�E�̑��암���A�E�B���h�E�����T�C�Y���鋫�E��n���h�����܂�

        return wh;
    }


    //�V�����E�B���h�E���J��
    public WIndowOpen(url: string, windowName: string, option: WindowOpenOption): void {

        let optionStr: string = `top=${option.top},left=${option.left}, width=${option.width}, height=${option.height}`;

        window.open(url, windowName, optionStr);
    }

    //��莞�Ԃ��Ƃɏ������s��
    public SetIntervalFunc(betweenTime: number, func: Function) {

        window.setInterval(betweenTime, func);

    }





}


//�x���������L�����Z������
windows.clearTimeOut(timerID);

//�f�o�C�X�s�N�Z������擾����
window.devicePixelRatio;

//URL���擾�E�ݒ肷��
window.locatin.href; //���݂�URL���擾
window.location.href = 'URL'; //�ړ�����

//�A�j���[�V����������ݒ肷�� //�悭�킩��Ȃ�
window.requestAnimationFrame();

//�ʂ̃E�B���h�E�փf�[�^�𑗐M����
window.postMessage();

//�u���E�U�̃��[�U�[�G�[�W�F���g���擾����
window.navigator.userAgent;

//�E�B���h�E���w�肵�����X�N���[��������
window.scrollBy(������, �c����);

//���݂�URL������URL�ɒu������
window.location.replace('');

//������x�������Ď��s����
window.setTimeout();

//URL�̃z�X�g�����擾�E�ݒ肷��
window.location.hostname;

//�u���E�U�̎g�p������擾����
window.navigator.language;

//�A�j���[�V�����������L�����Z������
window.cancelAnimationFrame();

//URL�̃v���g�R�����擾�E�ݒ肷��
window.location.protocol;

//�E�B���h�E�����
window.close();

//�x���_�C�A���O��\������
window.alert('');

//�X�N���[���̒[����u���E�U�̒[�܂ł̋������擾����
window.screenX;
window.screenY;

//�u���E�U���I�����C���œ��삵�Ă��邩���ׂ�
window.navigator.onLine;

//�m�F�_�C�A���O��\������
if (window.confirm('')) {

}

//�X�N���[�������擾����
window.screen;

//��莞�Ԃ��Ƃ̏������L�����Z������
window.clearInterval();

//�u���E�U���X�V����
window.location.reload();

//URL�̃N�G����������擾�E�ݒ肷��
window.location.search; //�ݒ肵���ꍇ�A�ύX���ꂽURL�ւ̑J�ڂ���������

//���݂̃X�N���[���ʂ��擾����
window.scrollX;
window.scrollY;

//�E�B���h�E���X�N���[��������
window.scrollTo(X���W, Y���W);

//�u���E�U�̓ǂݍ��݂��~����
window.stop();

//�����URL�ֈړ�����
window.location.assign('');

//URL�̃n�b�V�����擾�E�ݒ肷��
window.location.hash;

//URL�̃z�X�g�����擾�E�ݒ肷��
window.location.hostname;

//���݂�URL������URL�ɒu������
window.location.replace();
