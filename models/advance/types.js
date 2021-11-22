import { gql } from 'apollo-server-express';

const typesAdvance = gql`

type Advance {
    _id: ID!
    fechaAvance: Date!
    descripcion: String!
    observaciones: [String]
    proyecto: Proyecto!
    creadoPor: Usuario!
}

type Query{
    Advances:[Advance]
    filtrarAdvance(idProyecto: String!): [Advance] 
}

type Mutation{
    crearAdvance(
        fechaAvance: Date!
        descripcion: String!
        proyecto: String!
        creadoPor: String!
    ): Advance
}
`;

export {typesAdvance};