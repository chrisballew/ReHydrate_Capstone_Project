from rest_framework import serializers
from .models import Goal
from .models import Progress

class GoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goal
        fields = ['id', 'goalname', 'notes','ounce_goal', 'due_date', 'completed', 'user_id']

class ProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Progress
        fields = ['id', 'hydration_streak', 'goals_met', 'user_id']
