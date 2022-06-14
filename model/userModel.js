const database = require("../utils/database")

const UserModel = {

    async CreateUser(userData){
       
        let query=`INSERT INTO users(user_id,user_name) values ('${userData.user_id}','${userData.user_name}')`;
        return database.promise().query(query)
    },

async GetAllUser(){
    return query = await database.promise().query(`select * from users`);
},
async getUser(data){

    return query = await database.promise().query(`select * from users u where u.user_id = ${data.user_id}`);

},
async updateUser(data){

    return query = await database.promise().query(`update users set user_name = '${data.user_name}' where user_id = ${data.user_id}`);

}
}

module.exports=UserModel;