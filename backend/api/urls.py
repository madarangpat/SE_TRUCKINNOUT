from django.urls import path
from . import views


urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('register/', views.register_user, name='register'),
    path('company_user', views.Company_UserView.as_view()),
    path('admin', views.AdministratorView.as_view()),
    path('vehicle', views.VehicleView.as_view()),
    path('trip', views.TripView.as_view()),
    path('salary', views.SalaryView.as_view()),
    path('employee', views.EmployeeView.as_view()),
    path('salaryreport', views.SalaryReportView.as_view()),
]