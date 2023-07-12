import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { environment } from '../environment/environment';

@Injectable({providedIn:'root'})

export class ProductService{
    private apiServerUrl=environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.apiServerUrl}/product/getAll`);
      }
    
    public addProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(`${this.apiServerUrl}/product/add`, product);
    }
    
    public updateProduct(product: Product): Observable<Product> {
        return this.http.put<Product>(`${this.apiServerUrl}/product/update`, product);
    }
    
    public deleteProduct(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/product/delete/${id}`);
    }
}