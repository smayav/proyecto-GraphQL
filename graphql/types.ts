import { gql } from 'apollo-server-express';

const typeDefs = gql`

    scalar Date

    enum Enum_EstadoUsuario{
        PENDIENTE
        AUTORIZADO
        NO_AUTORIZADO
    }

    enum Enum_Rol{
        ESTUDIANTE
        LIDER
        ADMINISTRADOR
    }

    enum Enum_EstadoProyecto{
        ACTIVO
        INACTIVO
    }

    enum Enum_FaseProyecto{
        INICIADO
        EN_DESARROLLO
        TERMINADO
        NULO
    }

    enum Enum_EstadoInscripcion{
        ACEPTADA
        RECHAZADA
        PENDIENTE
    }

    enum Enum_TipoObjetivo{
        GENERAL
        ESPECIFICO
    }

    type Usuario {
        _id: ID!
        nombre: String!
        apellido: String!
        identificacion:String!
        correo:String!
        estado: Enum_EstadoUsuario
        rol: Enum_Rol!

    }

    type Objetivo {
        _id: ID!
        descripcion: String!
        tipo:Enum_TipoObjetivo!
    }

    input crearObjetivo {
        _id: ID!
        descripcion: String!
        tipo:Enum_TipoObjetivo!
    }

    type Proyecto {
        _id: ID!
        nombre: String!
        presupuesto: Float!
        fechaInicio:Date!
        fechaFin:Date!
        estado: Enum_EstadoProyecto!
        fase: Enum_FaseProyecto!
        lider: Usuario!
        objetivos: [Objetivo]!

    }


    type Query {
        Usuarios: [Usuario]
        Usuario(_id: String!):Usuario
        Proyectos: [Proyecto]
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

        crearProyecto(
            _id: ID!
            nombre: String!
            presupuesto: Float!
            fechaInicio:Date!
            fechaFin:Date!
            estado: Enum_EstadoProyecto!
            fase: Enum_FaseProyecto!
            lider: String!
            objetivos: [crearObjetivo]!
        ): Proyecto

    }    
    `;

    export {typeDefs};