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
    return HttpResponse("<h3>Welcome to Django Project: Home page</h3>")

def about(request):
    return HttpResponse("<h3>Welcome to Django Project: About page</h3>")

def contact(request):
    return HttpResponse("<h3>Welcome to Django Project: Contact page</h3>")
```

Now, let’s create a new file called **urls.py** in the **ProjectName directory**. In this file, we will define the URL patterns for our application. If the file is already there, you can just add the following code to the end of the file:

```py showLineNumbers
# ProjectName/urls.py File Path

from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
]
```

Now, let’s run the server again and visit the following URLs:

* [http://localhost:8000/](http://localhost:8000/)
* [http://localhost:8000/about/](http://localhost:8000/about/)
* [http://localhost:8000/contact/](http://localhost:8000/contact/)

You should see the following output:

``` showLineNumbers
Welcome to Django Project: Home page
Welcome to Django Project: About page
Welcome to Django Project: Contact page
```

## Adding Templates

In Django, templates are used to generate HTML pages. They are used to display data and perform logic in a web application. To create a template, you can create a new file called **templates/index.html** in the **ProjectName directory**. Make sure that template folder is at same level as manage.py file. In this file, you can write HTML code that will be used to generate the HTML page.

```html showLineNumbers
<!-- templates/index.html File Path -->

<!DOCTYPE html>
<html>
<head>
    <title>Welcome to Django Project</title>
</head>
<body>
    <h1>Welcome to Django Project</h1>
</body>
</html>
```

Now, let’s run the server again and visit the [http://localhost:8000/](http://localhost:8000/) URL. You should see the following output:


``` showLineNumbers
Welcome to Django Project
```

## Setup Template and static Folder

Create a Template folder in Root Directory or Create a Template folder in Root Directory

```py showLineNumbers
# ProjectName/settings.py
import os # at the top of settings.py
'DIRS': ['templates'], # inside template section

STATIC_URL = '/static/' # below this add the following line
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]
```

## Adding CSS and JavaScript

To add CSS and JavaScript to your Django project, you can create a new file called **static/css/style.css** in the **ProjectName directory**. In this file, you can write CSS code that will be used to style the HTML page. You can also create a new file called **static/js/script.js** in the **ProjectName directory**. In this file, you can write JavaScript code that will be used to add interactivity to the HTML page.

```css showLineNumbers
/* static/css/style.css File Path */

body {
  background-color: #161616;
  font-family: Arial, sans-serif;
  color: #fff;
}
```

```js showLineNumbers
// static/js/script.js

console.log("Hello, world!");
```

In the index.html file, add the following line:

```html showLineNumbers
<!-- templates/index.html File Path -->

{% load static %} <!--  at the top of index.html -->
<link rel="stylesheet" href="{% static 'css/style.css' %}">
```

Now, let’s change the home view to use the new template:

```py showLineNumbers
# ProjectName/views.py File Path

from django.shortcuts import render

def home(request):
    return render(request, 'index.html')
```

Now, let’s run the server again and visit the [http://localhost:8000/](http://localhost:8000/) URL. You should see the following output:

``` showLineNumbers
Welcome to Django Project
```