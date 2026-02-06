import { v4 as uuidv4 } from 'uuid';
let users =[]

export const getUsers =  (req, res) => {
  console.log(users);
  res.send(users);
}


export const createUser = (req, res) => {
  const newUser = req.body; // this is the new user data sent in the request body
  users.push({...newUser , id: uuidv4()}); // add the new user to the users array
  res.send(`${newUser.firstName} added successfully`);

}


export const deleteUser = (req,res)=>
  // : id is a route parameter, it will capture the value after /users/ in the URL and make it available in req.params.id
{
  const {id} = req.params;
  //  destructuring the id from the request parameters, so we can use it to identify which user to delete

  // params = localhost:5000/users/ ke bad jo bhi aayega wo params me ayega
  const filteredUsers = users.filter((users)=> users.id !== id);
  users = filteredUsers;
  res.send(`User with id ${id} deleted successfully`);
}

export const updateUser = (req,res)=>{

    const {id} = req.params;
    
    const {firstName , lastName , age} = req.body;
    const userToBeUpdated = users.find((user)=> user.id ===id);
    
    if(firstName) userToBeUpdated.firstName = firstName;
    if(lastName) userToBeUpdated.lastName = lastName;
    if(age) userToBeUpdated.age = age;


    res.send(`User with id ${id} updated successfully`);
   
}