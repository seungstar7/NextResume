import { IProject } from '../component/project/IProject';

const WHERE = {
  YA: '야놀자 (Yanolja)',
  PL: '플레이팅 (Plating)',
  EC: '이큐브랩 (Ecube Labs)',
  KY: '키니 (KYNY)',
  NV: '네이버 (NAVER)',
  LO: '롯데이노베이트',
  SSG: '신세계 I&C',
  SK: 'SK PS&M',
  BSB: 'BSB Global',
  MES: 'MES 솔루션',
};

const lotte: IProject.Item = {
  title: 'FDS (이상 거래 감지 시스템) SaaS 구축 프로젝트',
  startedAt: '2024-09',
  endedAt: '2024-12',
  where: WHERE.LO,
  descriptions: [
    {
      content: '고도화 성 계열사 통합 프로젝트 개발 ',
    },
    {
      content: '카드 사용 내역 이상 거래 내용 분석 프로시저',
      weight: 'MEDIUM',
    },
    {
      content: '각 계열사들이 동적으로 카드 사용 내용 분석 처리를 할 수 있도록 계열사 분리 작업',
      weight: 'MEDIUM',
      descriptions: [
        {
          content: '계열사들이 요구하는 분석 조건이 다르므로 FDS_Service 에서 효과적으로 관리',
        },
        {
          content:
            '기존 카드마스터는 1 : 1 관계에서 1 : n 의 관계로 변경 됨에 따라 Linked Data 처리되던 카드 이용내용을 안터페이스로 수신 처리',
        },
        {
          content:
            '개선 후 각 계열사들이 원하는 거래 탐지 조건들이 관리자에 의해 즉시 반영 되는 효과',
        },
      ],
    },
    {
      content: 'MSSQL 쿼리 작업',
      descriptions: [
        {
          content: '프로시저의 효과적 관리를 위한 Function 개발',
        },
        {
          content: '분석 작업을 위한 DB 배치 스케줄링 작업',
        },
        {
          content: '쿼리 속도 개선 : 상위 부서 조회 시 기존 3000ms -> 60ms',
        },
      ],
    },
  ],
};

const ssg: IProject.Item = {
  title: 'LMS(학습 관리 시스템) MSA 고도화 개발',
  startedAt: '2024-05',
  endedAt: '2024-09',
  where: WHERE.SSG,
  descriptions: [
    {
      content: '효과적인 프로젝트 관리를 위한 MSA 로 변환 고도화 개발',
    },
    {
      content: 'Next.js 로 프론트엔드 화면 개발',
      descriptions: [
        {
          content: 'AS-IS : JSP -> TOBE : Next.js 포팅',
        },
        {
          content: 'cdn 으로 수선 처리된 컨텐츠 학습 플레이어 개발',
        },
        {
          content: '플레이어로 학습시 학습자 진도율 실시간 반영 처리하는 비즈니스 로직 구현',
        },
      ],
    },
    {
      content: '(관리자용) Content-Pool 관리 ',
    },
    {
      content: '비동기 작업을 효과적으로 수행할 수 있는 유틸성 상태관리 구현',
    },
  ],
};

const sk: IProject.Item = {
  title: 'SK T-Family Shop 임직원 쇼핑몰 차세대 개발',
  startedAt: '2023-10',
  endedAt: '2024-05',
  where: WHERE.SK,
  descriptions: [
    {
      content: 'Kotlin Spring 백엔드 API 구현',
    },
    {
      content: 'PG 결제 연동 작업',
      weight: 'MEDIUM',
      descriptions: [
        {
          content: 'PG 결제 통보 수신 모듈 구축',
        },
        {
          content: 'CSR 처리 가등하도록 Nice Pay 비즈니스 로직을 인터페이스로 분리 작업',
        },
        {
          content: '오케이케시백 포인트 연동 개발 (조회, 적립, 사용)',
        },
      ],
    },
    {
      content: '정책에 따른 휴대폰 요금(공시지원금, 약정할인) 실시간 적용 구현',
    },
    {
      content: '추가 요구 사항에 따른 할인 관련 비즈니스 로직 개선작업',
      descriptions: [
        { content: '인사 등급에 따른 차등 요금 적용 로직' },
        { content: 'Mall 별 계열사들의 적용시킬 할인율 추가 반영' },
      ],
    },
    {
      content: '휴대폰 상품 구입 완료 시 가입서류 받고 개통 처리 작업 (T-Gate 연동)',
    },
  ],
};

const his: IProject.Item = {
  title: 'HIS EMR',
  startedAt: '2023-02',
  endedAt: '2023-10',
  where: WHERE.BSB,
  descriptions: [
    {
      content: '필리핀 해외 사업 MSA 신규 개발',
    },
    {
      content: '기존 수기 작성 진료를 전산화 파이프라인 설계 및 구축',
    },
    {
      content: '국제적 사용 목표로 국제 표준 의약품 정보 활용',
      descriptions: [
        {
          content: '의약품 입력 자동완성 feature 개발',
        },
        {
          content: '국제 약품 정보 사전 개발 (약품명, 제조사, 코드)',
        },
      ],
    },
    {
      content: 'spring scheduler 로 일 배치 관리',
    },
    {
      content: '환자 관리(접수, 진료, 처방, 수납)',
    },
    {
      content: 'socket 통신으로 환자별 실시간 대기 리스트 및 의료 전달사항 실시간 반영',
    },
  ],
};

const bsb: IProject.Item = {
  title: 'BSB 글로벌 포털사이트 구축',
  startedAt: '2023-01',
  endedAt: '2023-03',
  where: WHERE.BSB,
  descriptions: [
    {
      content: '해외 사업 연계를 위한 소개성 포탈 페이지 개발',
    },
    {
      content: 'Back-Office 파트 관리자용 매니지먼트 화면 개발 (배너, 메뉴 설정, 컨텐츠)',
    },
  ],
};

const lime: IProject.Item = {
  title: '라임 MES 솔루션 개발',
  startedAt: '2023-01',
  endedAt: '2023-04',
  where: WHERE.MES,
  descriptions: [
    {
      content: '주물 출하 관리',
    },
    {
      content: '영업 관리(출하 지시, 실적)',
    },
    {
      content: '생산 관리 (생산 계획, 모니터링)',
    },
  ],
};

const won: IProject.Item = {
  title: '원컨덕터 MES 솔루션 개발',
  startedAt: '2023-01',
  endedAt: '2023-04',
  where: WHERE.MES,
  skillKeywords: ['JAVA', 'javascript', 'jQuery'],
  descriptions: [
    {
      content: '제품 제작 공정 관리',
    },
    {
      content: 'BOM Level 관리',
    },
    {
      content: '제작시 하위 BOM 재고 처리 로직 구현',
    },
    {
      content: '도면 관리',
    },
    {
      content: '재고 관리',
    },
    {
      content: '구매 발주 관리',
    },
  ],
};

const lns: IProject.Item = {
  title: 'LNS MES 솔루션 개발',
  startedAt: '2023-01',
  endedAt: '2023-04',
  where: WHERE.MES,
  descriptions: [
    { content: '입고 현황 관리' },
    {
      content: 'QR Scanning',
    },
    {
      content: '생산 관리 (생산 계획, 실적, 모니터링)',
    },
    {
      content: '재고 관리',
    },
    {
      content: "(관련기사) 야놀자 탁상용 달력 '2020 놀력' 출시",
      href: 'http://topclass.chosun.com/daily/view.asp?idx=267&Newsnumb=201911267',
    },
  ],
};
const viewWorks: IProject.Item = {
  title: 'View Works 의료기기 CMS 개발',
  startedAt: '2022-10',
  endedAt: '2023-02',
  where: WHERE.MES,
  descriptions: [
    {
      content: '법무 검토 관리',
    },
    {
      content: '법무 검토 상태에 따른 E-mail 전송 ',
      weight: 'MEDIUM',
    },
    {
      content: '계약 관리',
      weight: 'MEDIUM',
    },
  ],
};

const project: IProject.Payload = {
  disable: false,
  list: [lotte, ssg, sk, his, bsb, lime, won, lns, viewWorks],
};

export default project;
