from rest_framework import routers
from .api import RepliesViewSet

router = routers.DefaultRouter()
router.register('api/replies', RepliesViewSet, 'replies')

urlpatterns = router.urls