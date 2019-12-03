from rest_framework import routers
from .api import QuestionViewSet

router = routers.DefaultRouter()
router.register('api/questions', QuestionViewSet, 'questions')

urlpatterns = router.urls