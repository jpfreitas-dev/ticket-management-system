export async function jsonHandler(request, response){
  const buffers = [];

  // Lê os dados do corpo da requisição
  for await (const chunk of request){
    buffers.push(chunk);
  }

  // Concatena os buffers e converte para string, depois tenta parsear como JSON
  try {
    request.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    request.body = null;
  }

  // Define o header de resposta para JSON
  response.setHeader("Content-Type", "application/json");

}