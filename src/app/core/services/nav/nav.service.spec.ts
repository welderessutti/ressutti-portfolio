import { DOCUMENT } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { NavService } from './nav.service';
import { Locale, LOCALES } from '../../../shared/i18n/locales';
import { ROUTES } from '../../../shared/i18n/routes';

describe('NavService', () => {
  let service: NavService;

  function createService(locale: Locale): NavService {
    TestBed.inject(DOCUMENT).documentElement.lang = locale;

    return TestBed.inject(NavService);
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = createService(LOCALES.enGB);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should build navigation from the locale of the rendered English document', () => {
    expect(service.navs.map(({ id, path, locale }) => ({ id, path, locale }))).toEqual([
      { id: 'home', path: `/${ROUTES.home[LOCALES.enGB]}`, locale: LOCALES.enGB },
      { id: 'projects', path: `/${ROUTES.projects[LOCALES.enGB]}`, locale: LOCALES.enGB },
      { id: 'about', path: `/${ROUTES.about[LOCALES.enGB]}`, locale: LOCALES.enGB },
      { id: 'contact', path: `/${ROUTES.contact[LOCALES.enGB]}`, locale: LOCALES.enGB },
    ]);
  });

  it('should build navigation from the locale of the rendered Portuguese document', () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});

    service = createService(LOCALES.ptBR);

    expect(service.navs.map(({ path, locale }) => ({ path, locale }))).toEqual([
      { path: `/${ROUTES.home[LOCALES.ptBR]}`, locale: LOCALES.ptBR },
      { path: `/${ROUTES.projects[LOCALES.ptBR]}`, locale: LOCALES.ptBR },
      { path: `/${ROUTES.about[LOCALES.ptBR]}`, locale: LOCALES.ptBR },
      { path: `/${ROUTES.contact[LOCALES.ptBR]}`, locale: LOCALES.ptBR },
    ]);
  });

  it('should provide a non-empty accessible label for every destination', () => {
    expect(service.navs.every((nav) => nav.label.length > 0)).toBe(true);
  });
});
