import { movieDataSave } from "../services/dataService";
import {Request,Response} from 'express'

export const favoriteList=async (req:Request,res:Response)=> {
    const {email,movieTitle,movieImage,genre,overview,dataRelease,id}=req.body;

    if(email && movieTitle && movieImage && movieImage && genre && overview && dataRelease && id) {
        await movieDataSave(res,email,movieTitle,movieImage,overview,genre,id,dataRelease);
    }
    else {
        res.json({message:"Erro inesperado"})
    }

}