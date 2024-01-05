export const handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify('Escrito pelo VSCODE'),
  };
  return response;
};
