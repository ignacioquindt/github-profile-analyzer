# 📚 Cómo se construyó este Analizador de Perfiles GitHub

Este proyecto no es solo una página web; es una aplicación estructurada profesionalmente usando **Programación Orientada a Objetos (POO)** y **TypeScript**. Aquí tienes el desglose técnico para que lo domines y puedas explicarlo:

---

### 1. El "Contrato" (Interfaces)
**Archivo:** `src/types/github.ts`
Antes de escribir cualquier lógica, definimos cómo se ven los datos que nos envía GitHub. Usamos **Interfaces** para que TypeScript sepa exactamente qué propiedades tiene un Usuario (`login`, `avatar_url`, etc.) y un Repositorio. 
> *Sin esto, estaríamos trabajando a ciegas y cometiendo errores de escritura.*

### 2. El Mensajero (Servicio)
**Archivo:** `src/services/GitHubService.ts`
Aquí aplicamos el concepto de **Encapsulamiento**. Creamos una clase `GitHubService` con métodos estáticos (`getUser`, `getRepositories`). 
*   **¿Por qué?** Porque si mañana GitHub cambia su API, solo tenemos que tocar este archivo y el resto de la aplicación seguirá funcionando igual. Es el único que sabe "cómo hablar con internet".

### 3. Los Moldes (Modelos de Datos)
**Archivo:** `src/models/UserProfile.ts`
Aquí es donde brilla la **POO**. 
*   **Clase `UserProfile`**: Recibe los datos crudos de la API y los transforma. Por ejemplo, convierte una fecha fea de internet en algo legible o maneja valores nulos (si el usuario no tiene bio, le pone "Sin biografía").
*   **Clase `Repository`**: Hace lo mismo para cada proyecto.
> *Beneficio:* En el código de la interfaz (React), ya no manejamos datos sucios, sino objetos "inteligentes" y limpios.

### 4. La Orquesta (Interfaz de Usuario)
**Archivo:** `src/App.tsx`
Es el centro de control. Utiliza los conceptos anteriores para:
1.  Capturar lo que escribes en el buscador.
2.  Llamar al `GitHubService`.
3.  Crear nuevas "Instancias" (objetos) de `UserProfile` y `Repository`.
4.  Renderizar todo con el diseño **Glassmorphism** que definimos en `index.css`.

### 5. Estilo "Premium" (CSS Moderno)
**Archivo:** `src/index.css`
Usamos variables de CSS (`--primary`, `--bg-dark`) para que el código sea fácil de mantener y efectos de **blur** (desenfoque) para dar esa sensación de cristal de gama alta.

---

### 💡 Resumen para tu entrevista/LinkedIn:
"Desarrollé un analizador de perfiles usando la **API de GitHub**. Apliqué **POO** para separar la lógica de negocio de la interfaz, utilicé clases para modelar los datos de forma segura con **TypeScript** y diseñé una UI moderna basada en **Glassmorphism** para maximizar la experiencia de usuario."
