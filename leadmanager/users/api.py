from users.models import Person
from rest_framework import viewsets, permissions
from .serializers import UserSerializer

# User Viewset


class UserViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = UserSerializer

    def get_queryset(self):
        return self.request.user.persons.all()
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
