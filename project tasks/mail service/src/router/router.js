const loginRoute = require('../controller/controller')

module.exports = [

{
    method: 'POST',
    path: '/api/auth/signup',
    handler: loginRoute.signup
}
]