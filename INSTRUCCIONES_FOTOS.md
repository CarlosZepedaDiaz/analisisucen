# Instrucciones para Agregar Fotos de Perfil del Equipo

## 📸 Nombres de Archivos Requeridos

Para que las fotos de perfil aparezcan correctamente en el sitio web, debes guardar las imágenes en la carpeta `assets/` con los siguientes nombres exactos:

### Miembros del Equipo:

1. **Víctor Aros (Psicólogo)** ✅ **YA DISPONIBLE**
   - Archivo actual: `VA-SinFondo.png`
   - Ruta completa: `assets/VA-SinFondo.png`

2. **Paula Wuster (Profesora de Historia)** ✅ **YA DISPONIBLE**
   - Archivo actual: `PW-SinFondo.png`
   - Ruta completa: `assets/PW-SinFondo.png`

3. **William Mitchell (Licenciado en Historia)**
   - Nombre del archivo: `william-mitchel.jpg`
   - Ruta completa: `assets/william-mitchel.jpg`

4. **Carlos Zepeda (Ingeniero en Computación)** ✅ **YA DISPONIBLE**
   - Archivo actual: `CZD-SinFondo.png`
   - Ruta completa: `assets/CZD-SinFondo.png`

## 📋 Especificaciones Técnicas

### Formato de Imagen:
- **Formato recomendado**: JPG o PNG
- **Tamaño recomendado**: 300x300 píxeles (mínimo)
- **Aspecto**: Cuadrado (1:1) para mejor visualización
- **Peso**: Máximo 500KB por imagen

### Características del Diseño:
- Las fotos se mostrarán en **formato circular**
- Borde dorado institucional de UCEN
- Efecto hover con zoom sutil
- **Fallback automático**: Si no se encuentra la imagen, se mostrará un ícono por defecto

## 🔄 Sistema de Fallback

El sitio web incluye un sistema inteligente de fallback:
- Si la imagen existe → Se muestra la foto real
- Si la imagen no existe → Se muestra automáticamente un ícono de usuario

## 📁 Estructura de Carpetas

```
ProyectoUCEN2709/
├── assets/
│   ├── logo-ucen.svg
│   ├── Logo UCEN_R.COQUIMBO-01.png
│   ├── CZD-SinFondo.png         ✅ Carlos Zepeda (YA DISPONIBLE)
│   ├── PW-SinFondo.png          ✅ Paula Wuster (YA DISPONIBLE)
│   ├── VA-SinFondo.png          ✅ Víctor Aros (YA DISPONIBLE)
│   └── william-mitchel.jpg      ← Agregar aquí
├── index.html
├── styles.css
└── script.js
```

## ✅ Pasos para Agregar las Fotos:

1. Prepara las fotos en formato cuadrado
2. Renómbralas con los nombres exactos indicados arriba
3. Guárdalas en la carpeta `assets/`
4. Actualiza el navegador para ver los cambios

¡Las fotos aparecerán automáticamente en el sitio web!