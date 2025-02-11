from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser

# Custom User Model
class CustomUser(AbstractUser):
    ROLE_CHOICES = [
        ('Admin', 'Admin'),
        ('Employee', 'Employee'),
    ]
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='Employee')

    def __str__(self):
        return f"{self.username} - {self.role}"

# Administrator Model (Updated ForeignKey to use AUTH_USER_MODEL)
class Administrator(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)  # ✅ Correct ForeignKey
    salary_report_id = models.IntegerField()


    def __str__(self):
        return f"Admin {self.admin_id} - {self.user.username}"


# Vehicle Model
class Vehicle(models.Model):
    vehicle_id = models.CharField(max_length=255, primary_key=True)
    vehicle_type = models.CharField(max_length=255)

    def __str__(self):
        return f"Vehicle {self.vehicle_id} - {self.vehicle_type}"


# Trip Model
class Trip(models.Model):
    trip_id = models.AutoField(primary_key=True)
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE)
    destination = models.CharField(max_length=255)
    distance_traveled = models.DecimalField(max_digits=10, decimal_places=2)
    num_of_drops = models.IntegerField()
    curr_drops = models.IntegerField()
    client_info = models.CharField(max_length=255)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()

    def __str__(self):
        return f"Trip {self.trip_id} - {self.destination}"


# Salary Model
class Salary(models.Model):
    salary_id = models.AutoField(primary_key=True)
    trip = models.ForeignKey(Trip, on_delete=models.CASCADE)
    deductions = models.DecimalField(max_digits=10, decimal_places=2)
    bonuses = models.DecimalField(max_digits=10, decimal_places=2)
    base_salary = models.DecimalField(max_digits=10, decimal_places=2)
    multipliers = models.DecimalField(max_digits=5, decimal_places=2)
    overtime = models.DecimalField(max_digits=10, decimal_places=2)
    additionals = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Salary {self.salary_id} - Base: {self.base_salary}"


# Employee Model (Updated ForeignKey to use AUTH_USER_MODEL)
class Employee(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE) 
    trip = models.ForeignKey(Trip, on_delete=models.CASCADE)
    salary = models.ForeignKey(Salary, on_delete=models.CASCADE)
    employee_type = models.CharField(max_length=255)

    def __str__(self):
        return f"Employee {self.employee_id} - {self.user.username} - {self.employee_type}"


# Salary Report Model
class SalaryReport(models.Model):
    salary_report_id = models.AutoField(primary_key=True)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    salary = models.ForeignKey(Salary, on_delete=models.CASCADE)

    def __str__(self):
        return f"Salary Report {self.salary_report_id} - Employee {self.employee.employee_id}"
