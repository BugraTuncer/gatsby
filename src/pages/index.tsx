import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return <div>Selam</div>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home</title>;
