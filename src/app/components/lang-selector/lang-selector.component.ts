import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'lang-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lang-selector.component.html',
})
export default class LangSelectorComponent {
  private _languageService = inject(LanguageService);

  public currentLang = this._languageService.currentLang;

  public languages = [
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
  ];

  public changeLangHandler(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    this._languageService.changeLang(value);
  }
}
