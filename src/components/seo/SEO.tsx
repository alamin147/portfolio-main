import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogType?: string;
  ogUrl?: string;
  ogImage?: string;
  pathname?: string;
  structuredData?: object;
}

const SEO = ({
  title = "Alamin | Fullstack Developer Portfolio",
  description = "Portfolio of Alamin, a Computer Science Engineering student at Daffodil International University and a dedicated fullstack developer with expertise in React, Node.js, Express, MongoDB, PostgreSQL, and TypeScript. Explore my projects, skills, and competitive programming achievements.",
  keywords = "fullstack developer, computer science engineer, web developer, React, Node.js, Express, MongoDB, PostgreSQL, TypeScript, JavaScript, portfolio, competitive programming, Daffodil International University",
  author = "Alamin",
  ogType = "website",
  ogUrl = "https://portfolio-alamin-dev.vercel.app/",
  ogImage = "/public/alamin-removebg-preview.png",
  pathname = ""
}: SEOProps) => {
  const url = `https://portfolio-alamin-dev.vercel.app${pathname}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl || url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl || url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#2a015e" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
