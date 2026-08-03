import { LOCALES } from '../i18n/locales';
import { Profile } from '../models/profile.model';

export const PROFILE: Profile = {
  name: 'Welder Ressutti',
  email: 'welderessutti@gmail.com',
  emailUrl: 'mailto:welderessutti@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/welderessutti/',
  githubUrl: 'https://github.com/welderessutti',
  whatsappNumber: '+55 19 99808-5588',
  whatsappUrl: 'https://wa.me/5519998085588',
  cvPath: {
    [LOCALES.enGB]: '/documents/Welder Ressutti - EN.pdf',
    [LOCALES.ptBR]: '/documents/Welder Ressutti - EN.pdf',
  },
};
