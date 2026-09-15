from django.db import models


class Tecnologia(models.Model):
    nombre = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.nombre


class Proyecto(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField()
    img = models.CharField(max_length=255, blank=True)
    url = models.URLField(max_length=500, blank=True)
    tecnologias = models.ManyToManyField(Tecnologia, related_name="proyectos")

    def __str__(self):
        return self.nombre
