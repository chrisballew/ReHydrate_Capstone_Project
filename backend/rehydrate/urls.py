from django.urls import path
from rehydrate import views

urlpatterns = [
    path('newgoal', views.user_goals),
    path('complete/<int:id>/', views.completed_goals)
]