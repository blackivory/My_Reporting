import React, { Component } from 'react';
import ccxt from 'ccxt';
import Chart from "frappe-charts/dist/frappe-charts.min.esm";
import { Line } from 'react-chartjs'
import './index.css';
import { Button, Table } from 'react-bootstrap';
import { btcAction } from "../../store/actions/index";
import { btcReducer } from "../../store";
import { connect } from 'react-redux';

class App extends Component {

  btcDtaBinanceArr = [];
  btcDtaBittrexArr = [];
  btcDtaKrakenArr = [];
  btcDtaBinanceArr1 = [];
  btcDtaBinanceArr2 = [];
  constructor(props) {
    super(props);
    this.state = {
      exchangeName: "",
      BTCLastPriceBinance: "",
      BTCLastPriceBittrex: "",
      BTCLastPriceCryptoPia: "",
      BTCLastPriceGDax: "",
      BTCLastPriceBitfinex: "",
      BTCLastPriceKraken: "",
      BTCLastPricePoloniex: "",
      BTCLastBidBinance: "",
      BTCLastBidBittrex: "",
      BTCLastBidCryptoPia: "",
      BTCLastBidGDax: "",
      BTCLastBidBitfinex: "",
      BTCLastBidKraken: "",
      BTCLastBidPoloniex: "",
      btn1: false,
      btn2: false,
      btn3: false,
      btn4: false,
      btn5: false,
      btn6: false,
      array1: [],
      abc: [],
      btn: false,
      xyz: '',
      arrBinance: [],
      arrBitfinex: [],
      arrBittrex: [],
      arrCryptopia: [],
      arrKraken: [],
      arrgDax: [],
      lastPricegDax: "",
      lastPriceKraken: '',
      lastPriceCryptoPia: '',
      lastPriceBinance: '',
      lastPriceBitfinex: '',
      lastPriceBittrex: '',
      bidPricegDax: "",
      bidPriceKraken: '',
      bidPriceCryptoPia: '',
      bidPriceBinance: '',
      bidPriceBitfinex: '',
      bidPriceBittrex: '',
      askPricegDax: "",
      askPriceKraken: '',
      askPriceCryptoPia: '',
      askPriceBinance: '',
      askPriceBitfinex: '',
      askPriceBittrex: '',
      timestampgDax: "",
      timestampKraken: '',
      timestampCryptoPia: '',
      timestampBinance: '',
      timestampBitfinex: '',
      timestampBittrex: '',
    };

    this.timer = null;
  }

  componentWillMount() {
    this.props.btcGet();
  }

  defaultChartArr = []

  componentWillReceiveProps(nextprops) {
    // console.log('Line',Line)
    if (nextprops.btcReducer.authUser.length) {
      // console.log(nextprops.btcReducer.authUser.slice(0,200));
      nextprops.btcReducer.authUser.map((val, i) => {
        this.defaultChartArr.push({
          Binance: val["BTCLastPriceBinance"],
          Bitfinex: val["BTCLastPriceBitfinex"],
          Bittrex: val["BTCLastPriceBittrex"],
          Cryptopia: val["BTCLastPriceCryptoPia"],
          Kraken: val["BTCLastPriceKraken"],
          gDax: val["BTCLastPricegDax"]
        })

      })

      this.setState({
        abc: this.defaultChartArr
      })
    }
    if (nextprops.btcReducer.authUser[nextprops.btcReducer.authUser.length - 1] !== undefined) {
      this.setState({
        lastPricegDax: nextprops.btcReducer.authUser[nextprops.btcReducer.authUser.length - 1]['BTCLastPricegDax'],
        lastPriceKraken: nextprops.btcReducer.authUser[nextprops.btcReducer.authUser.length - 1]['BTCLastPriceKraken'],
        lastPriceCryptoPia: nextprops.btcReducer.authUser[nextprops.btcReducer.authUser.length - 1]['BTCLastPriceCryptoPia'],
        lastPriceBinance: nextprops.btcReducer.authUser[nextprops.btcReducer.authUser.length - 1]['BTCLastPriceBinance'],
        lastPriceBitfinex: nextprops.btcReducer.authUser[nextprops.btcReducer.authUser.length - 1]['BTCLastPriceBitfinex'],
        lastPriceBittrex: nextprops.btcReducer.authUser[nextprops.btcReducer.authUser.length - 1]['BTCLastPriceBittrex'],

        bidPricegDax: nextprops.btcReducer.authUser[nextprops.btcReducer.authUser.length - 1]['BTCBidgDax'],
        bidPriceKraken: nextprops.btcReducer.authUser[nextprops.btcReducer.authUser.length - 1]['BTCBidKraken'],
        bidPriceCryptoPia: nextprops.btcReducer.authUser[nextprops.btcReducer.authUser.length - 1]['BTCBidCryptoPia'],
        bidPriceBinance: nextprops.btcReducer.authUser[nextprops.btcReducer.authUser.length - 1]['BTCBidBinance'],
        bidPriceBitfinex: nextprops.btcReducer.authUser[nextprops.btcReducer.authUser.length - 1]['BTCBidBitfinex'],
        bidPriceBittrex: nextprops.btcReducer.authUser[nextprops.btcReducer.authUser.length - 1]['BTCBidBittrex'],

        askPricegDax: nextprops.btcReducer.authUser[nextprops.btcReducer.authUser.length - 1]['BTCAskgDax'],
        askPriceKraken: nextprops.btcReducer.authUser[nextprops.btcReducer.authUser.length - 1]['BTCAskKraken'],
        askPriceCryptoPia: nextprops.btcReducer.authUser[nextprops.btcReducer.authUser.length - 1]['BTCAskCryptoPia'],
        askPriceBinance: nextprops.btcReducer.authUser[nextprops.btcReducer.authUser.length - 1]['BTCAskBinance'],
        askPriceBitfinex: nextprops.btcReducer.authUser[nextprops.btcReducer.authUser.length - 1]['BTCAskBitfinex'],
        askPriceBittrex: nextprops.btcReducer.authUser[nextprops.btcReducer.authUser.length - 1]['BTCAskBittrex'],

        timestampgDax: nextprops.btcReducer.authUser[nextprops.btcReducer.authUser.length - 1]['BTCTimestampgDax'],
        timestampKraken: nextprops.btcReducer.authUser[nextprops.btcReducer.authUser.length - 1]['BTCTimestampKraken'],
        timestampCryptoPia: nextprops.btcReducer.authUser[nextprops.btcReducer.authUser.length - 1]['BTCTimestampCryptoPia'],
        timestampBinance: nextprops.btcReducer.authUser[nextprops.btcReducer.authUser.length - 1]['BTCTimestampBinance'],
        timestampBitfinex: nextprops.btcReducer.authUser[nextprops.btcReducer.authUser.length - 1]['BTCTimestampBitfinex'],
        timestampBittrex: nextprops.btcReducer.authUser[nextprops.btcReducer.authUser.length - 1]['BTCTimestampBittrex'],
      })
    }
  }


  componentDidMount() {
    let zzz1 = [7000, 8000, 9000];
    setInterval(() => {
      // zzz.map((data) => {
      zzz1.push(Math.random() * 10000);
      this.setState({
        arrBinance: zzz1
      })
      // });
    }, 5000)


    let zzz2 = [6900, 7900, 8500];
    setInterval(() => {
      // zzz.map((data) => {
      zzz2.push(Math.random() * 10000);
      this.setState({
        arrBitfinex: zzz2
      })
      // });
    }, 5000)

    let zzz3 = [6800, 7100, 8800];
    setInterval(() => {
      // zzz.map((data) => {
      zzz3.push(Math.random() * 10000);
      this.setState({
        arrBittrex: zzz3
      })
      // });
    }, 5000)

    let zzz4 = [6500, 7300, 8600];
    setInterval(() => {
      // zzz.map((data) => {
      zzz4.push(Math.random() * 10000);
      this.setState({
        arrCryptopia: zzz4
      })
      // });
    }, 5000)

    let zzz5 = [6600, 7400, 8700];
    setInterval(() => {
      // zzz.map((data) => {
      zzz5.push(Math.random() * 10000);
      this.setState({
        arrKraken: zzz5
      })
      // });
    }, 5000)

    let zzz6 = [6700, 7500, 8800];
    setInterval(() => {
      // zzz.map((data) => {
      zzz6.push(Math.random() * 10000);
      this.setState({
        arrgDax: zzz6
      })
      // });
    }, 5000)

    const exchangeBinance = new ccxt.binance();
    const symbolBinance = 'BTC/USDT'

    exchangeBinance.apiKey = '123';
    exchangeBinance.secret = '123';
    this.setState({ exchangeName: "Binance" });
    exchangeBinance.fetchTicker(symbolBinance).then(ticker => {

      const text = [
        exchangeBinance.id,
        symbolBinance,
        JSON.stringify(ticker, undefined, '\n\t')
      ]
      let data = JSON.parse(text[2]);
      data['info']['lastPrice'];
      this.setState({
        BTCLastPriceBinance: data['info']['lastPrice'],
        BTCLastBidBinance: data['info']['bidPrice']
      });

    })

    const exchangeBittrex = new ccxt.bittrex();
    const symbolBittrex = 'BTC/USDT'
    exchangeBittrex.apiKey = '123';
    exchangeBittrex.secret = '123';
    this.setState({ exchangeName: "Binance" });
    exchangeBittrex.fetchTicker(symbolBittrex).then(ticker => {
      const text = [
        exchangeBittrex.id,
        symbolBittrex,
        JSON.stringify(ticker, undefined, '\n\t')
      ]
      let data = JSON.parse(text[2]);
      this.setState({ BTCLastPriceBittrex: data['last'], BTCLastBidBittrex: data['bid'] });

    })


    const exchangeCryptopia = new ccxt.cryptopia();
    const symbolcryptopia = 'BTC/USDT';
    exchangeCryptopia.apiKey = '123';
    exchangeCryptopia.secret = '123';
    this.setState({ exchangeName: "Binance" });
    exchangeCryptopia.fetchTicker(symbolcryptopia).then(ticker => {
      const text = [
        exchangeCryptopia.id,
        symbolcryptopia,
        JSON.stringify(ticker, undefined, '\n\t')
      ]
      let data = JSON.parse(text[2]);
      data['info']['lastPrice']
      this.setState({ BTCLastPriceCryptoPia: data['last'], BTCLastBidCryptoPia: data['bid'] });

    })


    const exchangDax = new ccxt.gdax();
    const symbolgDax = 'BTC/USD'
    exchangDax.apiKey = '123';
    exchangDax.secret = '123';
    this.setState({ exchangeName: "Binance" });
    exchangDax.fetchTicker(symbolgDax).then(ticker => {
      const text = [
        exchangDax.id,
        symbolgDax,
        JSON.stringify(ticker, undefined, '\n\t')
      ]

      this.setState({ BTCLastPriceGDax: ticker['last'], BTCLastBidGDax: ticker['bid'] });
    })

    const exchangBitfinex = new ccxt.bitfinex();
    const symbolBitfinex = 'BTC/USD'
    exchangBitfinex.apiKey = '123';
    exchangBitfinex.secret = '123';
    this.setState({ exchangeName: "Binance" });
    exchangBitfinex.fetchTicker(symbolBitfinex).then(ticker => {
      const text = [
        exchangBitfinex.id,
        symbolBitfinex,
        JSON.stringify(ticker, undefined, '\n\t')
      ]
      this.setState({ BTCLastPriceBitfinex: ticker['last'], BTCLastBidBitfinex: ticker['bid'] });
    })

    const exchangKaraken = new ccxt.kraken();
    const symbolKaraken = 'BTC/USD'
    exchangKaraken.apiKey = '123';
    exchangKaraken.secret = '123';
    this.setState({ exchangeName: "Binance" });
    exchangKaraken.fetchTicker(symbolKaraken).then(ticker => {
      const text = [
        exchangKaraken.id,
        symbolKaraken,
        JSON.stringify(ticker, undefined, '\n\t')
      ]
      this.setState({ BTCLastPriceKraken: ticker['last'], BTCLastBidKraken: ticker['bid'] });
    })

    const exchangPoloniex = new ccxt.poloniex();
    const symbolPoloniex = 'BTC/USD'
    exchangPoloniex.apiKey = '123';
    exchangPoloniex.secret = '123';
    this.setState({ exchangeName: "Binance" });
    exchangPoloniex.fetchTicker(symbolPoloniex).then(ticker => {
      const text = [
        exchangPoloniex.id,
        symbolPoloniex,
        JSON.stringify(ticker, undefined, '\n\t')
      ]
      this.setState({ BTCLastPricePoloniex: ticker['last'], BTCLastBidPoloniex: ticker['bid'] });
    })
  }


  binances = (s) => {
    let exchange;
    let symbol;
    s == "gDax" ? exchange = new ccxt.gdax() : s == "Bitfinex" ? exchange = new ccxt.bitfinex() : s == "Bittrex" ? exchange = new ccxt.bittrex() : s == "Binance" ? exchange = new ccxt.binance() : s == "CryptoPia" ? exchange = new ccxt.cryptopia() : s == "Kraken" ? exchange = new ccxt.kraken() : exchange = new ccxt.bittrex()
    exchange.apiKey = '123';
    exchange.secret = '123';
    this.setState({ exchangeName: s });
    if (s == "Kraken" || s == "Bitfinex" || s == "gDax") {
      symbol = 'BTC/USD'
    }
    else {
      symbol = 'BTC/USDT'
    }

    let that = this
    exchange.fetchTicker(symbol).then(ticker => {
      this.setState({
        [`BTCLastPrice${s}`]: ticker['info']['lastPrice'],
        info: ticker
      });
      this.btcDtaBinanceArr1 = []
      if (this.props.btcReducer.authUser.length) {
        this.props.btcReducer.authUser
          .map((data) => {
            this.btcDtaBinanceArr1.push({
              uv: data[`BTCLastPrice${s}`],
              Date: data[`BTCTimestamp${s}`]
            });

            if (this.props.btcReducer.authUser.length) {
            }
          })
        this.setState({
          a: "a"
        })
      }
    })
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
    if (this.state.btn6 === true) {
      document.getElementById('f').style.backgroundColor = 'green';
    }
    else {
      document.getElementById('f').style.backgroundColor = 'lightgray';
    }
  }

  maintainArr = [];
  getAllData(e) {
    e.preventDefault();

    this.btcDtaBinanceArr1 = []
    // console.log(this.props.btcReducer.authUser)
    this.props.btcReducer.authUser.map((data) => {
      var a = new Date();
      var b = a.toString();
      var c = b.substring(0, 15);

      var d = data[`BTCTimestamp${this.state.xyz}`];
      var e = new Date(data[`BTCTimestamp${this.state.xyz}`]);
      var f = e.toString();
      var g = f.substring(0, 15);

      if (g == c) {
        // console.log('--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
        this.btcDtaBinanceArr1.push({ uv: data[`BTCLastPrice${this.state.xyz}`] });
      }

      else {
      }

    })
    this.setState({
      b: 'v'
    })
  }

  click(arg, e) {
    e.preventDefault();
    this.props.btcGet()
    if (arg == 'btn1') {
      this.setState({ btn1: true, btn2: false, btn3: false, btn4: false, btn5: false, btn6: false, btn: true, xyz: 'gDax' });
      this.binances('gDax')
    }
    if (arg == 'btn2') {
      this.setState({ btn1: false, btn2: true, btn3: false, btn4: false, btn5: false, btn6: false, btn: true, xyz: 'Kraken' });
      this.binances('Kraken')
    }
    if (arg == 'btn3') {
      this.setState({ btn1: false, btn2: false, btn3: true, btn4: false, btn5: false, btn6: false, btn: true, xyz: 'CryptoPia' });
      this.binances('CryptoPia')
    }
    if (arg == 'btn4') {
      this.setState({ btn1: false, btn2: false, btn3: false, btn4: true, btn5: false, btn6: false, btn: true, xyz: 'Binance' });
      this.binances('Binance')
    }
    if (arg == 'btn5') {
      this.setState({ btn1: false, btn2: false, btn3: false, btn4: false, btn5: true, btn6: false, btn: true, xyz: 'Bitfinex' });
      this.binances('Bitfinex')
    }
    if (arg == 'btn6') {
      this.setState({ btn1: false, btn2: false, btn3: false, btn4: false, btn5: false, btn6: true, btn: true, xyz: 'Bittrex' });
      this.binances('Bittrex')
    }
  }

  render() {
    var data = {
      // labels: ["1", "2", "3", "4", "5","6","7","8","9","10"],
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],

      datasets: [
        {
          label: "Binance",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: this.state.arrBinance
        },
        {
          label: "Bitfinex",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: this.state.arrBitfinex
        },
        {
          label: "Bittrex",
          fillColor: "rgba(190,190,190,0.2)",
          strokeColor: "rgba(190,190,190,1)",
          pointColor: "rgba(190,190,190,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(190,190,190,1)",
          data: this.state.arrBittrex
        },
        {
          label: "CryptoPia",
          fillColor: "rgba(150,150,150,0.2)",
          strokeColor: "rgba(150,150,150,1)",
          pointColor: "rgba(150,150,150,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(150,150,150,1)",
          data: this.state.arrCryptopia
        },
        {
          label: "Kraken",
          fillColor: "rgba(100,100,100,0.2)",
          strokeColor: "rgba(100,100,100,1)",
          pointColor: "rgba(100,100,100,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(100,100,100,1)",
          data: this.state.arrKraken
        },
        {
          label: "gDax",
          fillColor: "rgba(250,160,250,0.2)",
          strokeColor: "rgba(250,160,250,1)",
          pointColor: "rgba(250,160,250,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(250,160,250,1)",
          data: this.state.arrgDax
        },
      ]
    };
    return (
      <div className="App">
        <h1 className="mainHead"  >Arbitrage Trading System</h1>
        <br /><br />
        <h2 className="mainHead"> Summary</h2>
        <table className="table1" >
          <thead>
            <tr>
              <th className="topTable">Exchange : </th>
              <th className="topTable">gDax</th>
              <th className="topTable" >Kraken</th>
              <th className="topTable">CryptoPia</th>
              <th className="topTable">Binance</th>
              <th className="topTable">Bitfinex</th>
              <th className="topTable">Bittrex</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <th className="topTable">Last Price : </th>
              <td className="topTable">{this.state.lastPricegDax}</td>
              <td className="topTable">{this.state.lastPriceKraken}</td>
              <td className="topTable">{this.state.lastPriceCryptoPia}</td>
              <td className="topTable">{this.state.lastPriceBinance}</td>
              <td className="topTable">{this.state.lastPriceBitfinex}</td>
              <td className="topTable">{this.state.lastPriceBittrex}</td>
            </tr>
            <tr >
              <th className="topTable"> Best Bid Price : </th>
              <td className="topTable" >{this.state.bidPricegDax}</td>
              <td className="topTable">{this.state.bidPriceKraken}</td>
              <td className="topTable">{this.state.bidPriceCryptoPia}</td>
              <td className="topTable">{this.state.bidPriceBinance}</td>
              <td className="topTable">{this.state.bidPriceBitfinex}</td>
              <td className="topTable">{this.state.bidPriceBittrex}</td>
            </tr>
            <tr>
              <th className="topTable"> Best Ask Price : </th>
              <td className="topTable">{this.state.askPricegDax}</td>
              <td className="topTable">{this.state.askPriceKraken}</td>
              <td className="topTable">{this.state.askPriceCryptoPia}</td>
              <td className="topTable">{this.state.askPriceBinance}</td>
              <td className="topTable">{this.state.askPriceBitfinex}</td>
              <td className="topTable">{this.state.askPriceBittrex}</td>
            </tr>

            <tr>
              <th className="topTable"> Time : </th>
              <td className="topTable">{`${new Date(this.state.timestampgDax).getHours()} :
                ${new Date(this.state.timestampgDax).getMinutes()} :
                ${new Date(this.state.timestampgDax).getSeconds()}`}</td>
              <td className="topTable">{`${new Date(this.state.timestampKraken).getHours()} :
                ${new Date(this.state.timestampKraken).getMinutes()} :
                ${new Date(this.state.timestampKraken).getSeconds()}`}</td>
              <td className="topTable">{`${new Date(this.state.timestampCryptoPia).getHours()} :
                ${new Date(this.state.timestampCryptoPia).getMinutes()} :
                ${new Date(this.state.timestampCryptoPia).getSeconds()}`}</td>
              <td className="topTable">{`${new Date(this.state.timestampBinance).getHours()} :
                ${new Date(this.state.timestampBinance).getMinutes()} :
                ${new Date(this.state.timestampBinance).getSeconds()}`}</td>
              <td className="topTable">{`${new Date(this.state.timestampBitfinex).getHours()} :
                ${new Date(this.state.timestampBitfinex).getMinutes()} :
                ${new Date(this.state.timestampBitfinex).getSeconds()}`}</td>
              <td className="topTable">{`${new Date(this.state.timestampBittrex).getHours()} :
                ${new Date(this.state.timestampBittrex).getMinutes()} :
                ${new Date(this.state.timestampBittrex).getSeconds()}`}</td>
            </tr>
          </tbody>
        </table>
        <br /><br />
        <h2 className="mainHead">Price Chart</h2>
        {/* {this.defaultChartArr.length ?
          <div>{this.defaultChartArr.length} */}
        <div className="chart">
          <Line data={data} width={800} height={500} />
        </div>
        <h3 className="mainHead">BitCoin Exchanges Prices</h3>


        <div className="parent">

          <div className='container_fluid'>
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
              <button className="btn1" id="c" onClick={this.click.bind(this, "btn3")}>CryptoPia</button>
              <button className="btn1" id="d" onClick={this.click.bind(this, "btn4")}>Binance</button>
              <button className="btn1" id="e" onClick={this.click.bind(this, "btn5")}>Bitfinix</button>
              <button className="btn1" id="f" onClick={this.click.bind(this, "btn6")}>Bittrex</button>
              <br /><br /><br /><br />
              {this.state.btn ?
                <div className="calender">
                  <button onClick={this.getAllData.bind(this)}> One Day </button>

                </div>
                :
                null
              }
              <br />
              <div className="footbtn">
              </div>
            </form>
            <table className="table">
              <tr>
                <td className="tabledate">Date</td>
                <td className="tablemax">MAX Price</td>
                <td className="tablemax">MIN Price</td>
                <td className="tablemax">Last Price</td>
                <td className="tablemax">Bid Price</td>
                <td className="tablemax"> Ask Price</td>
                <td className="tablemax">PROFIT</td>
              </tr>
              {this.state.info ?
                <tr>
                  <td className="tabledata">SUN {
                    `${new Date(this.state.info.timestamp).getDate()}/
                ${new Date(this.state.info.timestamp).getMonth() + 1}/
                ${new Date(this.state.info.timestamp).getFullYear()}`}</td>

                  {this.state.info.high ?
                    <td className="tabledata">{this.state.info.high}</td> : <td className="tabledata">Not Available</td>}
                  {this.state.info.low ?
                    <td className="tabledata">{this.state.info.low}</td> : <td className="tabledata">Not Available</td>}
                  {this.state.info.last ?
                    <td className="tabledata">{this.state.info.last}</td> : <td className="tabledata">Not Available</td>}
                  {this.state.info.bid ?
                    <td className="tabledata">{this.state.info.bid}</td> : <td className="tabledata">Not Available</td>}
                  {this.state.info.ask ?
                    <td className="tabledata">{this.state.info.ask}</td> : <td className="tabledata">Not Available</td>}
                  <td className="tabledata">Not Available</td>
                </tr>
                :
                <tr>
                </tr>
              }
            </table>
          </div>

        </div>
        <br />

        {this.btcDtaBinanceArr1.length ?
          <div></div>
          :
          <div>Cant Load</div>}
        <button type="button" onClick={this.props.btcData.bind(this, { title: 'daniyal', isDone: false })}>Click me</button>

        <button type="button" onClick={this.props.btcGet.bind(this)}>Click messss</button>
      </div>);
  }

}

const mapStateToProps = (state) => {
  return { userAuth: state.AuthReducer, btcReducer: state.btcReducer };
};
const mapDispatchToProps = (dispatch) => {
  return {
    btcData: (userObj) => dispatch(btcAction.btcData(userObj)),
    btcGet: () => dispatch(btcAction.btcGet())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);