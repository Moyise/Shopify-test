import { Card, Layout, Page, TextStyle } from "@shopify/polaris";

const Index = () => (
  <Page>
    <Layout.AnnotatedSection
      title="Products"
      description="List of products in this section"
    >
      <Card sectioned>
        <div>
          <TextStyle variation="strong">List of products here:</TextStyle>
        </div>
      </Card>
    </Layout.AnnotatedSection>
  </Page>
);

export default Index;
