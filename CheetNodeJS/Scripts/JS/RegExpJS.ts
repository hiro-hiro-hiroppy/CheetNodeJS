//���֗��֐� �I���
function Other() {

    //URI���G���R�[�h����
    encodeURI(url);

    //������𐮐��ɕϊ�����(�ϊ����͐F�X�w��ł���)
    parseInt(number);

    //������������ɕϊ�����
    parseFloat();

    //�񐔒l�����ׂ�
    isNaN('');

    //�G���R�[�h���ꂽURI���f�R�[�h����
    decodeURI(url);
}
//�N���X�T�C�g�X�N���v�e�B���O�΍�
function EscapeXSS(string) {

    // < > & " ' ��u������
    return string
        .replace(/?&/g, '&amp;')
        .replace(/?</g, '&lt;')
        .replace(/?>/g, '&gt;')
        .replace(/?"/g, '&quot;')
        .replace(/?'/g, '&#x27');
}

//�u���E�U�̎�ނ𔻒f����
function CheckBrowserType() {

    var userAgent = window.navigator.userAgent.toLowerCase();

    if (userAgent.indexOf('msie') != -1 ||
        userAgent.indexOf('trident') != -1) {
        console.log('Internet Explorer�����g���ł���');
    } else if (userAgent.indexOf('edge') != -1) {
        console.log('Edge�����g���ł���');
    } else if (userAgent.indexOf('chrome') != -1) {
        console.log('Google Chrome�����g���ł���');
    } else if (userAgent.indexOf('safari') != -1) {
        console.log('Safari�����g���ł���');
    } else if (userAgent.indexOf('firefox') != -1) {
        console.log('FireFox�����g���ł���');
    } else if (userAgent.indexOf('opera') != -1) {
        console.log('Opera�����g���ł���');
    } else {
        console.log('����ȃu���E�U�͒m���');
    }
}


//�I�u�W�F�N�g�̌^���`�F�b�N
//�C�x���g�������Ƒ��₷