import { Component } from '@angular/core';
import { SidenavService } from '../sidenav/sidenav.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
  constructor(
    private readonly _sidenavService: SidenavService,
    public readonly _translate: TranslateService,
  ) {
    _translate.addLangs(['en-US', 'pt-BR']);
    _translate.setDefaultLang('pt-BR');

    const browserLang = _translate.getBrowserLang();
    _translate.use(browserLang.match(/pt|pt-BR/) ? 'pt-BR' : 'en-US');
  }
  setDawer() {
    this._sidenavService.setDrawer();
  }
}
