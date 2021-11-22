import { gql } from 'apollo-server-express';

const typesEnums = gql`
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
    `;
    export {typesEnums};