from django.urls import path
from . import views

urlpatterns = [
    path("", views.JovenesTalento, name="index"),
    path('agenda/', views.agendaView, name='agenda'),
    path('inicio/', views.inicioView, name='inicio'),
    path('jovenesTalento/', views.jovenesTalentoView, name='jovenesTalento'),
    path('login/', views.loginView, name='login'),
    path('onboarding/', views.onboardingView, name='onboarding'),
    path('tareas/', views.tareasView, name='tareas'),
    path('usuarios/', views.usuariosView, name='usuarios')
]