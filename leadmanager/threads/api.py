from threads.models import Threads
from rest_framework import viewsets, permissions
from .serializers import ThreadsSerializer

# Threads Viewset


class ThreadsViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = ThreadsSerializer

    def get_queryset(self):
        return self.request.user.quests.all()
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
