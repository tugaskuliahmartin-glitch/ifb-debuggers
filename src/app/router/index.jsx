import {
  createBrowserRouter,
} from "react-router-dom";

import MainLayout from "@/components/layouts/MainLayout";

function HomePage() {
  return (
    <MainLayout>
      <div className="container-custom py-20">
        <h1 className="text-5xl font-bold">
          IFB Debuggers
        </h1>

        <p className="mt-4 text-slate-500">
          Website Informasi Kelas Informatika
        </p>
      </div>
    </MainLayout>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);