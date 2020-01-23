from rest_framework import routers
from .api import ThreadsViewSet

router = routers.DefaultRouter()
router.register('api/threads', ThreadsViewSet, 'threads')

urlpatterns = router.urls


'''
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='threads'),
    path('<int:thread_id>', views.thread, name='thread'),
    path('reply', views.thread, name='reply'),
    path('search', views.search, name='search'),
    path('addThread', views.addThread, name='addThread'),
]
'''