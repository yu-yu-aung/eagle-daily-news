"use client";

import ArticleCard from "@/components/ArticleCard";
//import useGNews from "@/hooks/useGNews";

const ArticleList = () => {
  // const { data, error, isLoading } = useGNews();

  // if (isLoading) {
  //   console.log("Loading news...");
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   console.error("Error fetching news:", error);
  //   return <p>Failed to load news</p>;
  // }

  // console.log("API Response:", data);

  //const articles = data?.articles || [];

  const articles = [
     {
    id: "7e974e857666eb10be3c2aac421e9a7d",
    title: "Bomb threats close some N.J. polling locations",
    description: "Polling places in seven counties are affected, though officials say the threats are not credible.",
    content:
      "Several New Jersey polling locations have been moved on Election Day due to emailed bomb threats, which officials say are not credible, and other police activity.\n“Early this morning, law enforcement responded to threats that were received by email i... [3602 chars]",
    url: "https://www.nj.com/politics/2025/11/bomb-threats-close-some-nj-polling-locations.html",
    image:
      "https://www.nj.com/resizer/v2/K7UYVUOD4JDG7OTVIOI4X5WDSM.jpg?auth=d026355f9180fdeb6a7f465520fbcc149b84265d2611d158f6a951c7608fb77a&width=1280&smart=true&quality=90",
    publishedAt: "2025-11-04T13:28:00Z",
    lang: "en",
    source: {
      id: "c77b047cb1d19e99490315d05f5fec0f",
      name: "NJ.com",
      url: "https://www.nj.com",
    },
  },
  {
    id: "8e675457f5a56bfe7a36f938fef2a9fc",
    title: "Former Vice President Dick Cheney dead at 84",
    description:
      "Former Vice President Dick Cheney, considered by many political observers to be the most politically active and influential vice president in U.S. history, has died.",
    content:
      "Former Vice President Dick Cheney, considered by many political observers to be the most politically active and influential vice president in U.S. history, died on Monday night, his family said. He was 84.\nCheney's wife of 61 years, Lynne, his daught... [25154 chars]",
    url: "https://abcnews.go.com/Politics/former-vice-president-dick-cheney-dead-84/story?id=11021827",
    image:
      "https://i.abcnewsfe.com/a/1245d346-a36a-4ec9-9c68-ee0e39345ec6/Cheney-main_1762264796793_hpMain_16x9.jpg?w=1600",
    publishedAt: "2025-11-04T13:27:30Z",
    lang: "en",
    source: {
      id: "5ca536331c246cd7f693cdb2cceaff8c",
      name: "ABC News",
      url: "https://abcnews.go.com",
    },
  },
  {
    id: "6933057662e05f47b284661e77731a59",
    title:
      "NFL Week 10 power rankings: Rams, Bills on rise, new No. 1 after another top-10 shakeup",
    description:
      "After four of the top six teams lost, the top 10 has a new look — and a new No. 1 — as we hand out our midseason report cards.",
    content:
      "Editor’s note: Every​ week, Chad Graff and Josh Kendall rank and analyze all 32 teams from first to worst.\nThe Athletic has live coverage of the 2025 NFL Trade Deadline.\nThe NFL regular season is halfway over.\nWith Week 9 in the books, it’s time to h... [13059 chars]",
    url: "https://www.nytimes.com/athletic/6774290/2025/11/04/nfl-power-rankings-week-10-rams-bills-no-1/",
    image:
      "https://static01.nyt.com/athletic/uploads/wp/2025/11/03154929/110325_PowerRankings_rams2.png?width=1200&height=630&fit=cover",
    publishedAt: "2025-11-04T13:24:58Z",
    lang: "en",
    source: {
      id: "2f580dc49292a1caf59cd86dd3c9e60b",
      name: "The New York Times",
      url: "https://www.nytimes.com",
    },
  },
  {
    id: "ba485cf0469aadafde1b7b561bfc2912",
    title: "Sinclair Asked Erika Kirk if They Could Get Jimmy Kimmel to Apologize",
    description:
      "Sinclair asked Charlie Kirk's widow Erika Kirk if they could get Jimmy Kimmel to apologize for his comments.",
    content:
      "In a previously unreported element of Jimmy Kimmel‘s brief suspension from ABC, representatives from Sinclair Broadcast Group reached out to Erika Kirk, the widow of Charlie Kirk, to see if they could help secure an apology from the late night host.\n... [2969 chars]",
    url: "https://www.hollywoodreporter.com/tv/tv-news/sinclair-erika-kirk-jimmy-kimmel-apology-1236417270/",
    image:
      "https://www.hollywoodreporter.com/wp-content/uploads/2025/11/Erika-Kirk-on-FOX-News-Jesse-Watters-Primetime.png?crop=15px%2C0px%2C1487px%2C833px&resize=1440%2C810",
    publishedAt: "2025-11-04T13:00:33Z",
    lang: "en",
    source: {
      id: "58f309465dc77c95e88cbb1d72f55e72",
      name: "The Hollywood Reporter",
      url: "https://www.hollywoodreporter.com",
    },
  },
  {
    id: "86a8d47b7857d3fcf4cd5876033a87ad",
    title:
      "Prop 50: Californians vote on redistricting to counter redrawn Texas maps",
    description:
      "Ballot measure would let legislature redraw congressional districts to carve out five more Democratic seats",
    content:
      "Californians will head to the polls on Tuesday to decide on Proposition 50, a ballot measure of national significance that could play a major role in determining which party controls the US House of Representatives after the 2026 midterms.\nIf voters ... [2508 chars]",
    url: "https://www.theguardian.com/us-news/2025/nov/04/prop-50-california-redistricting-vote-maps-latest",
    image:
      "https://i.guim.co.uk/img/media/7051b9706c80bf07ae46886909fba25cb85d3a59/609_0_5001_4000/master/5001.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&precrop=40:21,offset-x50,offset-y0&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a1810bc1a774137631ca5f715f8f20d6",
    publishedAt: "2025-11-04T13:00:00Z",
    lang: "en",
    source: {
      id: "558a003a7a0164e924408edec7e99f99",
      name: "The Guardian",
      url: "https://www.theguardian.com",
    },
  },
  {
    id: "6fda2eb1f5047616122d24f55642e3d7",
    title:
      "Setting up clash with AG, Levin names judge to probe Sde Teiman leak in her stead",
    description:
      "Military prosecutor assigned to the abuse case reportedly suspended due to suspected role in leak, as police dive for former military advocate general's phone at Tel Aviv beach",
    content:
      "Justice Minister Yariv Levin on Tuesday tapped State Ombudsman for Judges Asher Kula to head the investigation into former military advocate general Yifat Tomer-Yerushalmi over the Sde Teiman leak affair, in an effort to bypass Attorney General Gali ... [5448 chars]",
    url: "https://www.timesofisrael.com/setting-up-clash-with-ag-levin-names-judge-to-probe-sde-teiman-leak-in-her-stead/",
    image:
      "https://static-cdn.toi-media.com/www/uploads/2023/06/F220619DC10.jpg",
    publishedAt: "2025-11-04T12:57:03Z",
    lang: "en",
    source: {
      id: "3dec3ce99690067fad56de075404dfee",
      name: "The Times of Israel",
      url: "https://www.timesofisrael.com",
    },
  },
  {
    id: "ba7e124a61ff7664a73890c5290af836",
    title: "Cowboys finalizing trade for LB Logan Wilson from Bengals: Sources",
    description:
      "A defensive captain for the Bengals, Wilson joins a Cowboys defense that sorely needs help and is giving up more than 30 points per game.",
    content:
      "By Paul Dehner Jr., Dianna Russini, Jon Machota and Ben Burrows\nThe Dallas Cowboys have made a trade deadline move, swinging a deal for Cincinnati Bengals linebacker Logan Wilson in exchange for a seventh-round pick in 2026, team sources told The Ath... [2863 chars]",
    url: "https://www.nytimes.com/athletic/6776399/2025/11/04/cowboys-bengals-trade-logan-wilson/",
    image:
      "https://static01.nyt.com/athletic/uploads/wp/2025/11/04074340/GettyImages-2241866883-scaled.jpg?width=1200&height=630&fit=cover",
    publishedAt: "2025-11-04T12:55:36Z",
    lang: "en",
    source: {
      id: "2f580dc49292a1caf59cd86dd3c9e60b",
      name: "The New York Times",
      url: "https://www.nytimes.com",
    },
  },
  {
    id: "9f9e9fae88ccb361348891ba0970d5a2",
    title: "UN chief warns Sudan war is 'spiraling out of control'",
    description:
      "The United Nations secretary-general is warning that the war in Sudan is spiraling out of control. Antonio Guterres on Tuesday called for an immediate ceasefire after a paramilitary force seized the besieged Darfur city of el-Fasher last week.",
    content:
      "DUBAI, United Arab Emirates (AP) — The United Nations secretary-general warned Tuesday that the war in Sudan is “spiraling out of control” after a paramilitary force seized the besieged and famine-stricken Darfur city of el-Fasher.\nSpeaking in Qatar,... [3332 chars]",
    url: "https://apnews.com/article/sudan-fasher-rsf-war-un-279868664dabe63d88ccf4a506eb1499",
    image:
      "https://dims.apnews.com/dims4/default/173d32a/2147483647/strip/true/crop/5714x3214+0+297/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Faf%2F7f%2F680e35366b1c2c319a47c86ebad0%2F6e149db1ed7846798ba7a7c26701fd1a",
    publishedAt: "2025-11-04T12:52:00Z",
    lang: "en",
    source: {
      id: "b356d47a35dfffa723fc8131b36c3ed1",
      name: "AP News",
      url: "https://apnews.com",
    },
  },
  {
    id: "864bb7c0d4f818a5271a127a84a36b16",
    title:
      "Dan Trachtenberg says he wanted Predator: Badlands' connection to Alien to be \"more elegant\" than past universe movies, but that doesn't mean it won't \"grow into a bigger thing\"",
    description:
      "Exclusive: Predator: Badlands director Dan Trachtenberg was adamant he didn't want the movie to feel like Xenomorph and Yautja action figures \"smashing together\"",
    content:
      "The Predator: Badlands trailers have been more about showcasing vibes and visuals over plot, but something we did learn from them a while back is that Elle Fanning's character Thia is a Weyland-Yutani synthetic. With that, and a glimpse at a Power Lo... [2530 chars]",
    url: "https://www.gamesradar.com/entertainment/sci-fi-movies/dan-trachtenberg-says-he-wanted-predator-badlands-connection-to-alien-to-be-more-elegant-than-past-universe-movies-but-that-doesnt-mean-it-wont-grow-into-a-bigger-thing/",
    image:
      "https://cdn.mos.cms.futurecdn.net/LNJj9xdwZJ4f3q4CrwN2Lj-1920-80.jpg",
    publishedAt: "2025-11-04T12:50:21Z",
    lang: "en",
    source: {
      id: "c7a38592444e81eb714ee4d1c789d063",
      name: "GamesRadar+",
      url: "https://www.gamesradar.com",
    },
  },
  {
    id: "708efefce1fa3998e7bec1ad97808dba",
    title:
      "CBS posts full transcript, video of Trump interview with '60 Minutes,' prompting outcry over edits left on cutting room floor",
    description:
      "Jorge Bonilla, writing for the conservative media watchdog Newsbusters, wrote, “It appears that the Bari Weiss era is now full upon us at CBS News.”",
    content:
      "None of that was seen by people who watched the CBS telecast Sunday night.\nLess than half of O’Donnell’s interview, conducted Friday, actually made it onto the air. But CBS posted a transcript and video of the full 73-minute discussion online, so vie... [6094 chars]",
    url: "https://fortune.com/2025/11/04/cbs-60-minutes-trump-interview-transcript-outtakes/",
    image:
      "https://fortune.com/img-assets/wp-content/uploads/2025/11/AP25307025494228-e1762258497954.jpg?resize=1200,600",
    publishedAt: "2025-11-04T12:44:42Z",
    lang: "en",
    source: {
      id: "92507c5203b6b96d1b6f7d795348de34",
      name: "Fortune",
      url: "https://fortune.com",
    },
  },
  ];

  // console.log("articles: ", data?.articles);
  // console.log("first article: ", articles[0]);

  return (
    <div className="px-24 py-10 space-y-16">
    {/* Top Section */}
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-7 flex flex-col gap-6">
        <ArticleCard article={articles[9]} big />
        <div className="flex gap-6">
          <ArticleCard article={articles[8]} small />
          <ArticleCard article={articles[7]} small />
        </div>
      </div>
      <div className="col-span-5 flex flex-col gap-6 justify-between">
        <ArticleCard article={articles[6]} />
        <ArticleCard article={articles[5]} />
      </div>
    </div>

    {/* Bottom Section */}
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-5 flex flex-col gap-6 justify-between">
        <ArticleCard article={articles[4]} />
        <ArticleCard article={articles[0]} />
      </div>
      <div className="col-span-7 flex flex-col gap-6">
        <ArticleCard article={articles[3]} big />
        <div className="flex gap-6">
          <ArticleCard article={articles[1]} small />
          <ArticleCard article={articles[2]} small />
        </div>
      </div>
    </div>
  </div>
    
  );
};

export default ArticleList;
