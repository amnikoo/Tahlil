from rest_framework import serializers
from replies.models import Replies

# Replies Serializer


class RepliesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Replies
        fields = '__all__'