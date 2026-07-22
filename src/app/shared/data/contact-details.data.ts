import { LOCALES } from '../i18n/locales';
import { ContactDetails } from '../models/contact-details.model';

export const CONTACT_DETAILS: ContactDetails = {
  name: 'Welder Ressutti',
  email: 'welderessutti@gmail.com',
  emailUrl: 'mailto:welderessutti@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/welderessutti/',
  githubUrl: 'https://github.com/welderessutti',
  whatsappNumber: '+55 19 99808-5588',
  whatsappUrl: 'https://wa.me/5519998085588',
  cvPath: {
    [LOCALES.enGB]: '/documents/welder-ressutti-cv-en-gb.pdf',
    [LOCALES.ptBR]: '/documents/welder-ressutti-cv-pt-br.pdf',
  },
};
