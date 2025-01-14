import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '다양한 프로젝트 경험으로 새로운 환경과 다양한 프로젝트의 디자인 패턴 경험이 있습니다. JAVA, JSP 로 경험을 시작하여 jQuery 및 다양항 하위 라이브러리 활용, 그리고 MSA 에 관심이 많아 Front-End, Back-End 의 아키텍쳐 구조에 관심이 많고 고민하며 더 좋은 방면으로 활용하고자 하는 욕심이 있습니다.',
    '제가 꿈꾸는 서비스 개발이란 사용자가 원하는 비즈니스와의 커뮤니케이션이 가장 중요하다고 생각하고 있습니다. 그리고 고객의 Needs를 충족 시키는 것은 개발자의 끊임 없는 노력과 새로운 경험을 추구하고자 하는  능동적인 자세가 중요하다고 생각합니다. ',
    '내가 개발하는 서비스의 발전을 위해 사용자가 기능과 요구에 만족하였더라도, 더 나은 방향을 제시하며, 늘 개발자로써 역량 발전을 게을리 하지 않고 문제 해결과 비즈니스 발전을 위한 더 좋은 개발자로서 성장하기 위해 더 치열하게 학습하고, 경험하고, 노력하고 있습니다.',
  ],
  sign: 'Dev_kim',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
