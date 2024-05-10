import { inject } from "@angular/core";
import { DocumentTypesPort } from "../../domain/ports/types-document/document-types.port";
import { DocumentTypesDTO } from "../../domain/ports/types-document/doucment-types.response";
import { HttpMask } from "../mask/http.mask";
import { Endpoints } from "../../domain/enum/endpoints.enum";

export class DocumentTypesAdapter implements DocumentTypesPort {
    private httpMask: HttpMask = inject(HttpMask)
    getTypesOfDocuments(): Promise<DocumentTypesDTO[]> {
        return this.httpMask.get(Endpoints.GET_DOCUMENT_TYPES)
    }
}