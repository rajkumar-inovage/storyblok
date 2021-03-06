import * as React from "react"
import { graphql} from "gatsby"
import HomeData from "~/components/constants/pages/home-data"
import HomeBanner from "~/components/home/banner"
import AboutSection from "~/components/home/about"
import Seo from "../components/seo"
import HomePage from "../components/home"
import NewsLetter from "../components/Newsletter"

const IndexPage = ({ data, location }) => {
  const story = data.storyblokEntry
  const content = JSON.parse(story.content)
  const collectionsData = data.storeAdmin
  const { seo } = HomeData(),
    { title, description, schema } = seo
  return (
    <>
      <Seo title={title} description={description} schemaMarkup={schema} />
      {content.body.map(({ component, ...rest }, i) =>
        (component => {
          false && console.log(component, rest)
          switch (component) {
            case "Banner":
              return (
                <React.Fragment key={component}>
                  <HomeBanner {...rest} />
                  <HomePage data={collectionsData} story={content} />
                  
                </React.Fragment>
              )
            case "About Section":
              return <AboutSection key={component} {...rest} />
            default:
              return null
          }
        })(component)
      )}
      <NewsLetter/>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    storyblokEntry(full_slug: { eq: "home" }) {
      content
    }
    storeAdmin {
      collections(first: 10) {
        edges {
          node {
            image {
              originalSrc
            }
            title
            handle
          }
          cursor
        }
      }
      products(first: 250) {
        edges {
          node {
            title
            handle
            featuredImage {
              originalSrc
            }
            priceRange {
              maxVariantPrice {
                amount
                currencyCode
              }
              minVariantPrice {
                currencyCode
                amount
              }
            }
          }
        }
      }
    }
  }
`
