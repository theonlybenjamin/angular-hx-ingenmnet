import { DocumentTypesDTO } from "./doucment-types.response";

export interface DocumentTypesPort {
    getTypesOfDocuments(): Promise<DocumentTypesDTO[]>
}