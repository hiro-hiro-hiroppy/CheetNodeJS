/// <reference path="../../node_modules/@types/nodemailer/index.d.ts" />

import * as mail from 'nodemailer';

//nodemailerを使用
//npm install @types/nodemailer --save
//npm install nodemailer --save

interface MailConfig {

    //Gmailのサーバー
    host: string;
    //ポート番号
    port: number;
    //
    secure: boolean;
    auth: {
        user: string,
        path: string
    }
}

//送信データ
interface SendConfig {
    //送信元名
    from: string;
    //送信先
    to: string;
    //件名
    subject: string;
    //通常のメール本文
    text: string;
    //HTMLメール
    html: string;
}



//Gmail送信クラス
class MailNode {

    private _smtpData: MailConfig;

    constructor(smtp: MailConfig) {
        this._smtpData.host = smtp.host;
        this._smtpData.port = smtp.port;
        this._smtpData.secure = smtp.secure;
        this._smtpData.auth = smtp.auth;

    }

    //メールを送信する
    public SendMail(sendData: ): void {

        //SMTPサーバーの情報をまとめる
        const transporte = mail.createTransport(this._smtpData);





    }





}




