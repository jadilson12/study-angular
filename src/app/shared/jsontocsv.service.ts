import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JsontocsvService {
  downloadFile(data: any, header: any, filename: string) {
    let csvData = this.ConvertToCSV(data, header);
    let blob = new Blob([`\ufeff${csvData}`], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement('a');
    let url = URL.createObjectURL(blob);
    const isSafariBrowser =
      navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {
      //if Safari open in new window to save file with random filename.
      dwldLink.setAttribute('target', '_blank');
    }
    dwldLink.setAttribute('href', url);
    dwldLink.setAttribute('download', `${filename}.csv`);
    dwldLink.style.visibility = 'hidden';
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }

  ConvertToCSV(objArray: any, headerList: []) {
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = 'index,';
    headerList.forEach(e => (row += `${e},`));

    row = row.slice(0, -1);
    str += `${row}\r\n`;

    for (let i = 0; i < array.length; i++) {
      let line = `${i + 1} `;
      headerList.forEach(e => (line += `,${array[i][e]}`));
      str += `${line}\r\n`;
    }
    return str;
  }
}
