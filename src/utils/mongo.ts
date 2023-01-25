import * as mongodb from 'mongodb'
import { config } from '../config'
import { logger } from './logger'

const instance: { [name: string]: mongodb.Db } = {}

export enum Collections {
  Urls = 'urls',
}

export const getMongo = (options: { url: string, dbName: string }): Promise<mongodb.Db> => {
    const {
        url = config.storage.mongo.url,
        dbName = config.storage.mongo.dbName,
    } = options

    return new Promise((resolve, reject) => {
        if (instance[url]) {
            resolve(instance[url])
        } else {
            mongodb.MongoClient.connect(
                url,
                (err, client) => {
                    if (err) {
                        logger.error(err)
                        reject(err)
                    }
                    logger.info(`[MONGODB CONNECTED] ${JSON.stringify(options)}`)
                    const db = client.db(dbName)
                    instance[url] = db
                    resolve(db)
                },
            )
        }
    })
}
