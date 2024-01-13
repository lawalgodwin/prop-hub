import { expect } from 'chai'
import { describe } from 'mocha'
import { RequiredUriUrl, get } from 'request'
import { promisify } from 'util'

describe ("App connection to db and redis", () => {
    it("Test connectivity with Database and Redis", async () => {
      const url: RequiredUriUrl = { url: 'http://127.0.0.1:5000/status'}
      const result = await promisify(get)(url)
      expect(JSON.parse(result.body)).to.contains({database: true, redis: true})
    })
    // it("Test connectivity with Redis", () => {})
})
