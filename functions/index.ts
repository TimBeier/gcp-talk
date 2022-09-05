import * as functions from "firebase-functions";

// Custom Imports
import admin from "firebase-admin";

import * as serviceAccount from "./serviceAccountKey.json";
admin.initializeApp({
    // @ts-ignore
    credential: admin.credential.cert(serviceAccount)
});
import cors from "cors";
import {Request, Response} from "firebase-functions";

// Main
import express from "express";

const app = express();
app.use(cors({origin: true}))

// Db
const db = admin.firestore();

// Routes
app.get('/', (req: Request, res: Response) => {
    return res.status(200).send('Glory!');
})

// Create User
app.post('/api/create', (req: Request, res: Response) => {
    (async () => {
        try {
            const now = Date.now();
            await db
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
})
// Get User
app.get('/api/get/:id', (req: Request, res: Response) => {
    (async () => {
        try {
            const id = req.params.id;
            const reqDoc = db
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
})

type UserDetail = {
    id: string;
    name: string;
    mobile: string;
}

// Get Users
app.get('/api/get/', (req: Request, res: Response) => {
    (async () => {
        try {
            const query = db
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
})

// export api to firebase cloud functions
exports.app = functions.region("europe-west3").https.onRequest(app);

