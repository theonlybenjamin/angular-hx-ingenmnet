import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { lastValueFrom } from "rxjs";
 
@Injectable({
    providedIn: 'root'
})
export class HttpMask {

    private httpClient = inject(HttpClient);
    private contextUrl = 'https://capacitacion.cedhetec.com/api/';
    post<T>(url: string, body?: any): Promise<T> {
        return lastValueFrom(this.httpClient.post<T>(this.contextUrl + url, body));
    }

    get<T>(url: string, headers: HttpHeaders): Promise<T> {
        return lastValueFrom(this.httpClient.get<T>(this.contextUrl + url, { headers }));
    }

    delete<T>(url: string, headers: HttpHeaders): Promise<T> {
        return lastValueFrom(this.httpClient.delete<T>(this.contextUrl + url, { headers }));
    }
}