import {Request, Response} from "firebase-functions";
import db from "../../db/db";

export default (req: Request, res: Response) => {
    (async () => {
        try {
            const id = req.params.id;
            const reqDoc = db()
                .collection('userDetails')
                .doc(id);
            const userDetail = await reqDoc.get();
            const data = userDetail.data();
            return res
                .status(200)
                .send({
                    status: 'Got Glory',
                    data
                })
        } catch(error) {
            console.error(error);
            return res.status(500).send('Failed to Get Glory');
        }
    })();
}
