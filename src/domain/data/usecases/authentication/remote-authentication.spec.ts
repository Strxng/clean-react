import { HttpPostClient } from 'domain/data/protocols/http/http-post-client'
import {RemoteAutentication} from './remote-authentication'

describe('RemoteAuthentication', () => {
  test('Should call http client with correct url', async () => {

    class HttpPostClientSpy implements HttpPostClient{
      url?: string

      async post(url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }

    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAutentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})