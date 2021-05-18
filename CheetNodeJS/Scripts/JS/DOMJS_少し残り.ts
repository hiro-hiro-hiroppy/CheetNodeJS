enum AppendPosition {
    beforebegin,
    afterbegin,
    beforeend,
    afterend
}

enum SelectorType {
    ID,
    TagName,
    ClassName,
    Selector,
    SelectorAll,
}

enum AttrType {
    Get,
    Set,
    Has,
    Remove
}

interface ElementInfo {

    //属性系
    ID: string;
    ClassName: DOMTokenList;
    TextContent: string;
    TagName: string;

    //高さ系
    clientWidth: number;
    clientHeight: number;
    scrollWidth: number;
    scrollHeight: number;

    //子要素系
    children: HTMLCollection;
    parent: HTMLElement;
    firstChild: Element;
    lastChild: Element;
    nextSibling: Element;

    //HTML
    innerHTML;
    outerHTML;

    //スクロール量
    scrollTop: number;
    scrollLeft: number;

}

class DOMJS {

    constructor() {
    }

    //DOM要素を取得する
    public DomSelect(selector: string, selType: SelectorType) {

        //let element: Element | HTMLCollectionOf<Element> | NodeList;
        let element: any;

        switch (selType) {

            case SelectorType.ID:
                element = document.getElementById(selector);
                break;

            case SelectorType.TagName:
                element = document.getElementsByTagName(selector);
                break;

            case SelectorType.ClassName:
                element = document.getElementsByClassName(selector);
                break;

            case SelectorType.Selector:
                element = document.querySelector(selector);
                break;

            case SelectorType.SelectorAll:
                element = document.querySelectorAll(selector);
                break;

            default:
                break;

        }

        return element;
    }

    //要素の属性について操作する
    public ElementAttr(element, attrType: AttrType, attr: string, value: string): any {

        switch (attrType) {

            case AttrType.Get:
                element.getAttribute(attr);
                break;

            case AttrType.Set:
                element.setAttribute(attr, value);
                break;

            case AttrType.Has:
                element.hasAttribute(attr);
                break;

            case AttrType.Remove:
                element.removeAttribute(attr);
                break;

            default:
                break;

        }
    }

    //要素に要素を追加する
    public ElementAppend(position: AppendPosition): void {

        switch (position) {

            case AppendPosition.beforebegin:
                //element.insertbefore();
                break;

            case AppendPosition.afterbegin:

                break;

            case AppendPosition.beforeend:
                break;

            case AppendPosition.afterend:
                break;

        }

        ////要素にHTML文字列を使って要素を挿入する
        ////beforebegin, afterbegin, beforeend, afterendがある
        //element.insertAdjacentHTML('beforebegin', '<p>AAA</p>');

        ////特定の子要素の前に要素を挿入する
        

        ////要素内の末尾に要素を追加する
        //element.appendChild();
    }

    //要素情報を取得する
    public GetElementInfo(element: HTMLElement): ElementInfo {

        let elementInfo: ElementInfo;

        //属性系
        elementInfo.ID = element.id;
        elementInfo.ClassName = element.classList;
        elementInfo.TextContent = element.textContent;
        elementInfo.TagName = element.tagName;

        //高さ系
        elementInfo.scrollWidth = element.scrollWidth;   //paddingとスクロール分の内容を含む、border/スクロールバーは含まない
        elementInfo.scrollHeight = element.scrollHeight; //paddingとスクロール分の内容を含む、border/スクロールバーは含まない
        elementInfo.clientWidth = element.clientWidth;   //paddingを含む、border/スクロールバーは含まない
        elementInfo.clientHeight = element.clientHeight; //paddingを含む、border/スクロールバーは含まない

        //子要素系
        elementInfo.children = element.children;
        elementInfo.parent = element.parentElement;
        elementInfo.firstChild = element.firstElementChild;
        elementInfo.lastChild = element.lastElementChild;
        elementInfo.nextSibling = element.nextElementSibling;

        //HTML
        elementInfo.innerHTML = element.innerHTML;
        elementInfo.outerHTML = element.innerHTML;

        //スクロール量
        elementInfo.scrollTop = element.scrollTop;
        elementInfo.scrollLeft = element.scrollLeft;

        return elementInfo;
    }

    //指定座標の要素を取得する
    public GetPointElement(x: number, y: number):Element {

        let pointDOM = document.elementFromPoint(x, y);

        return pointDOM;
    }




}

//innerHTML, outerHTML, scrollTop, scrollLeft

    //特定の要素を子孫に持っているか調べる
    element.contains(target);
    //現在のページの最終更新日時を取得する
    document.lastModified;
    //body要素を取得する
    document.body;
    //要素内の子要素を削除する
    element.removeChild(target);
    //要素のクラスを編集する(ここはもう少し詰める)
    element.classList.add('');
    element.classList.remove('');
    element.classList.item('');
    element.classList.toggle('');
    element.classList.contains('');
    element.classList.replace('');
    //新しいテキストノードを作る
    document.createTextNode('こんにちは');
    //リファラーを取得する 直前にアクセスしていたページのURL
    document.referrer;
    //要素のサイズと位置をまとめて取得する
    element.getBoundingClientRect();
    //新しい要素を作る
    document.createElement('');
    //html要素を取得する
    //document.documentElement;
    //要素の直前にある兄弟要素を取得する
    element.previousElementSibling;
