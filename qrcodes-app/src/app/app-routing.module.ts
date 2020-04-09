import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesComponent } from './modules/modules.component';
import { ModuleComponent } from './module/module.component';
import { DeviceComponent } from './device/device.component';


const routes: Routes = [
    {path: 'modules', component: ModulesComponent},
    {path: 'module/:moduleId', component: ModuleComponent},
    {path: 'device/:deviceId', component: DeviceComponent},
    {path: '', component: ModulesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
