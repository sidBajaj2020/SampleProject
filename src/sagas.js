import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
const axios = require('axios');

function* quoteActionCreator(){

    try {
      const res = yield axios.get("https://api.kanye.rest")
      yield put({
          type: "GENERATE_NEW_QUOTE", 
          quote: res.data.quote
      }) 
    } catch (err){
        console.log("HELP ME!")
    }
}

export default function* watchQuoteGen(){
    yield takeLatest('GEN_NEW_QUOTE', quoteActionCreator)
}