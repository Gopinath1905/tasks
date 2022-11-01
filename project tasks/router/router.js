const loginRoute = require('../src/controller/controller')

module.exports = [

{
    method: 'POST',
    path: '/api/auth/signup',
    handler: loginRoute.signup
},

{
    method: 'POST',
    path: '/api/auth/login',
    handler: loginRoute.login
},
{
    method: 'GET',
    path : '/api/getUser',
    handler: loginRoute.getUser
}
]