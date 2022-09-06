import {Request, Response} from "firebase-functions";
import db from "../../db/db";

export default (req: Request, res: Response) => {
    (async () => {
        try {
            const now = Date.now();
            await db()
                .collection('userDetails')
                .doc(`/${now}`)
                .create({
                    id: now,
                    name: req.body.name,
                    mobile: req.body.mobile,
                });
            return res
                .status(200)
                .send({
                    status: 'Created Glory',
                    msg: "Data Saved"
                })
        } catch(error) {
            console.error(error);
            return res.status(500).send('Failed to Create Glory');
        }
    })();
}
