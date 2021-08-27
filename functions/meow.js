exports.handler = async (event, context) => {
    console.log({event, context})
    const text= event.queryStringParameters.text
    return {
        statusCode: 200,
        body: text,
    }
}
