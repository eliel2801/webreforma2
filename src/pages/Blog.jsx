import React from 'react';
import PageHeader from '../components/PageHeader';
// ... outros imports

const Blog = () => {
  return (
    <>
      <PageHeader
        title="Latest Insights"
        subtitle="News, trends and workspace innovation"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978"
      />
      {/* Resto do conteúdo */}
    </>
  );
};

export default Blog;
