import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=01de3fc40d00418182192ba277e01bba&page=1";

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=01de3fc40d00418182192ba277e01bba&page=${this.state.page +1}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
    console.log("Next");
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
  };

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=01de3fc40d00418182192ba277e01bba&page=${this.state.page -1}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
    console.log("Next");
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
    console.log("prev");
  };
  render() {
    return (
      <div className="container my-3">
        <h1>Your News - Top HaedLines</h1>

        <div className="row">
          {this.state.articles.map((Element) => {
            return (
              <div className="col-md-4 .col-xs-10" key={Element.url}>
                <NewsItem
                  title={Element.title ? Element.title.slice(0, 40) : ""}
                  description={
                    Element.description ? Element.description.slice(0, 80) : ""
                  }
                  imageUrl={Element.urlToImage}
                  newsUrl={Element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
