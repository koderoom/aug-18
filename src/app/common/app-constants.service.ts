import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConstantsService {

    TITLE = "AUG-18";
    BG_LIST:any[] = [{"ID":1, "BG": "bg-primary", "BTN":"btn-primary"}, 
                     {"ID":2, "BG": "bg-danger", "BTN":"btn-danger"}, 
                     {"ID":3, "BG": "bg-dark", "BTN":"btn-dark"}, 
                     {"ID":4, "BG": "bg-info", "BTN":"btn-info"}, 
                     {"ID":5, "BG": "bg-secondary", "BTN":"btn-secondary"},
                     {"ID":6, "BG": "bg-success", "BTN":"btn-success"}
                    ];


    constructor() { }
}
