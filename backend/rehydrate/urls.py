from django.urls import path
from rehydrate import views

urlpatterns = [
    path('getgoals', views.get_goals),
    path('newgoal', views.user_goals)
]