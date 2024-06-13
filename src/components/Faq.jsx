import { Col, Container, Row } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
export default function Faq() {
    const faq = [
        {
            title: 'Who is SENK?',
            des: `<p>SENK is the coolest seal on internet!`,
        },
        {
            title: 'What chain is SENK on?',
            des: `<p>Senk is on the Solana blockchain`,
        },

        {
            title: 'What Are SENK Tokenomics?',
            des: `<p>SENK is fully controlled by its investors and community members, ensuring truly decentralized tokenomics.</p>`,
        },
    ]
    return (
        <div className="faq common-padding position-relative z-1">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} className="text-center ">
                        <div className="faq-title">
                            <h1>FAQs</h1>
                        </div>
                    </Col>
                    <Col xs={12} md={10}>
                        <Accordion defaultActiveKey={0}>
                            {faq.map((item, index) => (
                                <Accordion.Item eventKey={index} key={index} data-aos="fade-up" data-aos-duration={`1200`} data-aos-delay={`${index + 1}00`}>
                                    <Accordion.Header>
                                        <span className="d-flex align-items-center gap-2 gap-md-3">
                                            <span className="d-block me-1">
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.75 1.125C15.9212 1.125 15.1263 1.45424 14.5403 2.04029C13.9542 2.62634 13.625 3.4212 13.625 4.25V16.75C13.625 17.5788 13.9542 18.3737 14.5403 18.9597C15.1263 19.5458 15.9212 19.875 16.75 19.875C17.5788 19.875 18.3737 19.5458 18.9597 18.9597C19.5458 18.3737 19.875 17.5788 19.875 16.75C19.875 15.9212 19.5458 15.1263 18.9597 14.5403C18.3737 13.9542 17.5788 13.625 16.75 13.625H4.25C3.4212 13.625 2.62634 13.9542 2.04029 14.5403C1.45424 15.1263 1.125 15.9212 1.125 16.75C1.125 17.5788 1.45424 18.3737 2.04029 18.9597C2.62634 19.5458 3.4212 19.875 4.25 19.875C5.0788 19.875 5.87366 19.5458 6.45971 18.9597C7.04576 18.3737 7.375 17.5788 7.375 16.75V4.25C7.375 3.4212 7.04576 2.62634 6.45971 2.04029C5.87366 1.45424 5.0788 1.125 4.25 1.125C3.4212 1.125 2.62634 1.45424 2.04029 2.04029C1.45424 2.62634 1.125 3.4212 1.125 4.25C1.125 5.0788 1.45424 5.87366 2.04029 6.45971C2.62634 7.04576 3.4212 7.375 4.25 7.375H16.75C17.5788 7.375 18.3737 7.04576 18.9597 6.45971C19.5458 5.87366 19.875 5.0788 19.875 4.25C19.875 3.4212 19.5458 2.62634 18.9597 2.04029C18.3737 1.45424 17.5788 1.125 16.75 1.125Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                            {item.title}
                                        </span>
                                    </Accordion.Header>
                                    <Accordion.Body dangerouslySetInnerHTML={{ __html: item.des }}></Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}