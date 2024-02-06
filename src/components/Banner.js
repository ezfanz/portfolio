import { useState, useEffect } from "react";
import {Container, Row, Col } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/ipang3-bg.png"

export const Banner = () => {

    const[loopNum, setLoopNum] = useState(0);
    const[isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Backend Developer", "System Engineer"];
    const[text, setText] = useState('');
    const [delta,setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        
        return () => { clearInterval(ticker)};
    },[text]) 

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center"> 
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Irfan`} <span className="wrap">{text}</span></h1>
                        <p>I am Irfan, an experienced developer and system engineer with a strong background in backend development and microservices architecture. Over the years, I have contributed my skills in diverse sectors, including telecommunications, payment gateways, and government projects. As a fast learner, I thrive in high-pressure work environments. Currently, I am actively enhancing my backend knowledge and nurturing a passion for becoming a full-stack developer and system architect. Whether working independently or collaboratively in a team, I bring dedication and a results-driven mindset to every project.</p>
                        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}