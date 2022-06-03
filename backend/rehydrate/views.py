from functools import partial
from urllib import response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Goal
from .models import Progress
from .serializers import GoalSerializer
from .serializers import ProgressSerializer
from authentication.models import User


@api_view(['POST', 'GET'])
@permission_classes([IsAuthenticated])
def user_goals(request):

    print('User', f"{request.user.id} {request.user.email} {request.user.username}")

    if request.method == 'POST':
        serializer = GoalSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        goals = Goal.objects.filter(user_id=request.user.id)
        serializer = GoalSerializer(goals, many=True)
        return Response(serializer.data)


@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def completed_goals(request, id):
   
    goals = Goal.objects.get(pk=id)
    serializer = GoalSerializer(goals,data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)