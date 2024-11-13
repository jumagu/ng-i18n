import { inject, Injectable, InjectionToken, signal } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

// Custom Injection Token
export const SERVER_LANG_TOKEN = new InjectionToken<string>(
  'SERVER_LANG_TOKEN'
);

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private _cookie = inject(SsrCookieService);
  private _translate = inject(TranslateService);
  private _langServer = inject(SERVER_LANG_TOKEN, { optional: true });
  private _currentLang = signal(this._langServer ?? 'en');

  public get currentLang() {
    return this._currentLang();
  }

  public changeLang(lang: string) {
    this._cookie.set('lang', lang);
    this._translate.setDefaultLang(lang);
    this._translate.use(lang);
    this._currentLang.set(lang);
  }
}
