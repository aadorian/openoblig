# Informe del Proyecto

## Índice


- Resumen
- Definición del Problema, Interrogantes e Hipótesis
- Objetivos
- Antecedentes
- Marco Teórico
- Metodología
- Instrumentos
- Presentación y Análisis de los Resultados
- Discusión y Conclusión
- Glosario
- Anexos

---

## 1. Resumen

El trading automatizado en mercados de alta volatilidad y liquidez, como el mercado de divisas, demanda una alineación precisa y dinámica entre los objetivos financieros del inversor, la lógica de la estrategia algorítmica y las características técnicas de la infraestructura. [...]

---

## 2. Definición del Problema, Interrogantes e Hipótesis

### Definición del Problema

La operación manual en los mercados financieros, especialmente en el mercado de divisas, presenta múltiples desafíos: requiere atención constante, análisis en tiempo real y una rápida toma de decisiones bajo presión. La alta volatilidad y liquidez del par EUR/USD incrementan la complejidad, exponiendo al operador a riesgos de ejecución, errores humanos y dificultades para gestionar múltiples variables simultáneamente. Además, la falta de automatización limita la capacidad de aprovechar oportunidades de mercado que surgen en milisegundos, y dificulta la implementación sistemática de estrategias avanzadas de gestión de riesgos y optimización de resultados. Por ello, se plantea la necesidad de desarrollar una solución algorítmica que permita operar de forma autónoma, eficiente y segura, minimizando los riesgos y maximizando el potencial de rentabilidad en este entorno dinámico.

### Interrogantes que se pretenden contestar

- ¿Cómo puede un sistema de trading algorítmico capitalizar la alta liquidez y volatilidad del par EUR/USD?
- ¿Qué tipo de estrategia (scalping, day trading, swing trading) es la más adecuada [...]?
- ¿Cómo puede un sistema de software mitigar los riesgos asociados [...]?
- ¿Qué criterios de software [...] deben priorizarse?

### Formulación de Hipótesis

La hipótesis central que sustenta este proyecto es que [...]

### Supuestos del Proyecto

- Se asume que el sistema de trading funcionará en una plataforma con API o en MetaTrader [...]
- Se da por hecho que el backtesting con datos históricos es un predictor confiable [...]
- Se presume que las plataformas de trading y los brókers están regulados [...]
- Se considera que los usuarios finales seguirán una hoja de ruta rigurosa [...]

---

## 3. Objetivos

### Objetivo General

Desarrollar una aplicación de software (Expert Advisor) [...]

### Objetivos Específicos


| Tipo de Riesgo  | Descripción | Estrategias de Mitigación | Herramientas |
|-----------------|-------------|---------------------------|--------------|
| Mercado         | Volatilidad inesperada [...] | Stop-loss, análisis fundamental | Calendario económico |
| Técnico         | Fallos de conexión [...]     | VPS, backtesting | Alarmas, pruebas de estrés |
| Bróker          | Retrasos en ejecución [...]  | Regulación FCA, CFTC | Licencias, segregación fondos |
| Psicológico     | Sobretrading, exceso de confianza | Disciplina, evitar overfitting | Backtesting, reglas |

---

## 9. Discusión y Conclusión

El proyecto ha logrado definir una solución sólida y coherente [...]

---

## 10. Glosario

| Término                | Definición |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| Trading Algorítmico    | Sistema automatizado que ejecuta órdenes de compra y venta en los mercados financieros según reglas predefinidas y algoritmos. |
| Expert Advisor (EA)    | Programa desarrollado para MetaTrader que permite automatizar estrategias de trading en Forex, ejecutando operaciones sin intervención humana. |
| Backtesting            | Proceso de evaluar una estrategia de trading utilizando datos históricos para estimar su rendimiento y robustez antes de operar en tiempo real. |
| Scalping               | Estrategia de trading que busca obtener pequeñas ganancias mediante operaciones de muy corta duración y alta frecuencia. |
| Day Trading            | Estrategia en la que todas las posiciones se abren y cierran dentro de la misma jornada de mercado. |
| Swing Trading          | Estrategia que mantiene posiciones abiertas durante varios días o semanas, aprovechando movimientos de mercado de mediano plazo. |
| Spread                 | Diferencia entre el precio de compra (ask) y el precio de venta (bid) de un activo financiero. |
| Slippage               | Diferencia entre el precio esperado de una orden y el precio real al que se ejecuta, generalmente por alta volatilidad o baja liquidez. |
| Market Maker           | Tipo de bróker que provee liquidez al mercado, tomando la posición contraria a la del trader y fijando los precios de compra y venta. |
| ECN                    | Electronic Communication Network; red electrónica que conecta traders directamente con proveedores de liquidez, permitiendo ejecución rápida y spreads competitivos. |
| STP                    | Straight Through Processing; modelo de bróker que envía las órdenes de los clientes directamente a los proveedores de liquidez sin intervención manual. |
| Overfitting            | Fenómeno en el que un algoritmo se ajusta demasiado a los datos históricos, perdiendo capacidad de generalización en datos nuevos. |
| VPS                    | Virtual Private Server; servidor virtual que permite ejecutar software de trading de forma continua y estable, minimizando interrupciones y latencia. |
| MQL4 / MQL5            | Lenguajes de programación específicos para el desarrollo de Expert Advisors y scripts en la plataforma MetaTrader. |
| Stop-Loss              | Orden automática que cierra una posición cuando el precio alcanza un nivel predeterminado para limitar las pérdidas. |
| Take-Profit            | Orden automática que cierra una posición cuando el precio alcanza un nivel predeterminado para asegurar ganancias. |
| Bid y Ask              | Bid: precio al que el mercado está dispuesto a comprar; Ask: precio al que el mercado está dispuesto a vender un activo financiero. |

---


### 7. Instrumentos

Para llevar a cabo el proyecto, se emplearán los siguientes instrumentos:

* **Análisis de Datos Históricos:** Se utilizarán series de tiempo de alta resolución (tick data) del par EUR/USD para el backtesting y la validación de la estrategia. Esto permitirá simular con precisión el rendimiento del algoritmo en diferentes condiciones de mercado.
* **Análisis de Mercado en Tiempo Real:** Durante la fase de monitoreo, se emplearán herramientas de análisis en tiempo real para observar el comportamiento del algoritmo, la latencia de las órdenes y la estabilidad de la conexión con el bróker.
* **Análisis de Plataformas y Brókers:** Se realizará un estudio comparativo de plataformas como **MetaTrader 4/5**, **cTrader** y APIs propietarias. El objetivo es identificar la opción que ofrezca la mejor combinación de baja latencia, spreads competitivos y robustez. Se entrevistará a representantes de brókers de tipo ECN/STP.
* **Entrevistas:** Se realizarán entrevistas estructuradas a expertos en el campo para validar suposiciones y obtener información valiosa:

    * **Carlos, Bróker de Omega FX:** “La liquidez es clave para el scalping. Un algoritmo que opere a alta frecuencia necesita un bróker que no ponga trabas a las micro-operaciones y garantice una ejecución ultra-rápida. La diferencia entre un bróker bueno y uno malo puede ser la rentabilidad de tu estrategia.”
    * **Sofía, Gestora de Fondos de Trading Algorítmico:** "El mayor desafío no es solo la estrategia, sino la infraestructura. Un VPS de baja latencia, un código limpio y un plan de contingencia son tan importantes como la lógica de trading. El sobreajuste es nuestro enemigo número uno; si el algoritmo solo funciona en datos pasados, no sirve para el futuro."

### 8. Presentación y Análisis de los Resultados

#### **Requerimientos Funcionales y No Funcionales**

| ID | Título | Descripción | Actor | Prioridad |
| :--- | :--- | :--- | :--- | :--- |
| **RF01** | **Definición de Estrategia** | El sistema debe permitir al usuario definir y modificar los parámetros de la estrategia de trading. | Trader | Alta |
| **RF02** | **Módulo de Backtesting** | El sistema debe simular la estrategia con datos históricos y generar métricas de rendimiento. | Trader | Alta |
| **RF03** | **Conectividad con Bróker** | El sistema debe establecer y mantener una conexión segura y estable con el bróker. | Sistema | Alta |
| **RF04** | **Ejecución de Órdenes** | El sistema debe enviar órdenes de compra y venta al bróker de manera automática. | Sistema | Alta |
| **RF05** | **Gestión de Stop-Loss y TP** | El sistema debe colocar órdenes de stop-loss y take-profit automáticas para cada operación. | Sistema/Trader | Alta |
| **RF06** | **Configuración de Parámetros** | El usuario debe poder ajustar parámetros sin modificar el código. | Trader | Media |
| **RF07** | **Reportes de Rendimiento** | El sistema debe generar informes detallados de la rentabilidad y el riesgo. | Trader | Media |
| **RNF01** | **Latencia de Ejecución** | La latencia en la ejecución de órdenes debe ser inferior a 100 ms. | Sistema | Alta |
| **RNF02** | **Disponibilidad del Sistema** | El sistema debe operar 24/7 en un servidor VPS. | Sistema | Alta |
| **RNF03** | **Seguridad de Datos** | El sistema debe encriptar las credenciales del bróker y proteger los datos del usuario. | Sistema | Alta |
| **RNF04** | **Escalabilidad** | El sistema debe poder gestionar múltiples pares de divisas simultáneamente. | Sistema | Media |
| **RNF05** | **Mantenibilidad del Código** | El código debe ser modular y bien documentado para facilitar futuras actualizaciones. | Sistema | Media |

---

### Historias de Usuario

| ID | Título | Descripción | Escenario | Criterios de Aceptación |
| :--- | :--- | :--- | :--- | :--- |
| **US#1** | **Automatización de la Estrategia** | Como **trader**, quiero automatizar la ejecución de mi estrategia de trading para operar 24/7 y capitalizar los movimientos del mercado sin intervención manual. | El trader configura la estrategia y el sistema ejecuta órdenes automáticamente según las reglas definidas. | El sistema ejecuta órdenes sin intervención, permite activar/desactivar la automatización y muestra logs de operaciones. |
| **US#2** | **Gestión de Riesgos** | Como **trader**, quiero que el sistema gestione automáticamente el riesgo de cada operación, configurando **stop-loss** y **take-profit** para proteger mi capital y asegurar ganancias. | El trader define los parámetros de riesgo y el sistema los aplica en cada operación. | El sistema coloca stop-loss y take-profit en todas las operaciones, permite modificar los parámetros y reporta las acciones tomadas. |
| **US#3** | **Backtesting y Validación** | Como **trader**, quiero probar la rentabilidad de mi estrategia con datos históricos para validar su viabilidad antes de operar con dinero real. | El trader selecciona una estrategia y ejecuta el backtesting con datos históricos. | El sistema permite cargar datos históricos, ejecutar el backtesting y muestra métricas de rendimiento (rentabilidad, drawdown, ratio de aciertos). |
| **US#4** | **Monitoreo de Rendimiento** | Como **trader**, quiero visualizar reportes detallados sobre el rendimiento de mi Expert Advisor para analizar su efectividad y ajustar la estrategia. | El sistema genera reportes automáticos y el trader accede a ellos desde la interfaz. | El sistema muestra reportes con métricas clave, gráficos de evolución y permite exportar los resultados. |
| **US#5** | **Conectividad y Latencia** | Como **trader**, quiero que el sistema se conecte a un bróker ECN/STP para asegurar latencia mínima y reducir el slippage. | El sistema se conecta al bróker y ejecuta órdenes en tiempo real. | El sistema establece conexión segura, reporta la latencia y alerta si supera el umbral definido. |
| **US#6** | **Configuración Flexible** | Como **trader**, quiero poder ajustar parámetros de la estrategia sin modificar el código para optimizar el rendimiento del algoritmo. | El trader accede a una interfaz de configuración y modifica parámetros en tiempo real. | El sistema permite modificar parámetros desde la interfaz, guarda los cambios y los aplica sin reiniciar el sistema. |

---

### 9. Discusión y Conclusión

El proyecto ha logrado definir una solución sólida y coherente, que no solo automatiza una estrategia de trading, sino que también integra componentes esenciales para la gestión de riesgos y la validación. La metodología propuesta, que incluye **backtesting** exhaustivo y monitoreo en tiempo real, aborda directamente las hipótesis y los interrogantes iniciales.

La selección de un bróker de tipo ECN/STP y la priorización de la baja **latencia** (RNF01) son decisiones críticas que mitigan los riesgos técnicos y financieros asociados a la operación en mercados de alta frecuencia. La implementación de un módulo de gestión de riesgos (RF05) es vital para proteger el capital del usuario. Finalmente, la flexibilidad en la configuración (RF06) y la generación de reportes (RF07) son clave para que el trader pueda adaptar y mejorar la estrategia con el tiempo.

Este proyecto es una hoja de ruta para la creación de un sistema de trading algorítmico robusto y funcional, capaz de capitalizar la volatilidad del par EUR/USD de manera controlada y disciplinada.

---

### 10. Glosario

| Término | Definición |
| :--- | :--- |
| **Trading Algorítmico** | Software que ejecuta órdenes de compra y venta en los mercados financieros de manera automatizada. |
| **Expert Advisor (EA)** | Algoritmo que automatiza estrategias en el mercado Forex, popular en la plataforma MetaTrader. |
| **Backtesting** | Probar una estrategia de trading con datos históricos para evaluar su desempeño pasado. |
| **Scalping** | Estrategia de trading de muy alta frecuencia con operaciones muy cortas. |
| **Day Trading** | Estrategia en la que todas las operaciones se cierran en el mismo día de operación. |
| **Swing Trading** | Estrategia con operaciones que pueden durar días o semanas. |
| **Spread** | La diferencia entre el precio de venta (**bid**) y el precio de compra (**ask**) de un activo. |
| **Slippage** | La diferencia entre el precio esperado de una orden y el precio real al que se ejecuta. |
| **Market Maker** | Un tipo de bróker que toma la posición contraria al trader. |
| **ECN** | **Electronic Communication Network**, una red que conecta a traders con proveedores de liquidez. |
| **STP** | **Straight Through Processing**, un modelo de bróker que enruta las órdenes directamente a los proveedores de liquidez. |
| **Overfitting** | Sobreajuste de un algoritmo a los datos históricos, lo que provoca un bajo rendimiento en datos nuevos. |
| **VPS** | **Virtual Private Server**, un servidor virtual privado que permite operar 24/7 sin interrupciones. |
| **MQL4 / MQL5** | Lenguajes de programación utilizados para crear Expert Advisors en MetaTrader. |
| **Stop-Loss** | Una orden para cerrar una operación cuando el precio alcanza un nivel predeterminado para limitar las pérdidas. |
| **Take-Profit** | Una orden para cerrar una operación cuando el precio alcanza un nivel predeterminado para asegurar ganancias. |
| **Bid y Ask** | Precios de venta y compra de una divisa base. |

---

### 11. Anexos

#### **User Persona**

* **Nombre:** David
* **Edad:** 35 años
* **Profesión:** Ingeniero de Software, Inversor a tiempo parcial
* **Objetivos:** Generar ingresos pasivos con el trading, automatizar su estrategia para liberar tiempo, minimizar el riesgo.
* **Frustraciones:** No puede monitorear los mercados 24/7, el **slippage** y la **latencia** afectan su rentabilidad, le preocupa el **overfitting** de las estrategias.
* **Necesidades:** Un sistema confiable, configurable, con reportes claros y un buen sistema de gestión de riesgos.

#### **Tabla de Trabajo Individual**

| Actividad | Descripción | Fecha de Finalización | Tiempo Estimado |
| :--- | :--- | :--- | :--- |
| **Análisis de Requisitos** | Definición de las historias de usuario y requisitos funcionales/no funcionales. | 18/09/2025 | 4 horas |
| **Investigación de Plataformas** | Análisis comparativo de MetaTrader, cTrader y APIs de brókers. | 22/09/2025 | 6 horas |
| **Diseño del Algoritmo** | Lógica de la estrategia y del módulo de gestión de riesgos. | 29/09/2025 | 8 horas |
| **Codificación del EA** | Implementación del algoritmo en MQL5. | 06/10/2025 | 12 horas |
| **Backtesting y Optimización** | Pruebas con datos históricos y ajuste de parámetros. | 13/10/2025 | 10 horas |
| **Pruebas en Demo** | Pruebas en un entorno de trading de demostración. | 20/10/2025 | 8 horas |
| **Despliegue en VPS** | Configuración del servidor virtual. | 22/10/2025 | 2 horas |
| **Monitoreo inicial** | Observación del rendimiento en un entorno real. | 29/10/2025 | 4 horas |


### User Persona

![User Persona](https://via.placeholder.com/600x400)

### Tabla de Trabajo Individual

| Actividad | Descripción | Fecha de finalización | Tiempo estimado |
|-----------|-------------|-----------------------|-----------------|
| Lorem ipsum | Lorem ipsum dolor sit amet. | Lorem ipsum | Lorem ipsum |
| Lorem ipsum | Lorem ipsum dolor sit amet. | Lorem ipsum | Lorem ipsum |

### Obras citadas

1. [¿Qué son los sistemas automáticos de trading? - tradEAsy](https://web.tradeasy.tech/sistemas-automaticos-trading/)  
2. [Trading algorítmico - IG](https://www.ig.com/latam/plataformas-trading/trading-algoritmico/que-es-el-trading-automatico#:~:text=El%20trading%20automatizado%20te%20permite,los%20par%C3%A1me)
