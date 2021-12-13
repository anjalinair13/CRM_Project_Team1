import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';;
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ResourceService } from './shared/resource.service';
import { UserService } from './shared/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule } from 'ngx-toastr';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth.guard';
import { ResourcesComponent } from './resources/resources.component';
import { ResourceComponent } from './resources/resource/resource.component';
import { ResourceListComponent } from './resources/resource-list/resource-list.component';
import { AuthInterceptor } from './shared/auth.interceptor';
import { CordinatorComponent } from './cordinator/cordinator.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CenquiriesComponent } from './cenquiries/cenquiries.component';
import { CenquiryComponent } from './cenquiries/cenquiry/cenquiry.component';
import { CenquiryListComponent } from './cenquiries/cenquiry-list/cenquiry-list.component';
//import { UpdatecenquiryComponent } from './cenquiries/updatecenquiry/updatecenquiry.component';
import { CenquiryService } from './shared/cenquiry.service';
import { RenquiriesComponent } from './renquiries/renquiries.component';
import { RenquiryComponent } from './renquiries/renquiry/renquiry.component';
import { RenquiryListComponent } from './renquiries/renquiry-list/renquiry-list.component';
import { UpdaterenquiryComponent } from './renquiries/updaterenquiry/updaterenquiry.component';
import { RenquiryService } from './shared/renquiry.service';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
//import { MatDatepickerModule } from '@angular/material/datepicker';
import { AboutComponent } from './about/about.component';

import { CenquiryEditComponent } from './cenquiries/cenquiry-edit/cenquiry-edit.component';

import { RenquiryEditComponent } from './renquiries/renquiry-edit/renquiry-edit.component';
import { CenquiryStatusComponent } from './cenquiries/cenquiry-status/cenquiry-status.component';
import { RenquiryStatusComponent } from './renquiries/renquiry-status/renquiry-status.component';
import { CenquiryNewComponent } from './cenquiries/cenquiry-new/cenquiry-new.component';
import { RenquiryNewComponent } from './renquiries/renquiry-new/renquiry-new.component';
import  {PagevisitService} from './shared/pagevist.service';
import  {MailerService} from './mailer.service';
import { UsercourselistComponent } from './usercourselist/usercourselist.component';
import { UserresourcelistComponent } from './userresourcelist/userresourcelist.component';
import { ChartComponent } from './chart/chart.component';
//import { PiechartComponent } from './piechart/piechart.component';
import { PieChartComponent } from './chart/pie-chart/pie-chart.component';
import { CorenqchartComponent } from './corenqchart/corenqchart.component';
import { ChartsModule } from 'ng2-charts';
import { ResenqchartComponent } from './resenqchart/resenqchart.component';
//import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
//import { ChartsModule } from 'ng2-charts';






@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ManagerComponent,
    HomeComponent,
    LoginComponent,
    ResourcesComponent,
    ResourceComponent,
    ResourceListComponent,
    CordinatorComponent,
    CoursesComponent,
    CourseComponent,
    CourseListComponent,
    CenquiriesComponent,
    CenquiryComponent,
    CenquiryListComponent,
    //UpdatecenquiryComponent,
    RenquiriesComponent,
    RenquiryComponent,
    RenquiryListComponent,
    UpdaterenquiryComponent,
    UsersComponent,
    UserComponent,
    UserListComponent,

    CenquiryEditComponent,
    RenquiryEditComponent,
    CenquiryStatusComponent,
    RenquiryStatusComponent,
    CenquiryNewComponent,
    RenquiryNewComponent,
    AboutComponent,
    CenquiryEditComponent,
    UsercourselistComponent,
    UserresourcelistComponent,
   ChartComponent,
   //PiechartComponent,
   PieChartComponent,
   CorenqchartComponent,
   ResenqchartComponent,
   //ChartsModule



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(), // ToastrModule added
    BrowserAnimationsModule,// required animations module
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    ChartsModule,
    //BackButtonDisableModule.forRoot()
    //MatRadioModule
  ],



  providers: [AuthService,AuthGuard,MailerService,CenquiryService,RenquiryService,PagevisitService,UserService,ResourceService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],

 


  bootstrap: [AppComponent]
})
export class AppModule { }
