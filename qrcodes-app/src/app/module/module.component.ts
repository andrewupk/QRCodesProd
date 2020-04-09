import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbdataService } from '../dbdata.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {

    constructor(private dbservice: DbdataService, private route: ActivatedRoute) { }

    devices_list;
    displayedColumns = ['id', 'position', 'documentLink', 'serialNo', 'type', 'Model', 'Code', 'Comment', 'Supplier', 'Link'];
    ngOnInit() {
        this.dbservice.getModule(this.route.snapshot.paramMap.get('moduleId')).subscribe(module => {
            console.log(module);
            this.devices_list = module;
        });
    }
}
