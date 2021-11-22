import mongoose from "mongoose";
import { AdvanceModel } from "../advance/advance.js";
import { UserModel } from "../user/user.js";

const { Schema, model } = mongoose;

//definir el esquema:
const observationSchema = new Schema({
    fechaObservacion: {
        type: Date,
        required: true,
    },
    observacionesLider: {
        type: String,
        required: true,
    },
    avance: {
        type: Schema.Types.ObjectId,
        ref: AdvanceModel,
        required: true
    },
    creadoPor: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    },
})

// se define el modelo:
const ObservationModel = model("Observation", observationSchema, "Observations");

export { ObservationModel } ;