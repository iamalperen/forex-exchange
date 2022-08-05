import {API_KEY, INTERVALS} from "@/constants/api";
const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = API_KEY;
const finnhubClient = new finnhub.DefaultApi();

const getExchanges = async function () {
    return new Promise((resolve, reject) => {
        finnhubClient.forexExchanges((error, data) => {
            if (error) {
                reject("FAILURE")
            }
            if (data) {
                resolve(data)
            }
        });
    })
};

const getSymbols = async function (symbol) {
    return new Promise((resolve, reject) => {
        finnhubClient.forexSymbols(symbol, (error, data) => {
            if (error) {
                reject("FAILURE")
            }
            if (data) {
                resolve(data)
            }
        });
    })
};

const getSymbolCandles = async function (symbol, timeInterval) {
    return new Promise((resolve, reject) => {
        finnhubClient.forexCandles(symbol, timeInterval, INTERVALS[timeInterval], Date.now(), (error, data) => {
            if (error) {
                reject("FAILURE")
            }
            if (data) {
                resolve(data)
            }
        });
    })
};

export {getExchanges, getSymbols, getSymbolCandles};
