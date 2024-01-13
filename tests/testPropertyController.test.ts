import { expect } from "chai"
import { RequiredUriUrl, get } from "request"
import { promisify } from "util"
import { PropertyType } from '../src/models/modelTypes'

describe("#Property Controller", () => {
    it("Get all Properties", async () => {
        const requestUrl: RequiredUriUrl = {
            url: 'http://127.0.0.1:5000/api/v1/properties'
        }
        const expected: PropertyType = {
            title: 'Two Bedroom Flat',
            type: 'House',
            price: 200,
            bedrooms: 2,
            bathrooms: 2
        }
        const actual = await (await promisify(get)(requestUrl)).body
        expect(JSON.parse(actual)).to.contains(expected)
    })
})