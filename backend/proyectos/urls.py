from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProyectoViewSet, TecnologiaViewSet

router = DefaultRouter()
router.register(r"proyectos", ProyectoViewSet, basename="proyecto")
router.register(r"tecnologias", TecnologiaViewSet, basename="tecnologia")

urlpatterns = [
    path("", include(router.urls)),
]
