import BlogContent from "@/components/ui/blog/blogContent";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Blogs | Doctor",
  description: "Latest news and updates from our medical team.",
  keywords: ["medical news", "healthcare", "blog"],
};

const page = () => {
  return (
    <div>
      <BlogContent />
    </div>
  );
};

export default page;
