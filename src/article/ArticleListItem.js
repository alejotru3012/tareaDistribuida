import React from 'react';
import PropTypes from 'prop-types';

class ArticleListItem extends React.Component {
  render() {
    const {article} = this.props;
    return(
      <article>
        <div className='container' class="center">
          <div class="card">
            <h2 class='center'>{article.fields.titulo}</h2>
            <p>{article.fields.parrafo}</p>
            <img src={article.fields.imagen.fields.file.url} width='500' height='300'></img>
          </div>
        </div>
        <hr width='40%'/>
      </article>
    )
  }
}

ArticleListItem.propTypes = {
  article: PropTypes.object
}
export default ArticleListItem;
