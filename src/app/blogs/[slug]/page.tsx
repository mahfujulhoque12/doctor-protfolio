import BlogDetails from "@/components/ui/blog/BlogDetails";
import { Metadata } from "next";

interface ParamsProps {
  params: Promise<{ slug: string }>;
}

export const metadata: Metadata = {
  title: "Blog Details | Doctor",
  description: "View the details of a specific blog post",
};

const Page: React.FC<ParamsProps> = ({ params }) => {
  return <BlogDetails params={params} />;
};

export default Page;
