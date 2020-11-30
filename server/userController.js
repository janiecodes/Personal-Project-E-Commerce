const bcrypt = require('bcrypt');

module.exports = {
    registerUser: async (req, res) => {
        const db = req.app.get('db')
        const {first_name, last_name, country, birthday, email, password, phone_number } = req.body
        try {
            const [foundUser] = await db.users.get_user(email)
            if(foundUser){
                res.status(401).send('User already exists')
            }else{
                const salt = bcrypt.genSaltSync(10)
                const hash = bcrypt.hashSync(password, salt)
                const [newUser] = await db.users.register_user([first_name, last_name, country, birthday, email, hash, phone_number ])
                req.session.user = newUser
                res.status(200).send(req.session.user)
            }
        }catch(err){
            console.log('Database error on register function', err)
        }
    },

    loginUser: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
    
        try {
            const [foundUser] = await db.users.get_user(email)

            if(foundUser){
                const comparePassword = foundUser.password
                const authenticated = bcrypt.compareSync(password, comparePassword)
                
                if(authenticated){
                    delete foundUser.password 
                    req.session.user = foundUser
                    res.status(200).send(req.session.user)
                }else{
                    res.status(401).send('Email or password incorrect')
                }
            }else{
                res.status(401).send('Email or password incorrect')
            }
        }catch(err){
            console.log('Database error on login function', err)
        }
    },

    logoutUser: (req, res) => {
        req.session.destroy();
        res.sendStatus(200)
    },

    getUser: (req, res) => {
        res.status(200).send(req.session.user)
    },










}