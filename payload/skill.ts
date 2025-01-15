import { ISkill } from '../component/skill/ISkill';

const backendLanguage: ISkill.Skill = {
  category: 'Languages',
  items: [
    {
      title: 'Java',
      // level: 3,
    },
    {
      title: 'Kotlin',
      // level: 3,
    },
    {
      title: 'TypeScript',
      // level: 3,
    },
    {
      title: 'javascript',
      // level: 2,
    },
    {
      title: 'HTML/CSS',
      // level: 2,
    },
  ],
};

const frameworkLib: ISkill.Skill = {
  category: 'Fameworks & Libraries',
  items: [
    {
      title: 'Spring',
      // level: 3,
    },
    {
      title: 'React.js',
      // level: 2,
    },
    {
      title: 'Node.js',
      // level: 3,
    },
    {
      title: 'Spring Boot',
      // level: 3,
    },
    {
      title: 'Next.js',
      // level: 3,
    },
    {
      title: 'JPA',
      // level: 2,
    },
    {
      title: 'jQuery',
      // level: 2,
    },
    {
      title: 'jqGrid',
      // level: 2,
    },
    {
      title: 'webSquare',
      // level: 2,
    },
    {
      title: 'Vue.js',
      // level: 2,
    },
    {
      title: 'Express.js',
      // level: 3,
    },
  ],
};

const infraDb: ISkill.Skill = {
  category: 'Infrastructure & Databases',
  items: [
    {
      title: 'MySQL',
    },
    {
      title: 'MSSQL',
    },
    {
      title: 'Docker',
    },
    {
      title: 'nginx',
    },
    {
      title: 'Oracle DB',
    },
    {
      title: 'Apache',
    },
    {
      title: 'Linux',
    },
  ],
};

const toolIde: ISkill.Skill = {
  category: 'Tools & IDEs',
  items: [
    {
      title: 'IDEA',
    },
    {
      title: 'Eclipse',
    },
    {
      title: 'VS Code',
    },

    {
      title: 'Git',
    },
    {
      title: 'Github',
    },
    {
      title: 'Bitbucket',
    },
    {
      title: 'Jenkins',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Confluence',
    },
  ],
};

const misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: 'DevOps',
    },
    {
      title: 'Agile',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backendLanguage, frameworkLib, infraDb, toolIde, misc],
  // tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
