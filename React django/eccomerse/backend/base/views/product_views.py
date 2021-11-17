from django.shortcuts import render
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

# from .products import products
from base.models import Product, Review
from base.serializers import ProductSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/products/',
        '/api/products/create/',
        '/api/products/upload/',
        '/api/products/top/',
        '/api/products/<id>/reviews/',
        '/api/products/<id>/',
        '/api/products/delete/<id>/',
        '/api/products/<update>/<id>/',
    ]
    return Response(routes)


@api_view(['GET'])
def getProducts(request):
    # getting keyword from the search queryset which was after?
    query = request.query_params.get('keyword')
    if(query == None):
        query = ""
    products = Product.objects.filter(name__icontains=query)
    # getting page from the search queryset which was after&

    page = request.query_params.get('page')
    paginator = Paginator(products, 5)
    try:
        products = paginator.page(page)
    except PageNotAnInteger:
        # if there is nothing at the search query send page 1
        products = paginator.page(1)
    except EmptyPage:
        # if  page query exceeds the number if pages then send to the last page
        products = paginator.page(paginator.num_pages)

    if page == None:
        page = 1

    page = int(page)

    serializer = ProductSerializer(products, many=True)
    return Response({'products': serializer.data, 'page': page, 'pages': paginator.num_pages})


@api_view(['GET'])
def getTopProducts(request):
    # getting 5 products on the basis of raitngs in descending order i.e. order_by('-rating')
    products = Product.objects.filter(rating__gte=4).order_by('-rating')[0:5]
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request, pk):
    products = Product.objects.get(_id=pk)
    serializer = ProductSerializer(products, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createProduct(request):
    user = request.user
    products = Product.objects.create(
        user=user,
        name="Sample name",
        price=0,
        brand='Sample brand',
        countInStock=0,
        category='Sample Category',
        description=''


    )
    serializer = ProductSerializer(products, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateProduct(request, pk):
    data = request.data
    product = Product.objects.get(_id=pk)
    product.name = data['name']
    product.price = data['price']
    product.brand = data['brand']
    product.countInStock = data['countInStock']
    product.category = data['category']
    product.description = data['description']
    product.save()

    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def uploadImage(request):
    data = request.data
    product_id = data['product_id']
    product = Product.objects.get(_id=product_id)
    # getting image and product_id key from the frontend
    product.image = request.FILES.get('image')
    product.save()

    return Response('Image was uploaded')


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteProduct(request, pk):
    products = Product.objects.get(_id=pk)
    products.delete()
    return Response('Product Deleted')


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createProductReview(request, pk):
    user = request.user
    product = Product.objects.get(_id=pk)
    data = request.data
    #  Review Already exists from the same user
    alreadyExists = product.review_set.filter(user=user).exists()
    if alreadyExists:
        content: {'detail': 'Product already reviewed'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)
    # if rating is not provided or is 0
    elif data['rating'] == 0:
        content: {'detail': 'Please select a reivew'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)
    # create review
    else:
        review = Review.objects.create(
            user=user,
            product=product,
            name=user.first_name,
            rating=data['rating'],
            comment=data['comment']
        )
        reviews = product.review_set.all()
        product.numReviews = len(reviews)
        total = 0
        for i in reviews:
            total += i.rating
        product.rating = total/len(reviews)
        product.save()
        return Response('Review is Added')
