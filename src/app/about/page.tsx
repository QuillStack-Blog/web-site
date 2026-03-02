import { Story } from "@/components/about/Story";
import { FeatureList } from "@/components/about/FeatureList";
import { FileTree } from "@/components/about/FileTree";
import { Community } from "@/components/about/Community";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Story />
      <FeatureList />
      <FileTree />
      <Community />
    </div>
  );
}
