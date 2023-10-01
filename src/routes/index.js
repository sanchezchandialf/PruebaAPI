import { Router } from "express";
const router = Router();

// Ruta para la página de inicio ("/")
router.get('/', (req, res) => res.render('index'));

// Ruta para la página "Acerca de" ("/about")
router.get('/about', (req, res) => res.render('about'));

// Ruta para la página de contacto ("/contact")
router.get('/contact', (req, res) => res.render('contact'));

// Ejemplo de una ruta adicional ("/servicios")
router.get('/services', (req, res) => res.render('services'));

// Ejemplo de una ruta con un parámetro dinámico ("/usuario/:id")
router.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  // Realizar operaciones con el parámetro userId si es necesario
  res.render('user', { userId });
});

// Puedes seguir agregando más rutas según las necesidades de tu aplicación

export default router;