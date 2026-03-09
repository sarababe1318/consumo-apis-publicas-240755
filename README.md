# consumo-apis-publicas-240755
 Consumo de APIs públicas NASA, INEGI y FIFA
| No. | Descripción                                                     | Estatus   |
| --- | --------------------------------------------------------------- | --------- |
| 1   | Configuración inicial del proyecto Node.js                      | Realizado |
| 2   | Configuración del servidor Express                              | Realizado |
| 3   | Configuración de Tailwind CSS para estilos                      | Realizado |
| 4   | Solicitud y configuración de API Keys                           | Realizado |
| 5   | Implementación de consumo de API NASA                           | Realizado |
| 6   | Implementación de consumo de API INEGI                          | Realizado |
| 7   | Implementación de consumo de API FIFA                           | Realizado |
| 8   | Integración de todas las APIs en la landing page                | Realizado |
| 9   | Pruebas de ejecución del sistema                                | Realizado |
| 10  | Documentación del proyecto y evidencias                         | Realizado |

# 🌐 Consumo de APIs para acceso a Bases de Datos Públicas

## Interfaz inicial
<img width="1918" height="971" alt="interfaz inicio" src="https://github.com/user-attachments/assets/668dfe12-8d2f-420d-af0d-d214d9a54700" />

## Interfaz Nasa
<img width="1911" height="956" alt="nasa interfaz" src="https://github.com/user-attachments/assets/504ffb0b-6ad6-454e-83bc-d1744bfb48f5" />

## Interfaz Inegi 
<img width="1917" height="962" alt="ingei interfaz" src="https://github.com/user-attachments/assets/2b020d6b-5725-42f6-88d0-826e81cb8674" />

## Interfaz Fifa
<img width="1915" height="968" alt="footbal intefaz" src="https://github.com/user-attachments/assets/c74d2ac8-c823-4ed8-92a4-4ab956c550db" />





# 🌐 Consumo de APIs para acceso a Bases de Datos Públicas

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Node](https://img.shields.io/badge/node-18.x-green.svg)
![Express](https://img.shields.io/badge/express-4.x-lightgrey.svg)
![License](https://img.shields.io/badge/license-MIT-orange.svg)

## 📋 Descripción del Proyecto

Aplicación web desarrollada con Node.js y Express que permite el consumo de información de bases de datos públicas a través de APIs. El sistema integra tres casos específicos: NASA, INEGI y FIFA/Football, implementando un sistema de gestión de API Keys individuales para cada servicio.

**Valor:** 100 firmas
## Gestión de API Keys

| API | URL de Registro | Tiempo de Respuesta |
|---|---|---|
| NASA | api.nasa.gov | Inmediato |
| INEGI | inegi.org.mx/servicios/api_indicadores | 24-48 horas |
| FIFA/Football | football-data.org/client/register | Inmediato |

## Endpoints Disponibles (20)

### NASA API

| No. | Endpoint | Descripción | Método | Parámetros |
|---|---|---|---|---|
| 1 | /planetary/apod | Astronomy Picture of the Day | GET | date, hd, api_key |
| 2 | /planetary/earth/imagery | Imágenes satelitales | GET | lat, lon, date, api_key |
| 3 | /planetary/earth/assets | Lista de imágenes por ubicación | GET | lat, lon, api_key |
| 4 | /mars-photos/api/v1/rovers/curiosity/photos | Fotos del rover Curiosity | GET | sol, camera, api_key |
| 5 | /neo/rest/v1/feed | Asteroides cercanos | GET | start_date, end_date, api_key |
| 6 | /neo/rest/v1/neo/{asteroid_id} | Detalles de asteroide | GET | asteroid_id, api_key |
| 7 | /insight_weather | Clima en Marte | GET | feedtype, ver, api_key |
| 8 | /EPIC/api/natural | Imágenes de la Tierra | GET | date, api_key |

### INEGI API

| No. | Endpoint | Descripción | Método | Parámetros |
|---|---|---|---|---|
| 9 | /app/api/indicadores/desarrolladores/jsonxml/INDICATOR/{id}/es | Indicador económico | GET | id_indicador, api_key, type |
| 10 | /app/api/indicadores/desarrolladores/jsonxml/indicadores/{ids}/es | Múltiples indicadores | GET | ids, api_key |
| 11 | /app/api/bie/desarrolladores/jsonxml/indicadores/{id}/es | Banco de Información Económica | GET | id_indicador, api_key |
| 12 | /app/api/series/desarrolladores/jsonxml/series/{id}/es | Series de tiempo | GET | id_serie, api_key |
| 13 | /app/api/censos/desarrolladores/jsonxml/consulta | Datos censales | GET | consulta_params, api_key |
| 14 | /app/api/sniim/desarrolladores/jsonxml/consulta | SNIIM (precios de mercado) | GET | producto, region, api_key |

### Football-Data.org API

| No. | Endpoint | Descripción | Método | Parámetros |
|---|---|---|---|---|
| 15 | /v4/matches | Partidos del día | GET | date, status |
| 16 | /v4/competitions | Lista de ligas | GET | plan |
| 17 | /v4/competitions/{id}/matches | Partidos por liga | GET | competition_id, matchday |
| 18 | /v4/teams/{id} | Información de equipo | GET | team_id |
| 19 | /v4/players/{id} | Datos de jugador | GET | player_id |
| 20 | /v4/competitions/{id}/standings | Tabla de posiciones | GET | competition_id |

## Estructura del Proyecto
consumo-apis-publicas-240755/
├── views/
│ ├── index.ejs
│ ├── nasa.ejs
│ ├── inegi.ejs
│ └── football.ejs
├── public/
│ └── css/
│ └── output.css
├── node_modules/
├── server.js
├── package.json
├── .env
└── README.md
