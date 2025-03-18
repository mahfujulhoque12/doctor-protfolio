import CallToAction from "@/components/ui/call-to-action/CallToAction";
import Comitted from "@/components/ui/comitted/Comitted";
import Consultation from "@/components/ui/consultation/Consultation";
import Counter from "@/components/ui/counter/Counter";

import Hero from "@/components/ui/hero/Hero";
import News from "@/components/ui/news/News";
import Review from "@/components/ui/review/Review";
import Video from "@/components/ui/video/Video";
import WhoIAm from "@/components/ui/who-i-am/WhoIAm";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhoIAm />
      <Comitted />
      <CallToAction />

      <Video />
      <Review />
      <News />
      <Counter />
      <Consultation />
    </div>
  );
}
