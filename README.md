
![](images/large.jpg)

Este é o código fonte do livro [React - O Guia do Iniciante](https://leanpub.com/react-guia-do-iniciate). 

## Demos

- [CommentsComponent](http://danielschmitz.github.io/react-guia-do-iniciante-codigos/CommentsComponent/) - Capítulo 2


## Comments Component

Veja a evolução da criação do componente.Nesta obra criaremos no capítulo 2 um componente de comentários. A seguir mostramos algumas imagens do componente e sua evoulção estrutural:

![](images/02-001.png)
![](images/02-002.png)
![](images/02-003.png)
![](images/02-004.png)
![](images/02-005.png)
![](images/02-006.png)

## Comments Component 2

A pasta CommentsComponent2 é abordada no capítulo 3, possuindo a mesma funcionalidade do CommentsComponent, mas com as classes na forma modular. Utilizando várias técnicas com node, como o gulp, browserify, babelify, sourcemaps e outras, é realizado um processamento nos componentes e todos eles são compactados para um arquivo somente.

Para ter uma ideia exata da mudança, analise o arquivo CommentsComponent/main.js e CommentsComponent2/src/comment/CommentBox.jsx:

```jsx
import React from 'react';
import Panel from '../common/Panel';
import CommentForm from './CommentForm';
import CommentList from './CommentList';


var CommentBox = React.createClass({
   getInitialState: function() {
    return {data: this.props.data};
  },
  handleCommentSubmit: function(comment){
    var dataNew = this.state.data;
    dataNew.push(comment)
    this.setState({data:dataNew});
  },
  render: function() {
    return (
     <div className="commentBox">
        <Panel title="Comments">
             <CommentList data={this.state.data} />
        </Panel>
        <Panel title="Add a Comment">
            <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        </Panel>
      </div>
    );
  }
});
export default CommentBox;
```




