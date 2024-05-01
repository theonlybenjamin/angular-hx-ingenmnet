import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { lastValueFrom } from "rxjs";
 
@Injectable({
    providedIn: 'root'
})
export class HttpMask {

    public httpClient = inject(HttpClient);

    post<T>(url: string, body?: any): Promise<T> {
        return lastValueFrom(this.httpClient.post<T>(url, body));
    }
}