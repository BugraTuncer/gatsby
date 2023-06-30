import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
interface IndexPageProps {
  data: {
    allFile: {
      edges: {
        node: {
          name: string;
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
      }[];
    };
  };
}
const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const [backgroundColor, setBackgroundColor] = React.useState("#FFFFF");
  const switchBackgroundColor = (name: string) => {
    switch (name) {
      case "red":
        setBackgroundColor("#D62828");
        break;
      case "blue":
        setBackgroundColor("#003049");
        break;
      case "orange":
        setBackgroundColor("#F77F00");
        break;
      case "cream":
        setBackgroundColor("#EAE2B7");
        break;
      case "yellow":
        setBackgroundColor("#FCBF49");
        break;
      default:
        break;
    }
  };

  return (
    <div
      style={{
        background: backgroundColor,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <p style={{ color: "white", textAlign: "center", fontSize: "40px" }}>
        {" "}
        Click the image if you want to change to background color
      </p>

      {data.allFile.edges.map(({ node }) => (
        <div onClick={(e) => switchBackgroundColor(node.name)}>
          <GatsbyImage
            key={node.name}
            image={node.childImageSharp.gatsbyImageData}
            alt={"logo"}
            style={{ marginRight: "80px", cursor: "pointer" }}
          />
        </div>
      ))}
    </div>
  );
};

export default IndexPage;

export const gatsbyQuery = graphql`
  query MyQuery {
    allFile {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(width: 200, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Home</title>;
