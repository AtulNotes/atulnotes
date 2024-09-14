---
title: Getting Started with Django
---

## What is Django?

Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. It takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel.

Django is a full-featured web framework that follows the Model-View-Controller (MVC) architectural pattern. It provides a set of tools and libraries for building web applicationss, including an ORM, a templating engine, and a built-in admin interface.

## Environment Setup

To get started with Django, you’ll need to install it on your computer. You can do this by running the following command in your terminal, after setting up a virtual environment:

#### Install virtualenv

``` showLineNumbers
pip install virtualenv
```

#### Initial virtualenv And Activate

```
virtualenv .venv

cd .venv\Scripts\

 .\activate
```

Now for all installations, you can use uv pip install command. For example, to install Django, run the following command:

```
pip install django

pip install -r requirements.txt
```

## Django Project

A Django project is a collection of settings and configurations that define the structure and behavior of a web application. It includes the code for the application, as well as the templates, static files, and other resources that make up the application.

To create a new Django project, you can use the following command:

```
django-admin startproject [ProjectName]
cd [ProjectName]
```