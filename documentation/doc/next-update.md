
## Actualizador de dependencias de next

    - Muestra las dependencias en que necesitan ser actualizadas
    - En colores Verde, Amarillo y Rojo ( Sistema de versiones: [Major:Rojo].[Minor:Amarillo].[Patch:Verde]-beta)
    
        Importante (nueva API, cambios importantes)
        Menor (nuevas funciones, componentes internos, cambios irreversibles compatibles con versiones anteriores)
        Parche (correcciones urgentes y parches menores)

        Rojas: Actualizaciones Major (Altas con problemas de compatibilidad con las versiones anteriores.)
        Amarillas: Actualizaciones Minor (Medianas sin problemas de compatibilidad)
        Verde: Actualizaciones PATCH (basicas sin problemas de compatibilidad)




        $ npm upgrade-interactive --latest

        $ yarn upgrade-interactive --latest


        - Se selecciona las dependencias que se quieran actualizar y enter