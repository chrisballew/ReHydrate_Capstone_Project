from ast import If
from django.db import models
from authentication.models import User

# Create your models here.

class Goal(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    goalname = models.CharField(max_length=50)
    notes = models.CharField(max_length=100)
    ounce_goal = models.IntegerField()
    due_date = models.DateField()
    completed = models.BooleanField(default=False)

class Progress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    hydration_streak = models.IntegerField()
    goals_met =models.IntegerField()
    #level = models.IntegerField() 
    completed = models.BooleanField(default=False) 