import * as crypto from 'crypto'

const ALGORITHM = 'aes-256-cbc';
const KEY = Buffer.from([
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff
]); // 全ビット１の256bit値を鍵とする

function encodeBase64(data: string): string {
    // 16byteのランダム値を生成してIVとする
    const iv = crypto.randomBytes(16);

    // 暗号器作成
    const cipher = crypto.createCipheriv(ALGORITHM, KEY, iv);

    // dataをバイナリにして暗号化
    const encData = cipher.update(Buffer.from(data));

    // 末端処理 ＆ 先頭にivを付与し、バイナリをbase64(文字列)にして返す
    return Buffer.concat([iv, encData, cipher.final()]).toString('base64');
}

function decodeBase64(data: string): string {
    // 受け取った暗号化文字列をバイナリに変換
    const buff = Buffer.from(data, 'base64');

    // iv値である、先頭16byteを取り出す
    const iv = buff.slice(0, 16);

    // iv値以降の、暗号化データを取り出す
    const encData = buff.slice(16);

    // 復号器作成
    const decipher = crypto.createDecipheriv(ALGORITHM, KEY, iv);

    // 暗号化データを復号化
    const decData = decipher.update(encData);

    // 末端処理 ＆ バイナリを文字列に戻す
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