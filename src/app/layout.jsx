import "./global.css"; // Asegúrate de que la ruta sea correcta

export default function Layout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Restaurante App</title>
      </head>
      <body>
        <header>
         
        </header>
        <main>{children}</main>
        
      </body>
    </html>
  );
}
