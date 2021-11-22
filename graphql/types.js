import { gql } from 'apollo-server-express';
import { typesEnums } from '../models/enums/types.js';
import { typesUser } from '../models/user/types.js';
import { typesProject } from '../models/project/types.js';
import { typesAdvance } from '../models/advance/types.js';

const typeGlobals = gql`

    scalar Date

       
    `;

    export const types = [typeGlobals, typesEnums, typesUser, typesProject, typesAdvance];