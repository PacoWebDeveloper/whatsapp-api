//HandleResponses es una funcion qeu recibe como parametros las respuestas del servidor y genera una nueva respuesta 
//con un formato establecido por nosotros
// Ejemplo de respuesta generada:
// {
//     error: false,
//     status: 201,
//     message: 'User created successfully',
//     data: {
//         id: 5,
//         fisrtName: 'Paco',
//         ...
//     }
// }

const success = ({status, data, message, res}) => {
    res.status(status).json({
        error: false,
        status: 201,
        message: message,
        data: data
    })
}

const error = ({status, data, mesagge, res, fields}) => {
    res.status(400).json({
        error: true,
        status: status,
        message: message,
        fields: fields
    })
}

// Error de conexión
// Not found
// Errores de sintaxis
// Errores al hacer las peticiones creacionales

/* const getAllProducts = (req, res) => {
    findAllProducts()
        .then(data => {
            if (data)
                success({
                    res, 
                    data, 
                    status: 200, 
                    message: `Product with id ${data.id}`
                })
            else
                error({
                    res, 
                    data, 
                    status: 404, 
                    message: 'Product not found'
                })
        })
        .catch(err => {
            error({
                res,
                data: err,
                message: 'Error was produced showing all products'
            })
        })
} */

module.exports = {success, error}