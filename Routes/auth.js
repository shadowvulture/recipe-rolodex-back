const router = require( 'express' ).Router()
const User = require( '../db/Models/User' )
const { registerValidation, loginValidation } = require( './validation' )
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//  Registration
router.post( '/register', async ( req, res ) =>
{
    //  Validate data before making user
    const {error} = registerValidation(req.body)
    if ( error ) return res.status( 400 ).send( error.details[0].message ).send(console.log('registration validation'))

    // check for existing user
    const emailExist = await User.findOne( { email: req.body.email } )
    if ( emailExist ) return res.status( 400 ).send( 'Email already exists' )

    //  password encryption
    const salt = await bcrypt.genSalt( 10 )
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
        res.send( ( { savedUser } ) )
        console.log(savedUser)
        res.send( { user: user._id } )
            .then( newUser =>
            {   console.log(newUser)
                const token = jwt.sign({ _id: newUser._id }, process.env.TOKEN_SECRET )
                res.header( 'auth-token', token ).send( token )
                console.log(token)
            })
    } catch ( err ) {
        res.status(400).send(err)
    }
} )

//  Login
router.post( '/login', async ( req, res ) =>
{
    //  Validate data before making user
    const {error} = loginValidation(req.body)
    if ( error ) return res.status( 400 ).send( error.details[0].message )

    // check for password match
    const user = await User.findOne( { email: req.body.email } )
    if ( !user ) return res.status( 400 ).send( 'Email or password is wrong' )

    //  check if password is valid
    const validPass = await bcrypt.compare( req.body.password, user.password )
    if(!validPass) return res.status(400).send('Incorrect password.  Try a little more brute force?')
    // res.send(`Successful log in for ${user.name}`)

    //  create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET )
    res.header('auth-token', token).send(token)

} )



module.exports = router
