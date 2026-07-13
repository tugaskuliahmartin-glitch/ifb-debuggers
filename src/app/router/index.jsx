import {
    createBrowserRouter,
} from "react-router-dom";

import MainLayout from "@/components/layouts/MainLayout";

function HomePage() {
    return (
        <MainLayout>

            <section
                id="beranda"
                className="container-custom min-h-screen flex items-center"
            >

                <div>

                    <h1 className="text-6xl font-bold">
                        Website IFB Debuggers
                    </h1>

                    <p className="mt-6 text-slate-500 text-lg">
                        Website Informasi Kelas IFB Informatika
                    </p>

                </div>

            </section>

        </MainLayout>
    );
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
]);