## 8. Mapeo de Requerimientos y Casos de Uso

| ID Req. | Tipo | Descripción | Caso de Uso Relacionado | Módulo Principal | Criterios de Aceptación |
|:-------:|:-----|:------------|:-----------------------|:-----------------|:------------------------|
| RF01    | Funcional | Definición de Estrategia | US#1, US#6 | Estrategia, Configuración | El usuario puede definir y modificar parámetros de la estrategia desde la interfaz; los cambios se aplican correctamente. |
| RF02    | Funcional | Módulo de Backtesting | US#3 | Backtesting | El sistema permite cargar datos históricos, ejecutar simulaciones y mostrar métricas de rendimiento. |
| RF03    | Funcional | Conectividad con Bróker | US#5 | Ejecución | El sistema establece y mantiene una conexión segura y estable con el bróker; reporta latencia y errores. |
| RF04    | Funcional | Ejecución de Órdenes | US#1, US#5 | Ejecución | El sistema envía órdenes automáticamente según la estrategia definida y muestra logs de ejecución. |
| RF05    | Funcional | Gestión de Stop-Loss y TP | US#2 | Gestión de Riesgos | El sistema coloca stop-loss y take-profit en todas las operaciones y permite modificar los parámetros. |
| RF06    | Funcional | Configuración de Parámetros | US#6 | Configuración | El usuario puede ajustar parámetros desde la interfaz sin modificar el código fuente; los cambios se guardan y aplican en tiempo real. |
| RF07    | Funcional | Reportes de Rendimiento | US#4 | Monitoreo y Reportes | El sistema genera reportes detallados, gráficos y permite exportar los resultados. |
| RNF01   | No Funcional | Latencia de Ejecución < 100 ms | US#5 | Ejecución | La latencia medida en la ejecución de órdenes es inferior a 100 ms en condiciones normales. |
| RNF02   | No Funcional | Disponibilidad 24/7 en VPS | US#1 | Ejecución | El sistema opera de forma continua en un VPS, con monitoreo de disponibilidad. |
| RNF03   | No Funcional | Seguridad de Datos | US#2, US#5 | Ejecución, Gestión de Riesgos | Las credenciales y datos sensibles están encriptados y protegidos; se audita el acceso. |
| RNF04   | No Funcional | Escalabilidad | US#1, US#6 | Todos | El sistema soporta múltiples pares de divisas y estrategias sin degradar el rendimiento. |
| RNF05   | No Funcional | Mantenibilidad del Código | US#3, US#6 | Todos | El código es modular, documentado y cuenta con pruebas automatizadas. |

---

Esta tabla permite visualizar la trazabilidad entre los requerimientos del sistema y los casos de uso definidos, facilitando la validación y el diseño modular.
# Diseño del Sistema de Trading Algorítmico

## 1. Introducción
Este documento describe la arquitectura, los componentes principales y las decisiones técnicas del sistema de trading algorítmico orientado al par EUR/USD. El objetivo es proporcionar una visión clara y profesional para desarrolladores, stakeholders y futuros colaboradores.

## 2. Arquitectura General
El sistema se compone de módulos independientes que interactúan entre sí mediante interfaces bien definidas. La arquitectura es modular, escalable y orientada a la mantenibilidad.

```
+-------------------+      +-------------------+      +-------------------+
| Módulo Estrategia | ---> | Módulo Ejecución  | ---> | Bróker/API        |
+-------------------+      +-------------------+      +-------------------+
        |                        |                          |
        v                        v                          v
+-------------------+      +-------------------+      +-------------------+
| Módulo Backtesting|      | Módulo Gestión   |      | Módulo Monitoreo  |
|                   |      | de Riesgos       |      | y Reportes        |
+-------------------+      +-------------------+      +-------------------+
```

## 3. Componentes Principales

### 3.1 Módulo de Estrategia
- Permite definir y modificar reglas de trading (scalping, day trading, swing trading).
- Interfaz para parametrización y selección de estrategias.

### 3.2 Módulo de Backtesting
- Simulación de estrategias con datos históricos.
- Métricas de rendimiento: rentabilidad, drawdown, ratio de aciertos.

### 3.3 Módulo de Ejecución
- Conexión con bróker (API, MetaTrader).
- Envío de órdenes, gestión de latencia y slippage.

### 3.4 Módulo de Gestión de Riesgos
- Aplicación automática de stop-loss y take-profit.
- Ajuste dinámico de parámetros de riesgo.

### 3.5 Módulo de Monitoreo y Reportes
- Visualización de métricas, logs y alertas.
- Exportación de reportes y gráficos.

### 3.6 Interfaz de Configuración
- Permite modificar parámetros sin editar el código fuente.
- Guarda y aplica cambios en tiempo real.

## 4. Decisiones Técnicas
- **Lenguaje principal:** MQL5 para el EA, Python/TypeScript para módulos auxiliares y reportes.
- **Infraestructura:** VPS para operación 24/7 y baja latencia.
- **Seguridad:** Encriptación de credenciales y datos sensibles.
- **Escalabilidad:** Modularidad para soportar múltiples pares y estrategias.
- **Mantenibilidad:** Código documentado y pruebas automatizadas.

## 5. Diagrama de Flujo Simplificado

```
[Usuario] --> [Interfaz de Configuración] --> [Módulo Estrategia]
     |                                             |
     v                                             v
[Módulo Backtesting] <----------------------> [Módulo Ejecución]
     |                                             |
     v                                             v
[Módulo Gestión de Riesgos] <---------------> [Módulo Monitoreo]
```

## 6. Consideraciones de Integración
- APIs de bróker deben ser compatibles y seguras.
- El sistema debe ser portable entre VPS y plataformas de trading.
- Los módulos deben poder actualizarse de forma independiente.

## 7. Referencias
- Documentación oficial de MetaTrader y MQL5.
- Buenas prácticas de arquitectura de software y trading algorítmico.

---

*Este documento está sujeto a revisión y actualización conforme avance el desarrollo del proyecto.*
