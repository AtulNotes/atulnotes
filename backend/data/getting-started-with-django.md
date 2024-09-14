---
title: Getting Started with Django
---
<!-- https://docs.readme.com/rdmd/docs/code-blocks -->

## What is Django?

Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. It takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel.

Django is a full-featured web framework that follows the Model-View-Controller (MVC) architectural pattern. It provides a set of tools and libraries for building web applicationss, including an ORM, a templating engine, and a built-in admin interface.

## Environment Setup

To get started with Django, you’ll need to install it on your computer. You can do this by running the following command in your terminal, after setting up a virtual environment:

#### Install virtualenv

```sh showLineNumbers
pip install virtualenv
```

#### Initial virtualenv And Activate

```sh showLineNumbers
virtualenv .venv

cd .venv\Scripts\

 .\activate
```

Now for all installations, you can use uv pip install command. For example, to install Django, run the following command:

```sh showLineNumbers
pip install django

pip install -r requirements.txt
```

## Django Project

A Django project is a collection of settings and configurations that define the structure and behavior of a web application. It includes the code for the application, as well as the templates, static files, and other resources that make up the application.

To create a new Django project, you can use the following command:

```sh showLineNumbers
django-admin startproject ProjectName

cd ProjectName
```

This will create a new directory called ProjectName with the basic structure of a Django project.


## Start a Django Server

To start the Django server, you can use the following command:

```sh showLineNumbers
python manage.py runserver
```

This will start the server and make it accessible at [http://localhost:8000](http://localhost:8000).

Ignore the unapplied migrations warning. This is a common issue when starting a new Django project. We will address this in a later section.

## Creating our first views

Create a new file called **views.py** in the ***ProjectName directory**. In this file, we will define a few views that are simple functions that return a response. We want to have home page, about page, and contact page. Each of these pages will return html content.

```py showLineNumbers
# ProjectName/views.py File Path

from django.http import HttpResponse

def home(request):
    return HttpResponse("<h1>Welcome to Chai's Django Project: Home page</h1>")

def about(request):
    return HttpResponse("<h1>Welcome to Chai's Django Project: About page</h1>")

def contact(request):
    return HttpResponse("<h1>Welcome to Chai's Django Project: Contact page</h1>")
```

Now, let’s create a new file called urls.py in the chaiaurdjango directory. In this file, we will define the URL patterns for our application. If the file is already there, you can just add the following code to the end of the file:

```py showLineNumbers
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
]
```