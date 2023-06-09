const express = require ('express');
const app = express();

//config
app.set('view engine' , 'pug');
app.set('views' , './views');
app.use(express.static('public'));
app.use(express.urlencoded({extendesd:true}));

//router
app.get('/', (req, res) => {
    return res.render('landingPage');
});

app.get('/login', (req, res) => {
    return res.render('login');
});

app.post('/login', (req, res) =>{
    const { email, password } = req.body;
    console.log(email, password);
    return res.redirect('/');
})

app.get('/register', (req, res) => {
    return res.render('register');
});

app.post('/register', (req, res) => {
    const { email, password, dateOfBirth, name } = req.body;
    console.log(email, password, dateOfBirth, name);
    return res.redirect('/'); 
})
app.get('*' ,(req,res)=>{
    return res.render('error');
});


//start
const PORT = 3000;
app.listen(PORT,() =>{
    console.log(`server running on port ${PORT}`);
});