import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '한양사이버대학교',
      subTitle: '컴퓨터공학 학사 졸업',
      startedAt: '2023-03',
      endedAt: '2025-02',
    },
    {
      title: '명지전문대학',
      subTitle: '음악 전문 학사 졸업',
      startedAt: '2012-03',
      endedAt: '2014-02',
    },
    {
      title: '서울공연예술고등학교',
      subTitle: '음악과 졸업 (실용음악)',
      startedAt: '2009-03',
      endedAt: '2012-02',
    },
  ],
};

export default education;
