from django.db import models
import uuid



class Music(models.Model):
    name=models.CharField(max_length=500,blank=False)
    artist=models.CharField(max_length=500,blank=False)
    audio=models.FileField(null=True, blank=True)
    cover=models.ImageField(null=True, blank=True,) #image
    id=models.UUIDField(primary_key=True, unique=True, default=uuid.uuid1)
    active=models.BooleanField(default=True) #true or false
    color=models.CharField(max_length=500,blank=True)
    colors=models.CharField(max_length=500,blank=True)

    def __str__(self):
        return self.name