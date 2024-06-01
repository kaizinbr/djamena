import { type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        // get the json data from the request
        const data = await request.formData();
        console.log("Data received:", data);

        // envia a requisição para o site da iddas
        const response = await fetch(
            "https://agencia.iddas.com.br/orcamento/solicitacao/nova/NzBac0ZlY1p0WG5wWkJHM2xINDRsQT09",
            {
                method: "POST",
                body: data,
            }
        ).then((res) => res.json());
        // console.log(response);
        return Response.json(response); // return the response from the iddas website, com sucesso: "S" ou "N"
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
