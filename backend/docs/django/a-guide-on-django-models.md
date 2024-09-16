---
title: A Guide on Django Models
---
## Django models

Django models are the heart of the Django framework. They are used to define the structure of the database and the relationships between different models. In this section, we will explore the basics of Django models and how to create them.

## Defining a model

So far, we have created a same Content app and it’s time to add some data to it. To do this, we need to define a model. A model is a Python class that represents a table in the database. It contains fields that define the structure of the table and methods that define the behavior of the table.

To define a model, we need to use the ```models.py``` file in our Django project. Add the following code to the ```models.py``` file:

```py showLineNumbers
# appName/models.py File Path

from django.db import models
from django.utils import timezone

# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    message = models.CharField(max_length=255)
    date = models.DateTimeField(default=timezone.now)
    
    # Show the Table Data tite Name
    def __str__(self):
        return self.name
```

The ```__str__``` method is used to return a string representation of the object. In this case, it returns the name of the user Name.

## Create Table in the database

Now, let’s add some data to the database. You can go to admin.py file and add the following code to the Contact model.

```py showLineNumbers
# admin.py

from django.contrib import admin
from dashboard.models import Contact

# Register your models here.
admin.site.register(Contact)
```

Now that we have defined our model, we can add some data to the database. Lets migrate the database and add some data to the ```Contact``` model.

##### Add A Super User
```sh showLineNumbers
py manage.py createsuperuser
```

##### Migrate the Database
```sh showLineNumbers
python manage.py makemigrations
python manage.py migrate
```

Now, go to the admin page and login with ```superuer``` and  you should see the ```Contact``` model listed. Add some data to the model and save it.

* [http://localhost:8000/admin/](http://localhost:8000/admin/)

## Creating a view to display the data

Now that we have added some data to the database, we can create a view to display the data. Go to the ```views.py``` file and add the following code.

```py showLineNumbers
# views.py

def contact(request):
    if not request.user.is_authenticated:
        return redirect('/')
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        try:
            contactData = Contact(name=name, email=email, message=message)
            contactData.save() # Save the data to the database
            messages.success(request, "Your message has been sent successfully.")
        except:
            messages.warning(request, "Your message is not sent.")
            
    return render(request, 'contact.html')
```

## Get data in the template

In the ```index.html``` template, we can use the ```messages``` variable to display the data. Add the following code to the ```index.html``` template.

```html showLineNumbers
 {% if messages %}
        {% for message in messages %}
            <div class="container">
                <div class="alert alert-{{ message.tags }} alert-dismissible fade show" role="alert">
                    {{ message }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        {% endfor %}
    {% endif %}
```

## Configuring the urls.py file

Now that we have created a view to display the details of a specific Set urls, we need to configure the urls.py file to reflect this. Go to the ```urls.py``` file and add the following code.

```py showLineNumbers
# urls.py

from django.urls import path
from authApp import views

urlpatterns = [
    path("", views.Signin, name="Signin"),
    path("Signup", views.Signup, name="Signup"),
]
```