from django.urls import path
from . import views

urlpatterns = [
    path('',views.showPage,{'pagename':''},name='home'),
    path('<pagename>',views.showPage,name='<pagename>'),
]
