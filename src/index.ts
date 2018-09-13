import trakt from './trakt'
import { token } from './secrets'

type TokenConfig = {
  access_token: string
  expires: number
  refresh_token: string
}

async function lastActivities () {

  await trakt.import_token(token as TokenConfig)
  const recent = await trakt.sync.history.get({ type: 'episodes' })
  return recent[0]
}

async function run () {
  const activities = await lastActivities()
  console.log(activities)

}

run().then(() => process.exit(0))
