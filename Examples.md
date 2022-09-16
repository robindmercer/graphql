Create Users
``` javascript
mutation{
  createUser(input:{
    firstname:"Lisa"
    lastname:"Mercer"
    age:53
  }){ 
    _id
    firstname
    age
  }
}
```
List Users
``` javascript
{
  Users{
    _id
    firstname
    lastname
    age
  }
}
```
Update User 
``` javascript
mutation{
  updateUser(
    _id:"6324c8aaea7f61f1fe4e8097",
    input:{
    firstname:"Lisa"
    lastname:"Leanes"
    age:52
    }
  ) { 
    _id
    firstname
    lastname
    age
  }
}
```
Delete User 
``` javascript
mutation {
  deleteUser(_id:"6324c89aea7f61f1fe4e8095"){
    _id
    firstname
  }
}
```