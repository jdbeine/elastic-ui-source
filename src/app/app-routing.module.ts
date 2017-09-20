import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { chatRoutes } from './pages/chat/chat.routing';
import { dashboardRoutes } from './pages/dashboard/dashboard.routing';
import { componentsRoutes } from './pages/components/components.routing';
import { formRoutes } from './pages/forms/forms.routing';
import { inboxRoutes } from './pages/inbox/inbox.routing';
import { profileRoutes } from './pages/profile/profile.routing';
import { tablesRoutes } from './pages/tables/tables.routing';
import { authRoutes } from './pages/auth/auth.routing';
import { editorRoutes } from './pages/editor/editor.routing';
import { dragAndDropRoutes } from './pages/drag-and-drop/drag-and-drop.routing';
import { iconRoutes } from './pages/icon/icon.routing';
import { mapsRoutes } from './pages/google-maps/google-maps.routing';
import { projectsRoutes } from './pages/projects/projects.routing';
import { projectDetailsRoutes } from './pages/project-details/project-details.routing';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      ...dashboardRoutes,
      ...chatRoutes,
      ...componentsRoutes,
      ...formRoutes,
      ...inboxRoutes,
      ...profileRoutes,
      ...tablesRoutes,
      ...editorRoutes,
      ...dragAndDropRoutes,
      ...iconRoutes,
      ...mapsRoutes,
      ...projectsRoutes,
      ...projectDetailsRoutes
    ]
  },
  {
    path: 'auth',
    children: [
      ...authRoutes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
