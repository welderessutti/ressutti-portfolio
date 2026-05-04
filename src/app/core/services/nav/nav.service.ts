import { Injectable, computed, inject } from '@angular/core';
import { TranslationService } from '../translation/translation.service';
import { Nav, NavBase } from '../../../shared/models/nav.model';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  private readonly translation = inject(TranslationService);
  private readonly rawNav: NavBase[] = [
    { id: 'home', path: '/' },
    { id: 'projects', path: '/projects' },
    { id: 'about', path: '/about' },
    { id: 'contact', path: '/contact' },
  ];

  public readonly navs = computed<Nav[]>(() =>
    this.rawNav.map((nav) => ({
      ...nav,
      label: this.translation.t(`nav.${nav.id}`),
    })),
  );
}
