from django.db import models
from django.contrib.auth.models import User


class Company_User(models.Model):
    username = models.CharField(max_length=255, primary_key=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    password = models.CharField(max_length=255)  # Store hashed passwords securely
    cellphone_no = models.CharField(max_length=20)
    email = models.EmailField(unique=True)
    philhealth_no = models.CharField(max_length=20, blank=True, null=True)
    pag_ibig_no = models.CharField(max_length=20, blank=True, null=True)
    sss_no = models.CharField(max_length=20, blank=True, null=True)
    role = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.username} - {self.company_name}"

class Administrator(models.Model):
    admin_id = models.AutoField(primary_key=True)
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    salary_report_id = models.IntegerField()

    def __str__(self):
        return f"Admin {self.admin_id}"

class Vehicle(models.Model):
    vehicle_id = models.CharField(max_length=255, primary_key=True)
    vehicle_type = models.CharField(max_length=255)

    def __str__(self):
        return f"Vehicle {self.vehicle_id} - {self.vehicle_type}"

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

class Employee(models.Model):
    employee_id = models.AutoField(primary_key=True)
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    trip = models.ForeignKey(Trip, on_delete=models.CASCADE)
    salary = models.ForeignKey(Salary, on_delete=models.CASCADE)
    employee_type = models.CharField(max_length=255)

    def __str__(self):
        return f"Employee {self.employee_id} - {self.employee_type}"

class SalaryReport(models.Model):
    salary_report_id = models.AutoField(primary_key=True)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    salary = models.ForeignKey(Salary, on_delete=models.CASCADE)

    def __str__(self):
        return f"Salary Report {self.salary_report_id} - Employee {self.employee.employee_id}"