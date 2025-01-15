import { IExperience } from '../component/experience/IExperience';

const limeSI: IExperience.Position = {
  title: 'SI 사업 개발',
  startedAt: '2023-12',
  descriptions: ['SK PS&M', '신세계 I&C', '롯데 이노베이트'],
  skillKeywords: [
    'Kotlin',
    'Java',
    'javascript',
    'Node.js',
    'React',
    'Next.js',
    'TypeScript',
    'Spring',
    'Spring Boot',
    'MSSQL',
    'Oracle DB',
    'Kubernetes',
    'Docker',
    'Jenkins',
  ],
};

const limeEMR: IExperience.Position = {
  title: 'BSB Global 해외 사업 개발',
  startedAt: '2023-05',
  endedAt: '2023-12',
  descriptions: [
    '병원 EMR ( Electronic Medical Record ) 전자 의무 기록 시스템 게발',
    'React 환경 구축 및 공통 유틸 개발',
    '해회 현지 시스템에 맞는 요구 사항에 따른 신규 비즈니스 로직 구현',
    'BSB 글로벌 포털사이트 개발',
  ],
  skillKeywords: [
    'Java',
    'Spring Boot',
    'react.js',
    'JPA',
    'node.js',
    'myBatis Generator',
    'linux',
  ],
};

const limSmartFactory: IExperience.Position = {
  title: '스마트 팩토리 사업 개발',
  startedAt: '2022-02',
  endedAt: '2023-09',
  descriptions: [
    'MES(Manufacturing Execution System) 생산 관리 시스템 게발',
    'Spring 환경 구축 및 공통 유틸 개발',
    '레거시 청산 및 기존 비즈니스 로직 개선 작업',
    '관리자 Needs 에 맞는 사용성 개선과 신규 비즈니스 로직 구현',
    '물류 관리 서비스 API 개발',
    'MySQL 데이터베이스 유지보수 및 관리',
  ],
  skillKeywords: ['Java', 'Spring', 'jQuery', 'jqGrid', 'MySQL', 'webSquare'],
};

const limeComp: IExperience.Item = {
  title: '라임컴퍼니',
  positions: [limeSI, limSmartFactory, limeEMR],
};

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [limeComp],
};

export default experience;
