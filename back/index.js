const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/router")
const app = express();
const cookieParser=require("cookie-parser")
const sessions = require("express-session")
const localStrategy = require("passport-local").Strategy
const passport = require("passport")
const User = require("./models/User")
const db = require("./db")
app.use(morgan("dev"));
app.use(express.static("./public"))
app.use(express.json())
app.use(express.urlencoded({extended:true})) 
app.use(cookieParser())
app.use(sessions({secret:"omdb",resave:true,saveUninitialized:true}))
app.use(passport.initialize())
app.use(passport.session())


passport.use(new localStrategy(
 { usernameField:"email",
  passwordField : "password"},
    function(email,password,done){
      User.findOne({where:{email}}).then((user)=>{
        if(!user){
          //email incorrecto
          return done(null,false)
        }
        user.hash(password,user.salt).then((hash)=>{
          if(hash !== user.password){
            return done(null,false)
          }
          return done(null,user)
        })
      }).catch(done)
    }))

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

app.use("/api", routes); 

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/public/' + 'index.html')
})

db.sync({force:false}).then(()=>{
  app.listen(4500,()=>{
    console.log("Listening on port 4500")
  })
})
