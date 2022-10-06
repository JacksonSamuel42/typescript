import { NextFunction, Request, Response, Router } from "express";

interface RequestWithBody extends Request{
    body: {[key: string]: string | undefined}
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
    if(req.session && req.session.loggedIn){
        next()
        return
    }

    res.status(403)
    res.send('Not permitted')
}

const router = Router()

router.get("/login", (req: Request, res: Response) => {
    res.render('login')
})

router.post("/login", (req: RequestWithBody, res: Response) => {
    const {email, password} = req.body

    if(email && password && email === 'hi@hi.com' && password === "password"){
        req.session = {loggedIn: true}
        res.redirect('/')
    }else{
        res.send('Invalid email or password')
    }
})

router.get('/', (req: Request, res: Response) => {
    const loggedIn = req.session && req.session.loggedIn

    if(loggedIn){
        res.render('home', {logged: loggedIn})
    }else{
        res.render('home', {logged: loggedIn})
    }
})

router.get('/logout', (req: Request, res: Response) => {
    req.session = undefined;
    res.redirect('/')
})

router.get('/protected', requireAuth, (req: Request, res: Response) => {
    res.send('Welcome to protected route, logged in user')
})

export {router}
