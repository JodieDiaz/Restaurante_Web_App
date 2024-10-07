// src/app/layout.js
import "../styles/global.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Menú Interactivo - Tu Restaurante Favorito",
  description:
    "Explora nuestro delicioso menú interactivo y haz tu pedido fácilmente.",
};

const Layout = ({ children }) => {
  return (
    <html lang="es">
      <body>
        <header className="bg-red-600 text-white p-4 flex flex-col items-center">
          <h1 className="text-4xl font-bold">Tu Restaurante Favorito</h1>
          <nav className="mt-2">
            <ul className="flex space-x-6">
              <li>
                <a href="/" className="hover:underline">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/menu" className="hover:underline">
                  Menú
                </a>
              </li>
              <li>
                <a href="/carrito" className="hover:underline">
                  Carrito
                </a>
              </li>
              <li>
                <a href="/contacto" className="hover:underline">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="p-6 bg-gray-100 min-h-screen">
          <div className="max-w-7xl mx-auto">
            {children}{" "}
            {/* Aquí se renderizará el contenido específico de cada página */}
          </div>
        </main>

        <footer className="bg-gray-800 text-white p-4 mt-6 text-center">
          <p>© 2024 Tu Restaurante Favorito. Todos los derechos reservados.</p>
          <p>Dirección: Calle Ejemplo 123, Ciudad</p>
          <p>Teléfono: (123) 456-7890</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
