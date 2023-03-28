import { Component, ReactNode } from "react";

interface State{
    nev: string;
    datum: number;
    leiras: string;
    massage: string;
    
}

export default class Idopont extends Component<{}, State> {

    constructor(props: {}) {
        super(props)
        this.state = {
            nev: "",
            datum: 0,
            leiras: "",
            massage: "",
        }
    }

    handleForm = () => {
        const {nev, datum, leiras} = this.state
        if(nev.trim() === "") {
            this.setState({massage : "A név megadása kötelező"})
        }
        if(leiras.trim() === "") {
            this.setState({massage : "Leírás megadása kötelező"})
        }
        this.setState({massage : "Köszönjük a megkeresését"})
    }

    render(): ReactNode {
        return <div>
            <section className="idopont">
                <h2>Időpont Foglalás</h2>
                <form>
                    <div className="form-outline-mb4">
                        Név: <input type="text" value={this.state.nev} onChange={e => this.setState({nev : e.currentTarget.value})}/>
                    </div>

                    <div className="form-outline-mb4">
                        Időpont: <input type="Date" value={this.state.datum}/>
                    </div>

                    <div className='form-outline mb-4'>
                        Leírás: <input type="textarea"  value={this.state.leiras} onChange={e => this.setState({leiras : e.currentTarget.value})}/>
                    </div>

                    <button onClick={this.handleForm}>Küldés</button>

                </form>
                <h1>{this.state.massage}</h1>

            </section>
        </div>
    }
}