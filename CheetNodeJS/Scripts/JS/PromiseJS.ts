//Promise �I���
function Promise() {

    //�񓯊�����������Promise�I�u�W�F�N�g�𐶐�����
    var promise = new Promise();

    //�񓯊����������s�������̏�����ݒ肷��
    promise.catch(function () { });

    //Promise�I�u�W�F�N�g�̏�Ԃɉ����ď������s��
    promise.then();

    //�����̔񓯊����������s���A�ŏ��ɉ����������ʂ̂ݎ擾����
    promise.race();

    //�񓯊����������s�Ƃ���
    promise.reject();

    //�񓯊������𐬌��Ƃ���
    promise.resolve();

    //�����̔񓯊����������s����
    promise.all();

}
