// Create

import {UPLOAD_FOLDER} from "../config/config.js";
import {moveFile} from "../utility/moveFile.js";

export const demo1 = async (req, res) =>{

    // params
    let name = req.params.name;
    let age = req.params.age;
    let city = req.params.city;


    // query string
    let country = req.query.country;
    let language = req.query.language;


    return res.json({message:language});

}


export const demo2 = async (req,res) =>{

    //let reqBody = req.body;
    let reqBody = req.body['firstname'];

    return res.json({message:reqBody });

}


export const demo3 = async (req,res) => {

    let reqBody = req.body;

    return res.json({message: reqBody});
}

export const demo4 = async (req,res) => {

    let myFile = req.files?.myFile;   // ['myFile']
    let myFilePath = UPLOAD_FOLDER(myFile.name);
    await moveFile(myFile,myFilePath);

    return res.json({message:"Success moved file"});

}

export const demo5 = async (req,res) =>{
    let reqHeaders = req.headers;
    return res.json({message:reqHeaders});
}