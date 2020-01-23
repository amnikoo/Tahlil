from django.db import models
from datetime import datetime
from django.contrib.auth.models import User
from threads.models import Threads

class Replies(models.Model):
    reply_to = models.ForeignKey(
        Threads, related_name="replies_to",
        on_delete=models.DO_NOTHING)
    owner = models.ForeignKey(
        User, related_name="replies",
        on_delete=models.DO_NOTHING, null=True)
    text = models.CharField(max_length=200, blank=True)
    votes = models.IntegerField(default=0)
  
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text