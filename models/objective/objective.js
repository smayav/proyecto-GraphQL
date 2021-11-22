import mongoose from "mongoose";
import { ProjectModel } from "../project/project.js";

const { Schema, model } = mongoose;

//definir el esquema:
const objectivesSchema = new Schema ({
    descripcion: {
        type: String,
        required: true,
    },
    tipo: {
        type: String, 
        enum: ['GENERAL', 'ESPECIFICO'],
        required: true,
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel,        
    },
});

// se define el modelo:
const ObjectiveModel = model("Objective", objectivesSchema, "Objectives");

export { ObjectiveModel } ;