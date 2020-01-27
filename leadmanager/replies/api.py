from replies.models import Replies
from rest_framework import viewsets, permissions
from .serializers import RepliesSerializer

# Replies Viewset


class RepliesViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = RepliesSerializer

    def get_queryset(self):
        return self.request.user.replies.all()
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
