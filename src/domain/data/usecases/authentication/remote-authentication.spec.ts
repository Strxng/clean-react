import { HttpPostClientSpy } from '../../test/mock-http-client'
import {RemoteAutentication} from './remote-authentication'

type SutTypes = {
  sut: RemoteAutentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = 'any_url'): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAutentication(url, httpPostClientSpy)

  return {sut, httpPostClientSpy}
}

describe('RemoteAuthentication', () => {
  test('Should call http client with correct url', async () => {
    const url = 'any_url'
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})