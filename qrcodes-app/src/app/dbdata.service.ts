import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbdataService {

    constructor(private http: HttpClient) { }
    private url = 'http://127.0.0.1:3333/';

    getModules(){
        return this.http.jsonp(this.url + 'module', 'callback');
    }
    
    getModule(id){
        return this.http.jsonp(this.url + 'module/' + id, 'callback');
    }
    
    getDevice(id){
        return this.http.jsonp(this.url + 'device/' + id, 'callback');
    }
}
