import { AdvanceModel } from "./advance.js"

const resolversAdvance = {
    Query: {
        Advances: async (parent, args)=>{
            const advances = await AdvanceModel.find().populate('proyecto')
            .populate('creadoPor');
            return advances;
        },

        filtrarAdvance:async (parent, args)=>{
            const avanceFiltrado = AdvanceModel.find({proyectos: args.idproyecto}).populate('proyecto').populate('creado´por');
            return avanceFiltrado;
        },
    },

    Mutation: {
        crearAdvance: async (parent, args)=> {
            const advanceCreado = AdvanceModel.create({
                fechaAvance: args.fechaAvance,
                descripcion: args.descripcion,
                observaciones: args.observaciones,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor,
            });
            return advanceCreado;
        },

        

    },
}

export {resolversAdvance};