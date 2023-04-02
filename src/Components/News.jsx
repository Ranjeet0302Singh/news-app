import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "'Divisive hearings distracted from racism issue'",
            "description": "The divisive nature of the Yorkshire racism hearings were a distraction from the real issues facing the game, says chief cricket writer Stephan Shemilt.",
            "url": "http://www.bbc.co.uk/sport/cricket/65125668",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/2262/production/_129220880_bbc-sport-index-imagery-2-split-images-gradient-c7d2cd9e-a383-40dc-8ab5-ab15abe5d0bb.png",
            "publishedAt": "2023-03-31T17:37:24.6150043Z",
            "content": "The hearing was closure for me - Rafiq\r\nPerhaps there is now the opportunity to tackle the issue at hand.\r\nEighteen months after Azeem Rafiq told MPs that English cricket is \"institutionally racist\",… [+5981 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
  constructor() {
    super();
    console.log("Hello I am a constructor from component");
    this.state={
        articles:this.articles
  }
}
  render() {
    return (
      <div>
        <div className="container my-3">
          <h1>Your News - Top HaedLines</h1>

          <div className="row">
            <div className="col-md-4">
              <NewsItem
                title="Mytile"
                description="Hello Ranjeet"
                imageUrl="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/2262/production/_129220880_bbc-sport-index-imagery-2-split-images-gradient-c7d2cd9e-a383-40dc-8ab5-ab15abe5d0bb.png"
              />
            </div>
            <div className="col-md-4">
              <NewsItem title="Mytile" description="Hello Ranjeet" />
            </div>
            <div className="col-md-4">
              <NewsItem title="Mytile" description="Hello Ranjeet" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
