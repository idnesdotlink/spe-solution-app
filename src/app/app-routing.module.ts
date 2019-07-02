import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenDashboardComponent } from './screen/screen-dashboard/screen-dashboard.component';
import { ScreenLoginComponent, BottomSheetOverviewExampleSheet } from './screen/screen-login/screen-login.component';
import { SharedModule } from './shared.module';
import { ScreenInfoComponent } from './screen/screen-info/screen-info.component';
import { ScreenPreferenceComponent } from './screen/screen-preference/screen-preference.component';
import { ScreenApiComponent } from './screen/screen-api/screen-api.component';
import { ScreenUiComponent } from './screen/screen-ui/screen-ui.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: ScreenDashboardComponent },
  { path: 'login', component: ScreenLoginComponent },
  { path: 'info', component: ScreenInfoComponent },
  { path: 'preference', component: ScreenPreferenceComponent },
  { path: 'api', component: ScreenApiComponent },
  { path: 'ui', component: ScreenUiComponent }
];

@NgModule({
  declarations: [
    ScreenDashboardComponent,
    ScreenLoginComponent,
    BottomSheetOverviewExampleSheet,
    ScreenInfoComponent,
    ScreenPreferenceComponent,
    ScreenApiComponent,
    ScreenUiComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forRoot(routes, {
      enableTracing: true
    }),
  ],
  entryComponents: [
    BottomSheetOverviewExampleSheet
  ],
  exports: [
    SharedModule,
    RouterModule
  ]
})
export class AppRoutingModule { }
