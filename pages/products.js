import React from "react";
import { Card, Layout, Page } from "@shopify/polaris";

class Products extends React.Component {
  componentDidMount() {
    fetch(`/getProducts`)
      .then((res) => res.json())
      .then((item) => console.log(item));
  }
  render() {
    return (
      <Page>
        <Layout.AnnotatedSection
          title="Products"
          description="List of products in this section"
        >
          <Card sectioned>
            <div>
              <p>List of products here:</p>
            </div>
          </Card>
        </Layout.AnnotatedSection>
      </Page>
    );
  }
}

export default Products;
