import React from 'react'
import Head from 'next/head';
import Sidebar from './Sidebar';
import Header from './Header';

const CommonLayout = ({
  Component,
  title = "LootMogul",
  // Unique title of the page
  description = "Discover LootMogul's Sports Games, Best Blockchain & AI Games. Join the Sports Metaverse and shop in the Web3 Ecommerce Store for top NFTs and Play-to-Earn Crypto Games. Engage in 3D Metaverse Shopping with exciting Celebrity Games and Sports Influencers.",
  // Should be unique and lesser than 160 chars
  keywords = "LootMogul, Sports Games, Blockchain & AI, Metaverse Shopping, Web3 Ecommerce",
  // Unique Keywords to add to every page for higher SEO ranking
  canonicalUrl = process.env.HOST_NAME,
  // Unique for each page, by default is assigned to HOST_NAME
  faviconUrl = "/favicon.png",
  // URL added by default, can be changed by passing relative link to another image -> './newFavicon.ico'
  robotsContent = "noindex, nofollow",
  // Robots Meta tag to change if a page should be noindexed or nofollowed
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href={faviconUrl} />
        {robotsContent && <meta name="robots" content={robotsContent} />}
      </Head>

      <div className="relative flex justify-start items-start">
        <Sidebar />
        <div className="flex-1 relative w-full overflow-x-hidden  bg-white border-none">
            <Header />
            <div className="x-8 mt-5">
            {Component}
            </div>
        </div>
      </div>
    </div>
  )
}

export default CommonLayout
