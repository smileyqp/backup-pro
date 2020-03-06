import request from './request'

export default async function getCarlist({callback}){
    try{
        const data = await request('/cars_status',{
            method:'GET'
        })
        if(callback){callback(data)}
    }catch(err){
        console.log(err)
    }

}