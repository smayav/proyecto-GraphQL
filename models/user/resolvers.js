import { UserModel } from "./user.js";


const resolversUser = {
    Query:{
        Usuarios: async (parent, args) =>{
            const Usuarios = await UserModel.find();

        return Usuarios;
        },

        
    },

    Mutation: {
        crearUsuario: async (parent, args)=>{
            const usuarioCreado = await UserModel.create({
            nombre: args.nombre,
            apellido: args.apellido,
            identificacion: args.identificacion,
            correo: args.correo,
            rol: args.rol,
            });

            if(Object.keys(args).includes('estado')){
                usuarioCreado.estado = args.estado;
            }
            return usuarioCreado;
        },

        editarUsuario: async (parent, args)=>{
            const usuarioEditado = await UserModel.findByIdAndUpdate(args._id,{
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol,
                estado: args.estado,
                });
        },

        eliminarUsuario: async(parent, args) => {
            if(Object.keys(args).includes('_id')){
                const usuarioEliminado = await UserModel.findOneAndDelete({_id: args._id});
            return usuarioEliminado;
            }else if (Object.keys(args).includes('correo')){
                const usuarioEliminado = await UserModel.findOneAndDelete({correo: args.correo});
            return usuarioEliminado;
            }
            
        },

        
    },

    

};

export {resolversUser};