from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import (
    UserSerializer, AdministratorSerializer, VehicleSerializer, 
    TripSerializer, SalarySerializer, EmployeeSerializer, SalaryReportSerializer
)
from .models import Administrator, Vehicle, Trip, Salary, Employee, SalaryReport

# Get the Custom User Model
User = get_user_model()

# ==================== LOGIN VIEW ====================
@api_view(["POST"])
@permission_classes([AllowAny])  # Allow unauthenticated access
def login_view(request):
    username = request.data.get("username")
    password = request.data.get("password")

    if not username or not password:
        return Response({"error": "Username and password are required"}, status=400)

    user = authenticate(username=username, password=password)

    if user is not None:
        refresh = RefreshToken.for_user(user)
        return Response({
            "access": str(refresh.access_token),
            "refresh": str(refresh),
            "role": user.role  # Return role to the frontend
        })

    return Response({"error": "Invalid credentials"}, status=401)

# ==================== REGISTER USER ====================
@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    username = request.data.get("username")
    email = request.data.get("email")
    first_name = request.data.get("firstName")
    last_name = request.data.get("lastName")
    password = request.data.get("password")
    role = request.data.get("role")  # ✅ Get role from frontend

    # Validate role
    if role not in ["Admin", "Employee"]:
        return Response({"error": "Invalid role"}, status=400)

    # Create user with selected role
    user = User.objects.create(
        username=username,
        email=email,
        first_name=first_name,
        last_name=last_name,
        password=make_password(password),
        role=role  # ✅ Save role
    )

    return Response({"message": "User registered successfully", "role": role}, status=201)

# ==================== GENERIC API VIEWS ====================

# Create User API View
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

# Administrator API View
class AdministratorView(generics.CreateAPIView):
    queryset = Administrator.objects.all()
    serializer_class = AdministratorSerializer
    
# Vehicle API View
class VehicleView(generics.CreateAPIView):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer
    
# Trip API View
class TripView(generics.CreateAPIView):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer
    
# Salary API View
class SalaryView(generics.CreateAPIView):
    queryset = Salary.objects.all()
    serializer_class = SalarySerializer
    
# Employee API View
class EmployeeView(generics.CreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    
# Salary Report API View
class SalaryReportView(generics.CreateAPIView):
    queryset = SalaryReport.objects.all()
    serializer_class = SalaryReportSerializer
