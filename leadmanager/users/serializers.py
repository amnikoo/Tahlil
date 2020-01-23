from rest_framework import serializers
from users.models import Person

# User Serializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = '__all__'
