import CallToAction from "@/components/ui/call-to-action/CallToAction";
import Comitted from "@/components/ui/comitted/Comitted";
import Consultation from "@/components/ui/consultation/Consultation";

import Hero from "@/components/ui/hero/Hero";
import News from "@/components/ui/news/News";
import Review from "@/components/ui/review/Review";
import Video from "@/components/ui/video/Video";

export default function Home() {
  return (
    <div>
      <Hero />
      <Comitted />
      <CallToAction />

      <Video />
      <Review />
      <News />
      <Consultation />
    </div>
  );
}
