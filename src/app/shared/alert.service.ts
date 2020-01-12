import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

const messeges = {
  succes: {
    default: 'Ação realizado com sucesso.',
    create: 'Criado com sucesso',
    update: 'Atualizado com sucesso',
    delete: 'Excluido com sucesso',
  },
  error: {
    default: 'Desculpe aconteceu um error.',
    create: 'Houve uma falar ao criar',
    update: 'Houve uma falar ao atulizar',
    delete: 'Houve uma falar ao excluir',
  },
  info: {
    default: 'info ....',
  },
  color: {
    succes: 'alert-succes',
    error: 'alert-error',
    info: 'alert-info',
  },
};

const config = {
  panelClass: [],
  duration: 2000,
};

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  message: string;
  constructor(private _snackBar: MatSnackBar) {}

  open() {
    this._snackBar.open(this.message, 'Fechar', config);
  }
  sucess(message: string = null, action: string = null) {
    this.message = message || messeges.succes.default;
    config.panelClass.push(messeges.color.succes);
    this.open();
  }
  info(message: string, action: string) {
    this.message = message || messeges.info.default;
    config.panelClass.push(messeges.color.info);
    this.open();
  }
  error(message: string, action: string) {
    this.message = message || messeges.error.default;
    config.panelClass.push(messeges.color.error);
    this.open();
  }

  TODO: any;

  // filterAction(action: string): string {
  //   let arr = Object.keys(messeges).map(k => messeges[k]);
  //   return arr.find(e => action === e.messeges.succes);
  // }
}
