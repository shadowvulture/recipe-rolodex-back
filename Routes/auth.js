const router = require( 'express' ).Router()
const User = require( '../db/Models/User' )
const {registerValidation} = require('./validation')

router.post( '/register', async ( req, res ) =>
{
    //  Validate data before making user
    const {error} = registerValidation(req.body)
    if ( error ) return res.status( 400 ).send( error.details[0].message )

    // check for existing user
    const emailExist = await User.findOne( { email: req.body.email } )
    if ( emailExist ) return res.status( 400 ).send( 'Email already exists' )

    //  password encryption
    // const

    //  create new user
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

module.exports = router
