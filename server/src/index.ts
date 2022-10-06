import express from "express"
import cookieSession from "cookie-session"
import path from "path"
import {create} from "express-handlebars"
import { router } from "./routes/loginRoutes"
import { AppRouter } from "./AppRouter"
import './controllers/LoginController'

const app = express()
const port = 3000

const hbs = create({
    extname: '.hbs'
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieSession({keys: ['fskfsad']}))

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '../src/views'));

app.use(router)
app.use(AppRouter.getInstance())

app.listen(port, () => console.log(`listening on port ${port}`))