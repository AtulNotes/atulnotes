---
title: Deploy a Django App
---
## Add This Line

```py showLineNumbers
# projectName/urls.py
...
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
 ...
]

urlpatterns += staticfiles_urlpatterns()
```

```sh showLineNumbers
# requirements.txt

gunicorn==23.0.0
```

Add a Start Command in Render

```sh showLineNumbers
gunicorn projectName.wsgi
```