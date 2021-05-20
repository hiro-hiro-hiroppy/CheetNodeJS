/// <reference path="../../node_modules/@types/nodemailer/index.d.ts" />

import * as mail from 'nodemailer';

//nodemailer���g�p
//npm install @types/nodemailer --save
//npm install nodemailer --save

interface MailConfig {

    //Gmail�̃T�[�o�[
    host: string;
    //�|�[�g�ԍ�
    port: number;
    //
    secure: boolean;
    auth: {
        user: string,
        path: string
    }
}

//���M�f�[�^
interface SendConfig {
    //���M����
    from: string;
    //���M��
    to: string;
    //����
    subject: string;
    //�ʏ�̃��[���{��
    text: string;
    //HTML���[��
    html: string;
}



//Gmail���M�N���X
class MailNode {

    private _smtpData: MailConfig;

    constructor(smtp: MailConfig) {
        this._smtpData.host = smtp.host;
        this._smtpData.port = smtp.port;
        this._smtpData.secure = smtp.secure;
        this._smtpData.auth = smtp.auth;

    }

    //���[���𑗐M����
    public SendMail(sendData: ): void {

        //SMTP�T�[�o�[�̏����܂Ƃ߂�
        const transporte = mail.createTransport(this._smtpData);





    }





}




