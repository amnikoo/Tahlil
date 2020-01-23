from rest_framework import serializers
from threads.models import Threads

# Threads Serializer


class ThreadsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Threads
        fields = '__all__'