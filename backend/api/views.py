from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import (
    UserSerializer, CompanyUserSerializer, AdministratorSerializer, 
    VehicleSerializer, TripSerializer, SalarySerializer, EmployeeSerializer, 
    SalaryReportSerializer
)
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Company_User, Administrator, Vehicle, Trip, Salary, Employee, SalaryReport
from rest_framework.response import Response
from django.contrib.auth import authenticate

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password

@api_view(['POST'])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if not username or not password:
        return Response({"error": "Username and password are required"}, status=400)

    user = authenticate(username=username, password=password)
    if user is not None:
        # Generate tokens or return a success response
        return Response({"access": "fake-access-token", "refresh": "fake-refresh-token"})
    return Response({"error": "Invalid credentials"}, status=401)

@api_view(["POST"])
@permission_classes([AllowAny])  # Allow anyone to access this endpoint
def register_user(request):
    username = request.data.get("username")
    email = request.data.get("email")
    password = request.data.get("password")

    if User.objects.filter(username=username).exists():
        return Response({"message": "Username already taken"}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(email=email).exists():
        return Response({"message": "Email already registered"}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create(
        username=username,
        email=email,
        password=make_password(password)  # Hashes password before saving
    )

    return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)


# Create your views here.
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    
class Company_UserView(generics.CreateAPIView):
    queryset = Company_User.objects.all()
    serializer_class = CompanyUserSerializer
    
class AdministratorView(generics.CreateAPIView):
    queryset = Administrator.objects.all()
    serializer_class = AdministratorSerializer
    
class VehicleView(generics.CreateAPIView):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer
    
class TripView(generics.CreateAPIView):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer
    
class SalaryView(generics.CreateAPIView):
    queryset = Salary.objects.all()
    serializer_class = SalarySerializer
    
class EmployeeView(generics.CreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    
class SalaryReportView(generics.CreateAPIView):
    queryset = SalaryReport.objects.all()
    serializer_class = SalaryReportSerializer   
#======================CreateAPIView======================