import {Request, Response} from "firebase-functions";

// Import Db

export default async (req: Request, res: Response) => {
    try {
        // Get Id from request

        // Get db
        // Get collection userDetails
        // Get document from collection by Id

        // Get userDetail from requestDocument

        // Convert format (db->object)

        // Add userDetail object
        return res
            .status(200)
            .send({
                status: 'Got Glory',
                userDetails: 'None Found'
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
        // Get Id from request
        const id = req.params.id;

        // Get db
        // Get collection userDetails
        // Get document from collection by Id
        const reqDoc = db()
            .collection('userDetails')
            .doc(id);

        // Get userDetail from requestDocument
        const userDetail = await reqDoc.get();

        // Convert format (db->object)
        const userDetailData = userDetail.data();

        // Add userDetail object
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
