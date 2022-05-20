# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-#wzb52t0m)&z=50r=*h9k0hv+f2r=@gup5-(kgc!2z(b0&f%8b'

# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'mysql.connector.django',
        'NAME': 'rehydrate_project_database',
        'USER': 'root',
        'PASSWORD': 'password',
        'HOST': '127.0.0.1',
        'PORT': '3306',
        'OPTIONS': {
            'autocommit': True
        }
    }
}

