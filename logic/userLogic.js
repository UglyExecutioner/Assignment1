const userModel = require('../models/user');
class UserController {

    constructor(){}

     createUser(req) {
        return new Promise(async(resolve,reject)=>{
            try{
                const postdata = req.body;
                const create = await userModel.create(postdata);
                let resp ={};
                resp.result = create;
                resolve(resp);
            }catch(e){
                console.log("Error at create User",e);
                let resp ={};
                resp.error = e;
                resolve(resp);
            }
        })
        
    }

    updateUser(req){
        return new Promise(async(resolve,reject)=>{
            try{
                const postdata = req.body;
                const update = await userModel.updateOne(postdata);
                let resp = {};
                resp.result = update;
                resolve(resp);
            }catch(e){
                console.log("Error at update User",e);
                let resp ={};
                resp.error = e;
                resolve(resp);
            }
        })
    }
    deleteUser(req){
        return new Promise(async(resolve,reject)=>{
            try{
                const postdata = req.body;
                const deleteUser = await userModel.deleteOne(postdata);
                let resp = {};
                resp.result = deleteUser;
                resolve(resp);
            }catch(e){
                console.log("Error at delete User",e);
                let resp ={};
                resp.error = e;
                resolve(resp);
            }
        })
    }
    getAllUsers(req){
        return new Promise(async(resolve,reject)=>{
            try{
                //const postdata = req.body;
                const getUsers = await userModel.find({});
                let resp = {};
                resp.result = getUsers;
                resolve(resp);
            }catch(e){
                console.log("Error at getAll Users",e);
                let resp ={};
                resp.error = e;
                resolve(resp);
            }
        })
    }
    getAllUsersByDate(req){
        return new Promise(async(resolve,reject)=>{
            try{
                const postData = req.query;
                const getQuery = userModel.find({}).sort('createdAt');
                if(postData.pageSize && postData.currentPage){
                    getQuery
                    .skip(parseInt(postData.pageSize) *(parseInt(postData.currentPage) - 1))
                    .limit(parseInt(postData.pageSize))
                }
                const getUsers = await getQuery;
                let resp = {};
                resp.result = getUsers;
                resolve(resp);
            }catch(e){
                console.log("Error at getAll Users",e);
                let resp ={};
                resp.error = e;
                resolve(resp);
            }
        })
    }
    getAllUsersByDist(req){
        return new Promise(async(resolve,reject)=>{
            try{
                const postData = req.query;
                const longitude = parseFloat(postData.coordinates.split(",")[0].split("[")[1]);
                const latitude = parseFloat(postData.coordinates.split(",")[1].split("]")[0]);
                const distanceInKilometer = 10;
                const radius = distanceInKilometer / 6378.1;
                console.log(longitude,latitude)
                const getUsers = await userModel.find({
                    address:{
                        coordinates:{
                            $near :
                            {
                                 coordinates : [longitude,latitude]
                            }
                        }
                           
                     }
                });
                let resp = {};
                resp.result = getUsers;
                resolve(resp);
            }catch(e){
                console.log("Error at getAll Users by Dist",e);
                let resp ={};
                resp.error = e;
                resolve(resp);
            }
        })
    }
}
module.exports = UserController;