

import React, { Component } from "react";
import "./Blog.css";
import type { IPostWithAuthor } from "../../interfaces/IPost";
import Post from "../Post/Post";

interface State {
	posts: IPostWithAuthor[];
    count: number
    postsFormShown: boolean
}

class Blog extends Component<{}, State> {
	state: State = {
		posts: [
			{ title: "Test Post", author: "John Doe", id: "1" },
			{ title: "Hello, world", author: "Jack Black", id: "2" },
			{ title: "Another example", author: "Main Editor", id: "3" },
		],
        count: 0,
        postsFormShown: false
	};
    timerId = null
 constructor(props: {}) {
    super(props)
        console.log('[BLOG] initialized')
        console.log('[BLOG] State exists: ', this.state.posts.length )
 }

 togglePostsFormShown = () => {
    this.setState({...this.state, postsFormShown: !this.state.postsFormShown})
 }

 componentDidMount(): void {
     console.log('[BLOG] component has mounted')
     this.timerId = setInterval(() => {
        this.setState({...this.state, count: this.state.count + 1})
     }, 1000)
 }
 componentWillUnmount(): void {
     clearInterval(this.timerId)
 }

 componentDidUpdate(): void {
     console.log(`[BLOG] Update`)
 }
 
 shouldComponentUpdate(
    nextProps: Readonly<{}>, 
    nextState: Readonly<State>): boolean {
     console.log('[POST] should update')
     return this.props.author !== nextProps.author || this.props.title !== nextProps.title
 }

	render() {
        console.log('[BLOG] render')
          let postsForm = null;
    if (this.state.postsFormShown) {
      postsForm = (
        <section className="NewPost">
          <p>New post form will be here</p>
        </section>
      );
    }
		return (
			<>
            <button onClick={this.togglePostsFormShown}>TOOGLE FORM</button>
            <div>{postsForm}</div>
				<section className="Posts">
                    <h1>{this.state.count}</h1>
					{this.state.posts.map((post) => (
						<Post key={post.id} title={post.title} author={post.author} />
					))}
				</section>
			</>
		);
	}
}
export default Blog;
