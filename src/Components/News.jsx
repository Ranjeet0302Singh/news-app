import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=01de3fc40d00418182192ba277e01bba";
    
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      <div>
        <div className="container my-3">
          <h1>Your News - Top HaedLines</h1>

          <div className="row">
            {this.state.articles.map((Element) => {
              return (
                <div className="col-md-4 .col-xs-10" key={Element.url}>
                  <NewsItem
                    title={Element.title?Element.title.slice(0, 40):""}
                    description={Element.description?Element.description.slice(0, 80):""}
                    imageUrl={Element.urlToImage}
                    newsUrl={Element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
