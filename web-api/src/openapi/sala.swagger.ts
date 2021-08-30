let sala = {
    id: {
        type: 'number',
        description: 'Código da sala'
    },
    nome: {
        type: 'string',
        description: 'Nome da sala'
    }
}
export const findAll = {
    tags: ['Sala'],
    description: "Returna lista de todas as salas ",
    operationId: 'findAll',
    security: [
        {
            ApiKeyAuth: {
                type: 'apiKey',
                in: 'header',
                name: 'x-access-token'
              }
        }
    ],
    responses: {
        "200": {          
            description: "Uma lista de salas.",
            content: {
                "application/json": {
                    schema: {
                        type: "array",
                        items: sala
                    }
                }
            }
        }
    }
} 