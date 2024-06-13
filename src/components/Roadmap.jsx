import { Col, Container, Row } from "react-bootstrap";

export default function Roadmap() {
  const roadmapcards = [
    {
      title: "Phase - 1",
      des:[
        "CoinGecko listing",
        "Trending videos on social media",
        "New website development",
        "Team formation",
        "Community building",
      ]
    },
    {
      title: "Phase - 2",
     des:[
      "Coinmarketcap Listing",
      "First CEX Listing",
      "NFT Integration",
      "Community expansion"
     ]
    },
    {
      title: "Phase - 3",
      des:[
        "Tier 1 CEX Listing",
        "Influencer marketing",
        "Global partnerships",
        "Charity activities"
      ]
    },
  ];
  return (
    <div className="roadmap position-relative z-1">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="roadmap-title" data-aos="fade-up" data-delay="100">
              <h1 className="text-center">SENK ROADMAP</h1>
            </div>
          </Col>
        </Row>
        <div className="roadmap-wrapper ">
          <Row>
            {roadmapcards.map((item, idx) => (
              <Col xs={12} md={6} lg={4} key={idx} className="mb-3 md-mb-0" data-aos="fade-up" data-aos-delay={`${idx+1}00`}>
                <div
                  className={`roadmap-cards mb-3 md-mb-0 text-center ${
                    idx == 1 ? "carditem" : " "
                  }  ${idx==1? "card2": " "} `}
                >
                  <h2>{item.title}</h2>
                  <ul>
                    {item.des.map((id,idx)=>(
                      <li className={idx != item.des.length -1 ?"mb-12":'mb-0'} key={idx}>{id}</li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}
