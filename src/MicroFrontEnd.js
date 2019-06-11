import React from 'react';
import './MicroFrontEnd.css';

class MicroFrontEnd extends React.Component {
  state = {
    color: [100,100,100],
    amiwys: Array(800).fill('amiwy')
  }

  randomChinaniganz = (min, max) =>  Math.floor(Math.random() * (max - min + 1)) + min
  
  
  componentDidMount() {
    setInterval(() => {
      this.setState({
        color: [this.randomChinaniganz(0, 255), this.randomChinaniganz(0, 255), this.randomChinaniganz(0, 255)]
      })
    }, 300)
  }
  moneyWithMoney() {
    this.setState({
      color: 'blue'
    })
  }

  render() {
    const [one, two, tres] = this.state.color;
    return (
      <div className="MicroFrontEnd " style={{display: 'inline-block', backgroundColor: `rgba(${one},${two}, ${tres})`}}>
          <div style={{ width: '6000px'}}>
            {
              this.state.amiwys.map( (v, idx) => <div key={idx} className="MicroFrontEnd-amiwy"></div>)
            }
          </div>

          <p className="MicroFrontEnd-frase" style={{fontSize: '4em', padding: 100}}>
            <i>
              "que enfadosos amigos, aprendan el que les deje dinero y dejen de mamar"
            </i>
          </p>
      </div>
    );
  }
}

export default MicroFrontEnd;
