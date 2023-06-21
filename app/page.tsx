import Center from "@/components/Center";
import Container from "@/components/Container";
import Stack from "@/components/Stack";
import TechStack from "@/layout/TechStack";
import Section from "@/layout/Section";
import { projects, roles } from "@/data/data";
import ImageCardGroup from "@/components/ImageCardGroup";
import IconGroup from "@/components/IconGroup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Very Serious web development",
  description: " I build website and fullstack web applications for a living.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-gray-700 dark:text-white font-sans">
      <div className="flex flex-col w-full gap-12 lg:gap-36">
        <Section id="hero" className="pt-48">
          <h1 className="text-4xl font-bold lg:text-6xl mb-8">
            <span className="text-purple-800 dark:text-purple-400 block mb-4">
              Very Serious.
            </span>
            Full stack web developer
          </h1>

          <p className="text-xl">
            I build website and web applications for a living.{" "}
            <span className="line-through">Serious</span> stuff.
          </p>
          <div className="py-6">
            <IconGroup variant="contact" />
          </div>
          <div className="relative rounded-full w-96 h-96 flex justify-center items-center mt-12 overflow-hidden">
            <video
              autoPlay
              loop
              muted
              style={{
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <source src="/cage.mp4" type="video/mp4" />
              {/* TODO - Add all of the video formats */}
              {/* <source src="/cage.webm" type="video/webm" /> */}
              {/* <source src="/cage.ogv" type="video/ogg" /> */}
            </video>
          </div>
        </Section>
        <Section id="tech-stack">
          <TechStack />
        </Section>
        <section
          id="about"
          className=" bg-purple-800 text-white h-[650px] lg:h-[600px]"
        >
          <Center>
            <Container>
              <Center>
                <Stack gap={"10"} className="mt-[-40px]">
                  <h2 className="font-bold text-center text-2xl lg:text-3xl mb-4">
                    Hi! I&apos;m Jamie, and I build things on the web.
                  </h2>
                  <p className="text-xl text-center max-w-2xl leading-8">
                    I&apos;m a web developer based in Melbourne, Australia.
                    I&apos;ve been building websites since 2013. I started my
                    journey by working with artists in my local community to
                    help build their digital brands. I cut my teeth in the world
                    of Wordpress and LAMP stacks, but since then, I have become
                    a specialist in building high performance Next.js
                    applications.
                  </p>
                </Stack>
              </Center>
            </Container>
          </Center>
        </section>
        <section
          id="full-stack"
          className="mt-[-180px] flex items-center justify-center"
        >
          <div className="bg-white dark:bg-black dark:border-2 shadow-xl rounded-xl text-gray-800 dark:text-white w-10/12 max-w-6xl">
            <div className="flex flex-col lg:flex-row justify-between divide-x">
              {roles.map((role, i) => (
                <div
                  key={i}
                  className="flex flex-col w-full items-center py-12 px-4"
                >
                  {<role.Icon className="text-6xl mb-4" />}
                  <div className="text-center">
                    <h2 className="font-bold text-3xl mb-4">{role.title}</h2>
                    <p className="mb-4">{role.description}</p>
                  </div>
                  {role.skills.map((skillGroup, i) => (
                    <div key={i}>
                      <h3 className="font-bold text-purple-800 dark:text-purple-400 mb-2">
                        {skillGroup.title}
                      </h3>
                      <ul className="list-disc">
                        {skillGroup.skills.map((skill, i) => (
                          <li key={i}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
        <Section id="recent-work" className="py-6">
          <h2 className="font-bold text-center lg:text-3xl mb-4">
            Recent Work
          </h2>
          <ImageCardGroup cards={projects} />
        </Section>
      </div>
    </main>
  );
}
