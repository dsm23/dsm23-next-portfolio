import Divisor from "@/components/divisor";
import { getHomePageQuery } from "@/lib/api";
import { CMS_NAME, CMS_URL } from "@/lib/constants";
import Interests from "@/components/sections/interests";

function Intro() {
  return (
    <section className="mb-16 mt-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
      <h1 className="text-6xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
        Blog.
      </h1>
      <h2 className="mt-5 text-center text-lg md:pl-8 md:text-left">
        A statically generated blog example using{" "}
        <a
          href="https://nextjs.org/"
          className="hover:text-success underline transition-colors duration-200"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href={CMS_URL}
          className="hover:text-success underline transition-colors duration-200"
        >
          {CMS_NAME}
        </a>
        .
      </h2>
    </section>
  );
}

export default async function Page() {
  const home = await getHomePageQuery();

  const interests = home.interests;

  return (
    <div className="container mx-auto px-5">
      <Intro />
      <Divisor />
      <Interests interests={interests} />
      {/* {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        /> }
      ) */}
      {/* <MoreStories morePosts={morePosts} /> */}
    </div>
  );
}
