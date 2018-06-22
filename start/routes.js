'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route
  .group(() => {
    Route.get('departments', 'DepartmentController.index')
    Route.get('departments/:name/towns', 'DepartmentController.findTowns')
    Route.get('departments/:name/districts', 'DepartmentController.findDistricts')
    Route.get('departments/:name/neighborhoods', 'DepartmentController.findNeighborhoods')

    Route.get('towns', 'TownController.index')
    Route.get('towns/:name/districts', 'TownController.findDistricts')
    Route.get('towns/:name/neighborhoods', 'TownController.findNeighborhoods')

    Route.get('districts', 'DistrictController.index')
    Route.get('districts/:name/neighborhoods', 'DistrictController.findNeighborhoods')

    Route.get('neighborhoods', 'NeighborhoodController.index')
  })
  .prefix('api/v1')
