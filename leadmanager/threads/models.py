from django.db import models
from datetime import datetime
from users.models import User

class Threads(models.Model):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    title = models.CharField(max_length=200)
    text = models.TextField(blank=True)
    votes = models.IntegerField()
  
    creadted_date = models.DateTimeField(default=datetime.now, blank=True)
    def __str__(self):
        return self.title