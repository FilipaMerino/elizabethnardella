import { Banner } from "../components/banner";
import Image from "next/image";

const Expertise = () => {
  return (
    <div>
      <Banner src="/bannerExpertise.jpg" bannerQuote="Areas of Expertise" />
      <section
        id="yourJourney"
        className="py-10 px-64 flex flex-col justify-center"
      >
        <div>
          <h1 className="text-6xl pb-10 text-[#A94250]">Your Journey</h1>
          <p className="pb-2">
            Counselling is a deeply <strong>personal</strong> and{" "}
            <strong>transformative</strong> experience. It's about{" "}
            <strong>understanding yourself</strong> on a deeper level.
          </p>

          <p className="pb-2">
            It's a journey about <strong>growth, self-discovery,</strong> and
            learning how to handle life's challenges with{" "}
            <strong>resilience and confidence.</strong>
          </p>

          <p className="pb-2">
            In the beginning, you might find it challenging to open up about
            your thoughts, feelings, or experiences, some of which you probably
            haven't shared with anyone. As we progress, you will start noticing
            changes. You might be handling stress better or seeing improvements
            in your relationships. You might find new ways to{" "}
            <strong>cope</strong> with anxiety or{" "}
            <strong>feel more at peace.</strong>
          </p>

          <p>
            By the end of our time together, my hope is that you feel more{" "}
            <strong>empowered</strong> and in <strong>tune</strong> with
            yourself.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Expertise;
