import React from 'react';
import ArticleListItem from './ArticleListItem';
const contentful = require('contentful');

export default class ArticleList extends React.Component {
  constructor () {
    super();
    this.state = {articles: []}
  }
  componentDidMount () {
    const client = contentful.createClient({
      space: '646vm6tcci3b',
      accessToken: 'cCf4EMcBvhncV9s8Dzs6p74yVfH999osAiKpUs7kKAk'
    });
    client.getEntries({content_type: 'example'}).then((response) => {
      this.setState({articles: response.items})
    });
  }
  render() {
    const articles = this.state.articles.map((article, i) => <ArticleListItem id={i} key={i} article={article} />);
    return (
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            {articles}
          </div>
        </div>
      </div>
    )
  }
}