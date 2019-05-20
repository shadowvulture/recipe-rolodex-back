const router = require( 'express' ).Router()
const User = require('../db/Models/User')


//  middleware
router.post( '/register', async ( req, res ) =>
{   //  api/user/register
    // res.send('Register')
    const user = new User ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    } )
    try {
        const savedUser = await user.save()
        res.send(savedUser)
    } catch ( err ) {
        res.status(400).send(err)
    }
})

router.post('/login')

module.exports = router
