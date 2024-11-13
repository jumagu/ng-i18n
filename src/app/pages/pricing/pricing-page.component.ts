import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'pricing-page',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './pricing-page.component.html',
})
export default class PricingPageComponent {}
