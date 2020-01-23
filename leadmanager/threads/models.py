from django.db import models
from datetime import datetime
from django.contrib.auth.models import User

class Threads(models.Model):
    owner = models.ForeignKey(
        User, related_name="quests",
        on_delete=models.DO_NOTHING, null=True)
    title = models.CharField(max_length=200)
    text = models.CharField(max_length=200, blank=True)
    votes = models.IntegerField(default=0)
    
    created_date = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.title