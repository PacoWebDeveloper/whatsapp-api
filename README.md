Crear conversaciones
Leer las conversaciones de las cuales son miembros
Crear grupos de conversaciones
Enviar mensajes
Eliminar mensajes

- Confirmacion de lectura del mensaje
- Manejar fotos de perfil
- Reenviar un mensaje
- Crear links para invitar gente a un grupo

![Database Diagram](https://camo.githubusercontent.com/bd22a9f87cb555024380db39af8d8a4bd517d9f8af6ea821a82b95d80db5fbc9/68747470733a2f2f692e696d6775722e636f6d2f494868745776322e706e67)


Ejemplo de respuesta correcta

```JavaScript
{
    error: false,
    status: 201,
    message: 'User created successffully',
    data: {
        id: 5,
        firstName: 'Sahid',
        ...
    }
}
```