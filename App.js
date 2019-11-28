import React, { Component } from "react";

import "./App.css";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quote: "",
			author: "",
		};

		this.componentDidMount = this.componentDidMount.bind(this);
	}

	async componentDidMount() {
		const API = "https://api.quotable.io/random";

		const response = await fetch(API);
		const json = await response.json();
		const { content, author } = json;
		this.setState({
			quote: content,
			author: author,
		});
	}
	catch(err) {
		console.log("fetch failed", err);
	}

	render() {
		return (
			<div className="body h-100">
				<div
					id="quote-box"
					className="container col-lg-6 col-md-8 col-sm-10 col-xs-12 h-100 card "
				>
					<figure>
						<blockquote id="text">{this.state.quote}</blockquote>
						<figcaption id="author">--{this.state.author}</figcaption>
					</figure>
					<div className="buttons">
						<a
							id="tweet-quote"
							className="twitter-share-button btn btn-primary"
							href={`https://twitter.com/intent/tweet?text=${this.state.quote}--${this.state.author}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<i class="fab fa-twitter"></i>
						</a>

						<button
							className="btn btn-primary"
							onClick={this.componentDidMount}
							id="new-quote"
						>
							New Quote
						</button>
					</div>
					<a
						className="developer"
						href="https://github.com/greatkay-olowo"
						target="_blank"
					>
						© Alao Kayode 2019
					</a>
				</div>
			</div>
		);
	}
}

export default App;
