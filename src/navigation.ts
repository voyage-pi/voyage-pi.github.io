import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Milestones',
      href: '/blog',
    },
    {
      text: 'Calendar',
      href: '/calendar',
    },
    {
      text: 'Meetings',
      href: '/meetings',
    },
    
  ],
  actions: [{ text: ' GitHub', href: 'https://github.com/voyage-pi/voyage-pi.github.io', target: '_blank', icon: 'tabler:brand-github' },
            { text: 'Google Drive', href: 'https://drive.google.com/drive/folders/158ntRnDcMAbc8rKsSLTjUmcLhjGvtPnE?usp=sharing', target: '_blank', icon: 'tabler:brand-google-drive' },
            { text: 'Jira', href: 'https://voyage-pi.atlassian.net/jira/software/projects/VOYAGEPI/summary', target: '_blank' , icon: 'tabler:brand-adobe' } ],

};

export const footerData = {
  links: [
    {
      title: 'Resources',
      links: [
        { text: 'GitHub', href: 'https://github.com/voyage-pi/voyage-pi.github.io' },
        { text: 'Google Drive', href: 'https://drive.google.com/drive/folders/158ntRnDcMAbc8rKsSLTjUmcLhjGvtPnE?usp=sharing' },
        { text: 'Jira', href: 'https://voyage-pi.atlassian.net/jira/software/projects/VOYAGEPI/summary' },
      ],
    },
    {
      title: 'Team Members',
      links: [
        {
          text: 'Guilherme Rosa',
          href: '#',
          linkedin: 'https://www.linkedin.com/in/guilherme-rosa',
          github: 'https://github.com/guilherme-rosa',
          email: 'mailto:guilherme.rosa@example.com'
        },
        {
          text: 'Henrique Freitas',
          href: '#',
          linkedin: 'https://www.linkedin.com/in/henrique-freitas',
          github: 'https://github.com/henrique-freitas',
          email: 'mailto:henrique.freitas@example.com'
        },
        {
          text: 'Henrique Teixeira',
          href: '#',
          linkedin: 'https://www.linkedin.com/in/henrique-teixeira',
          github: 'https://github.com/henrique-teixeira',
          email: 'mailto:henrique.teixeira@example.com'
        },
        {
          text: 'João Roldão',
          href: '#',
          linkedin: 'https://www.linkedin.com/in/joao-roldao',
          github: 'https://github.com/joao-roldao',
          email: 'mailto:joao.roldao@example.com'
        },
        {
          text: 'Rui Machado',
          href: '#',
          linkedin: 'https://www.linkedin.com/in/rui-machado',
          github: 'https://github.com/rui-machado',
          email: 'mailto:rui.machado@example.com'
        }
      ],
    },
    {
      title: 'Project Advisors',
      links: [
        { text: 'Osvaldo Pacheco', href: 'https://www.ua.pt/pt/p/10313442' },
        { text: 'Daniel Ferreira', href: 'https://www.ua.pt/pt/p/80653922' }
      ],
    }
  ],
  secondaryLinks: [
    { text: 'Calendar', href: getPermalink('/calendar') },
    { text: 'Meetings', href: getPermalink('/meetings') },
    { text: 'GitHub', href: 'https://github.com/voyage-pi' },
    { text: 'Google Drive', href: 'https://drive.google.com/drive/folders/158ntRnDcMAbc8rKsSLTjUmcLhjGvtPnE?usp=sharing' }
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/voyage-pi' },
    { ariaLabel: 'Google Drive', icon: 'tabler:brand-google-drive', href: 'https://drive.google.com/drive/folders/158ntRnDcMAbc8rKsSLTjUmcLhjGvtPnE?usp=sharing'}
  ],
};