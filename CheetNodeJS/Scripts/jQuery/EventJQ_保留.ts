/// <reference path="../../node_modules/@types/jquery/index.d.ts" />

enum EventConditions {

    //�N���b�N
    click,
    //�_�u���N���b�N
    dblclick,
    //�}�E�X�I�[�o�[
    mouseover,
    //�}�E�X�A�E�g
    mouseout,
    //�X�N���[��
    scroll,
    //�}�E�X�_�E��



}

class EventJQ {

    constructor() { }

    //�C�x���g��ݒ肷��
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


//�}�E�X�A�E�g�C�x���g��ݒ�E���s����
mouseout()

//�N���b�N�C�x���g��ݒ�E���s����
click()

//�t�H�[�J�X�C�x���g��ݒ�E���s����
focusin()

//�u���[�C�x���g��ݒ�E���s����
blur()

//�}�E�X���[�u�C�x���g��ݒ�E���s����
mouseleave()

//�}�E�X�I�[�o�[�C�x���g��ݒ�E���s����
mouseover()

//�R���e�L�X�g���j���[�C�x���g��ݒ�E���s����
contextmenu()

//�C�ӂ̃C�x���g�𔭍s����
trigger()

//�}�E�X�G���^�[�C�x���g��ݒ�E���s����
mouseenter()

//�`�F���W�C�x���g��ݒ�E���s����
change()

//�t�H�[�����M�C�x���g��ݒ�E���s����
submit()

//�P�񂾂��Ăяo���C�x���g�n���h���[��v�f�ɐݒ肷��
one()

//�}�E�X�A�b�v�C�x���g��ݒ�E���s����
mouseup()

//�C�ӂ̃C�x���g�̃C�x���g�n���h���[��S�ČĂяo��
triggerHandler()

//�C�x���g�n���h���[��v�f����폜����
off()

//���T�C�Y�C�x���g��ݒ�E���s����
resize()

//�X�N���[���C�x���g��ݒ�E���s����
scroll()

//�L�[�_�E���C�x���g��ݒ�E���s����
keydown()

//�Z���N�g�C�x���g��ݒ�E���s����
select()

//�t�H�[�J�X�A�E�g�C�x���g��ݒ�E���s����
focusout()

//�t�H�[�J�X�C�x���g��ݒ�E���s����
focus()

//�_�u���N���b�N�C�x���g��ݒ�E���s����
dblclick()

//�C�x���g�n���h���[��v�f�ɐݒ肷��
on()

//�}�E�X�_�E���C�x���g��ݒ�E���s����
mousedown()

//�L�[�A�b�v�C�x���g��ݒ�E���s����
keyup()

//�}�E�X���[�u�C�x���g��ݒ�E���s����
mousemove()
























