import CommonLayout from "../../components/layout/CommonLayout";
import Layout from "../../components/layout/Layout";
import CollegeDetails from "../../components/parentPage/CollegeDetails";

const metadata = {
  title: "LootMogul | Details",
  description: "Discover LootMogul's Sports Games, Best Blockchain & AI Games.",
  keywords: "LootMogul, Sports Games, Blockchain & AI, Metaverse Shopping, Web3 Ecommerce",
  canonicalUrl: process.env.HOST_NAME,
  faviconUrl: "/favicon.png",
};

export default function Home() {
  return (
    <Layout
      Component={<CommonLayout Component={<CollegeDetails />} />}
      key={metadata.title}
      title={metadata.title}
      description={metadata.description}
      keywords={metadata.keywords}
      canonicalUrl={metadata.canonicalUrl}
      faviconUrl={metadata.faviconUrl}
    />
  );
}