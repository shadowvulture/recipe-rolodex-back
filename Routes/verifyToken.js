const jwt = require( 'jsonwebtoken' )

module.exports = function( req, res, next )
{
    const token = req.header( 'auth-token' )
    if ( !token ) return res.status( 401 ).send( 'You dont have a token.  Access Denied' )

    try {
        const verified = jwt.verify( token, process.env.Token_SECRET )
        req.user = verified

    } catch ( err ) {
        res.status(400).send('invalid token')
    }


}

module.exports
