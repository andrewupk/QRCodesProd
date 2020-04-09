import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbdataService } from '../dbdata.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

    constructor(private dbservice: DbdataService, private route: ActivatedRoute) { }
    
    device_data;
    ngOnInit() {
        this.dbservice.getDevice(this.route.snapshot.paramMap.get('deviceId')).subscribe(device => {
            console.log(device);
            this.device_data = device;
        });
    }
}
