import React from 'react';

export class CardBookComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card-item" key={this.key}>
        <img src={this.props.book.coverUrl} alt="" />
        <div className="card-content">
          <span className="card-title">
            <a href={this.props.book.url}>{this.props.book.title}</a>
          </span>
          <span className="card-author">
            <a href="./">{this.props.book.authors}</a>
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum provident
            molestiae, ipsum quis esse adipisci? Omnis, vel dolorem!
          </p>
        </div>
      </div>
    );
  }
}
 