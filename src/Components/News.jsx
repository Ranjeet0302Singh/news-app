import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "independent",
        name: "Independent",
      },
      author: "Oliver O'Connell",
      title:
        "Trump indictment – live: Court confirms Trump to be arraigned on Tuesday afternoon as he lashes out at judge - The Independent",
      description:
        "Latest news and developments after Trump becomes first-ever president to face charges",
      url: "https://www.independent.co.uk/news/world/americas/us-politics/trump-indicted-response-30-counts-grand-jury-b2311472.html",
      urlToImage:
        "https://static.independent.co.uk/2023/03/31/00/SEI150295424.jpg?quality=75&width=1200&auto=webp",
      publishedAt: "2023-04-01T06:45:00Z",
      content:
        "Sign up for the daily Inside Washington email for exclusive US coverage and analysis sent to your inbox\r\nGet our free Inside Washington email\r\nDonald Trump will appear in a New York court early next … [+7076 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "Tom Krisher, Fatima Hussein",
      title:
        "Many electric vehicles to lose big tax credit with new rules - The Associated Press",
      description:
        "WASHINGTON (AP) — Fewer new electric vehicles will qualify for a full $7,500 federal tax credit  later this year, and many will get only half that, under rules proposed Friday by the U.S.",
      url: "https://apnews.com/article/electric-vehicles-tax-credit-7500-c562cb2d3509e93dc81d3b7d395725af",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/17e45e34c9144a1bbff72a729db36be1/3000.webp",
      publishedAt: "2023-04-01T04:40:56Z",
      content:
        "WASHINGTON (AP) Fewer new electric vehicles will qualify for a full $7,500 federal tax credit later this year, and many will get only half that, under rules proposed Friday by the U.S. Treasury Depar… [+6326 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "Steve Karnowski",
      title:
        "Minneapolis and state agree to revamp policing post-Floyd - The Associated Press",
      description:
        "MINNEAPOLIS (AP) — The city of Minneapolis and the Minnesota Department of Human Rights signed a “court-enforceable settlement agreement” Friday to revamp policing in the city where George Floyd  was murdered by an officer nearly three years ago.",
      url: "https://apnews.com/article/george-floyd-minneapolis-police-discrimination-40342c35c09a300186e31c6b599f9d7c",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/d97bd85051d1407c9ab3440394ae2c58/3000.webp",
      publishedAt: "2023-04-01T04:39:29Z",
      content:
        "MINNEAPOLIS (AP) The city of Minneapolis and the Minnesota Department of Human Rights signed a court-enforceable settlement agreement Friday to revamp policing in the city where George Floyd was murd… [+4994 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Post",
      },
      author: "Katherine Donlevy",
      title:
        "Missing Florida toddler found inside alligator's mouth day after mother's murder - New York Post ",
      description:
        "The father of Taylen Mosley, 2, was charged with two counts of first-degree murder: for the child and for the stabbing death of the boy’s mother Pashun Jeffery.",
      url: "https://nypost.com/2023/04/01/missing-florida-toddler-taylen-mosley-found-inside-alligators-mouth-after-mothers-murder/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2023/04/newspress-collage-26398115-1680322208698.jpg?quality=75&strip=all&1680307924&w=1024",
      publishedAt: "2023-04-01T04:33:00Z",
      content:
        "The hunt for a missing toddler came to a tragic end Friday evening when the child’s body was found inside an alligator’s mouth in Florida. \r\nThe father of Taylen Mosley, 2, was charged with two count… [+2024 chars]",
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: "Marissa Perlman, Kris Habermehl",
      title: "Roof collapses at Apollo Theatre in Belvidere - CBS Chicago",
      description: "Roof collapses at Apollo Theatre in Belvidere",
      url: "https://www.cbsnews.com/chicago/news/structure-collapse-apollo-theatre-belvidere/",
      urlToImage:
        "https://assets2.cbsnewsstatic.com/hub/i/r/2023/04/01/4e8e5288-69a2-49e5-9d2f-a6e2c50b2e07/thumbnail/1200x630/3ab4b3f889b4fa97979145e528dfaf8f/belviedere-theatre-collapse.png",
      publishedAt: "2023-04-01T04:25:00Z",
      content:
        "BELVIDERE, Ill. (CBS) -- The roof and marquee collapse Friday evening amid severe weather during a concert at the Apollo Theatre in Belvidere, Illinois.\r\nOne person was killed in the collapse, offici… [+4002 chars]",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Al Jazeera",
      title:
        "Online influencer Andrew Tate moved to house arrest in Romania - Al Jazeera English",
      description:
        "Tate, his brother Tristan and two Romanian women were moved to house arrest while under investigation.",
      url: "https://www.aljazeera.com/news/2023/4/1/online-influencer-andrew-tate-moved-to-house-arrest-in-romania",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2023/04/AP23090817655255.jpg?resize=1200%2C675",
      publishedAt: "2023-04-01T04:09:37Z",
      content:
        "Divisive online influencer and self-described misogynist Andrew Tate and his brother have been moved to house arrest while they are investigated for alleged human trafficking and rape after a Romania… [+3163 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "Stephen Hawkins",
      title:
        "Mulkey, LSU women rally in Final Four, reach 1st title game - The Associated Press",
      description:
        "DALLAS (AP) — Kim Mulkey is back in another national championship game, this time taking the flagship university from her home state there for the first time.  It took LSU only two seasons to get there with the feisty and flamboyantly dressed coach, and a big…",
      url: "https://apnews.com/article/womens-final-four-lsu-virginia-tech-march-madness-292680727b52d2e99d887b40667dbc59",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/24aefdd7e50b4a37b964c343b3b2e28d/3000.webp",
      publishedAt: "2023-04-01T03:10:59Z",
      content:
        "DALLAS (AP) Kim Mulkey is back in another national championship game, this time taking the flagship university from her home state there for the first time. \r\nIt took LSU only two seasons to get ther… [+4593 chars]",
    },
    {
      source: {
        id: null,
        name: "Nintendo Life",
      },
      author: "Liam Doolan",
      title:
        "Random: Sega Celebrates April Fool's Day With The Murder Of Sonic The Hedgehog - Nintendo Life",
      description: "It's actually a real game",
      url: "https://www.nintendolife.com/news/2023/04/random-sega-celebrates-april-fools-day-with-the-murder-of-sonic-the-hedgehog",
      urlToImage: "https://images.nintendolife.com/0cb57782c9152/1280x720.jpg",
      publishedAt: "2023-04-01T03:05:00Z",
      content:
        "Subscribe to Nintendo Life on YouTube\r\nIt seems Sega really is open to anything when it comes to Sonic - with the company today announcing The Murder of Sonic the Hedgehog. While it might be a funny … [+1170 chars]",
    },
    {
      source: {
        id: null,
        name: "Page Six",
      },
      author: "Nicki Cox",
      title:
        "Tekashi 6ix9ine calls brutal gym attack unfair and 'nothing but cowardly' - Page Six",
      description:
        "The controversial rapper broke his silence on Friday after being brutally beaten by three men in an LA Fitness bathroom earlier this month.",
      url: "https://pagesix.com/2023/03/31/tekashi-6ix9ine-calls-brutal-gym-attack-unfair-and-nothing-but-cowardly/",
      urlToImage:
        "https://pagesix.com/wp-content/uploads/sites/3/2023/04/6ix9ine.jpg?quality=75&strip=all&1680322204&w=1200",
      publishedAt: "2023-04-01T02:51:00Z",
      content:
        "Tekashi 6ix9ine slammed the three men who attacked him in a South Florida gym earlier this month, calling them “nothing but cowardly.”\r\nThe rapper spoke out for the first time on Instagram Friday aft… [+2299 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Christina Maxouris, Gene Norman",
      title:
        "At least 3 dead, dozens hospitalized after violent tornadoes devastate central US - CNN",
      description:
        "At least three people are dead and dozens of others were hospitalized after a series of brutal tornadoes tore through multiple states in the South and Midwest Friday, ripping homes to shreds and reducing neighborhoods to scattered debris as meteorologists war…",
      url: "https://www.cnn.com/2023/03/31/weather/severe-storms-south-central-us-friday/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230331183823-02-storm-arkansas-033123.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-04-01T02:43:00Z",
      content:
        "At least three peopleare deadand dozens of others were hospitalized after a series of brutal tornadoes tore through multiple states in the South and Midwest Friday, ripping homes to shreds and reduci… [+6837 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "What's up with Charles Schwab? Stock record worst month since 1987 - CNBC Television",
      description:
        "Hosted by Brian Sullivan, “Last Call” is a fast-paced, entertaining business show that explores the intersection of money, culture and policy. Tune in Monday...",
      url: "https://www.youtube.com/watch?v=4s1bOATXDJA",
      urlToImage: "https://i.ytimg.com/vi/4s1bOATXDJA/maxresdefault.jpg",
      publishedAt: "2023-04-01T02:37:05Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "US Vice President Kamala Harris Visits Indian Grandfather's Home In Zambia - NDTV",
      description:
        "US Vice President Kamala Harris remembered her maternal grandfather PV Gopalan, an Indian foreign service official, during her tour to Zambia and paid a visit to the Gopalan family home in Lusaka.",
      url: "https://www.ndtv.com/world-news/us-vice-president-kamala-harris-visits-indian-grandfathers-home-in-zambia-3911008",
      urlToImage:
        "https://c.ndtvimg.com/2022-11/jhmacdl_kamala-harris-afp_625x300_19_November_22.jpg",
      publishedAt: "2023-04-01T02:21:17Z",
      content:
        "US Vice President Kamala Harris visited her grandfather PV Gopalan's home in Zambia (File)\r\nWashington: US Vice President Kamala Harris remembered her maternal grandfather PV Gopalan, an Indian forei… [+3275 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "Edith M. Lederer",
      title:
        "UN food chief: Billions needed to avert unrest, starvation - The Associated Press",
      description:
        "UNITED NATIONS (AP) — Without billions of dollars more to feed millions of hungry people, the world will see mass migration, destabilized countries, and starving children and adults in the next 12 to 18 months, the head of the Nobel prize-winning U.N.",
      url: "https://apnews.com/article/world-food-beasley-migration-starving-a88ae85e6fc5c2ecf7ddd6a9a6249aff",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/14868e2817b343ab8571be1e65de911f/3000.webp",
      publishedAt: "2023-04-01T01:52:30Z",
      content:
        "UNITED NATIONS (AP) Without billions of dollars more to feed millions of hungry people, the world will see mass migration, destabilized countries, and starving children and adults in the next 12 to 1… [+5650 chars]",
    },
    {
      source: {
        id: null,
        name: "BuzzFeed News",
      },
      author: "Anthony Robledo",
      title:
        "The Man Who Lost His Ski Crash Lawsuit Against Gwyneth Paltrow Said He Regrets It - BuzzFeed News",
      description:
        "Turns out, beyond having to pay $1 and legal expenses after losing in court, suing an ultra famous celebrity can have other consequences.",
      url: "https://www.buzzfeednews.com/article/anthonyrobledo/terry-sanderson-gwyneth-paltrow-lawsuit-regret",
      urlToImage:
        "https://img.buzzfeed.com/buzzfeed-static/static/2023-04/1/0/campaign_images/a507ef8caae7/the-man-who-lost-his-ski-crash-lawsuit-against-gw-3-1745-1680309590-1_dblbig.jpg",
      publishedAt: "2023-04-01T00:35:10Z",
      content:
        "Things didnt go as planned for Terry Sanderson, who sued Gwyneth Paltrow for a 2016 Utah ski crash at Deer Valley Resort.\r\nAfter a jury on Thursday found that the Oscar-winning actor was not liable f… [+483 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Dominion's defamation lawsuit against Fox News heads to trial - CNN",
      description:
        "A judge presiding over Dominion’s defamation lawsuit against Fox News decided the case is going to trial. CNN media reporter Oliver Darcy and legal analyst N...",
      url: "https://www.youtube.com/watch?v=rkthzJl_bTo",
      urlToImage: "https://i.ytimg.com/vi/rkthzJl_bTo/maxresdefault.jpg",
      publishedAt: "2023-04-01T00:05:15Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "The TRUTH About Britney Spears & Sam Asghari's Relationship Status | E! News - E! News",
      description:
        "A rep for Sam Asghari is setting the record straight on the couple's relationship status, after Sam was spotted out in L.A. without his wedding ring as his w...",
      url: "https://www.youtube.com/watch?v=qRAKoGnv7-g",
      urlToImage: "https://i.ytimg.com/vi/qRAKoGnv7-g/maxresdefault.jpg",
      publishedAt: "2023-03-31T23:58:37Z",
      content: null,
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: null,
      title:
        "Funerals for Nashville school shooting victims start with service for 9-year-old Evelyn Dieckhaus - CBS News",
      description:
        "A funeral was held Friday for 9-year-old Evelyn Dieckhaus, one of three children and three adults killed in Monday's school shooting in Nashville.",
      url: "https://www.cbsnews.com/news/nashville-school-shooting-victims-funerals-start-evelyn-dieckhaus/",
      urlToImage:
        "https://assets3.cbsnewsstatic.com/hub/i/r/2023/03/31/b7ee22b7-c645-460c-8434-aa2151492e93/thumbnail/1200x630/ea94abf044535bd6ce43dbed84703d12/ap23088724409432.jpg",
      publishedAt: "2023-03-31T23:15:00Z",
      content:
        "A funeral was held Friday for 9-year-old Evelyn Dieckhaus, one of three children and three adults killed in Monday's shooting at The Covenant School in Nashville, as the grieving city mourns the vict… [+4708 chars]",
    },
    {
      source: {
        id: null,
        name: "Palm Beach Post",
      },
      author: "Hannah Leyva",
      title:
        "Final Four: How to watch Florida Atlantic basketball vs. San Diego State on TV, streaming - Palm Beach Post",
      description:
        "Both Dusty May's Florida Atlantic Owls and Brian Dutcher's San Diego State Aztecs are playing in their first Final Four. Here's how to watch the game.",
      url: "https://www.palmbeachpost.com/story/sports/college/owls/2023/03/31/fau-basketball-final-four-how-to-watch-live-stream-tv-san-diego-state/70064908007/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2023/03/26/USAT/d5f76afb-3370-476e-b4fc-7c9105d580d1-USATSI_20319979.jpg?crop=4629,2604,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
      publishedAt: "2023-03-31T22:02:09Z",
      content:
        "FAU has made it to the final weekend of the NCAA men's basketball season.\r\nTheir remarkable run to the Final Four has caught the attention of people across the nation, and all eyes will be on the Owl… [+2466 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Michigan Alum Rich Eisen's Priceless Reaction to QB Jadyn Davis Committing To the Wolverines - The Rich Eisen Show",
      description:
        "Rich Eisen reacts to top QB recruit Jadyn Davis choosing to play at his alma mater Michigan.Tune in to the Emmy-nominated Rich Eisen Show live for FREE on Th...",
      url: "https://www.youtube.com/watch?v=OjU4yR-FO68",
      urlToImage: "https://i.ytimg.com/vi/OjU4yR-FO68/maxresdefault.jpg",
      publishedAt: "2023-03-31T22:00:18Z",
      content: null,
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Jay Peters",
      title:
        "This hoverboard is being recalled after a fire that killed two children - The Verge",
      description:
        "According to a notice on the US Consumer Product Safety Commission’s (CPSC) website, the 42-volt Jetson Rogue is being recalled because the lithium-ion battery packs in the hoverboards can overheat.",
      url: "https://www.theverge.com/2023/3/31/23665249/hoverboard-recall-jetson-rogue-cspc-recall-fire-risk",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/74inHCMLn0g_MbQgJxcI1mv_EMI=/0x0:720x720/1200x628/filters:focal(360x360:361x361)/cdn.vox-cdn.com/uploads/chorus_asset/file/24551795/JROGU_BLK_01_420172f3_f50b_449b.jpg",
      publishedAt: "2023-03-31T21:43:35Z",
      content:
        "This hoverboard is being recalled after a fire that killed two children\r\nThis hoverboard is being recalled after a fire that killed two children\r\n / The 42-volt Jetson Rogue is being recalled because… [+1971 chars]",
    },
  ];
  constructor() {
    super();
    console.log("Hello I am a constructor from component");
    this.state = {
      articles: this.articles,
    };
  }
  render() {
    return (
      <div>
        <div className="container my-3">
          <h1>Your News - Top HaedLines</h1>

          <div className="row">
            {this.state.articles.map((Element) => {
              return (
                <div className="col-md-4" key={Element.url}>
                  <NewsItem
                    title={Element.title}
                    description={Element.description}
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
