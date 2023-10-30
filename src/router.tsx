import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Login from "./Features/Auth/Login";
import Dashboard from "./Features/Dashboard/Dashboard";

const DataTool = React.lazy(() => import("./Features/DataTool/DataTool"));
const PatternLayout = React.lazy(
  () => import("./Features/Patterns/PatternLayout")
);
const ProcessLayout = React.lazy(
  () => import("./Features/Process/ProcessLayout")
);
const ProjectLayout = React.lazy(
  () => import("./Features/project/ProjectLayout")
);

const router: any = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Dashboard />}>
        <Route
          path=""
          element={
            <React.Suspense fallback={<>...</>}>
              <DataTool />
            </React.Suspense>
          }
        />
        <Route
          path="tendance"
          element={
            <React.Suspense fallback={<>...</>}>
              <ProcessLayout />
            </React.Suspense>
          }
        />
        <Route
          path="biblio"
          element={
            <React.Suspense fallback={<>...</>}>
              <PatternLayout />
            </React.Suspense>
          }
        />

        <Route
          path="projects"
          element={
            <React.Suspense fallback={<>...</>}>
              <ProjectLayout />
            </React.Suspense>
          }
        />
      </Route>
    </>
  )
);

export default router;
