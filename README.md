# App-Eventos
Aplicación web para la gestión de eventos comunitarios, desarrollada con FastAPI, MongoDB, Nginx y frontend en HTML/CSS/JS.

## Estructura del Proyecto

- **auth_service/**: Servicio de autenticación (FastAPI)
- **event_service/**: Servicio de gestión de eventos (FastAPI + MongoDB)
- **nginx/**: Configuración de Nginx y archivos estáticos del frontend
- **frontend/**: Archivos estáticos alternativos del frontend
- **docker-compose.yml**: Orquestación de servicios con Docker

## Instalación y Ejecución

1. **Clona el repositorio**
2. **Asegúrate de tener Docker y Docker Compose instalados**
3. **Ejecuta:**
```bash
   docker-compose up --build
```
## Servicios
### Auth Service
- Ubicación: auth_service/
- Framework: FastAPI
- Endpoints:
  - POST /login : Autenticación de usuarios
### Event Service
- Ubicación: event_service/
- Framework: FastAPI
- Base de datos: MongoDB
- Endpoints:
  - GET /eventos : Listar eventos
  - POST /eventos : Crear evento
  - PUT /eventos/{evento_id} : Editar evento
  - DELETE /eventos/{evento_id} : Eliminar evento
### Frontend
- Ubicación principal: nginx/static/
- Archivos: index.html , eventos.html , script.js , script_eventos.js , style.css
- Interfaz para login, creación, edición y eliminación de eventos
### Nginx
- Proxy reverso para los servicios y servidor de archivos estáticos
## Variables de Entorno
- La conexión a MongoDB está configurada por defecto para el contenedor mongodb .
## Dependencias
- Python 3.12 (servicios FastAPI)
- FastAPI, Uvicorn, PyMongo (ver requirements.txt en cada servicio)
- MongoDB
- Nginx
## Uso
- Accede a la aplicación en http://localhost después de levantar los servicios.
- Realiza login con el usuario y clave definidos en auth_service/app.py .
- Gestiona eventos desde la interfaz web.
## Licencia
Este proyecto es solo para fines educativos.

