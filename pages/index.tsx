/* eslint-disable react/jsx-props-no-spreading */
import { Container } from 'reactstrap';

import Head from 'next/head';
import { NextSeo } from 'next-seo';
// import { useReactToPrint, UseReactToPrintFn } from 'react-to-print';
// import { MutableRefObject, useEffect, useRef, useState } from 'react';
// import { Button } from '@material-ui/core';
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
import { Portfolio } from '../component/portfolio';
// import mc from '../asset/module.css';

// todo : 애니메이션, 사이드바 구현
// import {
//     Animator,
//     batch,
//     Fade,
//     // FadeIn,
//     // MoveIn,
//     MoveOut,
//     ScrollContainer,
//     ScrollPage,
//     Sticky,
//     ZoomIn
// } from 'react-scroll-motion'
// import AnimatedComponent from "./AnimatedComponent";
// import { TOC } from '../component/toc';

function Resume() {
  // const componentRef: MutableRefObject<HTMLElement> = useRef<HTMLElement>();
  //
  // const testRef1: MutableRefObject<HTMLElement> = useRef<HTMLElement>();
  // const testRef2: MutableRefObject<HTMLElement> = useRef<HTMLElement>();
  //
  // const [ref, setRef] = useState<MutableRefObject<HTMLElement>>();
  //
  // const handlePrint = useReactToPrint({
  //   contentRef: componentRef,
  //   documentTitle: 'Resume',
  // });
  //
  // const handlePrint2 = () => {
  //   setRef(testRef1);
  // };
  //
  // const handlePrint3 = () => {
  //   setRef(testRef2);
  // };
  //
  // const ontoggole = useReactToPrint({
  //   contentRef: ref,
  //   documentTitle: 'Resume',
  // });
  // useEffect(() => {
  //   if (ref && ref.current) ontoggole();
  // }, [ref]);

  return (
    <>
      <NextSeo {...Payload._global.seo} />
      <Head>
        <title>{Payload._global.headTitle}</title>
        <link rel="shortcut icon" href={Payload._global.favicon} />
      </Head>

      {/* <Button onClick={() => handlePrint()}>click btn</Button> */}
      {/* <Button onClick={() => handlePrint2()}>click btn type 2</Button> */}
      {/* <Button onClick={() => handlePrint3()}>click btn type 3</Button> */}
      {/* <div ref={componentRef}> */}
      <div>
        <Container style={Style.global}>
          {/* <div ref={testRef1}> */}
          {/*  <Profile.Component payload={Payload.profile} /> */}
          {/* </div> */}
          {/* <div ref={testRef2}> */}
          {/*  <Introduce.Component payload={Payload.introduce} /> */}
          {/* </div> */}
          <Profile.Component payload={Payload.profile} />
          <Introduce.Component payload={Payload.introduce} />
          <Project.Component payload={Payload.project} />
          <Skill.Component payload={Payload.skill} />
          <Experience.Component payload={Payload.experience} />
          <OpenSource.Component payload={Payload.openSource} />
          <Presentation.Component payload={Payload.presentation} />
          <Portfolio.Component payload={Payload.portfolio} />
          <Article.Component payload={Payload.article} />
          <Education.Component payload={Payload.education} />
          <Etc.Component payload={Payload.etc} />
          <Footer.Component payload={Payload.footer} />
          {/* <ScrollContainer> */}
          {/* todo : TOC 구현하기 */}
          {/* <TOC.Component payload={Payload.project}/> */}
          {/* todo : 움직임 구현하기 */}
          {/* <AnimatedComponent /> */}
          {/* <Introduce.Component payload={Payload.introduce}/> */}
          {/* <ScrollPage> */}
          {/*    <Animator animation={batch(Sticky(), Fade(), ZoomIn(), MoveOut(0, 0))}> */}
          {/*        <Skill.Component payload={Payload.skill}/> */}
          {/*    </Animator> */}
          {/* </ScrollPage> */}
          {/* </ScrollContainer> */}
        </Container>
      </div>
    </>
  );
}

export default Resume;
