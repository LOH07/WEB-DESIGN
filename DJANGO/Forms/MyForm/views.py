from django.shortcuts import render
from django.views.generic.edit import FormView
from .forms import PersonForm
from .models import Person

class Index(FormView):
    form_class = PersonForm
    model = Person
    template_name = 'index.html'
    success_url = 'success.html'

    def get(self,request):
        form = self.form_class()
        objects = Person.objects.all()
        return render(request,self.template_name,{'form':form,'objects':objects})

    def post(self,request):
        form = self.form_class(request.POST)
        if form.is_valid():
            form.save()
            return render(request,self.success_url)
        return render(request,self.template,{'form':form})
