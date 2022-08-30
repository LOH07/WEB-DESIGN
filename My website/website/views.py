from django.shortcuts import render
from website.models import Header,Pages


# Create your views here.

def showPage(request,pagename):
    pagename = '/' + pagename
    pg = Pages.objects.get(url=pagename)
    context = {
        'title':pg.title,
        'body':pg.body,
        'pages':Pages.objects.all(), # this gets all the pages to display in the MENU
        'header':Header.objects.all().values() # this gets the Title, logo
    }
    #assert False use it to debag
    return render(request,'base.html',context)
### this displays the copyright YEARS in the footer
