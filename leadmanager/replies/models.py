from django.db import models
from datetime import datetime
from users.models import User
from threads.models import Threads

class Replies(models.Model):
    reply_to = models.ForeignKey(Threads, on_delete=models.DO_NOTHING)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    text = models.TextField(blank=True)
    votes = models.IntegerField()
  
    creadted_date = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.text