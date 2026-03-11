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
<img width="1914" height="964" alt="image" src="https://github.com/user-attachments/assets/642a53e2-e774-4768-94b7-9477a8da1a14" />


## Interfaz Nasa
<img width="1899" height="956" alt="image" src="https://github.com/user-attachments/assets/db96c318-5d9c-4c67-bf10-911b7f8be2fa" />
<img width="1919" height="954" alt="image" src="https://github.com/user-attachments/assets/b340da3b-5dcd-417a-9ea3-1d6b1d0e6056" />



## Interfaz Inegi 
<img width="1916" height="951" alt="image" src="https://github.com/user-attachments/assets/5bd0a179-7b1f-4778-9f00-a9024e574d1e" />
<img width="1918" height="971" alt="image" src="https://github.com/user-attachments/assets/2a92b33b-cd55-47c2-a25c-2fbfbb7e55be" />



## Interfaz Fifa
<img width="1908" height="965" alt="image" src="https://github.com/user-attachments/assets/2d9c615b-2030-444e-8c16-6a9ad9c58094" />
<img width="1919" height="965" alt="image" src="https://github.com/user-attachments/assets/e60bf74e-5dc1-432f-a93c-7463c8e92a70" />
<img width="1915" height="970" alt="image" src="https://github.com/user-attachments/assets/ebf8ca43-5811-4227-8092-5934a92f2e83" />
<img width="1903" height="971" alt="image" src="https://github.com/user-attachments/assets/478e19c4-64d2-47fe-88c1-745f1838d3bc" />









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

