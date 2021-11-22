import dotenv from 'dotenv';
import { conectarBD } from "./db/db";
import { UserModel } from "./models/user/user.js";
import { ProjectModel } from "./models/project/project.js";
import { ObjectiveModel } from "./models/objective/objective.js";
import { InscriptionModel } from "./models/inscription/inscription.js";
import { AdvanceModel } from "./models/advance/advance.js";
import { Enum_EstadoInscripcion, Enum_EstadoProyecto, Enum_EstadoUsuario, Enum_Rol, Enum_TipoObjetivo, Enum_FaseProyecto } from "./models/enums/enums.js";
import { ObservationModel } from './models/observation/observation.js';

/** Permite usar variables de entorno, se definen en el archivo .env */
dotenv.config();

const crearRegistros = async () => {

    const usuario1 = await UserModel.create({
       correo: "saramaya1@gmail.com",
       identificacion: "0004",
       nombre: "Sara",
       apellido: "Maya",
       rol: Enum_Rol.ADMINISTRADOR,
       estado: Enum_EstadoUsuario.AUTORIZADO,
    });

    const usuario2 = await UserModel.create({
       correo: "saramaya2@gmail.com",
       identificacion: "0005",
       nombre: "Andrea",
       apellido: "Perez",
       rol: Enum_Rol.LIDER,
       estado: Enum_EstadoUsuario.AUTORIZADO,
    });

    const usuario3 = await UserModel.create({
       correo: "saramaya3@gmail.com",
       identificacion: "0006",
       nombre: "Julian",
       apellido: "Gonzalez",
       rol: Enum_Rol.ESTUDIANTE,
       estado: Enum_EstadoUsuario.AUTORIZADO,
    });
    
    const proyecto1 = await ProjectModel.create ({
       nombre: "Gamificación",
       presupuesto: 300000,
       fechaInicio: new Date("2022/11/17"),
       fechaFin: new Date("2022/12/31"),
       lider: usuario2._id ,
    });

    const objectivoGeneral = await ObjectiveModel.create ({
       descripcion: "Estudiar el proceso de enseñanza aprendizaje por medio del juego",
       tipo: Enum_TipoObjetivo.GENERAL ,
       proyecto: proyecto1._id,
    });

    const objectivoEspecifico1 = await ObjectiveModel.create ({
       descripcion: "Establecer cómo usar la motivación por medio de los videojuegos según el sector de la población al que vaya dirigido",
       tipo: Enum_TipoObjetivo.ESPECIFICO ,
       proyecto: proyecto1._id,
    });

    const objectivoEspecifico2 = await ObjectiveModel.create ({
       descripcion: "Generar propuestas de videojuegos que cumplan con un fin educativo por medio de la gamificación",
       tipo: Enum_TipoObjetivo.ESPECIFICO ,
       proyecto: proyecto1._id,
    });

    const inscripcion1 = await InscriptionModel.create ({
       fecha_ingreso: new Date("2022/11/18"),
       fecha_engreso:new Date("2022/12/31"),
       estadoInscripcion: Enum_EstadoInscripcion.PENDIENTE,
       proyecto: proyecto1._id,
       estudianteInscrito: usuario3._id,
    });

    const avance1 = await AdvanceModel.create ({
       fechaAvance: Date.now(),
       descripcion: "Se crea una lista de referencias bibliograficas a consultar",
       proyecto: proyecto1._id, 
       creadoPor: usuario3._id,
    });

    const observaciones1 = await ObservationModel.create ({
       fechaObservacion: Date.now(),
       observacionesLider: "Debes consultar al menos 30 referencias bibliograficas, realiza un analisis para determinar el futuro del tema",
       avance: avance1._id,
       creadoPor: usuario2._id,
    })
}

const realizarConsultas = async () => {

    // Consulta usuario
    const usuario = await UserModel.findOne({_id: "6194ea557bf7c5e14050cba3" })
    console.log("El usuario consultado es: ", usuario);

    // Modificación de usuario
    await UserModel.findOneAndUpdate(
        {correo:"lider_juanma@gmail.com"},
        {
        nombre:"Manuel", apellido:"Rodriguez"
        }).then((u)=>{
            console.log("Nombre y Apellido Actualizados", u);
        })
        .catch((e)=> {
            console.error("Error actualizando el Estado de inscripción",e);
        });

    // Modificación estado inscripción
    await InscriptionModel.findOneAndUpdate(
       {_id:"6194ea567bf7c5e14050cbb4"}, 
       {
           estadoInscripcion: Enum_EstadoInscripcion.ACEPTADA,
       }).then((u)=>{
         console.log("Estado de inscripción Actualizado", u);
       })
       .catch((e)=> {
         console.error("Error actualizando el Estado de inscripción",e);
       });

    // Buscar con una relación con populate
    const proyecto = await ProjectModel.find({
        nombre: "Realidad Aumentada"
    }).populate('lider');
    console.log('El proyecto es ', proyecto);

    // Otras Consultas a la BD
    // const proyecto = await ProjectModel.findOne({_id: "61929c8c094d36962e6509ab" })
    // const objetivos = await ObjectiveModel.find({project: "61929c8c094d36962e6509ab" })
    // const inscripcion = await InscriptionModel.findOne({_id: "61929c8c094d36962e6509b3"})
    // const usuario2 = await UserModel.findOne({_id: "61929c8b094d36962e6509a6" })
    // console.log("El proyecto consultado es: ", proyecto);        
    // console.log("Los objetivos del proyecto son: ", objetivos);
    // console.log("La inscripción consultada es: ", inscripcion);
    // console.log("El usuario modificado es: ", usuario2);
}

const main = async ()=> {
    await conectarBD();

    /** A estas lineas se les pone/quita comentario para escribir/consultar objetos en las colecciones */
    //crearRegistros();
    //realizarConsultas();
};

main();