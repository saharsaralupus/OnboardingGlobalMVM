from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

def JovenesTalento(request):
     template = loader.get_template('index.html')
     return HttpResponse(template.render())

def agendaView(request):
     return render(request, 'agenda.html')

def inicioView(request):
     return render(request, 'inicio.html')

def jovenesTalentoView(request):
     return render(request, 'jovenesTalento.html')

def loginView(request):
     return render(request, 'login.html')

def onboardingView(request):
     return render(request, 'onboarding.html')

def tareasView(request):
     return render(request, 'tareas.html')