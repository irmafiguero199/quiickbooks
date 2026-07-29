import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, pathname = '', type = 'website', image = 'https://usquickbooks.shop/og-image.jpg' }) {
  const siteUrl = 'https://usquickbooks.shop'
  const fullUrl = `${siteUrl}${pathname}`
  const fullTitle = title ? `${title} | USQuickbooks` : 'USQuickbooks - Authorized QuickBooks Reseller'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="USQuickbooks" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
