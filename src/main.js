import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";

import "@/assets/code-highlight.css"

import Hero from "./components/Hero"
import ProjectsGrid from "./components/ProjectsGrid"
import LatestJournals from "./components/LatestJournals"



export default function(Vue, { head }) {

  Vue.component('Hero',Hero);

  Vue.component('ProjectsGrid',ProjectsGrid);

  Vue.component('LatestJournals',LatestJournals);

  Vue.component("Layout", DefaultLayout);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
}
