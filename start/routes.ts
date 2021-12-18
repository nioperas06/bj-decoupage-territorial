/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'


Route.group(() => {
    // Departments routes
    Route.get('/departments', 'DepartmentsController.getAll')
    Route.get('/departments/:name/towns', 'DepartmentsController.getDepartmentTown')
    Route.get('/departments/:name/districts', 'DepartmentsController.getDepartmentDistricts')
    Route.get('/departments/:name/neighborhoods', 'DepartmentsController.getDepartmentNeighborhoods')

    // Town routes
    Route.get('/towns', 'TownsController.getAll')
    Route.get('/towns/:name/districts', 'TownsController.getTownDistrict')
    Route.get('/towns/:name/neighborhoods', 'TownsController.getTownNeighborhoods')

    // District routes
    Route.get('/districts', 'DistrictsController.getAll')
    Route.get('/districts/:name/neighborhoods', 'DistrictsController.getDistrictNeighborhoods')

    // Neighborhood routes
    Route.get('/neighborhoods', 'NeighborhoodsController.getNeighborhoods')
}).prefix('/api/v1').namespace('App/Controllers/Http/Api/v1')

Route.any('*', async ({ view }) => {
    const specUrl = 'swagger.json'
    return view.render('swagger', { specUrl })
})


