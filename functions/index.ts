// Firebase
import * as functions from "firebase-functions";
import admin from "firebase-admin";
import * as serviceAccount from "./serviceAccountKey.json";

import {Request, Response} from "firebase-functions";

// Http
import express from "express";
import cors from "cors";

// Routes
import getUserDetails from "./src/request/userDetail/getUserDetails";
import createUserDetail from "./src/request/userDetail/createUserDetail";
// ToDo Import getUserDetail

// Setup Firebase
admin.initializeApp({
    // @ts-ignore
    credential: admin.credential.cert(serviceAccount)
});

// Setup Http
const app = express();
app.use(cors({origin: true}))

// Setup Routes
app.get('/', (req: Request, res: Response) => {
    return res.status(200).send('Glory!');
})
app.post('/api/create', createUserDetail);
app.get('/api/get/', getUserDetails);

// ToDo Get User by Id


// Export to Cloud Functions
exports.app = functions.region("europe-west3").https.onRequest(app);











/* Live Coding Notes
    import getUserDetail from "./src/request/userDetail/getUserDetail";
    app.get('/api/get/:id', getUserDetail);
 */
