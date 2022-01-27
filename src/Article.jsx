import React from 'react';

const Article = () => {
  return (
    <div>
      <header>
        <h1>Article</h1>
      </header>
      <main>
        <div id="create_box">
          <a href="article_create.html">Create</a>
        </div>
        <div id="list_wrap">
          <ul id="list" />
        </div>
      </main>
    </div>
  );
};

export default Article;
