import React, { Component } from 'react';
import './index.css';
class Home extends Component {
    constructor() {
        super();
        this.state = {
            btn1: false,
            btn2: false,
            btn3: false,
            btn4: false,
            btn5: false,
        }
    }
    componentDidUpdate() {
        if (this.state.btn1 === true) {
            document.getElementById('a').style.backgroundColor = 'green';
        }
        else {
            document.getElementById('a').style.backgroundColor = 'lightgray';
        }
        if (this.state.btn2 === true) {
            document.getElementById('b').style.backgroundColor = 'green';
        }
        else {
            document.getElementById('b').style.backgroundColor = 'lightgray';
        }
        if (this.state.btn3 === true) {
            document.getElementById('c').style.backgroundColor = 'green';
        }
        else {
            document.getElementById('c').style.backgroundColor = 'lightgray';
        }
        if (this.state.btn4 === true) {
            document.getElementById('d').style.backgroundColor = 'green';
        }
        else {
            document.getElementById('d').style.backgroundColor = 'lightgray';
        }
        if (this.state.btn5 === true) {
            document.getElementById('e').style.backgroundColor = 'green';
        }
        else {
            document.getElementById('e').style.backgroundColor = 'lightgray';
        }
    }

    click(arg, e) {
        e.preventDefault();
        if (arg == 'btn1') {
            this.setState({ btn1: true, btn2: false, btn3: false, btn4: false, btn5: false })
        }
        if (arg == 'btn2') {
            this.setState({ btn1: false, btn2: true, btn3: false, btn4: false, btn5: false })
        }
        if (arg == 'btn3') {
            this.setState({ btn1: false, btn2: false, btn3: true, btn4: false, btn5: false })
        }
        if (arg == 'btn4') {
            this.setState({ btn1: false, btn2: false, btn3: false, btn4: true, btn5: false })
        }
        if (arg == 'btn5') {
            this.setState({ btn1: false, btn2: false, btn3: false, btn4: false, btn5: true })
        }
    }
    render() {
        return (
            <div className="parent">
               {/* <div className='container_fluid'>
                <div className="header">
                    <div className="headbtn">
                        <button className="btn3">Dashboard</button>
                        <button className="btn3">Arbitrage</button>
                        <button className="btn3">Stream</button>
                        <button className="btn3">Setting</button>
                    </div>
                    <div className="headtext">
                    </div>
                </div>
                <br /><br />
                <form className="arbform">
                <h4><strong>Arbitrage opportunity</strong></h4><br />
                    <p> Bot Name:
                    <input className="input1" type="text" placeholder="Bot Name" size='8' />
                    </p>
                    <p>What makes to use : </p>
                    <button className="btn1" id="a" onClick={this.click.bind(this, "btn1")}>Gdax</button>
                    <button className="btn1" id="b" onClick={this.click.bind(this, "btn2")}>Kraken</button>
                    <button className="btn1" id="c" onClick={this.click.bind(this, "btn3")}>gemini</button>
                    <button className="btn1" id="d" onClick={this.click.bind(this, "btn4")}>Binance</button>
                    <button className="btn1" id="e" onClick={this.click.bind(this, "btn5")}>bitfinix</button>
                    <br /><br /><br /><br />
                    
                    <div className="calender">
                        <p>Run bot from
                        <input className="input3" type="date" />
                            To
                        <input className="input3" type="date" />
                            Every
                        <input className="input2" type="number" placeholder="1" />
                            Seconds</p>
                    </div>
                    <br />
                    <div className="footbtn">
                        
                    </div>
                </form>
                <table className="table">
                    <tr>
                        <td className="tabledate">Date</td>
                        <td className="tablemax">MAX</td>
                        <td className="tablemax">MIN</td>
                        <td className="tablemax">delta</td>
                        <td className="tablemax">Opportunity</td>
                        <td className="tablemax">Opportunity with fee</td>
                        <td className="tablemax">PROFIT</td>
                    </tr>
                    <tr>
                        <td className="tabledata">Not Available</td>
                        <td className="tabledata">Not Available</td>
                        <td className="tabledata">Not Available</td>
                        <td className="tabledata">Not Available</td>
                        <td className="tabledata">Not Available</td>
                        <td className="tabledata">Not Available</td>
                        <td className="tabledata">Not Available</td>
                    </tr>
                </table>
            </div>   */}




            {/* App Ui */}
               {/* <Table striped bordered condensed hover className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Exchanges</th>
              <th>Price</th>
              <th>Bid</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Binance</td>
              <td>{this.state.BTCLastPriceBinance}</td>
              <td>{this.state.BTCLastBidBinance}</td>
              <td><Button bsStyle="primary" onClick={() => this.binances("Binance")}>Bitcoin Binance</Button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Bittrex</td>
              <td>{this.state.BTCLastPriceBittrex}</td>
              <td>{this.state.BTCLastBidBittrex}</td>
              <td><Button bsStyle="primary" onClick={() => this.binances("Bittrex")}>Bitcoin Bittrex</Button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>CryptoPia</td>
              <td>{this.state.BTCLastPriceCryptoPia}</td>
              <td>{this.state.BTCLastBidCryptoPia}</td>
              <td><Button bsStyle="primary" onClick={() => this.binances("CryptoPia")}>Bitcoin CryptoPia</Button></td>
            </tr>
            <tr>
              <td>4</td>
              <td>GDax</td>
              <td>{this.state.BTCLastPriceGDax}</td>
              <td>{this.state.BTCLastBidGDax}</td>
              <td><Button bsStyle="primary" onClick={() => this.binances("gdax")}>Bitcoin GDax</Button></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Bitfinex</td>
              <td>{this.state.BTCLastPriceBitfinex}</td>
              <td>{this.state.BTCLastBidBitfinex}</td>
              <td><Button bsStyle="primary" onClick={() => this.binances("bitfinex")}>Bitcoin Bitfinex</Button></td>
            </tr>
            <tr>
              <td>6</td>
              <td>Karaken</td>
              <td>{this.state.BTCLastPriceKraken}</td>
              <td>{this.state.BTCLastBidKraken}</td>
              <td><Button bsStyle="primary" onClick={() => this.binances("kraken")}>Bitcoin Kraken</Button></td>
            </tr>
            <tr>
              <td>7</td>
              <td>Poloniex</td>
              <td>{this.state.BTCLastPricePoloniex}</td>
              <td>{this.state.BTCLastBidPoloniex}</td>
              <td><Button bsStyle="primary" onClick={() => this.binances("poloniex")}>Bitcoin Poloniex</Button></td>
            </tr>
          </tbody>
        </Table> */}


        {/* <div className="btcDataPeriod">
          <Button bsStyle="success" >1 Day</Button>
          <Button bsStyle="success" >1 Week</Button>
          <Button bsStyle="success" >1 Month</Button>
        </div> */}


            </div>
        );
    }
}

export default Home;