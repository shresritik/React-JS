from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="route"),
    path('notes/', views.getNotes, name="notes"),
    path('notes/<str:pk>/update', views.getUpdate, name="update"),
    path('notes/<str:pk>', views.getNote, name="note"),
]
