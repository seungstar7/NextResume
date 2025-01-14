import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/sample_tux.png';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: 'Kim Seung Hyun',
    small: '(김승현)',
  },
  contact: [
    {
      title: 'shkim930922@gmail.com',
      link: 'mailto:shkim930922@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '010-4203-2996',
      link: 'tel:010-4203-2996',
      icon: faPhone,
      // badge: true,
    },
    {
      link: 'https://github.com/seungstar7',
      icon: faGithub,
    },
    // {
    //   link: 'https://www.facebook.com/groups/ubuntu.ko',
    //   icon: faFacebook,
    // },
  ],
  notice: {
    title: '휴대전화나 페이스북 메시지 아닌 이메일로 연락 부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
