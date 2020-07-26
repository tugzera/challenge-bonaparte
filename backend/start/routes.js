'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/titles:page?:search?', 'TitleController.index')
Route.get('/titles/:code', 'TitleController.show')
Route.post('/titles', 'TitleController.store')
Route.patch('/title/:code', 'TitleController.update')
Route.delete('/title/:code', 'TitleController.destroy')
