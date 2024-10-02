from django.urls import path
from . import views

urlpatterns = [
    path('JovenesTalento/', views.JovenesTalento, name='JovenesTalento'),
]