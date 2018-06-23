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
