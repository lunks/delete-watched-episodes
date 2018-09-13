import Trakt from 'trakt.tv'
import { options } from '../secrets'

type TraktOptions = {
  client_id: string
  client_secret: string
}

const trakt = new Trakt(options as TraktOptions)

export const grabURL = () => (console.log(trakt.get_url()))
export const logToken = (): Promise<string> => {
  return new Promise<string>((resolve) => {
    process.openStdin().on('data', function (code) {
      const inputCode = code.toString().trim()
      trakt.exchange_code(inputCode).then(() => {
        const token = trakt.export_token()
        resolve(token)
      })
    })
  })
}

export default trakt
