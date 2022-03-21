import axios, { AxiosRequestHeaders } from 'axios'

const header: AxiosRequestHeaders = {
  'Content-Type': 'application/json',
}

export async function httpGet(url: string): Promise<any> {
  const data = await axios.get(url, header).catch(error => {
    alert(error.message)
  })
  return data
}
