import Accordion from 'react-bootstrap/Accordion';
import { useSelector } from 'react-redux';
import './Acordion.css'

function Accordions() {

  const { questions } = useSelector(state => state.korzinka)

  console.log(questions);

  return (
    <Accordion defaultActiveKey="0">
      {
        questions.length ? questions.map(item =>
          <div key={item.id}>
            <Accordion.Item eventKey={`${item.id - 1}`}>
              <Accordion.Header><span className='accordion-number'>0{item.id}</span>{item.question}</Accordion.Header>
              <Accordion.Body>
                {item.answer}
              </Accordion.Body>
            </Accordion.Item>
          </div>
        )
          : ""
      }
    </Accordion>
  );
}

export default Accordions;