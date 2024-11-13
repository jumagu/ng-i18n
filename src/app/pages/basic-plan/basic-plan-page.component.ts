import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'basic-plan-page',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './basic-plan-page.component.html',
})
export default class BasicPlanPageComponent {}
