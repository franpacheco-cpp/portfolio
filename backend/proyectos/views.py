from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

from .models import Proyecto, Tecnologia
from .serializers import ProyectoSerializer, TecnologiaSerializer


class ProyectoListaAPIView(APIView):
    def get(self, request):
        proyectos = Proyecto.objects.all()
        serializer = ProyectoSerializer(proyectos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ProyectoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProyectoDetalleAPIView(APIView):
    def get_object(self, pk):
        try:
            return Proyecto.objects.get(pk=pk)
        except Proyecto.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        proyecto = self.get_object(pk)
        serializer = ProyectoSerializer(proyecto)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        proyecto = self.get_object(pk)
        serializer = ProyectoSerializer(proyecto, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        proyecto = self.get_object(pk)
        proyecto.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class TecnologiaListaAPIView(APIView):
    def get(self, request):
        tecnologias = Tecnologia.objects.all()
        serializer = TecnologiaSerializer(tecnologias, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = TecnologiaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TecnologiaDetalleAPIView(APIView):
    # obtener, actualizar o eliminar una tecnología por su ID.

    def get_object(self, pk):
        try:
            return Tecnologia.objects.get(pk=pk)
        except Tecnologia.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        tecnologia = self.get_object(pk)
        serializer = TecnologiaSerializer(tecnologia)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        tecnologia = self.get_object(pk)
        serializer = TecnologiaSerializer(tecnologia, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        tecnologia = self.get_object(pk)
        tecnologia.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
