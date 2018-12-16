import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { httpOptions } from './auth.service';

import { Label } from './label';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  labelUrl = 'http://localhost:8080/label';

  constructor(
    private http: HttpClient
  ) { }

  getLabels(): Promise<Label[]> {
    return this.http.get<Label[]>(
      this.labelUrl,
      httpOptions
    ).toPromise();
  }

  getLabel(id: number): Promise<Label> {
    return this.http.get<Label>(
      `${this.labelUrl}/${id}`,
      httpOptions
    ).toPromise();
  }

  modifyLabel(id: number, label: Label): Promise<Label> {
    return this.http.put<Label>(
      `${this.labelUrl}/${id}`,
      Label,
      httpOptions
    ).toPromise();
  }

  addLabel(label: Label): Promise<Label> {
    return this.http.post<Label>(
      this.labelUrl,
      Label,
      httpOptions
    ).toPromise();
  }
}
