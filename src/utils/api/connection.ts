import axios, { AxiosRequestHeaders } from 'axios'

const header: AxiosRequestHeaders = {
  'Content-Type': 'application/json',
}

export async function httpGet(url: string): Promise<any> {
  const data = await axios.get(url, header).catch(error => {
    alert(error.message + ' - get - ' + url)
  })
  return data
}

export async function httpPost(url: string, body: any): Promise<any> {
  const data = await axios.post(url, body).catch(error => {
    const message =
      JSON.stringify(error) +
      ' - post - ' +
      url +
      ' - body: ' +
      JSON.stringify(body)
    throw new Error(message)
  })
  return data
}
