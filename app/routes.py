from app import app
from flask import request
from flask import Response
from flask import jsonify
from app.exchange import exchange

@app.route('/api/public_trade', methods=['POST'])
def getTrades():
    if request.method == 'POST':
        exchange_name = request.form['exchange']
        data = exchange.getPublicTrades(exchange_name)
        resp = jsonify(data)
        resp.status_code = 200
        return resp
    else:
        return {'status' : False, 'message' : 'Invalid Method call'}

@app.route('/api/my_trade', methods=['POST'])
def getMyTrades():
    if request.method == 'POST':
        exchange_name = request.form['exchange']
        data = exchange.getMyTrades(exchange_name)
        resp = jsonify(data)
        resp.status_code = 200
        return resp
    else:
        return {'status' : False, 'message' : 'Invalid Method call'}


@app.route('/api/fetch_ticker', methods=['POST'])
def fetchTicker():
    if request.method == 'POST':
        exchange_name = request.form['exchange']
        data = exchange.fetchTicker(exchange_name)
        resp = jsonify(data)
        resp.status_code = 200
        return resp
    else:
        return {'status' : False, 'message' : 'Invalid Method call'}
