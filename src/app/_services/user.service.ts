import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "../_models";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(`/users`);
  }

  getById(id: number) {
    return this.http.get(`/users/` + id);
  }

  register(user: User) {
    return this.http.post(`https:192.168.3.2/users/register`, user);
  }

  update(user: User) {
    return this.http.put(`/users/` + user.id, user);
  }

  delete(id: number) {
    return this.http.delete(`/users/` + id);
  }
}
