from django import template
import datetime as dt

register = template.Library()

@register.simple_tag
def showYear():
    startYear = '2018'
    curYear = str(dt.datetime.now().year)
    return f"{startYear}-{curYear}"
