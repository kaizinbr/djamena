import next, { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
    try {
        // get the json data from the request
        const data = await request.formData();
        console.log("Data received:", data);

        // Send the data as JSON using axios
        // const response = await axios.post("https://agencia.iddas.com.br/orcamento/solicitacao/nova/NzBac0ZlY1p0WG5wWkJHM2xINDRsQT09", data);

        const response = await fetch(
            "https://agencia.iddas.com.br/orcamento/solicitacao/nova/NzBac0ZlY1p0WG5wWkJHM2xINDRsQT09",
            {
                method: "POST",
                body: data,
            }
        ).then((res) => res.json());
        console.log(response);
        // Return the response data as JSON
        return Response.json(response);
    } catch (error) {
        // Handle any errors that occur during the request
        console.error("Error occurred during search:");
        return Response.json({
            status: "error",
            msg: "Erro ao realizar solicitação de orçamento. Tente novamente mais tarde.",
            sucesso: "N",
            error: error,
        });
    }
}
