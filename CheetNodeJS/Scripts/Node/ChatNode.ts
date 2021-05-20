import * as crypto from 'crypto'

const ALGORITHM = 'aes-256-cbc';
const KEY = Buffer.from([
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff
]); // �S�r�b�g�P��256bit�l�����Ƃ���

function encodeBase64(data: string): string {
    // 16byte�̃����_���l�𐶐�����IV�Ƃ���
    const iv = crypto.randomBytes(16);

    // �Í���쐬
    const cipher = crypto.createCipheriv(ALGORITHM, KEY, iv);

    // data���o�C�i���ɂ��ĈÍ���
    const encData = cipher.update(Buffer.from(data));

    // ���[���� �� �擪��iv��t�^���A�o�C�i����base64(������)�ɂ��ĕԂ�
    return Buffer.concat([iv, encData, cipher.final()]).toString('base64');
}

function decodeBase64(data: string): string {
    // �󂯎�����Í�����������o�C�i���ɕϊ�
    const buff = Buffer.from(data, 'base64');

    // iv�l�ł���A�擪16byte�����o��
    const iv = buff.slice(0, 16);

    // iv�l�ȍ~�́A�Í����f�[�^�����o��
    const encData = buff.slice(16);

    // ������쐬
    const decipher = crypto.createDecipheriv(ALGORITHM, KEY, iv);

    // �Í����f�[�^�𕜍���
    const decData = decipher.update(encData);

    // ���[���� �� �o�C�i���𕶎���ɖ߂�
    return Buffer.concat([decData, decipher.final()]).toString('utf8');
}

(() => {
    const data = "Hello World!";
    console.log(`INPUT : ${data}`);
    // INPUT : Hello World!

    const encData = encodeBase64(data);
    console.log(`ENCODE : ${encData}`);
    // ENCODE : 0XTIPX06EAClUAFNdT+6EDlv+bOrB6plqkGzd0hEvdU=

    const decData = decodeBase64(encData);
    console.log(`DECODE : ${decData}`);
    // DECODE : Hello World!
})();