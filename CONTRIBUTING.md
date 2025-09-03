# Guía de Contribución

¡Gracias por tu interés en contribuir a este proyecto!

## Cómo contribuir

1. Haz un fork del repositorio si no tienes permisos de escritura.
2. Crea una rama descriptiva para tu cambio, por ejemplo: `git checkout -b docs/mi-cambio`.
3. Realiza tus modificaciones y haz commits siguiendo el estándar Conventional Commits.
4. Haz push de tu rama al repositorio remoto: `git push origin nombre-de-tu-rama`.
5. Abre un Pull Request (PR) desde tu rama hacia `main` usando la interfaz web de GitHub o la CLI:
	- Web: Ve a la pestaña "Pull requests" y selecciona "New pull request".
	- CLI: `gh pr create --base main --head nombre-de-tu-rama --title "Título" --body "Descripción"`
6. Espera la revisión de los mantenedores. Si el PR es aprobado, se fusionará en `main`.
	- Los mantenedores pueden aprobar y fusionar el PR desde la web o con la CLI: `gh pr merge <número> --auto --squash`
7. (Opcional) Elimina tu rama después de la fusión para mantener el repositorio limpio.

### Ejemplo de comandos

```bash
git checkout -b docs/mi-cambio
# Realiza tus cambios
git add .
git commit -m "docs(readme): mejora el glosario"
git push origin docs/mi-cambio
gh pr create --base main --head docs/mi-cambio --title "docs(readme): mejora el glosario" --body "Se mejoran las definiciones del glosario."
gh pr merge <número> --auto --squash
```

### Recomendaciones

- Describe claramente tu contribución y relaciona issues si corresponde.
- Mantén tus ramas y commits organizados y descriptivos.

## Código de conducta

Por favor, mantén un ambiente respetuoso y profesional. Consulta el archivo CODE_OF_CONDUCT.md para más detalles.

## Revisión

Las contribuciones serán revisadas por los mantenedores. Se recomienda incluir pruebas y documentación relevante.

## Licencia

Este proyecto está bajo la licencia MIT.
