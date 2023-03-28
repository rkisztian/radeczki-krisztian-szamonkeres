import { Component, ReactNode } from "react";
import Navigacio from "../components/navbar";
import Kep from "../Images/dj.jpg"


export default class Fooldal extends Component {
    render(): ReactNode {
        return <div className="fooldal">
            <h1>Üdvözöljük a Petrik Weboldalás!</h1>
            <h3 style={{color: "lightblue"}}>Válassz a fenti lehetőségek közül!</h3>
            <img src={Kep} style={{width: "30%"}}/>
        </div>
    }
}