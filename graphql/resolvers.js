import { resolversProject } from "../models/project/resolvers.js";
import { resolversUser } from "../models/user/resolvers.js";
import { resolversAdvance } from "../models/advance/resolvers.js";


export const resolvers = [resolversProject, resolversUser, resolversAdvance];