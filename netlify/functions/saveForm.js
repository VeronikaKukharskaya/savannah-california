exports.handler = async (event, context) => {
  const data = JSON.parse(event.body);

  // Пример: сохранить в MongoDB или отправить на почту
  console.log("New form data:", data);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Form received successfully" }),
  };
};
