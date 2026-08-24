import { DOCUMENT } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ContactService } from './contact.service';
import { PROFILE } from '../../../shared/data/profile.data';
import { Locale, LOCALES } from '../../../shared/i18n/locales';

describe('ContactService', () => {
  let service: ContactService;

  function createService(locale: Locale): ContactService {
    const document = TestBed.inject(DOCUMENT);
    document.documentElement.lang = locale;

    return TestBed.inject(ContactService);
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = createService(LOCALES.enGB);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should expose the CV for the rendered English build', () => {
    expect(service.cvPath).toBe(PROFILE.cvPath[LOCALES.enGB]);
  });

  it('should expose the CV for the rendered Portuguese build', () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});

    service = createService(LOCALES.ptBR);

    expect(service.cvPath).toBe(PROFILE.cvPath[LOCALES.ptBR]);
  });

  it('should expose the configured contact channels with safe link semantics', () => {
    expect(
      service.contacts.map(({ id, url, external, primary }) => ({ id, url, external, primary })),
    ).toEqual([
      { id: 'email', url: PROFILE.emailUrl, external: false, primary: true },
      { id: 'linkedin', url: PROFILE.linkedinUrl, external: true, primary: false },
      { id: 'github', url: PROFILE.githubUrl, external: true, primary: false },
      { id: 'whatsapp', url: PROFILE.whatsappUrl, external: true, primary: false },
    ]);

    expect(service.contacts.every((contact) => contact.accessibleLabel.length > 0)).toBe(true);
  });
});
