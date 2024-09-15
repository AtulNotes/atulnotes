---
title: Jinja Templates App in Django
---
## Introduction

Jinja2 is a template engine for Python. It is used in Django to render templates. It is a very powerful template engine that can be used to render HTML, XML, and other formats. It is also used to render templates for the Django admin interface.

## Installation

If you are in Django, you don’t need to install Jinja2 separately. It is already installed with Django. Django also comes with a built-in template configurations that allows you to use Jinja2 templates.

Jinja2 templates are written in a simple text format called HTML. The syntax is very similar to HTML, but with some additional features. You need to inject variables into the template using the ``` {{ variable }} ``` syntax. For example, if you want to display a name, you can use the following code:

```hbs showLineNumbers
Hello {{ name }}
```

This will display the name of the person who is currently logged in, if there is one.

## Common Template Tags
## % if %

The ``` {% if %} ``` tag is used to conditionally display content in a template. It takes a boolean expression as an argument, and if the expression evaluates to ``` True ```, the content inside the tag will be displayed. If the expression evaluates to``` False ```, the content will be skipped.

For example, the following code will display a greeting message only if the ``` name ``` variable is not empty:

```js showLineNumbers
{% if name %}
    Hello, {{ name }}!
{% endif %}
```

## {% for %}

The ``` {% for %} ``` tag is used to iterate over a sequence of items. It takes a variable name and a sequence as arguments, and displays the content inside the tag for each item in the sequence.

For example, the following code will display a list of names:

```js showLineNumbers
{% for name in names %}
    {{ name }} is a name.
{% endfor %}
```

## {% block %}

The ``` {% block %} ``` tag is used to define a block of content that can be overridden in child templates. It takes a name as an argument, and defines a block with that name that can be overridden in child templates.

For example, the following code defines a base template that includes a header and a footer:

```html showLineNumbers
<!DOCTYPE html>
<html>
<head>
    <title>{% block title %}My Website{% endblock %}</title>
</head>
<body>
    {% block content %}
        <h1>Welcome to my website!</h1>
    {% endblock %}
    <footer>
        {% block footer %}
            <p>Copyright © 2021</p>
        {% endblock %}
    </footer>
</body>
</html>
```

In this example, the ``` content ``` block in the child template overrides the ``` content ``` block in the base template, and the ``` title ``` block is not overridden.

## {% include %}

The ```{% include %}``` tag is used to include the contents of another template file. It takes a template name as an argument, and includes the contents of the template file in the current template.

For example, the following code includes the contents of a template file called  ```header.html```:

```js showLineNumbers
{% include "header.html" %}
```

This will include the contents of the ``` header.html ``` template file in the current template.