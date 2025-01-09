/* eslint-disable react/jsx-props-no-spreading */
import { Container } from 'reactstrap';

import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { Education } from '../component/education';
import { Etc } from '../component/etc';
import { Experience } from '../component/experience';
import { Footer } from '../component/footer';
import { Introduce } from '../component/introduce';
import { OpenSource } from '../component/openSource';
import { Presentation } from '../component/presentation';
import { Profile } from '../component/profile';
import { Project } from '../component/project';
import { Skill } from '../component/skill';
import { Style } from '../component/common/Style';
import Payload from '../payload';
import { Article } from '../component/article';
import {
    Animator,
    batch,
    Fade,
    // FadeIn,
    // MoveIn,
    MoveOut,
    ScrollContainer,
    ScrollPage,
    Sticky,
    ZoomIn
} from 'react-scroll-motion'
import AnimatedComponent from "./AnimatedComponent";
// import { TOC } from '../component/toc';


function Yosume() {
  return (
    <>
      <NextSeo {...Payload._global.seo} />
      <Head>
        <title>{Payload._global.headTitle}</title>
        <link rel="shortcut icon" href={Payload._global.favicon} />
      </Head>


      <Container style={Style.global}>
          <ScrollContainer>
              {/*todo : TOC 구현하기*/}
              {/*<TOC.Component payload={Payload.project}/>*/}
              <Profile.Component payload={Payload.profile}/>

              <AnimatedComponent />
              <Introduce.Component payload={Payload.introduce}/>
              <ScrollPage>
                  <Animator animation={batch(Sticky(), Fade(), ZoomIn(), MoveOut(0, 0))}>
                      <Skill.Component payload={Payload.skill}/>
                  </Animator>
              </ScrollPage>

              <Experience.Component payload={Payload.experience}/>
              <Project.Component payload={Payload.project}/>
              <OpenSource.Component payload={Payload.openSource}/>
              <Presentation.Component payload={Payload.presentation}/>
              <Article.Component payload={Payload.article}/>
              <Education.Component payload={Payload.education}/>
              <Etc.Component payload={Payload.etc}/>
              <Footer.Component payload={Payload.footer}/>
          </ScrollContainer>
      </Container>

    </>
  );
}

export default Yosume;
