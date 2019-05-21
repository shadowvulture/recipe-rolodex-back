const router = require( 'express' ).Router()
const User = require( '../db/Models/User' )
const { registerValidation } = require( './validation' )
const bcrypt = require('bcryptjs')

router.post( '/register', async ( req, res ) =>
{
    //  Validate data before making user
    const {error} = registerValidation(req.body)
    if ( error ) return res.status( 400 ).send( error.details[0].message )

    // check for existing user
    const emailExist = await User.findOne( { email: req.body.email } )
    if ( emailExist ) return res.status( 400 ).send( 'Email already exists' )

    //  password encryption
    const salt = await bcrypt.gentSalt( 10 )
    // to create the hash, salted
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    //  create new user
    const user = new User ({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    } )
    try {
        const savedUser = await user.save()
        res.send(savedUser)
    } catch ( err ) {
        res.status(400).send(err)
    }
})

module.exports = router
