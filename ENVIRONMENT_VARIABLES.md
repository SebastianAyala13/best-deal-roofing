# Variables de Entorno Requeridas

## Configuración en Vercel

Para que el sistema de formulario de leads funcione correctamente, necesitas configurar las siguientes variables de entorno en Vercel:

### Variables de Zapier Integration

```
ZAPIER_HOOK_URL=https://hooks.zapier.com/hooks/catch/22208931/udvjyvh/
```

### Variables de Campaña de Leads

```
NEXT_PUBLIC_LP_CAMPAIGN_ID=Provided
NEXT_PUBLIC_LP_CAMPAIGN_KEY=Provided  
NEXT_PUBLIC_LP_S1=Provided
NEXT_PUBLIC_LP_S2=primebathpros
```

### Variables de Google Tag Manager

```
GTM_ID=GTM-WS6NVJBF
```

## Cómo Configurar en Vercel

1. Ve a tu proyecto en Vercel Dashboard
2. Navega a Settings > Environment Variables
3. Agrega cada variable con su valor correspondiente
4. Asegúrate de que las variables `NEXT_PUBLIC_*` estén marcadas para todos los entornos (Development, Preview, Production)
5. Redeploy tu aplicación para que los cambios tomen efecto

## Validación

Una vez configuradas las variables, el sistema:

- ✅ Capturará leads con TrustedForm token
- ✅ Enviará datos completos a Zapier con mapeo correcto
- ✅ Registrará eventos en Google Tag Manager
- ✅ Redirigirá a página de agradecimiento

## Debugging

En modo desarrollo, el formulario mostrará información de debug del TrustedForm token en la parte inferior del formulario.
