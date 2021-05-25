import React from "react";
import { Card, Layout, Page } from "@shopify/polaris";

class Products extends React.Component {
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
