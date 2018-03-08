from flask import Flask, render_template
from flask_mysqldb import MySQL
import ccxt
import pyodbc
import pandas as pd


app = Flask(__name__)

# Congifgration with mysql
'''
mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = ''
app.config['MYSQL_DATABASE_DB'] = 'demo'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)'''


# Connect with SQL server
con = pyodbc.connect(r'Driver={SQL Server};Server=.;Database=demo1;Trusted_Connection=yes;')

'''
sir g there is method to connect with pyodbc it working :)
'''
# Get Data From cctx API
bitfinex = ccxt.bitfinex({
    'apiKey': ' ',
    'secret': '',
})
kraken = ccxt.kraken({
    'apikey': '',
    'secret': ''
})
poloniex = ccxt.poloniex({
    'apikey': '',
    'secret': ''
})
quoinex = ccxt.quoinex({
    'apikey': '',
    'secret': ''
})


@app.route("/")
def index():
    cursor = con.cursor()
    cursor.execute("select * from exchanges")
    data = cursor.fetchall()

    return render_template('index.html',data=data)


@app.route("/about")
def about():
    return render_template('about.html')


@app.route("/exchanges")
def exchange():
    cursor = con.cursor()
    kraken = ccxt.kraken()
    df = kraken.fetchTicker('BTC/USD')
    df.pop('info')
    df1 = [df]
   
    cursor.execute("insert into exchanges(exchangeName,high,low,last,timestamp,bid,ask) values('kraken',"+str(df['high'])+","+str(df['low'])+","+str(df['last'])+","+str(df['timestamp'])+","+str(df['bid'])+","+str(df['ask'])+ ")")
    con.commit()


    cursor = con.cursor()
    bitfinex = ccxt.bitfinex()
    df = bitfinex.fetchTicker('BTC/USD')
    df.pop('info')
    df1 = [df]
   
    cursor.execute("insert into exchanges(exchangeName,high,low,last,timestamp,bid,ask) values('bitfinex',"+str(df['high'])+","+str(df['low'])+","+str(df['last'])+","+str(df['timestamp'])+","+str(df['bid'])+","+str(df['ask'])+ ")")
    con.commit()




    # cursor = con.cursor()
    # poloniex = ccxt.poloniex()
    # df = poloniex.fetchTicker('BTC/USD')
    # df.pop('info')
    # df1 = [df]
   
    # cursor.execute("insert into exchanges(exchangeName,high,low,last,timestamp,bid,ask) values('poloniex',"+str(df['high'])+","+str(df['low'])+","+str(df['last'])+","+str(df['timestamp'])+","+str(df['bid'])+","+str(df['ask'])+ ")")
    # con.commit()



    cursor = con.cursor()
    bitmex = ccxt.bitmex()
    df = bitmex.fetchTicker('BTC/USD')
    df.pop('info')
    df1 = [df]
   
    cursor.execute("insert into exchanges(exchangeName,high,low,last,timestamp,bid,ask) values('bitmex',"+str(df['high'])+","+str(df['low'])+","+str(df['last'])+","+str(df['timestamp'])+","+str(df['bid'])+","+str(df['ask'])+ ")")
    con.commit()



    cursor = con.cursor()
    bittrex = ccxt.bittrex()
    df = bittrex.fetchTicker('BTC/USDT')
    df.pop('info')
    df1 = [df]
   
    cursor.execute("insert into exchanges(exchangeName,high,low,last,timestamp,bid,ask) values('bittrex',"+str(df['high'])+","+str(df['low'])+","+str(df['last'])+","+str(df['timestamp'])+","+str(df['bid'])+","+str(df['ask'])+ ")")
    con.commit()



    cursor = con.cursor()
    hitbtc = ccxt.hitbtc()
    df = hitbtc.fetchTicker('BTC/USDT')
    df.pop('info')
    df1 = [df]
   
    cursor.execute("insert into exchanges(exchangeName,high,low,last,timestamp,bid,ask) values('hitbtc',"+str(df['high'])+","+str(df['low'])+","+str(df['last'])+","+str(df['timestamp'])+","+str(df['bid'])+","+str(df['ask'])+ ")")
    con.commit()



    # cursor = con.cursor()
    # okex = ccxt.okex()
    # df = okex.fetchTicker('BTC/USD')
    # df.pop('info')
    # df1 = [df]
   
    # cursor.execute("insert into exchanges(exchangeName,high,low,last,timestamp,bid,ask) values('okex',"+str(df['high'])+","+str(df['low'])+","+str(df['last'])+","+str(df['timestamp'])+","+str(df['bid'])+","+str(df['ask'])+ ")")
    # con.commit()





    # cursor = con.cursor()
    # deribit = ccxt.deribit()
    # df = deribit.fetchTicker('BTC/USD')
    # df.pop('info')
    # df1 = [df]
   
    # cursor.execute("insert into exchanges(exchangeName,high,low,last,timestamp,bid,ask) values('deribit',"+str(df['high'])+","+str(df['low'])+","+str(df['last'])+","+str(df['timestamp'])+","+str(df['bid'])+","+str(df['ask'])+ ")")
    # con.commit()



    # cursor = con.cursor()
    # acx = ccxt.acx()
    # df = acx.fetchTicker('BTC/USDT')
    # df.pop('info')
    # df1 = [df]
   
    # cursor.execute("insert into exchanges(exchangeName,high,low,last,timestamp,bid,ask) values('acx',"+str(df['high'])+","+str(df['low'])+","+str(df['last'])+","+str(df['timestamp'])+","+str(df['bid'])+","+str(df['ask'])+ ")")
    # con.commit()


    cursor = con.cursor()
    bitstamp = ccxt.bitstamp()
    df = bitstamp.fetchTicker('BTC/USD')
    df.pop('info')
    df1 = [df]
   
    cursor.execute("insert into exchanges(exchangeName,high,low,last,timestamp,bid,ask) values('bitstamp',"+str(df['high'])+","+str(df['low'])+","+str(df['last'])+","+str(df['timestamp'])+","+str(df['bid'])+","+str(df['ask'])+ ")")
    con.commit()

    # cursor = con.cursor()
    # gemini = ccxt.gemini()
    # df = gemini.fetchTicker('BTC/USD')
    # df.pop('info')
    # df1 = [df]
   
    # cursor.execute("insert into exchanges(exchangeName,high,low,last,timestamp,bid,ask) values('gemini',"+str(df['high'])+","+str(df['low'])+","+str(df['last'])+","+str(df['timestamp'])+","+str(df['bid'])+","+str(df['ask'])+ ")")
    # con.commit()

    cursor = con.cursor()
    binance = ccxt.binance()
    df = binance.fetchTicker('BTC/USDT')
    df.pop('info')
    df1 = [df]
   
    cursor.execute("insert into exchanges(exchangeName,high,low,last,timestamp,bid,ask) values('binance',"+str(df['high'])+","+str(df['low'])+","+str(df['last'])+","+str(df['timestamp'])+","+str(df['bid'])+","+str(df['ask'])+ ")")
    con.commit()

    # cursor = con.cursor()
    # qryptos = ccxt.qryptos()
    # df = qryptos.fetchTicker('BTC/USDT')
    # df.pop('info')
    # df1 = [df]
   
    # cursor.execute("insert into exchanges(exchangeName,high,low,last,timestamp,bid,ask) values('qryptos',"+str(df['high'])+","+str(df['low'])+","+str(df['last'])+","+str(df['timestamp'])+","+str(df['bid'])+","+str(df['ask'])+ ")")
    # con.commit()

    # cursor = con.cursor()
    # huobi = ccxt.huobi()
    # df = huobi.fetchTicker('BTC/USDT')
    # df.pop('info')
    # df1 = [df]
   
    # cursor.execute("insert into exchanges(exchangeName,high,low,last,timestamp,bid,ask) values('huobi',"+str(df['high'])+","+str(df['low'])+","+str(df['last'])+","+str(df['timestamp'])+","+str(df['bid'])+","+str(df['ask'])+ ")")
    # con.commit()

    cursor = con.cursor()
    cex = ccxt.cex()
    df = cex.fetchTicker('BTC/USD')
    df.pop('info')
    df1 = [df]
   
    cursor.execute("insert into exchanges(exchangeName,high,low,last,timestamp,bid,ask) values('cex',"+str(df['high'])+","+str(df['low'])+","+str(df['last'])+","+str(df['timestamp'])+","+str(df['bid'])+","+str(df['ask'])+ ")")
    con.commit()
    return "data inserted"


app.run(debug=True)
