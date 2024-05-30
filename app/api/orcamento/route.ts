import next, { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
import axios from "axios";


export async function POST(request: NextRequest) {
    try {

        // get the json data from the request
        const data = await request.json();
        console.log("Data received:", data);

        // Send the data as JSON using axios
        const response = await axios.post("https://agencia.iddas.com.br/orcamento/solicitacao/nova/ZTJrSGlaZzZEcTFSVjQ1d2lDK0dOQT09", data);
        console.log("Response received:", response.data);

        // Return the response data as JSON
        return Response.json(response.data);
        
    } catch (error) {
        // Handle any errors that occur during the request
        console.error("Error occurred during search:");
        return Response.json({
            status: "error",
        });
    }
}
