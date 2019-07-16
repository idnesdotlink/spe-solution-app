import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenDashboardComponent } from './screen/screen-dashboard/screen-dashboard.component';
import { ScreenLoginComponent, BottomSheetOverviewExampleSheet } from './screen/screen-login/screen-login.component';
import { SharedModule } from './shared.module';
import { ScreenInfoComponent } from './screen/screen-info/screen-info.component';
import { ScreenPreferenceComponent } from './screen/screen-preference/screen-preference.component';
import { ScreenApiComponent } from './screen/screen-api/screen-api.component';
import { ScreenUiComponent } from './screen/screen-ui/screen-ui.component';
import { ScreenGraphqlComponent } from './screen/screen-graphql/screen-graphql.component';
import { ScreenFirebaseOrderComponent } from './screen/screen-firebase-order/screen-firebase-order.component';
import { ScreenFirebaseOrderListComponent } from './screen/screen-firebase-order-list/screen-firebase-order-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: ScreenDashboardComponent, data: { animation: 'AboutPage' } },
  { path: 'login', component: ScreenLoginComponent, data: { animation: 'HomePage' } },
  { path: 'info', component: ScreenInfoComponent, data: { animation: 'FilterPage' } },
  { path: 'preference', component: ScreenPreferenceComponent },
  { path: 'api', component: ScreenApiComponent },
  { path: 'ui', component: ScreenUiComponent },
  { path: 'graphql', component: ScreenGraphqlComponent },
  { path: 'fb-order', component: ScreenFirebaseOrderComponent },
  { path: 'fb-order-list', component: ScreenFirebaseOrderListComponent }
];

@NgModule({
  declarations: [
    ScreenDashboardComponent,
    ScreenLoginComponent,
    BottomSheetOverviewExampleSheet,
    ScreenInfoComponent,
    ScreenPreferenceComponent,
    ScreenApiComponent,
    ScreenUiComponent,
    ScreenGraphqlComponent,
    ScreenFirebaseOrderComponent,
    ScreenFirebaseOrderListComponent
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
