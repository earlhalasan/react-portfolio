import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const socialRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleSocialScroll = () => {
    window.scrollTo({
      top: socialRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 30 },
      { y: 0 }
    );
  }, []);

  return (
    <>
      <Head>
        <title>{data.name}</title>
      </Head>
      {/* This button should not go into production */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-5 right-5">
          <Link href="/edit">
            <Button type="primary">Edit Data</Button>
          </Link>
        </div>
      )}

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleSocialScroll={handleSocialScroll}
        />
        <div className="laptop:mt-10 mt-5">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          <Socials className="mt-2 laptop:mt-5" />
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold laptop:px-3">Projects.</h1>
          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>
        {/* <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div> */}
        <div className="mt-10 laptop:mt-20 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:my-10 text-2xl text-bold laptop:px-3">
            About.
          </h1>
          <p className="tablet:my-10 px-2.5 laptop:px-4 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}
