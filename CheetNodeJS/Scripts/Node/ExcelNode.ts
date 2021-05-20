/// <reference path="../../node_modules/xlsx/types/index.d.ts" />
import * as xlsx from "xlsx";

//�Q�lURL
//https://qiita.com/Kazunori-Kimura/items/29038632361fba69de5e
//https://qiita.com/indometacin/items/020513f7801a040dab33
//http://dotnsf.blog.jp/archives/1071849503.html
//npm install xlsx --save


//�Z���̊�{�I�ȕ���
interface ColumnRow {
    column: number;
    row: number;
    cellValue: string;
    sheetName: string;
    option: CellOption;
}

//�Z���̃I�v�V�����ݒ�(�Ƃ肠�������͂Ȃ�)
interface CellOption {

}

//�C���|�[�g���̓ǂݎ���E�s
interface ReadIndexNo {
    startColumn: number;
    startRow: number;
    endColumn: number;
    keyColumn: number;
}


class ExcelNode {

    private Utils: xlsx.XLSX$Utils;

    constructor() {
        this.Utils = xlsx.utils;
    }

    //�G�N�Z�����C���|�[�g
    public ImportExcel() {


    }


    //�Z����ǂݎ��(�P��)
    public ReadCell(filePath: string, columnRow: ColumnRow): ColumnRow {

        //�V�[�g�̓ǂݍ���
        let wb: xlsx.WorkBook = xlsx.readFile(filePath);

        //�V�[�g�����L�ڂ���Ă��Ȃ��ꍇ�́A��Ԗڂ̃V�[�g���w��
        let sheetName: string = columnRow.sheetName ?? wb.SheetNames[0];
        let sheet: xlsx.WorkSheet = wb.Sheets[sheetName];

        //�Z���̓ǂݍ���
        let result: ColumnRow;
        result.cellValue = sheet[this.Utils.encode_cell({ c: columnRow.column, r: columnRow.row })];

        result.sheetName = sheetName;
        result.column = columnRow.column;
        result.row = columnRow.row;
        result.option = columnRow.option;

        return result;
    }

    //�Z����ǂݎ��(����)
    public ReadCellMultiple(filePath: string, columnRows: ColumnRow[]): ColumnRow[] {

        let results: ColumnRow[];
        let resultIndexNo: number = 0;

        for (var columnRow of columnRows) {

            let result: ColumnRow = this.ReadCell(filePath, columnRow);

            results[resultIndexNo] = result;
            resultIndexNo++;
        }

        return results;
    }


    //�G�N�Z�����G�N�X�|�[�g
    public ExportExcel(): void {

    }

    //�e���v���[�g�t�@�C�����g���ăG�N�Z�����G�N�X�|�[�g
    public ExportTempExcel(filePath: string, tempFilePath: string, columnRows: ColumnRow[]): void {







    }

    //�Z���ɏ�������(�P��)
    public WriteCell(filePath: string, columnRow: ColumnRow): void {

        //�V�[�g�̓ǂݍ���
        let wb: xlsx.WorkBook = xlsx.readFile(filePath);

        //�V�[�g�����L�ڂ���Ă��Ȃ��ꍇ�́A��Ԗڂ̃V�[�g���w��
        let sheetName: string = columnRow.sheetName ?? wb.SheetNames[0];
        let sheet: xlsx.WorkSheet = wb.Sheets[sheetName];

        sheet[this.Utils.encode_cell({ c: columnRow.column, r: columnRow.row })]
            = columnRow.cellValue;

        //�V�[�g�X�V���K�v���ǂ����`�F�b�N
        wb.Sheets[sheetName] = sheet;

        //�t�@�C����������
        xlsx.writeFile(wb, filePath);

    }

    //�Z���ɏ�������(����)
    public WriteCellMultiple(filePath: string, columnRows: ColumnRow[]): void {

        //�V�[�g�̓ǂݍ���
        let wb: xlsx.WorkBook = xlsx.readFile(filePath);

        for (let columnRow of columnRows) {

            //�V�[�g�����L�ڂ���Ă��Ȃ��ꍇ�́A��Ԗڂ̃V�[�g���w��
            let sheetName: string = columnRow.sheetName ?? wb.SheetNames[0];
            let sheet: xlsx.WorkSheet = wb.Sheets[sheetName];

            sheet[this.Utils.encode_cell({ c: columnRow.column, r: columnRow.row })]
                = columnRow.cellValue;

            //�V�[�g�X�V���K�v���ǂ����`�F�b�N
            wb.Sheets[sheetName] = sheet;
        }

        //�t�@�C����������
        xlsx.writeFile(wb, filePath);

    }

}


