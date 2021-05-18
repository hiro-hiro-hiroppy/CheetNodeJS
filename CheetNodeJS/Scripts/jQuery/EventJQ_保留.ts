/// <reference path="../../node_modules/@types/jquery/index.d.ts" />

enum EventConditions {

    //クリック
    click,
    //ダブルクリック
    dblclick,
    //マウスオーバー
    mouseover,
    //マウスアウト
    mouseout,
    //スクロール
    scroll,
    //マウスダウン



}

class EventJQ {

    constructor() { }

    //イベントを設定する
    public ClickEvent() {




    }




    public EventSet(selector: string, eCondition: EventConditions, func: any) {

        switch (eCondition) {

                case EventConditions.click:
                    $(selector).on('click', () => {
                        func;
                    });

                    $(event.selector).click(() => {
                        event.jqEvent;
                    });
                    break;








            }





        }





    }


}

$('AAAA').click(function() { console.log("aaa") });

let xxx = new EventJQ();
let xx: EventFunc;
xx.eConditions = EventConditions.click;
xx.jqEvent = XXX("aaa");


EventConditions.click, XXX("AAA")

xxx.EventSet();

function XXX(aaa) {
    console.log(aaa);
}


//マウスアウトイベントを設定・発行する
mouseout()

//クリックイベントを設定・発行する
click()

//フォーカスイベントを設定・発行する
focusin()

//ブラーイベントを設定・発行する
blur()

//マウスリーブイベントを設定・発行する
mouseleave()

//マウスオーバーイベントを設定・発行する
mouseover()

//コンテキストメニューイベントを設定・発行する
contextmenu()

//任意のイベントを発行する
trigger()

//マウスエンターイベントを設定・発行する
mouseenter()

//チェンジイベントを設定・発行する
change()

//フォーム送信イベントを設定・発行する
submit()

//１回だけ呼び出すイベントハンドラーを要素に設定する
one()

//マウスアップイベントを設定・発行する
mouseup()

//任意のイベントのイベントハンドラーを全て呼び出す
triggerHandler()

//イベントハンドラーを要素から削除する
off()

//リサイズイベントを設定・発行する
resize()

//スクロールイベントを設定・発行する
scroll()

//キーダウンイベントを設定・発行する
keydown()

//セレクトイベントを設定・発行する
select()

//フォーカスアウトイベントを設定・発行する
focusout()

//フォーカスイベントを設定・発行する
focus()

//ダブルクリックイベントを設定・発行する
dblclick()

//イベントハンドラーを要素に設定する
on()

//マウスダウンイベントを設定・発行する
mousedown()

//キーアップイベントを設定・発行する
keyup()

//マウスムーブイベントを設定・発行する
mousemove()
























