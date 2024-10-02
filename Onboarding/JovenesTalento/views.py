from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

def JovenesTalento(request):
     template = loader.get_template('listaTareas.html')
     return HttpResponse(template.render())