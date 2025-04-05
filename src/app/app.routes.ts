import { Routes } from '@angular/router';
import { RoleSelectorComponent } from './components/role-selector/role-selector.component';
import { QuestionListComponent } from './components/question-list/question-list.component';

export const routes: Routes = [
    {path:'',component: RoleSelectorComponent},
    {path:'questions',component:QuestionListComponent}
];
