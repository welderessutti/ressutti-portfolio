import { Component, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation/translation.service';
import { NavService } from '../../core/services/nav/nav.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly translation = inject(TranslationService);
  protected readonly nav = inject(NavService);
}
