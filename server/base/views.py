from django.shortcuts import render
from .serializers import MusicSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from base.models import Music
# Create your views here.


@api_view(['GET'])
def getMusics(request):
    musics = Music.objects.all()
    serializer = MusicSerializer(musics, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getMusic(request, pk):
    music = Music.objects.get(id=pk)
    serializer = MusicSerializer(music, many=False)
    return Response(serializer.data)
