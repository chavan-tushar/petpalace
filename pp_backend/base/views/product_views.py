from django.contrib.auth.models import User, update_last_login
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from base.serializer import ProductSerializer
#from .products import products
from base.models import Product
from rest_framework import serializers, status


@api_view(['GET'])
def getProducts(request):
    query = request.query_params.get('keyword')
    #print(f'query: {query}')
    if(query == None):
        query = ''

    products = Product.objects.filter(name__icontains=query)
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)
