import { Injectable } from '@angular/core';
import {nanoid} from 'nanoid';

@Injectable({
  providedIn: 'root'
})
export class GenerateIdService {
  
  generateID(length = 12, prefix=''): string {
    const id = nanoid(length);
    return prefix.length ? `${prefix}-${id}` : id;
  }
}
