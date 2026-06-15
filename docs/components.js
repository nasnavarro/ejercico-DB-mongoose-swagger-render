module.exports = {
    components:{
        schemas:{
            Task:{
                type:"object",
                properties:{
                    _id:{
                        type:"string",
                        description:"ID de la tarea"
                    },
                    title:{
                        type:"string",
                        description:"Título de la tarea"
                    },
                    description:{
                        type:"string",
                        description:"Descripción de la tarea"
                    },
                    completed:{
                        type:"boolean",
                        description:"Indica si la tarea está completada"
                    }
                }
            }
        }
    }
}