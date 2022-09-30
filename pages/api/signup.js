import User from "../../models/User"
import connectDb from "../../middleware/mongoose"


const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log(req.body)
        let u= new User(req.body)
        await u.save()
          
     
        res.status(200).json({ Success:"success" })
    }
    else {
        res.status(400).json({ error: "this method is not allowed" })
    }
}
export default connectDb(handler);