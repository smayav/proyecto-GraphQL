import { gql } from 'apollo-server-express';

const typesUser = gql`

    type Usuario {
        _id: ID!
        nombre: String!
        apellido: String!
        identificacion:String!
        correo:String!
        estado: Enum_EstadoUsuario
        rol: Enum_Rol!

    }

    type Query {
        Usuarios: [Usuario]
        Usuario(_id: String!):Usuario
        
    }


    type Mutation {
        crearUsuario(
            _id: ID!
            nombre: String!
            apellido: String!
            identificacion:String!
            correo:String!
            estado: Enum_EstadoUsuario
            rol: Enum_Rol!
        ):Usuario

        editarUsuario(
            _id: ID!
            nombre: String!
            apellido: String!
            identificacion:String!
            correo:String!
            estado: Enum_EstadoUsuario
            rol: Enum_Rol!
        ):Usuario

        eliminarUsuario(
            _id: String!
        ): Usuario

       

    }    
    `;

    export {typesUser};