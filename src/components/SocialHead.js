import { Helmet } from "react-helmet";

export default function SocialHead(props){
  return(
    <Helmet>
      <title>{props.title}</title>
      {/* Até 120 caracteres */}
      <meta name="description" content={props.description} />
      <link rel="icon" type="image/png" href={props.icon} sizes="16x16" />
      <link rel="apple-touch-icon" href={props.icon} sizes="16x16" />
      <link rel="canonical" href={props.canonical} />

      {/* Social Meta Tags */}
      {/* Facebook/Linkedin/Twitter */}
      <meta property='og:title' content={props.title} />
      <meta property='og:description' content={props.description} />
      {
        props.socialImage && 
        (
          <meta property='og:image' content={props.socialImage} />
        ) 
      }
      <meta property='og:url' content={props.socialUrl}/>
    </Helmet>
  )
}