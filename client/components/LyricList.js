import React , { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricList extends Component {

  onLike(id) {
    console.log(id);
    this.props.mutate({ variables: { id }});
  }

  renderLyrics() {
    return this.props.lyrics.map(({id, content, likes }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <div className="vote-box">
            <i onClick={() => this.onLike(id)} className="material-icons">thumb_up</i>
            {likes}
          </div>
        </li>
      );
    });
  }

  render() {

    return (
      <ul className="collection">
        {this.renderLyrics()}
      </ul>
    )
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID!) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default graphql(mutation)(LyricList);