import bodyParser from "body-parser";
import express, { Application, Request, Response } from "express";

const app: Application = express();
const port = 5000;

app.use(bodyParser.json());

app.get(
    "/",
    async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
            success: true,
        });
    }
);

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error) {
    console.error(`Error occured: ${(error as Error).message}`);
}

