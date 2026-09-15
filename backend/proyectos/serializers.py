from rest_framework import serializers
from .models import Proyecto, Tecnologia


class TecnologiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tecnologia
        fields = ["id", "nombre"]


class ProyectoSerializer(serializers.ModelSerializer):
    tecnologias = TecnologiaSerializer(many=True, read_only=True)
    tecnologias_ids = serializers.PrimaryKeyRelatedField(
        queryset=Tecnologia.objects.all(),
        many=True,
        write_only=True,
        source="tecnologias",
        required=False,
    )

    class Meta:
        model = Proyecto
        fields = [
            "id",
            "nombre",
            "descripcion",
            "img",
            "url",
            "tecnologias",
            "tecnologias_ids",
        ]
