import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';
import { TechNewsComponent } from './tech-news/tech-news.component';

const routes: Routes = [
  {path:'',component:TopheadlinesComponent},
 {path:'Tech',component:TechNewsComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
