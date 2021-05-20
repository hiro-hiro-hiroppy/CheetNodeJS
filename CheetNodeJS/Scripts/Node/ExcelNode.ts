/// <reference path="../../node_modules/xlsx/types/index.d.ts" />
import * as xlsx from "xlsx";

//参考URL
//https://qiita.com/Kazunori-Kimura/items/29038632361fba69de5e
//https://qiita.com/indometacin/items/020513f7801a040dab33
//http://dotnsf.blog.jp/archives/1071849503.html
//npm install xlsx --save


//セルの基本的な部分
interface ColumnRow {
    column: number;
    row: number;
    cellValue: string;
    sheetName: string;
    option: CellOption;
}

//セルのオプション設定(とりあえず今はなし)
interface CellOption {

}

//インポート時の読み取り列・行
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

    //エクセルをインポート
    public ImportExcel() {


    }


    //セルを読み取り(単数)
    public ReadCell(filePath: string, columnRow: ColumnRow): ColumnRow {

        //シートの読み込み
        let wb: xlsx.WorkBook = xlsx.readFile(filePath);

        //シート名が記載されていない場合は、一番目のシートを指定
        let sheetName: string = columnRow.sheetName ?? wb.SheetNames[0];
        let sheet: xlsx.WorkSheet = wb.Sheets[sheetName];

        //セルの読み込み
        let result: ColumnRow;
        result.cellValue = sheet[this.Utils.encode_cell({ c: columnRow.column, r: columnRow.row })];

        result.sheetName = sheetName;
        result.column = columnRow.column;
        result.row = columnRow.row;
        result.option = columnRow.option;

        return result;
    }

    //セルを読み取り(複数)
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


    //エクセルをエクスポート
    public ExportExcel(): void {

    }

    //テンプレートファイルを使ってエクセルをエクスポート
    public ExportTempExcel(filePath: string, tempFilePath: string, columnRows: ColumnRow[]): void {







    }

    //セルに書き込み(単数)
    public WriteCell(filePath: string, columnRow: ColumnRow): void {

        //シートの読み込み
        let wb: xlsx.WorkBook = xlsx.readFile(filePath);

        //シート名が記載されていない場合は、一番目のシートを指定
        let sheetName: string = columnRow.sheetName ?? wb.SheetNames[0];
        let sheet: xlsx.WorkSheet = wb.Sheets[sheetName];

        sheet[this.Utils.encode_cell({ c: columnRow.column, r: columnRow.row })]
            = columnRow.cellValue;

        //シート更新が必要かどうかチェック
        wb.Sheets[sheetName] = sheet;

        //ファイル書き込み
        xlsx.writeFile(wb, filePath);

    }

    //セルに書き込み(複数)
    public WriteCellMultiple(filePath: string, columnRows: ColumnRow[]): void {

        //シートの読み込み
        let wb: xlsx.WorkBook = xlsx.readFile(filePath);

        for (let columnRow of columnRows) {

            //シート名が記載されていない場合は、一番目のシートを指定
            let sheetName: string = columnRow.sheetName ?? wb.SheetNames[0];
            let sheet: xlsx.WorkSheet = wb.Sheets[sheetName];

            sheet[this.Utils.encode_cell({ c: columnRow.column, r: columnRow.row })]
                = columnRow.cellValue;

            //シート更新が必要かどうかチェック
            wb.Sheets[sheetName] = sheet;
        }

        //ファイル書き込み
        xlsx.writeFile(wb, filePath);

    }

}


