import { Component, ReactNode } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Kep from '../Images/petrik.jpg'


export default class Tapasztalat extends Component {
    render(): ReactNode {
        return <div className="tapasztalat">
            <h1 className="cim">Szakmai tapasztalat</h1>
            <br />
            <div>
                <img src={Kep} alt="petrik" className="kep"/>
            </div>
            <ListGroup as="ul">
                <h3 style={{color: "green"}}>Pro-bono bulik</h3>
                <ListGroup.Item as="li" active>
                    Csibeavató, 2021. 08. 31.
                </ListGroup.Item>

                <ListGroup.Item as="li">
                    Karácsonyi bál, 2021. 12. 22.
                </ListGroup.Item>

                <ListGroup.Item as="li" disabled>
                    Farsangi mulatság, 2022. 02. 20.
                </ListGroup.Item>
            
            </ListGroup>

            <ListGroup as="ul">
                <h3 style={{color: "green"}}>Professzionális bulik</h3>
                <ListGroup.Item as="li" active>
                    Tanárkarácsony, 2021. 12. 20.
                </ListGroup.Item>

                <ListGroup.Item as="li">
                    Ballagás, 2022. 04. 30.
                </ListGroup.Item>
            
            </ListGroup>
        </div>
    }
}