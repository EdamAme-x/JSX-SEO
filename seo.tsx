
interface SEO {
  title: string,
  description: string,
  icon: string,
  url: string,
  ogp: {
    type: string
  },
  creater?: string,
  raw: any
}

export function JSXSEO(props: SEO) {
  return <>
    <meta charset="utf-8">
      <title>{props.title}</title>
      <meta name="description" content={props.description}>
      <base href="/">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="icon shortcut" href={props.icon}>
      {/* OGP */}
      <meta property="og:type" content="website">
      <meta property="og:title" content={props.title}>
      <meta property="og:description" content={props.description}>
      <meta property="og:site_name" content={props.title}>
      <meta property="og:url" content={props.url}>
      <meta property="og:image" content={props.url + icon}>
      <meta property="og:image:width" content="1280">
      <meta property="og:image:height" content="720">
      <meta property="og:locale" content="ja_JP">
      {/* OGP for Twitter */}
      <meta name="twitter:card" content="summary">
      <meta name="twitter:title" content={props.title}>
      <meta name="twitter:description" content={props.description}>
      <meta name="twitter:image" content={props.url + icon}>
      <meta name="twitter:creator" content={props.creater ?? "@amex2189"}>
      {raw}
  </>
}
