from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='threads'),
    path('<int:thread_id>', views.thread, name='thread'),
    path('reply', views.thread, name='reply'),
    path('search', views.search, name='search'),
    path('addThread', views.addThread, name='addThread'),
]
