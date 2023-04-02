from django.db import models

class Person(models.Model):
    fname = models.CharField(max_length=50)
    lname = models.CharField(max_length=50)
    age = models.IntegerField()
    choices = [("female","female"),("male","male"),("other","other")]
    gender = models.CharField(max_length=6,choices=choices)

    def __str__(self):
        return str(self.fname + " " + self.lname)
