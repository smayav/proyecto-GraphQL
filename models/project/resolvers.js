import { ProjectModel } from "./project.js";

const resolversProject = {
    Query:{
        
        Proyectos: 

        async (parent, args) =>{
            const Proyectos = await ProjectModel.find();

        return Proyectos;
        },
    },

    Mutation: {
        

        crearProyecto: async(parent, args) => {
            const proyectoCreado = await ProjectModel.create({
                nombre: args.nombre,
                presupuesto: args.presupuesto,
                fechaInicio: args.fechaInicio,
                fechaFin: args.fechaFin,
                estado: args.estado,
                fase: args.fase,
                lider: args.lider,
                objetivos: args.objetivos,
            })

            return proyectoCreado;
        }
    },

    

};

export {resolversProject};