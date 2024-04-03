var express = require('express');
const cookieParser = require('cookie-parser');
const regi_login = require('./routers/regi-login-route');
const dynamic = require('./routers/dynamic-route');
const js_task = require('./routers/js-task-route');
const css_task = require('./routers/css-tasks-route');
const fetch_api = require('./routers/fetch-api-route');
const pagination = require('./routers/pagination-route');
const searching = require('./routers/searching-route');
const studentdata = require('./routers/student-data-route');
const jobwithdata = require('./routers/job-data-route');


var app = express();
app.use(cookieParser());
app.use(express.static('views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use('/', regi_login)
app.use('/', dynamic)
app.use('/', js_task)
app.use('/', css_task)
app.use('/', fetch_api)
app.use('/', pagination)
app.use('/', searching)
app.use('/', studentdata)
app.use('/',jobwithdata)

app.listen(8001);
console.log('server is running on port 8001..');