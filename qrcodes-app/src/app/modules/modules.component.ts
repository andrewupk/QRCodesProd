import { Component, OnInit } from '@angular/core';
import { DbdataService } from '../dbdata.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {

    constructor(private dbservice: DbdataService) { }
    
    modules_list;
    ngOnInit() {
        this.dbservice.getModules().subscribe(modules => {
            console.log(modules);
            this.modules_list = modules;
        });
    }
}
