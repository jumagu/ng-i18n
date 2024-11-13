import { RouterOutlet } from '@angular/router';
import { Component, Inject, inject, Optional } from '@angular/core';

import { SsrCookieService } from 'ngx-cookie-service-ssr';

import {
  LanguageService,
  SERVER_LANG_TOKEN,
} from './services/language.service';
import LangSelectorComponent from './components/lang-selector/lang-selector.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LangSelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private _cookie = inject(SsrCookieService);
  private _languageService = inject(LanguageService);

  constructor(
    @Optional()
    @Inject(SERVER_LANG_TOKEN)
    langServer: string
  ) {
    const lang =
      langServer ??
      (this._cookie.check('lang') ? this._cookie.get('lang') : 'en');
    this._languageService.changeLang(lang);
  }
}
