import {Request, Response} from "firebase-functions";
import db from "../../db/db";

export default (req: Request, res: Response) => {
    (async () => {
        try {
            const query = db()
                .collection('userDetails')
            const data: UserDetail[] = [];
            await query
                .get()
                .then((userDetailsColl => {
                    const docs = userDetailsColl.docs;
                    docs.map((doc) => {
                        const userDetail: UserDetail = {
                            id: doc.data().id,
                            name: doc.data().name,
                            mobile: doc.data().mobile,
                        }
                        data.push(userDetail);
                    })
                }))
            return res
                .status(200)
                .send({
                    status: 'Got Glories',
                    data
                })
        } catch(error) {
            console.error(error);
            return res.status(500).send('Failed to Get Glories');
        }
    })();
}
