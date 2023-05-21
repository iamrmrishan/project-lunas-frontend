import { Container, Footer, Header } from "components";
import { SearchPostLink } from "components/molecules/search";
import { ProfileTabs } from "components/organisms/Profile-tabs";
import { UserProfileCard } from "components/molecules/user-profile-card";
import React from "react";
import CreatePostForm from "components/molecules/create-post";
import Post from "components/molecules/create-post";

const CreatePostPage: React.FC = () => {
  return (
    <>
      <Header selected="Ask About a Product" />
      <Container>
        <div className="container mx-auto px-4 py-6">
          <CreatePostForm />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default CreatePostPage;
