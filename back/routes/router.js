const express =require("express")
const passport = require("passport")
const router = express.Router()
const {User} = require("../models/models")
const {Favorites} = require("../models/models")

//-----------------------USER------//
router.post("/register",(req,res)=>{
    User.create(req.body).then(user =>{
        res.status(201).json(user)
    }).catch(err => console.log(err))
})
router.post("/login",passport.authenticate("local"),(req,res)=>{
    console.log("BIENVENIDO")
    res.send(req.user)
})
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

router.get("/me",(req,res)=>{
    req.user? res.send(req.user):res.sendStatus(401)
})


//-----------------------FAVORITES--------------------//
 router.post("/favorites",(req,res)=>{
   Favorites.create({title:req.body.title,poster:req.body.poster})
   .then(favorites => {
       const user = req.body.user 
       favorites.setUser(user)
   }).then(()=> res.sendStatus(200))
}) 

//----------------MOSTRAR TODOS LOS FAVORITOS
router.get("/favorites/:id",(req,res)=>{
    Favorites.findAll({where:{userId: req.params.id}}).then(favorites => res.status(200).send(favorites))
})




//---------------eliminar una peli de favoritos------//
router.delete("/favorites/:id",(req,res)=>{
    Favorites.destroy({where:{id : req.params.id}}).then(()=> res.sendStatus(204))
})
module.exports = router

