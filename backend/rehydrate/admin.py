from django.contrib import admin
from .models import Goal
from .models import Progress

admin.site.register(Goal)
admin.site.register(Progress)
