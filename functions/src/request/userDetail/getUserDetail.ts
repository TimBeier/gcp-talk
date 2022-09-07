import {Request, Response} from "firebase-functions";

// ToDo Import Db

export default async (req: Request, res: Response) => {
    try {
        // ToDo Get Id from request

        // ToDo Get db
        // ToDo Get collection userDetails
        // ToDo Get document from collection by Id

        // ToDo Get userDetail from awaited requestDocument

        // ToDo Convert format (db->object)

        // ToDo Throw Error if null

        // ToDo Add userDetail object
        return res
            .status(200)
            .send({
                status: 'Got Glory',
                userDetailData: null
            })
    } catch (error) {
        console.error(error);
        return res.status(500).send('Failed to Get Glory');
    }
};



















/* Live Coding Notes
import db from "../../db/db";
export default async (req: Request, res: Response) => {
    try {
        // ToDo Get Id from request
        const id = req.params.id;

        // ToDo Get db
        // ToDo Get collection userDetails
        // ToDo Get document from collection by Id
        const reqDoc = db()
            .collection('userDetails')
            .doc(id);

        // ToDo Get userDetail from awaited requestDocument
        const userDetail = await reqDoc.get();

        // ToDo Convert format (db->object)
        const userDetailData = userDetail.data();

        // ToDo Throw Error if null
        if(!userDetailData){
            throw new Error('ResourceNotFound');
        }

        // ToDo Add userDetail object
        return res
            .status(200)
            .send({
                status: 'Got Glory',
                userDetailData
            })
    } catch (error) {
        console.error(error);
        return res.status(500).send('Failed to Get Glory');
    }
};

*/
