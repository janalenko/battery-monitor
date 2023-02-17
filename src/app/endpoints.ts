
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class Endpoints {

  public static bmsBase = environment.baseUrl

  public static Data = {
    getAll: () => `${Endpoints.bmsBase}`,
  }
}