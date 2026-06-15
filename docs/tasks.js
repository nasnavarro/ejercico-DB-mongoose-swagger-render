module.exports = {
    paths: {
        "/create": {
            post: {
                summary: "Crear una nueva tarea",
                tags: ["Tasks"],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                required: ["title"],
                                properties: {
                                    title: {
                                        type: "string",
                                        description: "Título de la tarea"
                                    },
                                    description: {
                                        type: "string",
                                        description: "Descripción de la tarea"
                                    }
                                }
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Tarea creada correctamente",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Task"
                                }
                            }
                        }
                    },
                    500: { description: "Error al crear la tarea" }
                }
            }
        },
        "/": {
            get: {
                summary: "Obtener todas las tareas",
                tags: ["Tasks"],
                responses: {
                    200: {
                        description: "Lista de tareas",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Task" }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/id/{_id}": {
            get: {
                summary: "Obtener una tarea por ID",
                tags: ["Tasks"],
                parameters: [
                    {
                        in: "path",
                        name: "_id",
                        required: true,
                        schema: { type: "string" },
                        description: "ID de la tarea (MongoDB ObjectId)"
                    }
                ],
                responses: {
                    200: {
                        description: "Tarea encontrada",
                        content: {
                            "application/json": {
                                schema: { $ref: "#/components/schemas/Task" }
                            }
                        }
                    },
                    500: { description: "Error al obtener la tarea" }
                }
            },
            put: {
                summary: "Actualizar una tarea",
                tags: ["Tasks"],
                parameters: [
                    {
                        in: "path",
                        name: "_id",
                        required: true,
                        schema: { type: "string" },
                        description: "ID de la tarea (MongoDB ObjectId)"
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    title: { type: "string" },
                                    description: { type: "string" },
                                    completed: { type: "boolean" }
                                }
                            }
                        }
                    }
                },
                responses: {
                    200: { description: "Tarea actualizada correctamente" },
                    500: { description: "Error al actualizar la tarea" }
                }
            },
            delete: {
                summary: "Eliminar una tarea",
                tags: ["Tasks"],
                parameters: [
                    {
                        in: "path",
                        name: "_id",
                        required: true,
                        schema: { type: "string" },
                        description: "ID de la tarea (MongoDB ObjectId)"
                    }
                ],
                responses: {
                    200: { description: "Tarea eliminada correctamente" },
                    500: { description: "Error al eliminar la tarea" }
                }
            }
        },
        "/markAsCompleted/{_id}": {
            put: {
                summary: "Marcar una tarea como completada",
                tags: ["Tasks"],
                parameters: [
                    {
                        in: "path",
                        name: "_id",
                        required: true,
                        schema: { type: "string" },
                        description: "ID de la tarea (MongoDB ObjectId)"
                    }
                ],
                responses: {
                    200: { description: "Tarea marcada como completada" },
                    500: { description: "Error al actualizar la tarea" }
                }
            }
        }
    }
}
