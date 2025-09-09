📘 Glosario y Manuales
🧮 Tablas de Dimensiones
💰 Costos Margenes y Rentabilidad
📊 Metrics & KPIs 
📉 Negative Trends 
🛠️ Configuracion Tecnica
⚙️ Logica de Configuracion
🔄 Ciclos de carga o actualizacion
📂 Archivos fuentes o destino
🧱 Componentes SSIS ETL
🧷 Datos conectados o relaciones
🧪 Validacion de datos
🗃️ Tablas de hechos bases de datos
🧾 Tablas de transacciones
🧭 Tablas de Navegacion o filtro
📑 Procedimientos
🧠 Buenas Practicas
✅ Checklist completo
⚠️ Advertencia
❗ Errores Critico
🇲🇽
🇺🇸
🌍


| Métrica         | Descripción                         | Valor Estimado |
|:----------------|:------------------------------------|----------------:|
| SalesAmount     | Ingreso neto después de descuentos  | $1,250,000      |
| GrossProfit     | Utilidad bruta                      | $450,000        |
| GrossMargin %   | Margen sobre ventas                 | 36%             |




<img width="1722" height="848" alt="image" src="https://github.com/user-attachments/assets/5958bf3c-5568-4a29-90cf-6aff84efde5e" />

<img width="968" height="520" alt="image" src="https://github.com/user-attachments/assets/f9b9b62b-7a75-474e-8541-580f0eba5ffb" />


## 📘 Secciones recomendadas para documentar tu proyecto

| Sección              | Propósito                                                                 |
|----------------------|---------------------------------------------------------------------------|
| 📋 Overview           | Qué hace el proyecto y por qué existe                                     |
| 🧱 Arquitectura       | Componentes, flujos, dependencias                                          |
| 🧮 Métricas           | Definiciones DAX, fórmulas, glosario técnico                              |
| 🔧 Configuración      | Requisitos, instalación, entorno                                           |
| 🚀 Ejecución          | Cómo correr el proyecto paso a paso                                       |
| 🧪 Troubleshooting    | Errores comunes y cómo resolverlos                                        |
| 📊 Visualizaciones    | Layout, KPIs, storytelling para stakeholders                              |
| 📂 Referencias        | Enlaces, fuentes, documentación externa                                   |





> **Technical Notes**  
> - Metrics are calculated using data from the `Product` and `Sales` tables.  
> - Ensure consistency between `UnitPrice` and `UnitCost` across tables.  
> - Formulas are adaptable to DAX, SQL, or other BI environments.

## Intel Project Analyst

##### Contingent Worker employed by [Arcthec L.L.C](https://www.linkedin.com/company/artechllc/) sub-employed by [Praxis](https://www.linkedin.com/company/praxis_2/)

#### 11/2021 to 03/2025

#### Portland, Oregon/ Remote

##### Intel Internal Sponsor, Kate Roberson, Trainer Manager (Developer Focus) 

Support the Software Advance Technology Group (SATG)/Software Products & Ecosystems (SP&E)/Developer Ecosystem Program (DEP)/Developer Academia, teams, and programs designing Power BI Dashboards responding to specific business needs. Operational and Strategic Reports, OKR & KPI Dashboards, Program Overview Summaries, Stages of Learning Program Consumption Pipelines & Status, Developer Activity, Funnel reports, Statistics and Demographics, NPS & Satisfacción Survey, Data Quality.

Data Structure Analysis from Sources and connections such as Azure Snowflakes, Cloudera Impala, Salesforce Objects, Smartsheet, etc.

Data transformation & Data Modeling in Power Query Editor (M language) according to the needs of each business case. Preference for Star Schema, but not limited to. 

Reporting and providing Insight using Data Analysis, DAX formulas, and quick interpretative Visualizations to offer easy-to-read and action-trigger charts in Power BI Dashboards. 

Designing a comfortable look and feel experience using Figma for Dashboard & Visualization Frames.

### Certified Instructor Program Dashboard 

 As a Program Analyst, my role was to provide accurate and timely information regarding the status of the Instructor Developer Program.

Initially, the program operated on **Salesforce**, and my first assignment was to build a dashboard—either using **Salesforce Dashboards** or Power BI.

I chose **Power BI** due to its superior versatility, which allowed for more dynamic reporting capabilities than those offered by Salesforce Reports and Dashboards.

To connect Power BI to the data source, I configured the necessary drivers to access Salesforce Objects (tables).

The data model was based on the following tables: FactLearningPlan, FactCertifiedStatus, FactInstructors, FactInstructorActivity, DimAccounts, DimGeo, DimDate, DimCourses, DimLearningPlans, and DimInstructorSponsors.

<details> 
  <summary> <strong>Applicants Pipeline </strong></summary>
<br>

The first requirement was to build an applicant pipeline that visualized the status of learning plans and courses—both in overview and with drill-down capabilities. This enabled Program Managers and Instructor Sponsors to identify and support specific applicants in pursuing their certifications


<img width="501" height="305" alt="Applicants Pipeline" src="https://github.com/user-attachments/assets/d291bd6e-93a2-4fcd-85bb-c5f769672a80" />

###### Figma Frame Recreation

This dashboard displays the total number of current applicants in the pipeline.

It includes drill-down functionality for each Learning Program, allowing users to filter and view specific program overviews.

Visual elements such as geography, sponsor, and company act as interactive filters. This feature was particularly useful for sponsors to review applicants they supported, or for stakeholders working with a specific company.

There were three prerequisites required to enroll in the program, followed by an Introduction Plan that was mandatory for all Learning Plans.

The Course Status visualization also functions as a filter, enabling users to segment applicants by course status. These filters can be combined using the Ctrl key for multi-selection.

The color scheme was designed to reflect the progression of statuses—from inactive to institutional grading—with a special highlight on the “Pending Approval” status, as this required action from the Program Manager.

The Applicant Status table was tailored to each Learning Plan, providing detailed insights into individual applicant progress. This table could be exported to Excel for further analysis.

A custom DAX measure called “Days Inactive” was implemented to calculate the number of days since the applicant’s last recorded activity, using a field provided by Salesforce

</details>

<details> 
  <summary><strong>Program Overview</strong></summary>

</details>

<details> 
  <summary><strong>Instructor Activity</strong></summary>

</details>

<details> 
  <summary><strong>Certified Instructors</strong></summary>

</details>

<details> 
  <summary><strong>User Profile</strong></summary>

</details>

<details> 
  <summary><strong>Data Quality</strong></summary>

</details>

<details> 
  <summary><strong>Program Health</strong></summary>

</details>

### Workshop Quality Survey Dashboard

### Developers Trained

### Docebo LMS Dashboard

--------------------------------------------------------------------------------------------------------------
