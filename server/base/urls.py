from django.urls import path 
from . import views

urlpatterns = [
    path('music/', views.getMusics, name="musics"),
    path('music/<str:pk>/', views.getMusic, name="music")
]