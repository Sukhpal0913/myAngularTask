import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AgentComponent } from './component/agent/agent.component';
import { BlogComponent } from './component/blog/blog.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { LayoutComponent } from './component/layout/layout.component';
import { PropertiesComponent } from './component/properties/properties.component';



const routes: Routes = [
  // {path: '', component: LayoutComponent},
  {path: '', component: HomeComponent},
  { path: 'properties', component: PropertiesComponent },
  {path: 'agent', component: AgentComponent},
  { path: 'blog', component: BlogComponent},
  {path: 'contact', component: ContactComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    AgentComponent,
    BlogComponent,
    ContactComponent,
    HomeComponent,
    LayoutComponent,
    PropertiesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
