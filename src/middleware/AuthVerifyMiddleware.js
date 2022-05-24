var jwt = require('jsonwebtoken');
module.exports=(req,res,next)=>{
  let Token=req.headers['token-key'];
  jwt.verify(Token,"SecretKey123456789", function (err,decoded){
   if(err){
    res.status(401).json({status:"unauthorized"})
   }else{
    //  let username=decoded['data']['username'];
    //  req.headers.username=username;
     next();
   }
  })
  // if (
  //   req.headers.authorization &&
  //   req.headers.authorization.startsWith("Bearer")
  // )
  // try {
  //   token = req.headers.authorization.split(" ")[1];
  //   jwt.verify(token, "SecretKey123456789", (err, user) => {
  //     if (err) {
  //       return res.status(403).json("Token is not valid!");
  //     }  
  //     req.user = user;
  //     next();
  //   });
  // }catch{
  //   return res.status(403).json("Token is not valid!");
  // }

  }

