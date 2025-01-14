import { IPortfolio } from '../component/portfolio/IPortfolio';

const Portfolio: IPortfolio.Payload = {
  disable: false,
  list: [
    {
      title: 'Wedding-Card (청첩장)',
      descriptions: [
        {
          content: '2024-04 결혼 초대 목적 청첩장 개발',
        },
        {
          content: 'Feature',
          descriptions: [
            { content: '이미지 사진 출력' },
            { content: '스크롤 애니메이션 시각화' },
            { content: '카카오 연동 (지도, 알림톡)' },
          ],
        },
        {
          content: 'https://seungstar7.github.io/React_WeddingCard',
          href: 'https://seungstar7.github.io/React_WeddingCard',
        },
      ],
    },
    {
      title: 'React Games',
      descriptions: [
        {
          content: '렌더링을 활용한 React 게임 개발',
        },
        {
          content: 'Games',
          descriptions: [{ content: 'Snake Game' }, { content: '맞고' }],
        },
        {
          content: 'https://seungstar7.github.io/React_Games/',
          href: 'https://seungstar7.github.io/React_Games/',
        },
      ],
    },
    {
      title: '채팅 Web Application',
      descriptions: [
        { content: '범용성 웹 어플리케이션으로 채팅' },
        { content: 'Express.js 로 백엔드 Interface 개발' },
        {
          content: 'https://github.com/seungstar7/chatReact',
          href: 'https://github.com/seungstar7/chatReact',
        },
        {
          content: 'Github Stars: ',
          postImage: 'https://img.shields.io/github/stars/nodejs/node.svg?style=popout',
        },
      ],
    },
    {
      title: 'Kotlin Spring API',
      descriptions: [
        {
          content: 'Spring Backend API 기본 환경 구성',
        },
        {
          content: 'Contributor',
        },
        {
          content: 'https://github.com/seungstar7/KotlinSpringAPI',
          href: 'https://github.com/seungstar7/KotlinSpringAPI',
        },
        {
          content: 'Github Stars: ',
          postImage: 'https://img.shields.io/github/stars/nestjs/nest.svg?style=popout',
        },
      ],
    },
  ],
};

export default Portfolio;
