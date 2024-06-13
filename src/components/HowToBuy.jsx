import { Col, Container, Row } from "react-bootstrap";

export default function HowToBuy() {
  const cards = [
    {
      title: "Have or create a Phantom wallet",
      des: "Download & install the Phantom Wallet either from the app store on your phone or the browser extension for desktop.",
      id: "1"
    },
    {
      title: "BUY SOLANA AND SEND IT TO YOUR WALLET",
      des: "Head over to a centralized exchange (like Binance or Bybit) to buy Solana (SOL) and send it to your Phantom wallet.",
      id: "2"
    },
    {
      title: "Connect it to Raydium or Jupiter",
      des: "Head over to Raydium or Jupiter, connect your wallet, and paste the SENK contract address listed on this website",
      id: "3"
    },
    {
      title: "Swap SOLANA for $SENK",
      des: "Now, just swap your SOL for SENK. Your SENK balance will appear in your Phantom wallet. Welcome aboard!",
      id: "4"
    },
  ]
  return (
    <div className="howtobuy">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="howtobuy-title">
              <h1 className="text-center" data-aos="fade-up">How To Buy</h1>
            </div>
          </Col>
          {cards.map((item, idx) => (
            <Col xs={12} className="howtobuy-item" key={idx} data-aos="fade-up" data-aos-delay={`${idx+1}00`}>
              <div className={`howtobuy-cards ${idx % 2 == 1 ? "ms-lg-auto" : ""} position-relatives`}>
                <h6 className="position-absolute z-2">0{idx + 1}</h6>
                <h3>{item.title}</h3>
                <p>{item.des}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
