// https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten

import * as types from './mutation-types'
import index from "./index";

export const initJokes = ({commit}) => {
  const api = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
  fetch(api,{
    method: 'GET'
  }).then(res => res.json())
    .then(json => commit(types.INIT_JOKES, json))

}

export const addJoke = ({commit}) => {
  const api = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke'
  fetch(api,{
    method: 'GET'
  }).then(res => res.json())
    .then(json => commit(types.ADD_JOKE, json))

}

export const removeJoke = ({commit}, index) => {
  commit(types.REMOVE_JOKE, index)
}
