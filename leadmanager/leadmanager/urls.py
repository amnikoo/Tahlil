from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('users.urls')),
    path('', include('accounts.urls')),
    path('', include('questions.urls')),
    path('thread/', include('threads.urls')),
    path('admin/', admin.site.urls),
]
