import express, { Request, Response } from "express";
const router = express.Router();
import { user } from "../../entity/user"
import { phonebook } from "../../entity/phonebook"
import {myDb} from "../../index";


router.get("/", async (req: Request, res: Response) => {
    // @ts-ignore
    const id = req.body.user;
    let finduser =  await myDb.getRepository(user).findOne({
      where: {
        id: id
      }
    })

   let find =  await myDb.getRepository(phonebook).find({
    where: {
      userId: finduser?.id
    }
  })
  if(find){
      res.send(find)
    }else{
      res.send({message: "No User Exsist"});
    }
  }
);

module.exports = router;


