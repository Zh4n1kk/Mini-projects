import React, {Component} from 'react';

import './Post.css';
interface Props {
   title: string;
   author: string;
}
class Post extends Component<Props > {
  constructor(props: Props) {
      super(props)
      console.log(`[POST] Initialized`)
  }

  componentDidMount(): void {
      console.log(`[POST] has mounted`)
  }

  componentDidUpdate(): void {
     console.log(`[POST] Update`)
 }

//  shouldComponentUpdate(nextProps: Readonly<Props>, 
//     nextState: Readonly<{}>): boolean {
//       console.log("[Blog] shouldComponentUpdate");
//     console.log(nextProps, nextState);
//     return nextState.postsFormShown !== this.state.postsFormShown;
//  }

  render() {
      console.log(`[POST] Render`)
    return (
      <article className="Post">
        <h1>{this.props.title}</h1>
        <div className="Info">
          <div className="Author">{this.props.author}</div>
        </div>
      </article>
    );
  }
}
export default Post;