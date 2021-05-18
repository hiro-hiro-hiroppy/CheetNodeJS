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

    //�����n
    ID: string;
    ClassName: DOMTokenList;
    TextContent: string;
    TagName: string;

    //�����n
    clientWidth: number;
    clientHeight: number;
    scrollWidth: number;
    scrollHeight: number;

    //�q�v�f�n
    children: HTMLCollection;
    parent: HTMLElement;
    firstChild: Element;
    lastChild: Element;
    nextSibling: Element;

    //HTML
    innerHTML;
    outerHTML;

    //�X�N���[����
    scrollTop: number;
    scrollLeft: number;

}

class DOMJS {

    constructor() {
    }

    //DOM�v�f���擾����
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

    //�v�f�̑����ɂ��đ��삷��
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

    //�v�f�ɗv�f��ǉ�����
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

        ////�v�f��HTML��������g���ėv�f��}������
        ////beforebegin, afterbegin, beforeend, afterend������
        //element.insertAdjacentHTML('beforebegin', '<p>AAA</p>');

        ////����̎q�v�f�̑O�ɗv�f��}������
        

        ////�v�f���̖����ɗv�f��ǉ�����
        //element.appendChild();
    }

    //�v�f�����擾����
    public GetElementInfo(element: HTMLElement): ElementInfo {

        let elementInfo: ElementInfo;

        //�����n
        elementInfo.ID = element.id;
        elementInfo.ClassName = element.classList;
        elementInfo.TextContent = element.textContent;
        elementInfo.TagName = element.tagName;

        //�����n
        elementInfo.scrollWidth = element.scrollWidth;   //padding�ƃX�N���[�����̓��e���܂ށAborder/�X�N���[���o�[�͊܂܂Ȃ�
        elementInfo.scrollHeight = element.scrollHeight; //padding�ƃX�N���[�����̓��e���܂ށAborder/�X�N���[���o�[�͊܂܂Ȃ�
        elementInfo.clientWidth = element.clientWidth;   //padding���܂ށAborder/�X�N���[���o�[�͊܂܂Ȃ�
        elementInfo.clientHeight = element.clientHeight; //padding���܂ށAborder/�X�N���[���o�[�͊܂܂Ȃ�

        //�q�v�f�n
        elementInfo.children = element.children;
        elementInfo.parent = element.parentElement;
        elementInfo.firstChild = element.firstElementChild;
        elementInfo.lastChild = element.lastElementChild;
        elementInfo.nextSibling = element.nextElementSibling;

        //HTML
        elementInfo.innerHTML = element.innerHTML;
        elementInfo.outerHTML = element.innerHTML;

        //�X�N���[����
        elementInfo.scrollTop = element.scrollTop;
        elementInfo.scrollLeft = element.scrollLeft;

        return elementInfo;
    }

    //�w����W�̗v�f���擾����
    public GetPointElement(x: number, y: number):Element {

        let pointDOM = document.elementFromPoint(x, y);

        return pointDOM;
    }




}

//innerHTML, outerHTML, scrollTop, scrollLeft

    //����̗v�f���q���Ɏ����Ă��邩���ׂ�
    element.contains(target);
    //���݂̃y�[�W�̍ŏI�X�V�������擾����
    document.lastModified;
    //body�v�f���擾����
    document.body;
    //�v�f���̎q�v�f���폜����
    element.removeChild(target);
    //�v�f�̃N���X��ҏW����(�����͂��������l�߂�)
    element.classList.add('');
    element.classList.remove('');
    element.classList.item('');
    element.classList.toggle('');
    element.classList.contains('');
    element.classList.replace('');
    //�V�����e�L�X�g�m�[�h�����
    document.createTextNode('����ɂ���');
    //���t�@���[���擾���� ���O�ɃA�N�Z�X���Ă����y�[�W��URL
    document.referrer;
    //�v�f�̃T�C�Y�ƈʒu���܂Ƃ߂Ď擾����
    element.getBoundingClientRect();
    //�V�����v�f�����
    document.createElement('');
    //html�v�f���擾����
    //document.documentElement;
    //�v�f�̒��O�ɂ���Z��v�f���擾����
    element.previousElementSibling;
