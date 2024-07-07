import User from '../modal/modal.js';

export const log = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Authenticate user and get token
        const token = await User.findByCredentials(email, password);

        if (!token) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        
        //console.log(token);
        // Set token in a cookie
        res.cookie('cook',token, { httpOnly: true, maxAge: 3600000,expires:new Date(Date.now()+25892000000) }).json({message:"Welcome Back"});

    } catch (err) {
        // Log error and respond with a 500 status code
        res.status(500).json({ error: 'Internal server error' });
    }
};

