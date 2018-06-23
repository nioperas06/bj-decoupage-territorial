'use strict'

const { test, trait } = use('Test/Suite')('Department')
const Department = use('App/Models/Department')

trait('Test/ApiClient')

test('should return all departments', async ({ assert, client }) => {
  const response = await client.get('/api/v1/departments').end()
  const departments = response.body
  const department = departments[departments.length - 1]

  response.assertStatus(200)
  assert.equal(departments.length, 12)
  assert.equal(department.name, 'ZOU')
})

test(`should return department's towns`, async ({ assert, client }) => {
  const name = 'MoNo'
  const response = await client.get(`/api/v1/departments/${name}/towns`).end()
  const towns = response.body
  const town = towns[towns.length - 1]

  response.assertStatus(200)
  assert.equal(towns.length, 6)
  assert.equal(town.name, 'LOKOSSA')
})

test(`should not return department's towns`, async ({ assert, client }) => {
  const name = 'fake'
  const response = await client.get(`/api/v1/departments/${name}/towns`).end()

  response.assertStatus(400)
  response.assertJSON({
    'error': {
      'status': 400,
      'message': 'The requested resource was not found.'
    }
  })
})

test(`should return department's districts`, async ({ assert, client }) => {
  const name = 'MoNo'
  const response = await client.get(`/api/v1/departments/${name}/districts`).end()
  const districts = response.body
  const district = districts[districts.length - 1]
  console.log(response)
  response.assertStatus(200)
//  assert.equal(districts.length, 6)
//  assert.equal(district.name, 'LOKOSSA')
})

test(`should return department's neighborhoods`, async ({ assert, client }) => {
  const name = 'MoNo'
  const response = await client.get(`/api/v1/departments/${name}/neighborhoods`).end()
  const neighborhoods = response.body
  const neighborhood = neighborhoods[neighborhoods.length - 1]

  response.assertStatus(200)
//  assert.equal(districts.length, 6)
//  assert.equal(district.name, 'LOKOSSA')
})
