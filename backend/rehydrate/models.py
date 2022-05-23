from django.db import models
from authentication.models import User

# Create your models here.

class Goal(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    ounce_goal = models.IntegerField()
    due_date = models.IntegerField()
    completed = models.BooleanField()

class Progress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    hydration_streak = models.IntegerField()
    goals_met =models.IntegerField()
    #level = models.IntegerField()