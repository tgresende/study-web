import axios, { AxiosRequestHeaders, AxiosResponseHeaders } from 'axios'
//const axios = require('axios')

const header: AxiosRequestHeaders = {
  'Content-Type': 'application/json',
}

export async function httpGet(url: string): Promise<any> {
  const data = await axios.get(url, header).catch(error => {
    throw new Error(error.message)
  })
  return data
}
