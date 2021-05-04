import { Routes } from "@angular/router";
import { VideosComponent } from "./app/components/videos/videos.component";
import { AboutusComponent } from "./app/components/aboutus/aboutus.component";


export const appRoutes:Routes = [
  { path: "aboutus", component: AboutusComponent },
  { path: "videos", component: VideosComponent },
  { path: "", redirectTo: "/", pathMatch: 'full' },
]