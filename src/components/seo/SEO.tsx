import { Helmet } from "react-helmet-async";
import { siteConfig } from "../../data/site";

interface SEOProps {
  title: string;
  description?: string;
  path?: string;
  image?: string;
}

export default function SEO({
  title,
  description = siteConfig.description,
  path = "/",
  image = "/images/Mutanu-Logo-Final.png",
}: SEOProps) {
  const canonicalUrl = `${siteConfig.url}${path}`;
  const imageUrl = `${siteConfig.url}${image}`;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={siteConfig.name} />

      {/* X / Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
