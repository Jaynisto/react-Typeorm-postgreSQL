import express from 'express';
import { AppDataSource } from "./data-source"
import { User } from "./entity/Users"
import bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.json());
  
app.get('/api', (req,res)=>{
  res.json({"message": "to my Express!"})
})



AppDataSource.initialize().then(async () => {
  console.log("Inserting a new user into the database...")
  app.post('/api/user-data', async (req,res)=>{
    const {
      firstName,
      lastName,
      userEmail,
      userGender,
      enjoyedLearning
    }
    =req.body;

    const user = new User()
    user.firstName = firstName,
    user.lastName = lastName;
    user.userEmail = userEmail;
    user.userGender= userGender;
    user.enjoyedLearning = enjoyedLearning;
    await AppDataSource.manager.save(user)
    res.json({"message":"form submitted"})
  })
  
  // console.log("Saved a new user with id: " + user.id)

  // console.log("Loading users from the database...")
  const users = await AppDataSource.manager.find(User)
  console.log("Loaded users: ", users)
  
  const PORT = process.env.PORT || 3001;
  
  app.listen(PORT, () => {
      console.log("App Started On Port " + PORT);
  });

}).catch(error => console.log(error))
