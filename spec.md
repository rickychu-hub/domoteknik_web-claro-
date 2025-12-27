# DOMOTEKNIK: PLATAFORMA DE INGENIERÍA ENERGÉTICA

## 1. Visión del Producto
No somos instaladores, somos una firma de ingeniería tecnológica. Vendemos "Ecosistemas de Autonomía", no paneles sueltos.
* **Target:** Propietarios de viviendas de lujo que buscan estética, silencio y control total (Loxone).
* **Propuesta de Valor:** "La diferencia entre instalar y diseñar". Ingeniería In-House sin subcontratas.

## 2. Experiencia de Usuario (UX) - "El Bento Grid"
La Home Page debe resolver la dualidad de clientes (Holístico vs. Pragmático) mediante un diseño de rejilla modular (Bento Grid):
* **Bloque Hero (Izquierda - 50%):** Video Loop Cinemático (Estilo de vida, atardecer, familia). Vende la emoción.
* **Bloque "Cerebro" (Centro):** Visualización del Miniserver Loxone como el núcleo que conecta todo.
* **Bloques Satélite (Derecha):** Accesos directos a Solar, Aerotermia y Cargadores.

## 3. Características Técnicas Clave ("The Digital Twin")
* **Simulación Loxone:** Como no podemos conectar el hardware real por seguridad, crea un "Gemelo Digital" en React.
    * Usa `Zustand` para simular una batería virtual que se carga/descarga.
    * Usa `Framer Motion` y SVG para dibujar líneas de energía vivas que conectan los módulos.
    * Si el usuario apaga el "Coche" en la web, la línea de energía debe retraerse suavemente.
