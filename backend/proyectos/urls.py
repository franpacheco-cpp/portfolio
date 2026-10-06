from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import (
    ProyectoListaAPIView,
    ProyectoDetalleAPIView,
    TecnologiaListaAPIView,
    TecnologiaDetalleAPIView,
)

urlpatterns = [
    path("proyectos/", ProyectoListaAPIView.as_view(), name="proyecto-list"),
    path(
        "proyectos/<int:pk>/", ProyectoDetalleAPIView.as_view(), name="proyecto-detail"
    ),
    path("tecnologias/", TecnologiaListaAPIView.as_view(), name="tecnologia-list"),
    path(
        "tecnologias/<int:pk>/",
        TecnologiaDetalleAPIView.as_view(),
        name="tecnologia-detail",
    ),
    path("auth/login/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("auth/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
