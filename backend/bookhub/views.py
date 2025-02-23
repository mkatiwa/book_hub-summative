from django.shortcuts import render
from rest_framework import viewsets
from .models import Book
from .serializers import BookSerializer


class BookViewSet(viewsets.ModelViewSet):
        queryset = Book.objects.all()
        serializer_class = BookSerializer
        def create_book(self, request):
            serializer = BookSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        def update_book(self, request):
            book_id = request.data.get('id')
            book = Book.objects.get(id=book_id)
            serializer = BookSerializer(book, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        def delete_book(self, request):
            book_id = request.data.get('id')
            book = Book.objects.get(id=book_id)
            book.delete()
            return Response({"book deleted successful"},status=status.HTTP_204_NO_CONTENT)
        
        def get_book(self, request):
            book = Book.objects.all()
            serializer = BookSerializer(book, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        
        