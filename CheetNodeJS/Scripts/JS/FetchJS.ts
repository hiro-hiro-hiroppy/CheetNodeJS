//Fetch �I���
function Fetch() {

    //���\�[�X���擾���邽�߂̃��N�G�X�g�������s��
    fetch();

    //���X�|���X���e�L�X�g�Ƃ��ď�������
    response.text();

    fetch('data.txt')
        .then(response => reseponse.text())
        .then(text => {
            console.log(text);
        })
        ;

    //���X�|���X��blob�Ƃ��ĉ�������
    response.blob();

    //���X�|���X��json�Ƃ��ď�������
    response.json();


}
