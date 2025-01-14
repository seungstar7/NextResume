import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/profile_img.jpg';

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
    title:
      '개발에 있어 현실의 벽과 타협은 없습니다. 끊임없이 고민하고 Best 가 되더라도 Better 를 늘 고민하는 개발자',
    icon: faBell,
  },
};

export default profile;
