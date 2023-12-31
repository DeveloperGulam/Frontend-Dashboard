import CommonLayout from "../components/layout/CommonLayout";
import { useRouter } from "next/router";
import HomePage from "../components/parentPage/HomePage";
import Layout from "../components/layout/Layout";

const metadata = {
  title: "LootMogul | Home",
  description: "Discover LootMogul's Sports Games, Best Blockchain & AI Games.",
  keywords: "LootMogul, Sports Games, Blockchain & AI, Metaverse Shopping, Web3 Ecommerce",
  canonicalUrl: process.env.HOST_NAME,
  faviconUrl: "/favicon.png",
};

export default function Home() {
  const router = useRouter();

  return (
    <Layout
      Component={<CommonLayout Component={<HomePage />} />}
      key={metadata.title}
      title={metadata.title}
      description={metadata.description}
      keywords={metadata.keywords}
      canonicalUrl={metadata.canonicalUrl}
      faviconUrl={metadata.faviconUrl}
    />
  );
}