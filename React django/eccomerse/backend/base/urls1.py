from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,

)

urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('users/profile/', views.getUserProfile, name='user-profile'),
    path('users/register/', views.registerUser, name='register'),
    path('users/', views.getUser, name='user'),
    path('', views.getRoutes, name='routes'),
    path('products/', views.getProducts, name='products'),
    path('products/<str:pk>/', views.getProduct, name='product'),
]
