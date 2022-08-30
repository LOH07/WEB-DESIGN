from django.shortcuts import render
#from django.http import HttpResponse
import random

# Create your views here.
def home(request):
    if request.GET.get('submit'):
        length = int(request.GET.get('length'))
        chars = list("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!£$%^&*@~#")
        paswd = ""
        while len(paswd) < length:
            c = random.choice(chars)
            if c in paswd:
                pass
            else:
                paswd += c

        return render(request,'home.html',{'paswd':f"<h1 class='paswd'>{paswd}</h1>"})
    else:
        return render(request,'home.html')
# to add ABOUT page uncomment the following lines:
#def about(request):
#    return render(request,'about.html')
