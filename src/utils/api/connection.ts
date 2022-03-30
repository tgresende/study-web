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
    throw new Error(error.response.data)
  })
  return data
}

export async function httpSimplePost(url: string): Promise<any> {
  const data = await axios.post(url).catch(error => {
    throw new Error(error.response.data)
  })
  return data
}
