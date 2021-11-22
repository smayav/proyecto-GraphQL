import mongoose from "mongoose";
import { ProjectModel } from "../project/project.js";
import { UserModel } from "../user/user.js";

const { Schema, model } = mongoose;

//definir el esquema:
const advanceSchema = new Schema ({
    fechaAvance: {
        type: Date,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
        required: true,        
    },
    creadoPor: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    },
});

// se define el modelo:
const AdvanceModel = model("Advance", advanceSchema, "Advances");

export { AdvanceModel } ;