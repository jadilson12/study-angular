import { Injectable } from '@angular/core';
import * as Driver from 'driver.js';

@Injectable({
  providedIn: 'root',
})
export class AjudaAppService {
  driver = new Driver({
    allowClose: false,
    closeBtnText: 'Fechar',
    nextBtnText: 'Próximo',
    prevBtnText: 'Anterior',
    doneBtnText: 'Finalizado',
    animate: true,
  });

  steps(steps: any) {
    this.driver.defineSteps(steps);
    this.driver.start();
  }

  highlight(item: any) {
    this.driver.highlight(item);
  }
}
