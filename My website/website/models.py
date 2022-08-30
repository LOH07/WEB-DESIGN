from django.db import models
from django.core.exceptions import ValidationError

class Header(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=300,blank=True)
    logo = models.ImageField(upload_to='static/images/',blank=True)

    # this function
    def save(self, *args, **kwargs):
        if not self.pk and Header.objects.exists():
        # if you'll not check for self.pk
        # error will be raised if instance of the model already exists
            raise ValidationError('Only one title and logo allowed for the website!\nDelete the existing one and then create a new one.')
        return super(Header, self).save(*args, **kwargs)
    def __str__(self): # this function displays the 'title' of the header
        return self.title

class Pages(models.Model):
    title = models.CharField(max_length=50)
    url = models.CharField(max_length=50,unique=True)
    body = models.TextField('page content',blank=True)
    def __str__(self):
        return self.title
